import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Er. Mohan G.C. | Learn Technology by Building Real Things",
  description: "Computer engineer, coding instructor, and creator of practical video courses for young learners.",
  openGraph: {
    title: "Er. Mohan G.C.",
    description: "Learn Technology by Building Real Things",
    url: "https://er-mohangc07.vercel.app",
    siteName: "Er. Mohan G.C.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Er. Mohan G.C. Portfolio",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
