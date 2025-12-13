import { COMMISSION_RATES, SubscriptionTier, TransactionType } from '@/types'

/**
 * Calculate commission fee based on transaction type and subscription tier
 */
export function calculateCommission(
  amount: number,
  transactionType: TransactionType | 'SERVICE',
  subscriptionTier: SubscriptionTier
): number {
  const rate = COMMISSION_RATES[transactionType][subscriptionTier]
  return Math.round(amount * rate * 100) / 100
}

/**
 * Calculate total transaction amount including fees
 */
export function calculateTransactionTotal(params: {
  itemPrice: number
  transactionType: TransactionType | 'SERVICE'
  subscriptionTier: SubscriptionTier
  deliveryFee?: number
  insuranceFee?: number
}): {
  itemPrice: number
  serviceFee: number
  deliveryFee: number
  insuranceFee: number
  totalAmount: number
} {
  const { itemPrice, transactionType, subscriptionTier, deliveryFee = 0, insuranceFee = 0 } = params
  const serviceFee = calculateCommission(itemPrice, transactionType, subscriptionTier)
  
  return {
    itemPrice,
    serviceFee,
    deliveryFee,
    insuranceFee,
    totalAmount: itemPrice + serviceFee + deliveryFee + insuranceFee,
  }
}

/**
 * Calculate rental total for a date range
 */
export function calculateRentalTotal(params: {
  dailyRate: number
  weeklyRate?: number
  weekendRate?: number
  startDate: Date
  endDate: Date
  quantity?: number
}): {
  days: number
  rateUsed: 'daily' | 'weekly' | 'weekend'
  subtotal: number
} {
  const { dailyRate, weeklyRate, weekendRate, startDate, endDate, quantity = 1 } = params
  
  const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
  
  // Determine which rate to use
  let rateUsed: 'daily' | 'weekly' | 'weekend' = 'daily'
  let rate = dailyRate
  
  // Check if it's a weekend rental (Friday to Sunday = 3 days)
  const startDay = startDate.getDay()
  const isWeekendRental = days <= 3 && startDay === 5 && weekendRate
  
  if (isWeekendRental && weekendRate) {
    rateUsed = 'weekend'
    rate = weekendRate / 3 // Weekend rate is for the whole weekend
  } else if (days >= 7 && weeklyRate) {
    rateUsed = 'weekly'
    const weeks = Math.floor(days / 7)
    const remainingDays = days % 7
    const subtotal = (weeks * weeklyRate + remainingDays * dailyRate) * quantity
    return { days, rateUsed, subtotal: Math.round(subtotal * 100) / 100 }
  }
  
  const subtotal = days * rate * quantity
  return { days, rateUsed, subtotal: Math.round(subtotal * 100) / 100 }
}

/**
 * Calculate late fee for rental return
 */
export function calculateLateFee(
  dailyRate: number,
  daysLate: number,
  quantity: number = 1
): number {
  // Late fee is 1.5x the daily rate
  const lateFeeRate = dailyRate * 1.5
  return Math.round(lateFeeRate * daysLate * quantity * 100) / 100
}

/**
 * Calculate insurance fee (8-12% of rental value)
 */
export function calculateInsuranceFee(rentalValue: number): number {
  const insuranceRate = 0.10 // 10% of rental value
  return Math.round(rentalValue * insuranceRate * 100) / 100
}

/**
 * Format price for display
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(d)
}

/**
 * Format date range for display
 */
export function formatDateRange(startDate: Date | string, endDate: Date | string): string {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate
  
  const sameYear = start.getFullYear() === end.getFullYear()
  const sameMonth = sameYear && start.getMonth() === end.getMonth()
  
  if (sameMonth) {
    return `${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(start)} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`
  }
  
  if (sameYear) {
    return `${new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(start)} - ${new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(end)}, ${start.getFullYear()}`
  }
  
  return `${formatDate(start)} - ${formatDate(end)}`
}

/**
 * Calculate distance between two coordinates in miles
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959 // Earth's radius in miles
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c * 10) / 10
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180)
}

/**
 * Generate a slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + '...'
}
