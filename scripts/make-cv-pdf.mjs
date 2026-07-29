/**
 * Renders /cv to A4 PDFs in both languages using the page's own print
 * stylesheet, so the downloadable CV and the on-screen document are the same
 * artefact rather than two things that drift apart.
 *
 * Run against a production server:
 *   npm run build && npx next start -p 3222
 *   node scripts/make-cv-pdf.mjs http://localhost:3222
 */
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

const BASE = process.argv[2] ?? "http://localhost:3222";
const OUT = "public/cv";

const EDITIONS = [
  { lang: "en", file: "Yasir-Al-Shukaili-CV-EN.pdf" },
  { lang: "ar", file: "Yasir-Al-Shukaili-CV-AR.pdf" },
];

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

for (const { lang, file } of EDITIONS) {
  const page = await browser.newPage();
  await page.evaluateOnNewDocument((l) => {
    localStorage.setItem("yas-lang", l);
    localStorage.setItem("yas-theme", "light");
  }, lang);

  await page.goto(`${BASE}/cv`, { waitUntil: "networkidle0", timeout: 90_000 });
  await page.emulateMediaType("print");
  // Webfonts must be resolved before layout is measured for pagination.
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 500));

  await page.pdf({
    path: `${OUT}/${file}`,
    format: "a4",
    printBackground: true,
    preferCSSPageSize: true,
  });

  console.log("wrote", `${OUT}/${file}`);
  await page.close();
}

await browser.close();
