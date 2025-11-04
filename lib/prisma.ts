import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['error', 'warn'],
    ...(process.env.DATABASE_URL && {
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    }),
    // Optimize connection settings for Neon free tier
    connectionLimit: 5, // Limit concurrent connections
    pool: {
      max: 5,
      min: 1,
      idleTimeoutMillis: 30000, // Close idle connections after 30s
      acquireTimeoutMillis: 60000,
    },
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Add connection timeout handling and graceful shutdown
if (process.env.DATABASE_URL) {
  prisma.$connect().catch((e) => {
    console.error('Failed to connect to database:', e)
  })
  
  // Gracefully disconnect on process termination
  process.on('beforeExit', async () => {
    await prisma.$disconnect()
  })
  
  process.on('SIGINT', async () => {
    await prisma.$disconnect()
    process.exit(0)
  })
  
  process.on('SIGTERM', async () => {
    await prisma.$disconnect()
    process.exit(0)
  })
}

