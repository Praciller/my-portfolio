import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Pakon Poomson by email, GitHub, or LinkedIn.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="py-6">
        <ContactSection />
      </div>
    </PageShell>
  );
}
