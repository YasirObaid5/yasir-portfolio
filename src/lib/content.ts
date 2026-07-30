/**
 * Single source of truth for every piece of content on the site.
 * Each field carries both an English (`en`) and Arabic (`ar`) value so the
 * language switch never falls back to an untranslated string.
 */

export type Bi = { en: string; ar: string };
export type BiList = { en: string[]; ar: string[] };

export const PROFILE = {
  name: {
    en: "Yasir Obaid Thani Al-Shukaili",
    ar: "ياسر بن عبيد بن ثاني الشكيلي",
  } as Bi,
  shortName: { en: "Yasir Al-Shukaili", ar: "ياسر الشكيلي" } as Bi,
  initials: "YA",
  role: {
    en: "Livestock Reproduction Scientist",
    ar: "باحث في تكاثر الثروة الحيوانية",
  } as Bi,
  title: {
    en: "Head of the Livestock Reproduction Research Section",
    ar: "رئيس قسم بحوث تكاثر الثروة الحيوانية",
  } as Bi,
  org: {
    en: "Livestock Production Research Centre · Directorate General of Agriculture & Livestock Research · Ministry of Agriculture, Fisheries and Water Resources",
    ar: "مركز بحوث الإنتاج الحيواني · المديرية العامة للبحوث الزراعية والحيوانية · وزارة الزراعة والثروة السمكية وموارد المياه",
  } as Bi,
  orgShort: {
    en: "Ministry of Agriculture, Fisheries & Water Resources — Oman",
    ar: "وزارة الزراعة والثروة السمكية وموارد المياه — سلطنة عُمان",
  } as Bi,
  location: { en: "Muscat, Sultanate of Oman", ar: "مسقط، سلطنة عُمان" } as Bi,
  tagline: {
    en: "Twenty-five years advancing artificial insemination, semen cryopreservation and conservation theriogenology — from Oman's national bovine AI programme to the critically endangered Arabian leopard.",
    ar: "خمسة وعشرون عاماً في تطوير التلقيح الاصطناعي وحفظ السائل المنوي بالتجميد وتكاثر الأنواع المهددة — من البرنامج الوطني لتلقيح الأبقار في عُمان إلى النمر العربي المهدد بالانقراض.",
  } as Bi,
  summary: {
    en: "I lead the Reproduction Research Section at Oman's Livestock Production Research Centre, where I built and run the national semen cryopreservation laboratory — covering collection, CASA-based analysis, freezing, nitrogen storage and nationwide distribution for cattle and small ruminants. My published work spans bovine fertility, semen freezing, flow cytometry and conservation theriogenology, and my training covers ISO/IEC 17025 laboratory standardisation and experimental design. I work in Arabic, English and Russian, and I write software — I build the digital and AI tools my own research and outreach need.",
    ar: "أترأس قسم بحوث التكاثر في مركز بحوث الإنتاج الحيواني بسلطنة عُمان، حيث أسّست وأُدير مختبر حفظ السائل المنوي بالتجميد على المستوى الوطني — من الجمع والتحليل باستخدام CASA إلى التجميد والحفظ في النيتروجين والتوزيع على مستوى السلطنة للأبقار والمجترات الصغيرة. تشمل أبحاثي المنشورة خصوبة الأبقار وتجميد السائل المنوي وقياس التدفق الخلوي وتكاثر الأنواع المهددة، وتدربت على توحيد وتقييم المختبرات وفق ISO/IEC 17025 وعلى تصميم التجارب. أعمل بالعربية والإنجليزية والروسية، وأكتب البرمجيات — أبني بنفسي الأدوات الرقمية وأدوات الذكاء الاصطناعي التي تحتاجها أبحاثي.",
  } as Bi,
  availability: {
    en: "Open to research collaborations, advisory roles and international programmes",
    ar: "منفتح على التعاون البحثي والأدوار الاستشارية والبرامج الدولية",
  } as Bi,
} as const;

export const CONTACT = {
  emailPersonal: "yasir.obaid5@gmail.com",
  emailOfficial: "yasir.alshukaili@mafwr.gov.om",
  phone: "+968 9507 8097",
  phoneHref: "+96895078097",
  address: {
    en: "P.O. Box B5209, P.C. 900, Seeb, Sultanate of Oman",
    ar: "ص.ب: B5209 — الرمز البريدي: 900، السيب، سلطنة عُمان",
  } as Bi,
  linkedin: "https://www.linkedin.com/in/yasir-al-shukaili-2808b428/",
  researchgate:
    "https://www.researchgate.net/profile/Yasir-Obaid-Thani-Al-Shukaili",
  github: "https://github.com/YasirObaid5",
} as const;

export const STATS: { value: string; label: Bi }[] = [
  {
    value: "25+",
    label: { en: "Years in livestock research", ar: "عاماً في بحوث الثروة الحيوانية" },
  },
  {
    value: "8",
    label: { en: "Publications & conference papers", ar: "بحثاً منشوراً وورقة مؤتمر" },
  },
  {
    value: "1",
    label: {
      en: "National cryopreservation laboratory established",
      ar: "مختبر وطني للحفظ بالتجميد تم تأسيسه",
    },
  },
  {
    value: "3",
    label: { en: "Working languages", ar: "لغات عمل" },
  },
];

/* ------------------------------------------------------------------ */
/* Expertise                                                           */
/* ------------------------------------------------------------------ */

export type Expertise = { icon: string; title: Bi; body: Bi; tags: BiList };

export const EXPERTISE: Expertise[] = [
  {
    icon: "cryo",
    title: {
      en: "Semen Cryopreservation",
      ar: "حفظ السائل المنوي بالتجميد",
    },
    body: {
      en: "End-to-end responsibility for bovine semen: collection, extension, straw filling, controlled-rate freezing, liquid-nitrogen storage and nationwide distribution to field AI units.",
      ar: "مسؤولية كاملة عن السائل المنوي للأبقار: الجمع، التخفيف، التعبئة في القصبات، التجميد المتحكم بمعدله، الحفظ في النيتروجين السائل، والتوزيع على وحدات التلقيح الميدانية في السلطنة.",
    },
    tags: {
      en: ["Extenders", "Straw production", "LN₂ storage", "Post-thaw QC"],
      ar: ["المخففات", "إنتاج القصبات", "الحفظ بالنيتروجين", "فحص ما بعد الإذابة"],
    },
  },
  {
    icon: "ai",
    title: {
      en: "Artificial Insemination Programmes",
      ar: "برامج التلقيح الاصطناعي",
    },
    body: {
      en: "Planning and delivery of the annual AI programme at the Livestock Production Research Centre for cattle, sheep and goats, including oestrus synchronisation protocols and field follow-up.",
      ar: "تخطيط وتنفيذ البرنامج السنوي للتلقيح الاصطناعي في مركز بحوث الإنتاج الحيواني للأبقار والأغنام والماعز، بما يشمل بروتوكولات تزامن الشبق والمتابعة الميدانية.",
    },
    tags: {
      en: ["Cattle", "Sheep & goats", "Oestrus synchronisation", "Programme planning"],
      ar: ["الأبقار", "الأغنام والماعز", "تزامن الشبق", "تخطيط البرامج"],
    },
  },
  {
    icon: "microscope",
    title: {
      en: "Semen Quality Assessment",
      ar: "تقييم جودة السائل المنوي",
    },
    body: {
      en: "Objective andrological evaluation using Computer-Assisted Sperm Analysis (CASA), flow cytometry, morphology and viability assays — applied to livestock and to endangered wildlife.",
      ar: "تقييم موضوعي باستخدام التحليل الحاسوبي للحيوانات المنوية (CASA) وقياس التدفق الخلوي وفحوص الشكل والحيوية — يُطبَّق على الثروة الحيوانية وعلى الأنواع البرية المهددة.",
    },
    tags: {
      en: ["CASA", "Flow cytometry", "Sperm kinematics", "Morphology"],
      ar: ["CASA", "قياس التدفق الخلوي", "حركية الحيوانات المنوية", "الشكل الظاهري"],
    },
  },
  {
    icon: "embryo",
    title: { en: "Embryo Technology", ar: "تقنيات الأجنة" },
    body: {
      en: "Superovulation protocols and FSH dose optimisation, embryo collection, grading and quality evaluation — including published work on the North Omani cattle breed.",
      ar: "بروتوكولات التبويض الفائق وضبط جرعات هرمون FSH، وجمع الأجنة وتصنيفها وتقييم جودتها — بما يشمل بحثاً منشوراً على سلالة الأبقار العُمانية الشمالية.",
    },
    tags: {
      en: ["Superovulation", "FSH dosing", "Embryo grading", "IVF research"],
      ar: ["التبويض الفائق", "جرعات FSH", "تصنيف الأجنة", "بحوث الإخصاب المجهري"],
    },
  },
  {
    icon: "leopard",
    title: {
      en: "Conservation Theriogenology",
      ar: "تكاثر الأنواع المهددة",
    },
    body: {
      en: "Reproductive assessment of critically endangered species — the Arabian leopard (Panthera pardus nimr) and Arabian tahr (Arabitragus jayakari) — supporting national genetic-resource conservation.",
      ar: "تقييم القدرة التكاثرية للأنواع المهددة بالانقراض — النمر العربي والوعل العربي (الطهر) — دعماً للجهود الوطنية لحفظ الموارد الوراثية الحيوانية.",
    },
    tags: {
      en: ["Arabian leopard", "Arabian tahr", "Genetic resources", "Gene banking"],
      ar: ["النمر العربي", "الوعل العربي", "الموارد الوراثية", "بنوك الجينات"],
    },
  },
  {
    icon: "iso",
    title: {
      en: "Laboratory Quality Systems",
      ar: "أنظمة جودة المختبرات",
    },
    body: {
      en: "Trained in the evaluation and standardisation of agricultural laboratories against ISO/IEC 17025 (AOAD, 2016), and in experimental design and biostatistics — applied to how the Section's operating procedures and studies are written and run.",
      ar: "تدريب على تقييم وتوحيد المختبرات الزراعية وفق مواصفة ISO/IEC 17025 (المنظمة العربية للتنمية الزراعية، ٢٠١٦)، وعلى تصميم التجارب والإحصاء الحيوي — يُطبَّق في كتابة وتنفيذ إجراءات القسم ودراساته.",
    },
    tags: {
      en: [
        "ISO/IEC 17025 training",
        "Experimental design",
        "Biostatistics",
        "SOPs",
      ],
      ar: [
        "تدريب ISO/IEC 17025",
        "تصميم التجارب",
        "الإحصاء الحيوي",
        "إجراءات التشغيل",
      ],
    },
  },
  {
    icon: "code",
    title: { en: "Digital & AI Tooling", ar: "الأدوات الرقمية والذكاء الاصطناعي" },
    body: {
      en: "Self-taught developer. I build the web platforms my research and extension work need, from breed-documentation portals to data and study tools.",
      ar: "مطوّر بالتعلّم الذاتي. أبني منصات الويب التي يحتاجها عملي البحثي والإرشادي، من بوابات توثيق السلالات إلى أدوات البيانات والدراسة.",
    },
    tags: {
      en: ["React / Next.js", "JavaScript", "CSS"],
      ar: ["React / Next.js", "JavaScript", "CSS"],
    },
  },
  {
    icon: "globe",
    title: { en: "Programmes & Capacity Building", ar: "البرامج وبناء القدرات" },
    body: {
      en: "Annual work-plan and requirement preparation, research execution, and technical representation of Oman in regional and international AI and genetic-resource programmes.",
      ar: "إعداد خطط العمل والاحتياجات السنوية، وتنفيذ البحوث، والتمثيل الفني للسلطنة في البرامج الإقليمية والدولية للتلقيح الاصطناعي والموارد الوراثية.",
    },
    tags: {
      en: ["ICARDA", "AOAD", "IAEA / RAS", "IsDB"],
      ar: ["إيكاردا", "المنظمة العربية للتنمية الزراعية", "الوكالة الدولية للطاقة الذرية", "البنك الإسلامي للتنمية"],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Role = {
  period: Bi;
  title: Bi;
  org: Bi;
  current?: boolean;
  points: BiList;
};

export const EXPERIENCE: Role[] = [
  {
    period: { en: "2007 — Present", ar: "٢٠٠٧ — حتى الآن" },
    title: {
      en: "Head, Livestock Reproduction Research Section",
      ar: "رئيس قسم بحوث تكاثر الثروة الحيوانية",
    },
    org: {
      en: "Livestock Production Research Centre, Directorate General of Agriculture & Livestock Research — Ministry of Agriculture, Fisheries and Water Resources",
      ar: "مركز بحوث الإنتاج الحيواني، المديرية العامة للبحوث الزراعية والحيوانية — وزارة الزراعة والثروة السمكية وموارد المياه",
    },
    current: true,
    points: {
      en: [
        "Established the Section's semen cryopreservation laboratory — contributing to its design, equipment specification, commissioning and move into full production.",
        "Own the full bovine semen chain: production, analysis, freezing, storage and national distribution.",
        "Plan and deliver the Centre's annual artificial insemination programme.",
        "Lead research on cryopreservation and wider livestock reproduction, and prepare the Section's annual work plan and requirements.",
        "Served as Acting Director of the Animal Production Research Centre.",
      ],
      ar: [
        "تأسيس مختبر القسم لحفظ السائل المنوي بالتجميد — بالمساهمة في تصميمه وتحديد تجهيزاته ومرحلة إعداده ثم انتقاله إلى الإنتاج الكامل.",
        "الإشراف على سلسلة السائل المنوي للأبقار بالكامل: الإنتاج والتحليل والتجميد والحفظ والتوزيع على مستوى السلطنة.",
        "تخطيط وتنفيذ البرنامج السنوي للتلقيح الاصطناعي في المركز.",
        "قيادة البحوث في مجال الحفظ بالتجميد وتكاثر الثروة الحيوانية، وإعداد خطة العمل والاحتياجات السنوية للقسم.",
        "العمل بالتكليف مديراً لمركز بحوث الإنتاج الحيواني.",
      ],
    },
  },
  {
    period: { en: "2000 — 2006", ar: "٢٠٠٠ — ٢٠٠٦" },
    title: {
      en: "Animal Production Engineer — Rangeland Department",
      ar: "مهندس إنتاج حيواني — دائرة المراعي",
    },
    org: {
      en: "Directorate General of Animal Production — Ministry of Agriculture, Fisheries and Water Resources",
      ar: "المديرية العامة للإنتاج الحيواني — وزارة الزراعة والثروة السمكية وموارد المياه",
    },
    points: {
      en: [
        "Rangeland and animal production work across Oman's grazing systems.",
        "Field extension and technical support to livestock keepers.",
      ],
      ar: [
        "العمل في المراعي والإنتاج الحيواني ضمن نظم الرعي في السلطنة.",
        "الإرشاد الميداني والدعم الفني لمربّي الثروة الحيوانية.",
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export type Education = {
  year: string;
  degree: Bi;
  school: Bi;
  note?: Bi;
};

export const EDUCATION: Education[] = [
  {
    year: "2005",
    degree: {
      en: "MSc in Animal Sciences — Animal Husbandry",
      ar: "ماجستير في العلوم الحيوانية — تخصص الإنتاج الحيواني",
    },
    school: {
      en: "Peoples' Friendship University of Russia (RUDN), Moscow",
      ar: "جامعة الصداقة بين الشعوب الروسية (RUDN)، موسكو",
    },
    note: {
      en: "Thesis: “The Characteristics of the Romney Sheep Breed on Genetic Markers”",
      ar: "الرسالة: «خصائص سلالة أغنام الرومني بالاعتماد على الواسمات الوراثية»",
    },
  },
  {
    year: "1999",
    degree: {
      en: "BSc in Animal Sciences",
      ar: "بكالوريوس في العلوم الحيوانية",
    },
    school: {
      en: "Sultan Qaboos University, Sultanate of Oman",
      ar: "جامعة السلطان قابوس، سلطنة عُمان",
    },
  },
  {
    year: "1993",
    degree: {
      en: "General Secondary Education Certificate",
      ar: "شهادة الدراسة الثانوية العامة",
    },
    school: {
      en: "Saif bin Sultan School, Ibri, Sultanate of Oman",
      ar: "مدرسة سيف بن سلطان، عبري، سلطنة عُمان",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Publications                                                        */
/* ------------------------------------------------------------------ */

export type Publication = {
  year: string;
  authors: string;
  title: Bi;
  venue: Bi;
  doi?: string;
  type: "journal" | "conference";
  topic: Bi;
};

export const PUBLICATIONS: Publication[] = [
  {
    year: "2023",
    authors:
      "Al-Yahyaey F., Stephen C., Al-Shukaili Y., Al-Bulushi S., Shaat I., Bush R.",
    title: {
      en: "Effect of Spirulina platensis supplementation on reproductive parameters of Sahrawi and Jabbali goat bucks",
      ar: "تأثير إضافة سبيرولينا بلاتينسيس على المؤشرات التناسلية لذكور الماعز الصحراوي والجبلي",
    },
    venue: { en: "Animals, 13(21), 3405", ar: "مجلة Animals، المجلد ١٣، العدد ٢١، ٣٤٠٥" },
    doi: "10.3390/ani13213405",
    type: "journal",
    topic: { en: "Small ruminants", ar: "المجترات الصغيرة" },
  },
  {
    year: "2018",
    authors:
      "Baqir S., Bani Orabah A., Al-Zeheimi N., Al-Shakaili Y., Al-Rasbi K., Gartley C., Mastromonaco G.",
    title: {
      en: "Computer Assisted Sperm Analysis (CASA) in the critically endangered captive Arabian leopard (Panthera pardus nimr): a multivariate clustering analysis",
      ar: "التحليل الحاسوبي للحيوانات المنوية (CASA) في النمر العربي الأسير المهدد بالانقراض: تحليل عنقودي متعدد المتغيرات",
    },
    venue: {
      en: "Journal of Veterinary Science & Technology, 9(2)",
      ar: "مجلة علوم وتقنيات الطب البيطري، المجلد ٩، العدد ٢",
    },
    doi: "10.4172/2157-7579.1000526",
    type: "journal",
    topic: { en: "Conservation", ar: "حفظ الأنواع" },
  },
  {
    year: "2017",
    authors: "Hussein A.M., Al-Shakaili Y.O., Al-Ismaily A.N., Al-Alawi H.H.",
    title: {
      en: "Effect of different doses of FSH on superovulation, production and quality of embryo in the North Omani cattle breed",
      ar: "تأثير جرعات مختلفة من هرمون FSH على التبويض الفائق وإنتاج وجودة الأجنة في سلالة الأبقار العُمانية الشمالية",
    },
    venue: {
      en: "Indian Journal of Animal Research, 51(1), 8–14",
      ar: "المجلة الهندية لبحوث الحيوان، المجلد ٥١، العدد ١، ٨–١٤",
    },
    doi: "10.18805/ijar.v0iOF.7003",
    type: "journal",
    topic: { en: "Embryo technology", ar: "تقنيات الأجنة" },
  },
  {
    year: "2015",
    authors:
      "Baqir S., Al-Zeheimi N., Bani Orabah A., Al-Shakaili Y., Al-Rasbi K., Gartley C.J., Mastromonaco G.F.",
    title: {
      en: "Semen evaluation in an aged critically endangered captive Arabian leopard (Panthera pardus nimr): a case study",
      ar: "تقييم السائل المنوي في نمر عربي أسير مسنّ ومهدد بالانقراض: دراسة حالة",
    },
    venue: {
      en: "Revue de Médecine Vétérinaire, 166, 244–252",
      ar: "المجلة الفرنسية للطب البيطري، المجلد ١٦٦، ٢٤٤–٢٥٢",
    },
    type: "journal",
    topic: { en: "Conservation", ar: "حفظ الأنواع" },
  },
  {
    year: "2014",
    authors:
      "Pratap N., Memon M.A., Mahgoub O., Al-Shikaili Y., Al-Habsi R.S., Hago B.E.",
    title: {
      en: "Breeding soundness examination, semen freezing and evaluation of frozen–thawed semen in native Omani bulls",
      ar: "فحص السلامة التناسلية وتجميد السائل المنوي وتقييمه بعد الإذابة في الثيران العُمانية المحلية",
    },
    venue: {
      en: "Clinical Theriogenology, 6, 85–92",
      ar: "مجلة Clinical Theriogenology، المجلد ٦، ٨٥–٩٢",
    },
    type: "journal",
    topic: { en: "Bovine fertility", ar: "خصوبة الأبقار" },
  },
  {
    year: "2014",
    authors: "Baqir S., Al-Zeheimi N., Bani Orabah A., Al-Shakaili Y.",
    title: {
      en: "Sperm reprogramming: a promising approach for the improvement of IVF in the bovine species",
      ar: "إعادة برمجة الحيوانات المنوية: مقاربة واعدة لتحسين الإخصاب خارج الجسم في الأبقار",
    },
    venue: {
      en: "National Conference on Agriculture and Fisheries Research for Development, Sultan Qaboos University, Muscat",
      ar: "المؤتمر الوطني للبحوث الزراعية والسمكية من أجل التنمية، جامعة السلطان قابوس، مسقط",
    },
    type: "conference",
    topic: { en: "Bovine fertility", ar: "خصوبة الأبقار" },
  },
  {
    year: "2012",
    authors:
      "Baqir S., Al-Zeheimi N., Bani Orabah A., Al-Kindi A., Al-Shakaili Y., Al-Rasbi K.",
    title: {
      en: "Qualitative assessment of endangered Arabian tahr/ibex (Hemitragus jayakari) semen using Bioxcell® and Triladyl® extenders",
      ar: "التقييم النوعي للسائل المنوي للوعل العربي المهدد بالانقراض باستخدام مخففَي Bioxcell وTriladyl",
    },
    venue: {
      en: "Reproduction, Fertility and Development, 25(1), 233",
      ar: "مجلة Reproduction, Fertility and Development، المجلد ٢٥، العدد ١، ٢٣٣",
    },
    doi: "10.1071/RDv25n1Ab169",
    type: "journal",
    topic: { en: "Conservation", ar: "حفظ الأنواع" },
  },
  {
    year: "2012",
    authors: "Bani Orabah A., Al-Zeheimi N., Al-Shakaili Y., Baqir S.",
    title: {
      en: "Flow cytometry analysis of bovine semen: a qualitative study",
      ar: "تحليل السائل المنوي للأبقار بقياس التدفق الخلوي: دراسة نوعية",
    },
    venue: {
      en: "13th Royan International Twin Congress, Tehran, Iran",
      ar: "مؤتمر رويان الدولي الثالث عشر، طهران، إيران",
    },
    type: "conference",
    topic: { en: "Andrology", ar: "علم الذكورة" },
  },
];

/* ------------------------------------------------------------------ */
/* Training, conferences & committees                                  */
/* ------------------------------------------------------------------ */

export type Milestone = {
  year: string;
  date: Bi;
  title: Bi;
  host: Bi;
  place: Bi;
  kind: "training" | "conference" | "committee" | "workshop";
};

export const MILESTONES: Milestone[] = [
  {
    year: "2025",
    date: { en: "15–21 June 2025", ar: "١٥–٢١ يونيو ٢٠٢٥" },
    title: {
      en: "Workshop on Artificial Insemination Management for IsDB Member Countries",
      ar: "ورشة عمل حول إدارة التلقيح الاصطناعي لدول أعضاء البنك الإسلامي للتنمية",
    },
    host: { en: "Islamic Development Bank (IsDB)", ar: "البنك الإسلامي للتنمية" },
    place: { en: "Singosari–Malang, Indonesia", ar: "سينجوساري – مالانج، إندونيسيا" },
    kind: "workshop",
  },
  {
    year: "2020",
    date: { en: "January 2020 – January 2022", ar: "يناير ٢٠٢٠ – يناير ٢٠٢٢" },
    title: {
      en: "Member, Scientific Committee (Animal Sector)",
      ar: "عضو اللجنة العلمية (القطاع الحيواني)",
    },
    host: {
      en: "Oman Animal and Plant Genetic Resources Center",
      ar: "المركز العُماني للموارد الوراثية الحيوانية والنباتية",
    },
    place: { en: "Sultanate of Oman", ar: "سلطنة عُمان" },
    kind: "committee",
  },
  {
    year: "2016",
    date: { en: "4–8 December 2016", ar: "٤–٨ ديسمبر ٢٠١٦" },
    title: {
      en: "Workshop: Artificial Insemination in Small Ruminants",
      ar: "ورشة عمل: التلقيح الاصطناعي في المجترات الصغيرة",
    },
    host: {
      en: "Arab Organization for Agricultural Development (AOAD)",
      ar: "المنظمة العربية للتنمية الزراعية",
    },
    place: { en: "Muscat, Oman", ar: "مسقط، عُمان" },
    kind: "workshop",
  },
  {
    year: "2016",
    date: { en: "6–10 November 2016", ar: "٦–١٠ نوفمبر ٢٠١٦" },
    title: {
      en: "Evaluation and Standardisation of Agricultural Laboratories to ISO 17025:2005",
      ar: "تقييم وتوحيد المختبرات الزراعية وفق ISO 17025:2005",
    },
    host: {
      en: "Human Resource Development Centre · sponsored by AOAD",
      ar: "مركز تنمية الموارد البشرية · برعاية المنظمة العربية للتنمية الزراعية",
    },
    place: { en: "Muscat, Oman", ar: "مسقط، عُمان" },
    kind: "training",
  },
  {
    year: "2013",
    date: { en: "30 June – 4 July 2013", ar: "٣٠ يونيو – ٤ يوليو ٢٠١٣" },
    title: {
      en: "Workshop: Animal Extension and Production",
      ar: "ورشة عمل: الإرشاد والإنتاج الحيواني",
    },
    host: { en: "Ministry of Agriculture", ar: "وزارة الزراعة" },
    place: { en: "Muscat, Oman", ar: "مسقط، عُمان" },
    kind: "workshop",
  },
  {
    year: "2012",
    date: { en: "25–27 April 2012", ar: "٢٥–٢٧ أبريل ٢٠١٢" },
    title: {
      en: "Regional Coordination Meeting: Improving Reproductive and Productive Performance of Local Small Ruminants through Reliable AI Programmes (RAS/5/063)",
      ar: "الاجتماع التنسيقي الإقليمي: تحسين الأداء التناسلي والإنتاجي للمجترات الصغيرة المحلية عبر برامج تلقيح اصطناعي موثوقة (RAS/5/063)",
    },
    host: {
      en: "International Atomic Energy Agency (IAEA)",
      ar: "الوكالة الدولية للطاقة الذرية",
    },
    place: { en: "Vienna, Austria", ar: "فيينا، النمسا" },
    kind: "conference",
  },
  {
    year: "2012",
    date: { en: "29 January – 1 February 2012", ar: "٢٩ يناير – ١ فبراير ٢٠١٢" },
    title: {
      en: "3rd Conference of the International Society of Camelid Research and Development",
      ar: "المؤتمر الثالث للجمعية الدولية لبحوث وتنمية الإبل",
    },
    host: { en: "Sultan Qaboos University", ar: "جامعة السلطان قابوس" },
    place: { en: "Muscat, Oman", ar: "مسقط، عُمان" },
    kind: "conference",
  },
  {
    year: "2011",
    date: { en: "31 May – 1 June 2011", ar: "٣١ مايو – ١ يونيو ٢٠١١" },
    title: {
      en: "Workshop: Strategy of the Animal and Plant Genetic Resources Center",
      ar: "ورشة عمل: استراتيجية مركز الموارد الوراثية الحيوانية والنباتية",
    },
    host: { en: "Sultanate of Oman", ar: "سلطنة عُمان" },
    place: { en: "Muscat, Oman", ar: "مسقط، عُمان" },
    kind: "workshop",
  },
  {
    year: "2008",
    date: { en: "26–28 January 2008", ar: "٢٦–٢٨ يناير ٢٠٠٨" },
    title: {
      en: "International Conference on Small Ruminant Production and Health in Arid and Semi-Arid Regions",
      ar: "المؤتمر الدولي لإنتاج وصحة المجترات الصغيرة في المناطق الجافة وشبه الجافة",
    },
    host: { en: "Sultan Qaboos University", ar: "جامعة السلطان قابوس" },
    place: { en: "Muscat, Oman", ar: "مسقط، عُمان" },
    kind: "conference",
  },
  {
    year: "2007",
    date: { en: "1–12 April 2007", ar: "١–١٢ أبريل ٢٠٠٧" },
    title: {
      en: "Specialised Training: Molecular Characterization of Small Ruminant Breeds",
      ar: "تدريب متخصص: التوصيف الجزيئي لسلالات المجترات الصغيرة",
    },
    host: {
      en: "International Center for Agricultural Research in the Dry Areas (ICARDA)",
      ar: "المركز الدولي للبحوث الزراعية في المناطق الجافة (إيكاردا)",
    },
    place: { en: "Aleppo, Syria", ar: "حلب، سوريا" },
    kind: "training",
  },
  {
    year: "2007",
    date: { en: "24–28 February 2007", ar: "٢٤–٢٨ فبراير ٢٠٠٧" },
    title: {
      en: "Training: Statistics and Experimental Design",
      ar: "دورة تدريبية: الإحصاء وتصميم التجارب",
    },
    host: {
      en: "Human Resource Development Centre · Ministry of Agriculture",
      ar: "مركز تنمية الموارد البشرية · وزارة الزراعة",
    },
    place: { en: "Muscat, Oman", ar: "مسقط، عُمان" },
    kind: "training",
  },
];

/* ------------------------------------------------------------------ */
/* Selected digital projects                                           */
/* ------------------------------------------------------------------ */

export type Project = {
  name: Bi;
  body: Bi;
  stack: string[];
  live?: string;
  repo?: string;
  featured?: boolean;
  /**
   * Interface screenshot, 1440×900, in /public/images/projects. Required:
   * a project with nothing to show is not finished enough to list.
   */
  shot: string;
};

export const PROJECTS: Project[] = [
  {
    name: {
      en: "Murabbi — Herd & Research Data Platform",
      ar: "مُربّي — منصة بيانات القطيع والبحوث",
    },
    body: {
      en: "An Arabic-first herd management system for animal production research centres and field stations. An event-sourced animal timeline derives each animal's reproductive state from its recorded history, alongside milk and weight recording, nutrition stock and requirement planning, breeding and selection records, station scoping, user roles, and CSV and PDF reporting. Written by the person who runs the programme it records — the domain requirements and the data model are the same work.",
      ar: "نظام لإدارة القطيع يضع العربية أولاً، موجّه لمراكز بحوث الإنتاج الحيواني والمحطات الميدانية. يبني سجلاً زمنياً لأحداث كل حيوان تُشتقّ منه حالته التناسلية، إلى جانب تسجيل الحليب والأوزان، وتخطيط مخزون التغذية والاحتياجات، وسجلات التربية والانتخاب، ونطاقات المحطات، وأدوار المستخدمين، والتقارير بصيغتَي CSV وPDF. كُتب بيد من يُدير البرنامج الذي يوثّقه — فمتطلبات المجال ونموذج البيانات عمل واحد.",
    },
    stack: ["Python", "PostgreSQL", "Event sourcing", "Bilingual RTL"],
    shot: "/images/projects/murabbi.webp",
    featured: true,
  },
  {
    name: { en: "YΦ Studio — Unified Math Workspace", ar: "YΦ Studio — بيئة رياضية موحّدة" },
    body: {
      en: "A single workspace that joins a spreadsheet to a mathematics engine and a visualisation lab. Tabular data feeds statistics, matrices, a solver and sensitivity analysis; results bind straight to 2D and 3D plotting — function surfaces, parametric and implicit curves, polar plots, vector fields and contour projections rendered in WebGL. Built because analysis, computation and graphing normally live in three separate tools.",
      ar: "بيئة عمل واحدة تجمع جدول البيانات بمحرك رياضي ومختبر تصوير بياني. تُغذّي البيانات الجدولية وحدات الإحصاء والمصفوفات والحل العددي وتحليل الحساسية، وترتبط النتائج مباشرة بالرسم ثنائي وثلاثي الأبعاد — أسطح الدوال والمنحنيات الوسيطية والضمنية والإحداثيات القطبية وحقول المتجهات وإسقاطات الكنتور بتقنية WebGL. بُني لأن التحليل والحساب والرسم تتوزع عادة على ثلاث أدوات منفصلة.",
    },
    stack: ["TypeScript", "WebGL", "Desktop app", "Cloud sync"],
    live: "https://yphi-studio.vercel.app",
    shot: "/images/projects/yphi-studio.webp",
  },
  {
    name: {
      en: "Omani Animal Genetic Resources",
      ar: "الموارد الوراثية الحيوانية العُمانية",
    },
    body: {
      en: "A bilingual (Arabic/English) platform documenting Oman's native livestock breeds — cattle, goats, sheep, camels and poultry — built to make national genetic-resource data accessible to researchers, extension officers and farmers.",
      ar: "منصة ثنائية اللغة توثّق سلالات الثروة الحيوانية المحلية في عُمان — الأبقار والماعز والأغنام والإبل والدواجن — لإتاحة بيانات الموارد الوراثية الوطنية للباحثين والمرشدين والمربّين.",
    },
    stack: ["React", "React Router", "Bilingual RTL", "Responsive"],
    live: "https://omani-animal-genetic-resources.vercel.app",
    repo: "https://github.com/YasirObaid5/Omani-Animal-Genetic-Resources",
    shot: "/images/projects/omani-agr.webp",
  },
  {
    name: { en: "Laws of Language", ar: "قوانين اللغة" },
    body: {
      en: "An explanatory reference on the quantitative regularities of natural language — Zipf, Heaps and related power laws — connecting information theory, statistical physics and corpus linguistics.",
      ar: "مرجع تفسيري للانتظامات الكمية في اللغة الطبيعية — قوانين زيبف وهيبس وما يرتبط بها من قوانين القوى — يربط نظرية المعلومات بالفيزياء الإحصائية واللسانيات الحاسوبية.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Data viz"],
    live: "https://laws-of-language.vercel.app",
    repo: "https://github.com/YasirObaid5/Laws-of-Language",
    shot: "/images/projects/laws.webp",
  },
  {
    name: { en: "PMP Preparation Platform", ar: "منصة الإعداد لشهادة PMP" },
    body: {
      en: "A study manual for the seventh-edition PMP exam — the principles, the three performance domains with the weight each carries in the examination, the predictive process grid and agile practice, with progress tracked through every section.",
      ar: "دليل دراسي لامتحان PMP وفق الإصدار السابع — المبادئ، ومجالات الأداء الثلاثة بأوزانها في الامتحان، وشبكة العمليات التنبؤية والممارسات الرشيقة، مع تتبّع التقدّم في كل قسم.",
    },
    stack: ["React", "Vite"],
    live: "https://new-pmp.vercel.app",
    repo: "https://github.com/YasirObaid5/newPMP",
    shot: "/images/projects/pmp-manual.webp",
  },
];

/* ------------------------------------------------------------------ */
/* Languages & interests                                               */
/* ------------------------------------------------------------------ */

export const LANGUAGES: { name: Bi; level: Bi; pct: number }[] = [
  {
    name: { en: "Arabic", ar: "العربية" },
    level: { en: "Native", ar: "اللغة الأم" },
    pct: 100,
  },
  {
    name: { en: "English", ar: "الإنجليزية" },
    level: { en: "Professional — reading, writing, speaking", ar: "مستوى مهني — قراءة وكتابة ومحادثة" },
    pct: 88,
  },
  {
    name: { en: "Russian", ar: "الروسية" },
    level: {
      en: "Professional — reading, writing, speaking",
      ar: "مستوى مهني — قراءة وكتابة ومحادثة",
    },
    pct: 82,
  },
];

export const INTERESTS: BiList = {
  en: ["Science magazines", "History", "Swimming", "Software & AI"],
  ar: ["المجلات العلمية", "التاريخ", "السباحة", "البرمجيات والذكاء الاصطناعي"],
};
