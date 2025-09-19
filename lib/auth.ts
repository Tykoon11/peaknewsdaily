import NextAuth, { type NextAuthConfig, type DefaultSession } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import Google from 'next-auth/providers/google'
import { prisma } from '@/lib/prisma'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      role: import('@prisma/client').Role
    } & DefaultSession['user']
  }
}

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'database' },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Include role in the token for Edge Runtime middleware access
      if (user) {
        token.role = (user as any).role || 'reader'
      }
      return token
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = token?.sub || user?.id || ''
        // Include role from token or user
        ;(session.user as any).role = token?.role || (user as any)?.role || 'reader'
      }
      return session
    }
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig)
