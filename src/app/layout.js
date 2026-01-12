

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../app/layout/Navbar.jsx"
import Footer from "./layout/Footer.jsx"
import WhatsAppFloat from "../Componants/WhatsappIcon/WhatsAppFloat.jsx"
import { TracingBeam } from "../ui/Tracing_Beam.jsx";
import LoginWrapper from "../components/LoginWrapper.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI-Powered Digital Excellence - BITMAX TECH",
  description: "Transform your business with cutting-edge AI solutions, web development, and digital services. BITMAX TECH delivers innovative technology solutions for modern enterprises.",
  keywords: "AI development, web development, digital transformation, BITMAX TECH, technology solutions, business automation",
  authors: [{ name: "BITMAX TECH" }],
  openGraph: {
    title: "AI-Powered Digital Excellence - BITMAX TECH",
    description: "Transform your business with cutting-edge AI solutions and digital services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Digital Excellence - BITMAX TECH",
    description: "Transform your business with cutting-edge AI solutions and digital services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div><Navbar /></div>
        <TracingBeam>
          {children}
        </TracingBeam>
        <Footer/>
        <WhatsAppFloat/>
        <LoginWrapper />
      </body>
    </html>
  );
}
