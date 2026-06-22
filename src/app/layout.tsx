import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pakon-portfolio.vercel.app"),
  title: {
    default: "Pakon Poomson | AI Engineer & Data Engineer",
    template: "%s | Pakon Poomson",
  },
  description:
    "AI Engineer and Data Engineer portfolio featuring reproducible data platforms, RAG evaluation, ML/MLOps, Thai NLP, and privacy-aware AI products.",
  keywords: ["AI Engineer", "Data Engineer", "MLOps", "RAG", "Data Platform", "Thai NLP", "FastAPI", "React", "Next.js"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pakon Poomson | AI Engineer & Data Engineer",
    description:
      "Reproducible data systems, ML workflows, RAG evaluation, Thai NLP, and privacy-aware AI applications.",
    url: "/",
    siteName: "Pakon Poomson Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pakon Poomson portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakon Poomson | AI Engineer & Data Engineer",
    description:
      "Reproducible data systems, ML workflows, RAG evaluation, Thai NLP, and privacy-aware AI applications.",
    images: ["/opengraph-image"],
  },
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (preferredDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  } catch {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${manrope.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
