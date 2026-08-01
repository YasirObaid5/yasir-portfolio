"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Bi, BiList } from "./content";

export type Lang = "en" | "ar";

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Pick the active side of a bilingual value. */
  t: (v: Bi) => string;
  /** Pick the active side of a bilingual list. */
  tl: (v: BiList) => string[];
  /** Look up a UI string by key. */
  ui: (k: keyof typeof UI) => string;
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "yas-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the saved choice after hydration so SSR output stays deterministic.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "en" ? "ar" : "en"),
    [lang, setLang],
  );

  const value: Ctx = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    setLang,
    toggle,
    t: (v) => v[lang],
    tl: (v) => v[lang],
    ui: (k) => UI[k][lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

/* ------------------------------------------------------------------ */
/* UI strings                                                          */
/* ------------------------------------------------------------------ */

export const UI = {
  navAbout: { en: "About", ar: "نبذة" },
  navExpertise: { en: "Expertise", ar: "الخبرات" },
  navExperience: { en: "Experience", ar: "المسيرة" },
  navPublications: { en: "Publications", ar: "المنشورات" },
  navProjects: { en: "Projects", ar: "المشاريع" },
  navContact: { en: "Contact", ar: "تواصل" },
  navCv: { en: "CV", ar: "السيرة الذاتية" },

  skipToContent: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
  menu: { en: "Menu", ar: "القائمة" },
  close: { en: "Close", ar: "إغلاق" },
  switchLang: { en: "التبديل إلى العربية", ar: "Switch to English" },
  switchLangShort: { en: "ع", ar: "EN" },
  switchTheme: { en: "Switch theme", ar: "تبديل المظهر" },

  heroKicker: { en: "Sultanate of Oman", ar: "سلطنة عُمان" },
  heroCtaPrimary: { en: "View the full CV", ar: "عرض السيرة الذاتية" },
  heroCtaSecondary: { en: "Get in touch", ar: "تواصل معي" },
  scroll: { en: "Scroll", ar: "مرّر" },

  aboutEyebrow: { en: "About", ar: "نبذة" },
  aboutTitle: { en: "Reproductive science, applied", ar: "علم التكاثر في التطبيق" },
  aboutLanguages: { en: "Languages", ar: "اللغات" },
  aboutInterests: { en: "Beyond work", ar: "خارج العمل" },

  expertiseEyebrow: { en: "Expertise", ar: "الخبرات" },
  expertiseTitle: { en: "What I do", ar: "مجالات عملي" },
  expertiseLead: {
    en: "Eight areas where two and a half decades of laboratory and field work have concentrated.",
    ar: "ثمانية مجالات تركّزت فيها خبرة تزيد على عقدين ونصف من العمل المخبري والميداني.",
  },

  experienceEyebrow: { en: "Experience", ar: "المسيرة المهنية" },
  experienceTitle: { en: "Career", ar: "المسار الوظيفي" },
  current: { en: "Current", ar: "حالياً" },

  educationEyebrow: { en: "Education", ar: "المؤهلات" },
  educationTitle: { en: "Academic background", ar: "الخلفية الأكاديمية" },

  pubEyebrow: { en: "Research", ar: "البحث العلمي" },
  pubTitle: { en: "Publications", ar: "المنشورات العلمية" },
  pubLead: {
    en: "Peer-reviewed papers and conference contributions on bovine fertility, cryopreservation, sperm analysis and conservation theriogenology.",
    ar: "أوراق محكّمة ومساهمات في مؤتمرات حول خصوبة الأبقار والحفظ بالتجميد وتحليل الحيوانات المنوية وتكاثر الأنواع المهددة.",
  },
  pubAll: { en: "All", ar: "الكل" },
  pubJournal: { en: "Journal articles", ar: "أوراق محكّمة" },
  pubConference: { en: "Conference papers", ar: "أوراق مؤتمرات" },
  pubViewDoi: { en: "View publication", ar: "عرض البحث" },
  pubOnRg: { en: "See all on ResearchGate", ar: "عرض الكل على ResearchGate" },

  milestonesEyebrow: { en: "Professional development", ar: "التطوير المهني" },
  milestonesTitle: {
    en: "Training, conferences & committees",
    ar: "التدريب والمؤتمرات واللجان",
  },
  kindTraining: { en: "Training", ar: "تدريب" },
  kindConference: { en: "Conference", ar: "مؤتمر" },
  kindWorkshop: { en: "Workshop", ar: "ورشة عمل" },
  kindCommittee: { en: "Committee", ar: "لجنة" },

  projectsEyebrow: { en: "Digital work", ar: "الأعمال الرقمية" },
  projectsTitle: { en: "Selected projects", ar: "مشاريع مختارة" },
  projectsLead: {
    en: "Digital projects shaped by research, practical work and personal curiosity — from scientific tools to learning and creative experiments.",
    ar: "مشاريع رقمية نمت من البحث والعمل والفضول الشخصي — من الأدوات العلمية إلى تجارب التعلّم والاستكشاف الإبداعي.",
  },
  projectLive: { en: "Live site", ar: "الموقع" },
  projectCode: { en: "Source", ar: "الشيفرة" },
  projectsMore: { en: "More on GitHub", ar: "المزيد على GitHub" },

  contactEyebrow: { en: "Contact", ar: "تواصل" },
  contactTitle: { en: "Let's talk", ar: "لنتحدث" },
  contactLead: {
    en: "For research collaboration, advisory work, technical review or speaking — the fastest route is email.",
    ar: "للتعاون البحثي أو الاستشارات أو المراجعة الفنية أو المشاركة في الفعاليات — البريد الإلكتروني أسرع وسيلة.",
  },
  contactEmailPersonal: { en: "Personal email", ar: "البريد الشخصي" },
  contactEmailOfficial: { en: "Official email", ar: "البريد الرسمي" },
  contactPhone: { en: "Mobile", ar: "الهاتف" },
  contactAddress: { en: "Address", ar: "العنوان" },
  contactCopy: { en: "Copy", ar: "نسخ" },
  contactCopied: { en: "Copied", ar: "تم النسخ" },

  cvTitle: { en: "Curriculum Vitae", ar: "السيرة الذاتية" },
  cvPrint: { en: "Print / Save as PDF", ar: "طباعة / حفظ PDF" },
  cvDownload: { en: "Download PDF", ar: "تحميل PDF" },
  cvBack: { en: "Back to site", ar: "العودة للموقع" },
  cvPersonal: { en: "Personal details", ar: "البيانات الشخصية" },
  cvProfile: { en: "Professional summary", ar: "الملخص المهني" },
  cvKeySkills: { en: "Core competencies", ar: "الكفاءات الأساسية" },
  cvDob: { en: "Date of birth", ar: "تاريخ الميلاد" },
  cvDobValue: { en: "10 August 1975", ar: "١٠ أغسطس ١٩٧٥" },
  cvNationality: { en: "Nationality", ar: "الجنسية" },
  cvNationalityValue: { en: "Omani", ar: "عُماني" },
  cvWebsite: { en: "Website", ar: "الموقع الشخصي" },
  cvScan: { en: "Portfolio", ar: "الملف الكامل" },

  footerRights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  footerBuilt: {
    en: "Designed and built by Yasir Al-Shukaili.",
    ar: "من تصميم وبناء ياسر الشكيلي.",
  },
  backToTop: { en: "Back to top", ar: "إلى الأعلى" },
} satisfies Record<string, Bi>;
