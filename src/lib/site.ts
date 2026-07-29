/** Canonical origin. Vercel injects NEXT_PUBLIC_SITE_URL at build time. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yasir-al-shukaili.vercel.app";
