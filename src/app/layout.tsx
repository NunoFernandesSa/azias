import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClientLayout } from "../components/layout/ClientLayout";
import Footer from "../components/common/Footer";
import "@styles/globals.css";
import SplashProvider from "@/src/providers/SplashProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A.D. AZIAS FC - Equipa de Futebol Amador | Liga Inatel Portugal",
  description:
    "O A.D. Azias é uma equipa de futebol amador de Ponte da Barca que participa na Liga Inatel em Portugal. Combinando competição e um ambiente amigável. Futebol de competição com espírito desportivo e convívio. Junte-se à nossa equipa!",
  keywords: [
    "Site oficial",
    "A.D. Azias",
    "Futebol amador em Portugal",
    "Ligua Inatel",
    "equipa de futebol amador Portugal",
    "clube amador Portugal",
    "futebol amador Portugal",
    "Liga Inatel",
    "Inatel football",
  ].join(", "),
  icons: [
    { url: "/favicon.ico" },
    { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  openGraph: {
    title: "A.D. Azias - Equipa de Futebol Amador | Liga Inatel Portugal",
    description:
      "Junta-te ao A.D. Azias, uma equipa de futebol amador que participa na Liga Inatel em Portugal. Ambiente amigável e competição desportiva!",
    type: "website",
    locale: "pt_PT",
    siteName: "A.D. Azias",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashProvider>
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </SplashProvider>
      </body>
    </html>
  );
}
