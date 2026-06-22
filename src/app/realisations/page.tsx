import type { Metadata } from "next";
import { RealisationsContent } from "@/components/sections/realisations-content";

export const metadata: Metadata = {
  title: "Nos Réalisations | Mabanza Software",
  description:
    "Découvrez les projets de transformation digitale réalisés par Mabanza Software pour institutions, bailleurs et entreprises.",
};

export default function RealisationsPage() {
  return (
    <main>
      <RealisationsContent />
    </main>
  );
}
