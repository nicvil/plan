// Type definitions for the Event Supply Marketplace
// These types complement the Prisma-generated types for API responses and forms

export type SubscriptionTier = 'FREE' | 'SELLER' | 'PRO' | 'BUSINESS'

export type ListingType = 'SALE' | 'RENT' | 'BOTH'

export type ItemCondition = 'NEW' | 'LIKE_NEW' | 'GOOD' | 'FAIR'

export type ListingStatus = 'ACTIVE' | 'RENTED' | 'SOLD' | 'INACTIVE'

export type TransactionType = 'SALE' | 'RENTAL'

export type TransactionStatus = 'PENDING' | 'PAID' | 'IN_PROGRESS' | 'COMPLETED' | 'DISPUTED' | 'CANCELLED'

export type CalendarStatus = 'AVAILABLE' | 'BOOKED' | 'BLOCKED'

export type OfferStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'COUNTERED' | 'EXPIRED'

export type ReviewType = 'BUYER_TO_SELLER' | 'SELLER_TO_BUYER' | 'RENTER_TO_OWNER' | 'OWNER_TO_RENTER'

// Category types organized by main group
export type DecorCategory = 
  | 'DECOR_CENTERPIECES'
  | 'DECOR_BACKDROPS'
  | 'DECOR_ARCHES'
  | 'DECOR_LIGHTING'
  | 'DECOR_FLOWERS'
  | 'DECOR_SIGNAGE'
  | 'DECOR_OTHER'

export type FurnitureCategory = 
  | 'FURNITURE_CHAIRS'
  | 'FURNITURE_TABLES'
  | 'FURNITURE_LOUNGE'
  | 'FURNITURE_OTHER'

export type EquipmentCategory = 
  | 'EQUIPMENT_AUDIO'
  | 'EQUIPMENT_VISUAL'
  | 'EQUIPMENT_PHOTO_BOOTH'
  | 'EQUIPMENT_DJ'
  | 'EQUIPMENT_OTHER'

export type StructuresCategory = 
  | 'STRUCTURES_TENTS'
  | 'STRUCTURES_CANOPIES'
  | 'STRUCTURES_DANCE_FLOOR'
  | 'STRUCTURES_STAGE'
  | 'STRUCTURES_OTHER'

export type TextilesCategory = 
  | 'TEXTILES_LINENS'
  | 'TEXTILES_TABLECLOTHS'
  | 'TEXTILES_CHAIR_COVERS'
  | 'TEXTILES_DRAPING'
  | 'TEXTILES_OTHER'

export type SuppliesCategory = 
  | 'SUPPLIES_TABLEWARE'
  | 'SUPPLIES_BALLOONS'
  | 'SUPPLIES_INFLATABLES'
  | 'SUPPLIES_GAMES'
  | 'SUPPLIES_OTHER'

export type ServicesCategory = 
  | 'SERVICES_DJ'
  | 'SERVICES_PHOTOGRAPHY'
  | 'SERVICES_CATERING'
  | 'SERVICES_PLANNING'
  | 'SERVICES_OTHER'

export type Category = 
  | DecorCategory 
  | FurnitureCategory 
  | EquipmentCategory 
  | StructuresCategory 
  | TextilesCategory 
  | SuppliesCategory 
  | ServicesCategory

// API Request/Response types

export interface CreateListingRequest {
  title: string
  description: string
  category: Category
  listingType: ListingType
  condition: ItemCondition
  
  // Sale pricing
  salePrice?: number
  acceptsOffers?: boolean
  
  // Rent pricing
  rentDailyRate?: number
  rentWeeklyRate?: number
  rentWeekendRate?: number
  minRentalDays?: number
  securityDeposit?: number
  
  // Location
  city: string
  state: string
  zipCode: string
  showExactAddress?: boolean
  address?: string
  latitude?: number
  longitude?: number
  
  // Logistics
  pickupAvailable?: boolean
  deliveryAvailable?: boolean
  deliveryRadius?: number
  deliveryFee?: number
  shippingAvailable?: boolean
  
  // Images
  images: string[]
  
  // Quantity
  quantityAvailable?: number
}

export interface UpdateListingRequest extends Partial<CreateListingRequest> {
  status?: ListingStatus
}

export interface ListingSearchParams {
  query?: string
  category?: Category
  listingType?: ListingType
  condition?: ItemCondition
  minPrice?: number
  maxPrice?: number
  city?: string
  state?: string
  zipCode?: string
  radius?: number
  availableFrom?: string
  availableTo?: string
  page?: number
  limit?: number
  sortBy?: 'price_asc' | 'price_desc' | 'newest' | 'rating'
}

export interface CreateOfferRequest {
  listingId: string
  offerAmount: number
  message?: string
}

export interface CreateReviewRequest {
  transactionId: string
  rating: number
  comment?: string
}

export interface BookRentalRequest {
  listingId: string
  startDate: string
  endDate: string
  quantity?: number
  includeDelivery?: boolean
  includeInsurance?: boolean
}

export interface SendMessageRequest {
  receiverId: string
  listingId?: string
  content: string
}

// Response types with computed fields

export interface ListingWithDetails {
  id: string
  title: string
  description: string
  category: Category
  listingType: ListingType
  condition: ItemCondition
  salePrice: number | null
  acceptsOffers: boolean
  rentDailyRate: number | null
  rentWeeklyRate: number | null
  rentWeekendRate: number | null
  minRentalDays: number | null
  securityDeposit: number | null
  city: string
  state: string
  zipCode: string
  showExactAddress: boolean
  address: string | null
  pickupAvailable: boolean
  deliveryAvailable: boolean
  deliveryRadius: number | null
  deliveryFee: number | null
  shippingAvailable: boolean
  status: ListingStatus
  quantityAvailable: number
  images: { id: string; url: string; order: number }[]
  createdAt: string
  updatedAt: string
  user: {
    id: string
    name: string | null
    image: string | null
    rating: number
    reviewCount: number
  }
  favoriteCount: number
  isFavorited: boolean
}

export interface UserProfile {
  id: string
  name: string | null
  image: string | null
  bio: string | null
  city: string | null
  state: string | null
  rating: number
  reviewCount: number
  idVerified: boolean
  subscriptionTier: SubscriptionTier
  createdAt: string
  listingsCount: number
  completedTransactions: number
}

export interface TransactionSummary {
  id: string
  transactionType: TransactionType
  status: TransactionStatus
  itemPrice: number
  serviceFee: number
  deliveryFee: number
  insuranceFee: number
  totalAmount: number
  rentalStartDate: string | null
  rentalEndDate: string | null
  securityDeposit: number | null
  depositReturned: boolean
  createdAt: string
  completedAt: string | null
  listing: {
    id: string
    title: string
    images: { url: string }[]
  }
  buyer: {
    id: string
    name: string | null
    image: string | null
  }
  seller: {
    id: string
    name: string | null
    image: string | null
  }
}

// Commission rates
export const COMMISSION_RATES = {
  SALE: {
    FREE: 0.12,
    SELLER: 0.10,
    PRO: 0.08,
    BUSINESS: 0.06,
  },
  RENTAL: {
    FREE: 0.18,
    SELLER: 0.15,
    PRO: 0.12,
    BUSINESS: 0.10,
  },
  SERVICE: {
    FREE: 0.15,
    SELLER: 0.12,
    PRO: 0.10,
    BUSINESS: 0.08,
  },
} as const

// Subscription tiers with features
export const SUBSCRIPTION_TIERS = {
  FREE: {
    name: 'Free',
    price: 0,
    maxListings: 5,
    commissionRate: 0.15,
    features: ['5 listings', '15% fee', 'Basic support'],
  },
  SELLER: {
    name: 'Seller',
    price: 19,
    maxListings: 50,
    commissionRate: 0.10,
    features: ['50 listings', '10% fee', 'Priority support', 'Analytics'],
  },
  PRO: {
    name: 'Pro',
    price: 49,
    maxListings: Infinity,
    commissionRate: 0.08,
    features: ['Unlimited listings', '8% fee', 'Featured badge', 'Bulk tools'],
  },
  BUSINESS: {
    name: 'Business',
    price: 99,
    maxListings: Infinity,
    commissionRate: 0.06,
    features: ['Multi-user', 'API access', '6% fee', 'White-glove support'],
  },
} as const

// Category labels for display
export const CATEGORY_LABELS: Record<Category, string> = {
  DECOR_CENTERPIECES: 'Centerpieces',
  DECOR_BACKDROPS: 'Backdrops',
  DECOR_ARCHES: 'Arches',
  DECOR_LIGHTING: 'Lighting',
  DECOR_FLOWERS: 'Flowers',
  DECOR_SIGNAGE: 'Signage',
  DECOR_OTHER: 'Other Decor',
  FURNITURE_CHAIRS: 'Chairs',
  FURNITURE_TABLES: 'Tables',
  FURNITURE_LOUNGE: 'Lounge Furniture',
  FURNITURE_OTHER: 'Other Furniture',
  EQUIPMENT_AUDIO: 'Audio Equipment',
  EQUIPMENT_VISUAL: 'Visual Equipment',
  EQUIPMENT_PHOTO_BOOTH: 'Photo Booths',
  EQUIPMENT_DJ: 'DJ Equipment',
  EQUIPMENT_OTHER: 'Other Equipment',
  STRUCTURES_TENTS: 'Tents',
  STRUCTURES_CANOPIES: 'Canopies',
  STRUCTURES_DANCE_FLOOR: 'Dance Floors',
  STRUCTURES_STAGE: 'Stages',
  STRUCTURES_OTHER: 'Other Structures',
  TEXTILES_LINENS: 'Linens',
  TEXTILES_TABLECLOTHS: 'Tablecloths',
  TEXTILES_CHAIR_COVERS: 'Chair Covers',
  TEXTILES_DRAPING: 'Draping',
  TEXTILES_OTHER: 'Other Textiles',
  SUPPLIES_TABLEWARE: 'Tableware',
  SUPPLIES_BALLOONS: 'Balloons',
  SUPPLIES_INFLATABLES: 'Inflatables',
  SUPPLIES_GAMES: 'Games',
  SUPPLIES_OTHER: 'Other Supplies',
  SERVICES_DJ: 'DJ Services',
  SERVICES_PHOTOGRAPHY: 'Photography',
  SERVICES_CATERING: 'Catering',
  SERVICES_PLANNING: 'Event Planning',
  SERVICES_OTHER: 'Other Services',
}

// Category groups for UI
export const CATEGORY_GROUPS = {
  'Decor': ['DECOR_CENTERPIECES', 'DECOR_BACKDROPS', 'DECOR_ARCHES', 'DECOR_LIGHTING', 'DECOR_FLOWERS', 'DECOR_SIGNAGE', 'DECOR_OTHER'],
  'Furniture': ['FURNITURE_CHAIRS', 'FURNITURE_TABLES', 'FURNITURE_LOUNGE', 'FURNITURE_OTHER'],
  'Equipment': ['EQUIPMENT_AUDIO', 'EQUIPMENT_VISUAL', 'EQUIPMENT_PHOTO_BOOTH', 'EQUIPMENT_DJ', 'EQUIPMENT_OTHER'],
  'Structures': ['STRUCTURES_TENTS', 'STRUCTURES_CANOPIES', 'STRUCTURES_DANCE_FLOOR', 'STRUCTURES_STAGE', 'STRUCTURES_OTHER'],
  'Textiles': ['TEXTILES_LINENS', 'TEXTILES_TABLECLOTHS', 'TEXTILES_CHAIR_COVERS', 'TEXTILES_DRAPING', 'TEXTILES_OTHER'],
  'Party Supplies': ['SUPPLIES_TABLEWARE', 'SUPPLIES_BALLOONS', 'SUPPLIES_INFLATABLES', 'SUPPLIES_GAMES', 'SUPPLIES_OTHER'],
  'Services': ['SERVICES_DJ', 'SERVICES_PHOTOGRAPHY', 'SERVICES_CATERING', 'SERVICES_PLANNING', 'SERVICES_OTHER'],
} as const
