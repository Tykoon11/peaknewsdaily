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
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        // @ts-expect-error role
        session.user.role = (user as any).role
      }
      return session
    }
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig)
