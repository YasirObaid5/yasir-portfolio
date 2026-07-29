import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  IBM_Plex_Serif,
} from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { CONTACT, PROFILE } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

/**
 * One superfamily across Latin and Arabic. IBM Plex was drawn as a technical
 * family, which suits a research CV, and its Arabic cut is designed against
 * the same skeleton — so the two language versions feel like one document.
 */
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--f-sans",
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--f-display",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--f-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yasir Al-Shukaili — Livestock Reproduction Scientist",
    template: "%s · Yasir Al-Shukaili",
  },
  description:
    "Head of the Livestock Reproduction Research Section at Oman's Livestock Production Research Centre. Twenty-five years in artificial insemination, semen cryopreservation, CASA-based andrology and conservation theriogenology.",
  keywords: [
    "Yasir Al-Shukaili",
    "livestock reproduction",
    "artificial insemination",
    "semen cryopreservation",
    "CASA sperm analysis",
    "conservation theriogenology",
    "Arabian leopard",
    "Oman",
    "animal genetic resources",
    "ياسر الشكيلي",
    "تكاثر الثروة الحيوانية",
  ],
  authors: [{ name: "Yasir Obaid Thani Al-Shukaili", url: SITE_URL }],
  creator: "Yasir Obaid Thani Al-Shukaili",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Yasir Al-Shukaili",
    title: "Yasir Al-Shukaili — Livestock Reproduction Scientist",
    description:
      "Twenty-five years advancing artificial insemination, semen cryopreservation and conservation theriogenology in the Sultanate of Oman.",
    locale: "en_GB",
    alternateLocale: ["ar_OM"],
    images: [
      {
        url: "/images/portrait-about.png",
        width: 896,
        height: 1152,
        alt: "Yasir Al-Shukaili",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasir Al-Shukaili — Livestock Reproduction Scientist",
    description:
      "Artificial insemination, semen cryopreservation and conservation theriogenology — Sultanate of Oman.",
    images: ["/images/portrait-about.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/images/avatar.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#161714" },
  ],
  width: "device-width",
  initialScale: 1,
};

/**
 * Applies the stored theme and language before first paint, and marks the
 * document as scripted so the reveal animation can hide content. Without
 * this class nothing is hidden, so a failed or blocked bundle leaves a
 * readable page rather than a blank one.
 */
const bootScript = `
(function(){
  document.documentElement.classList.add('js');
  try {
    var t = localStorage.getItem('yas-theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    if (localStorage.getItem('yas-lang') === 'ar') {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    }
  } catch (e) {}
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name.en,
  alternateName: PROFILE.name.ar,
  jobTitle: PROFILE.title.en,
  description: PROFILE.tagline.en,
  url: SITE_URL,
  image: `${SITE_URL}/images/portrait-about.png`,
  email: `mailto:${CONTACT.emailPersonal}`,
  telephone: CONTACT.phoneHref,
  nationality: "Omani",
  knowsLanguage: ["ar", "en", "ru"],
  worksFor: {
    "@type": "GovernmentOrganization",
    name: "Ministry of Agriculture, Fisheries and Water Resources — Sultanate of Oman",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Peoples' Friendship University of Russia (RUDN)",
    },
    { "@type": "CollegeOrUniversity", name: "Sultan Qaboos University" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seeb",
    addressCountry: "OM",
  },
  sameAs: [CONTACT.linkedin, CONTACT.researchgate, CONTACT.github],
  knowsAbout: [
    "Artificial insemination",
    "Semen cryopreservation",
    "Theriogenology",
    "Animal genetic resources",
    "Computer-assisted sperm analysis",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexSerif.variable} ${plexArabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
