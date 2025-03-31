import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {  
  title: "Karan Kumar | Full-Stack Developer | MERN Stack | AI & Problem Solving",  
  description: "Experienced MERN Stack Developer skilled in React, Next.js, Node.js, and AI-based solutions with 500+ LeetCode problems solved.",  
  keywords: [
    "Karan Kumar Portfolio",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React.js Portfolio",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Development Portfolio",
    "Software Engineer Portfolio",
    "JavaScript Developer",
    "DSA Developer",
    "LeetCode Profile",
    "Coding Interviews",
    "AI Developer",
    "Machine Learning"
  ],
  author: "Karan Kumar",
  robots: "index, follow",
  openGraph: {
    title: "Karan Kumar | MERN Stack & Full-Stack Developer",
    description: "Experienced MERN Stack Developer skilled in React, Next.js, Node.js, and AI solutions.",
    url: "https://karan-portfolio-kumar.vercel.app",
    type: "website",
    images: [
      {
        url: "/karankumar.jpg",
        width: 1200,
        height: 630,
        alt: "Karan Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Kumar | Full-Stack Developer",
    description: "Experienced MERN Stack Developer skilled in React, Next.js, and AI solutions.",
    images: ["/karankumar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://karan-portfolio-kumar.vercel.app" />

        {/* ✅ Google Site Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />

        {/* ✅ Favicon for Branding */}
        <link rel="icon" href="/karankumar.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/karankumar.jpg" />

        {/* ✅ Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Karan Kumar | Full-Stack Developer" />
        <meta property="og:description" content="Experienced MERN Stack Developer skilled in React, Next.js, and AI solutions." />
        <meta property="og:url" content="https://karan-portfolio-kumar.vercel.app" />
        <meta property="og:image" content="/karankumar.jpg" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Karan Kumar | Full-Stack Developer" />
        <meta name="twitter:description" content="Experienced MERN Stack Developer skilled in React, Next.js, and AI solutions." />
        <meta name="twitter:image" content="/karankumar.jpg" />

        {/* ✅ JSON-LD Schema Markup for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Karan Kumar",
          "url": "https://karan-portfolio-kumar.vercel.app",
          "image": "https://karan-portfolio-kumar.vercel.app/karankumar.jpg",
          "jobTitle": "Full-Stack Developer",
          "sameAs": [
            "https://www.linkedin.com/in/karan-kumar-823190256/",
            "https://github.com/karankumar12345",
            "https://leetcode.com/Karan1_2"
          ]
        })}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
