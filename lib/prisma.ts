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
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Add connection timeout handling - only connect if we have a DATABASE_URL
if (process.env.DATABASE_URL) {
  prisma.$connect().catch((e) => {
    console.error('Failed to connect to database:', e)
  })
}

