import type { Metadata } from "next";
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

export const metadata: Metadata = {  
  title: "Karan Kumar | Full-Stack Developer",  
  description: "Passionate full-stack developer crafting high-performance web applications with modern technologies.",  
  keywords: [
    "Karan Kumar",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Software Engineer",
    "Portfolio",
    

    "LeetCode",
    "DSA",
  ],  
  openGraph: {
    title: "Karan Kumar | Full-Stack Developer",
    description: "Passionate full-stack developer crafting high-performance web applications with modern technologies.",
    url: "https://yourwebsite.com",  // Change this to your actual domain
    type: "website",
    images: [
      {
        url: "https://photos.fife.usercontent.google.com/pw/AP1GczP3DE3kpLXWFTYZfHzGYDysfdnCrjctV91nNg-PQ_ftJl74EJhsV_lI=w958-h539-s-no-gm?authuser=0", // Ensure this is the correct absolute URL
        width: 1200,
        height: 630,
        alt: "Karan Kumar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Kumar | Full-Stack Developer",
    description: "Passionate full-stack developer crafting high-performance web applications with modern technologies.",
    images: ["https://photos.fife.usercontent.google.com/pw/AP1GczP3DE3kpLXWFTYZfHzGYDysfdnCrjctV91nNg-PQ_ftJl74EJhsV_lI=w958-h539-s-no-gm?authuser=0"], // Twitter requires absolute URLs
  },
};  

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="google880c9fd3ac54d264.html" />

        <link rel="icon" href="/karankumar.jpg" sizes="any" />
        <meta property="og:image" content="https://photos.fife.usercontent.google.com/pw/AP1GczP3DE3kpLXWFTYZfHzGYDysfdnCrjctV91nNg-PQ_ftJl74EJhsV_lI=w958-h539-s-no-gm?authuser=0" />
        <meta name="twitter:image" content="https://photos.fife.usercontent.google.com/pw/AP1GczP3DE3kpLXWFTYZfHzGYDysfdnCrjctV91nNg-PQ_ftJl74EJhsV_lI=w958-h539-s-no-gm?authuser=0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
