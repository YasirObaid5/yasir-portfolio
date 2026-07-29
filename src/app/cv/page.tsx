import type { Metadata } from "next";
import CvDocument from "@/components/CvDocument";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Full curriculum vitae of Yasir Obaid Thani Al-Shukaili — Head of the Livestock Reproduction Research Section, Sultanate of Oman. Available in English and Arabic.",
  alternates: { canonical: "/cv" },
};

export default function CvPage() {
  return <CvDocument />;
}
