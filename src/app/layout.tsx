import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pakon-portfolio.vercel.app"),
  title: {
    default: "Pakon Poomson | AI Engineer, GenAI Engineer & Data Engineer",
    template: "%s | Pakon Poomson",
  },
  description:
    "Portfolio and resume of Pakon Poomson, featuring agentic RAG, multimodal AI, data engineering, forecasting, and explainable ML projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pakon Poomson | AI Engineer, GenAI Engineer & Data Engineer",
    description:
      "Agentic RAG, multimodal AI, data engineering, forecasting, and explainable ML projects by Pakon Poomson.",
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
    title: "Pakon Poomson | AI Engineer, GenAI Engineer & Data Engineer",
    description:
      "Agentic RAG, multimodal AI, data engineering, forecasting, and explainable ML projects by Pakon Poomson.",
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
      className={`${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
