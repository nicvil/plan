import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

// GET /api/listings/[id] - Get a single listing
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params

    const listing = await prisma.listing.findUnique({
      where: { id },
      include: {
        images: {
          orderBy: { order: 'asc' },
        },
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            bio: true,
            city: true,
            state: true,
            rating: true,
            reviewCount: true,
            idVerified: true,
            createdAt: true,
          },
        },
        rentalCalendar: {
          where: {
            endDate: {
              gte: new Date(),
            },
          },
          select: {
            startDate: true,
            endDate: true,
            status: true,
          },
        },
        _count: {
          select: {
            favorites: true,
            reviews: true,
          },
        },
      },
    })

    if (!listing) {
      return NextResponse.json(
        { error: 'Listing not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(listing)
  } catch (error) {
    console.error('Error fetching listing:', error)
    return NextResponse.json(
      { error: 'Failed to fetch listing' },
      { status: 500 }
    )
  }
}

// PUT /api/listings/[id] - Update a listing
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params
    const body = await request.json()

    // TODO: Verify user owns this listing
    // const session = await getServerSession(authOptions)
    // const listing = await prisma.listing.findUnique({ where: { id } })
    // if (listing?.userId !== session?.user?.id) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
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
      status,
      quantityAvailable,
      images,
    } = body

    // Build update data
    const updateData: Record<string, unknown> = {}
    
    if (title !== undefined) updateData.title = title
    if (description !== undefined) updateData.description = description
    if (category !== undefined) updateData.category = category
    if (listingType !== undefined) updateData.listingType = listingType
    if (condition !== undefined) updateData.condition = condition
    if (salePrice !== undefined) updateData.salePrice = salePrice
    if (acceptsOffers !== undefined) updateData.acceptsOffers = acceptsOffers
    if (rentDailyRate !== undefined) updateData.rentDailyRate = rentDailyRate
    if (rentWeeklyRate !== undefined) updateData.rentWeeklyRate = rentWeeklyRate
    if (rentWeekendRate !== undefined) updateData.rentWeekendRate = rentWeekendRate
    if (minRentalDays !== undefined) updateData.minRentalDays = minRentalDays
    if (securityDeposit !== undefined) updateData.securityDeposit = securityDeposit
    if (city !== undefined) updateData.city = city
    if (state !== undefined) updateData.state = state
    if (zipCode !== undefined) updateData.zipCode = zipCode
    if (showExactAddress !== undefined) updateData.showExactAddress = showExactAddress
    if (address !== undefined) updateData.address = address
    if (latitude !== undefined) updateData.latitude = latitude
    if (longitude !== undefined) updateData.longitude = longitude
    if (pickupAvailable !== undefined) updateData.pickupAvailable = pickupAvailable
    if (deliveryAvailable !== undefined) updateData.deliveryAvailable = deliveryAvailable
    if (deliveryRadius !== undefined) updateData.deliveryRadius = deliveryRadius
    if (deliveryFee !== undefined) updateData.deliveryFee = deliveryFee
    if (shippingAvailable !== undefined) updateData.shippingAvailable = shippingAvailable
    if (status !== undefined) updateData.status = status
    if (quantityAvailable !== undefined) updateData.quantityAvailable = quantityAvailable

    // Handle images update if provided
    if (images !== undefined) {
      // Delete existing images and create new ones
      await prisma.listingImage.deleteMany({
        where: { listingId: id },
      })
      
      updateData.images = {
        create: images.map((url: string, index: number) => ({
          url,
          order: index,
        })),
      }
    }

    const listing = await prisma.listing.update({
      where: { id },
      data: updateData,
      include: {
        images: {
          orderBy: { order: 'asc' },
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
      },
    })

    return NextResponse.json(listing)
  } catch (error) {
    console.error('Error updating listing:', error)
    return NextResponse.json(
      { error: 'Failed to update listing' },
      { status: 500 }
    )
  }
}

// DELETE /api/listings/[id] - Delete a listing
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params

    // TODO: Verify user owns this listing
    // const session = await getServerSession(authOptions)
    // const listing = await prisma.listing.findUnique({ where: { id } })
    // if (listing?.userId !== session?.user?.id) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    // }

    await prisma.listing.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Listing deleted successfully' })
  } catch (error) {
    console.error('Error deleting listing:', error)
    return NextResponse.json(
      { error: 'Failed to delete listing' },
      { status: 500 }
    )
  }
}
