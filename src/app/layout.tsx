import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaz Hachtel | Digital Marketing & Web Development Portfolio",
  description: "Chaz Hachtel is a digital marketing strategist and creative developer helping small businesses grow fast through sprint-based web development and marketing services.",
  keywords: ["Chaz Hachtel", "digital marketing", "web developer", "freelance", "small business marketing", "creative strategy"],
  authors: [{ name: "Chaz Hachtel" }],
  creator: "Chaz Hachtel",
  metadataBase: new URL("https://chaz-hachtel-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chaz Hachtel | Digital Marketing & Web Development Portfolio",
    description: "Fast creative that grows your business. View portfolio and hire Chaz Hachtel.",
    url: "https://chaz-hachtel-portfolio.vercel.app",
    siteName: "Chaz Hachtel Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chaz Hachtel",
  url: "https://chaz-hachtel-portfolio.vercel.app",
  jobTitle: "Digital Marketing Strategist & Creative Developer",
  description: "Digital marketing strategist and web developer helping small businesses grow fast.",
  sameAs: [
    "https://www.linkedin.com/in/chaz-hachtel/",
  ],
  knowsAbout: ["Digital Marketing", "Web Development", "Creative Strategy", "Small Business Marketing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-background text-foreground relative min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
