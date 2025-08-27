# PeakNewsDaily

Production-ready Next.js 14 + TypeScript app for peaknewsdaily.com. Moderated media submissions, Cloudinary uploads, Prisma/Postgres, NextAuth, PWA, and SEO.

## Local Development

1. npm i
2. cp .env.example .env.local
3. npx prisma db push
4. npm run seed
5. npm run dev

## Notes

- Admin area: `/admin` (requires role editor/admin). Seed sets `ADMIN_EMAIL` as admin.
- Submit: `/submit` wizard supports links; direct upload requires Cloudinary env and uses `/api/upload/sign` to sign uploads.
- Comments via Giscus (configure envs).
- Analytics via Plausible when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` set.
- PWA installed via `/manifest` and `public/sw.js` with offline cache for last 20.

