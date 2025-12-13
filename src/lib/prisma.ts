// Prisma client singleton for database connections
// Note: Run `npx prisma generate` after setting up DATABASE_URL to generate the client

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let prisma: any = null

// Only import and instantiate PrismaClient if we're in a proper runtime environment
// This allows the project to build without a database connection
if (typeof window === 'undefined') {
  try {
    // Dynamic import to avoid build errors when Prisma client isn't generated
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaClient } = require('@prisma/client')
    
    const globalForPrisma = globalThis as unknown as {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      prisma: any | undefined
    }
    
    prisma = globalForPrisma.prisma ?? new PrismaClient()
    
    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = prisma
    }
  } catch {
    // Prisma client not generated yet - this is expected during initial setup
    console.warn('Prisma client not available. Run `npx prisma generate` to generate it.')
  }
}

export { prisma }
