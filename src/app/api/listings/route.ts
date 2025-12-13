import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import type { ListingSearchParams } from '@/types'

// GET /api/listings - List all listings with filtering
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const params: ListingSearchParams = {
      query: searchParams.get('query') || undefined,
      category: searchParams.get('category') as ListingSearchParams['category'],
      listingType: searchParams.get('listingType') as ListingSearchParams['listingType'],
      condition: searchParams.get('condition') as ListingSearchParams['condition'],
      minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
      maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
      city: searchParams.get('city') || undefined,
      state: searchParams.get('state') || undefined,
      zipCode: searchParams.get('zipCode') || undefined,
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : 20,
      sortBy: searchParams.get('sortBy') as ListingSearchParams['sortBy'],
    }

    const page = params.page || 1
    const limit = Math.min(params.limit || 20, 100)
    const skip = (page - 1) * limit

    // Build where clause
    const where: Record<string, unknown> = {
      status: 'ACTIVE',
    }
    
    // We use AND to combine multiple conditions
    const andConditions: Record<string, unknown>[] = []

    if (params.query) {
      andConditions.push({
        OR: [
          { title: { contains: params.query, mode: 'insensitive' } },
          { description: { contains: params.query, mode: 'insensitive' } },
        ]
      })
    }

    if (params.category) {
      where.category = params.category
    }

    if (params.listingType) {
      where.listingType = params.listingType
    }

    if (params.condition) {
      where.condition = params.condition
    }

    if (params.city) {
      where.city = { contains: params.city, mode: 'insensitive' }
    }

    if (params.state) {
      where.state = params.state
    }

    if (params.zipCode) {
      where.zipCode = params.zipCode
    }

    // Price filtering (apply to sale price or daily rent rate)
    if (params.minPrice || params.maxPrice) {
      andConditions.push({
        OR: [
          {
            salePrice: {
              ...(params.minPrice && { gte: params.minPrice }),
              ...(params.maxPrice && { lte: params.maxPrice }),
            },
          },
          {
            rentDailyRate: {
              ...(params.minPrice && { gte: params.minPrice }),
              ...(params.maxPrice && { lte: params.maxPrice }),
            },
          },
        ]
      })
    }
    
    // Add AND conditions if any exist
    if (andConditions.length > 0) {
      where.AND = andConditions
    }

    // Build orderBy
    let orderBy: Record<string, string> = { createdAt: 'desc' }
    switch (params.sortBy) {
      case 'price_asc':
        orderBy = { salePrice: 'asc' }
        break
      case 'price_desc':
        orderBy = { salePrice: 'desc' }
        break
      case 'newest':
        orderBy = { createdAt: 'desc' }
        break
    }

    const [listings, total] = await Promise.all([
      prisma.listing.findMany({
        where,
        include: {
          images: {
            orderBy: { order: 'asc' },
            take: 1,
          },
          user: {
            select: {
              id: true,
              name: true,
              image: true,
              rating: true,
              reviewCount: true,
            },
          },
          _count: {
            select: {
              favorites: true,
            },
          },
        },
        orderBy,
        skip,
        take: limit,
      }),
      prisma.listing.count({ where }),
    ])

    return NextResponse.json({
      listings,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching listings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    )
  }
}

// POST /api/listings - Create a new listing
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // TODO: Get user from session
    // const session = await getServerSession(authOptions)
    // if (!session?.user?.id) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    const {
      title,
      description,
      category,
      listingType,
      condition,
      salePrice,
      acceptsOffers,
      rentDailyRate,
      rentWeeklyRate,
      rentWeekendRate,
      minRentalDays,
      securityDeposit,
      city,
      state,
      zipCode,
      showExactAddress,
      address,
      latitude,
      longitude,
      pickupAvailable,
      deliveryAvailable,
      deliveryRadius,
      deliveryFee,
      shippingAvailable,
      images,
      quantityAvailable,
    } = body

    // Validate required fields
    if (!title || !description || !category || !listingType || !condition || !city || !state || !zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate sale listings have sale price
    if ((listingType === 'SALE' || listingType === 'BOTH') && !salePrice) {
      return NextResponse.json(
        { error: 'Sale price is required for sale listings' },
        { status: 400 }
      )
    }

    // Validate rental listings have daily rate
    if ((listingType === 'RENT' || listingType === 'BOTH') && !rentDailyRate) {
      return NextResponse.json(
        { error: 'Daily rental rate is required for rental listings' },
        { status: 400 }
      )
    }

    // TODO: Replace with actual user ID from authentication session
    // Implementation requires NextAuth.js setup:
    // const session = await getServerSession(authOptions)
    // if (!session?.user?.id) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }
    // const userId = session.user.id
    const userId = 'placeholder-user-id' // FIXME: Remove after implementing auth

    const listing = await prisma.listing.create({
      data: {
        userId,
        title,
        description,
        category,
        listingType,
        condition,
        salePrice,
        acceptsOffers: acceptsOffers ?? false,
        rentDailyRate,
        rentWeeklyRate,
        rentWeekendRate,
        minRentalDays,
        securityDeposit,
        city,
        state,
        zipCode,
        showExactAddress: showExactAddress ?? false,
        address,
        latitude,
        longitude,
        pickupAvailable: pickupAvailable ?? true,
        deliveryAvailable: deliveryAvailable ?? false,
        deliveryRadius,
        deliveryFee,
        shippingAvailable: shippingAvailable ?? false,
        quantityAvailable: quantityAvailable ?? 1,
        images: {
          create: images?.map((url: string, index: number) => ({
            url,
            order: index,
          })) ?? [],
        },
      },
      include: {
        images: true,
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            rating: true,
            reviewCount: true,
          },
        },
      },
    })

    return NextResponse.json(listing, { status: 201 })
  } catch (error) {
    console.error('Error creating listing:', error)
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    )
  }
}
