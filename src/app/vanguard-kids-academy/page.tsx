import type { Metadata } from "next";
import { campuses } from "@/lib/site";
import { CampusMiniPage } from "@/components/campus/CampusMiniPage";

const c = campuses.academy;

export const metadata: Metadata = {
  title: c.title,
  description: c.short,
};

export default function VanguardKidsAcademyPage() {
  return <CampusMiniPage variant="academy" />;
}
