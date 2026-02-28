import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apprenticeships.me"),
  title: "Apprenticeships.me | Find tech apprenticeship programs",
  description:
    "A directory of tech apprenticeship programs to help you find a new career learning from the industry itself.",
  openGraph: {
    title: "Apprenticeships.me",
    description:
      "A directory of tech apprenticeship programs to help you find a new career learning from the industry itself.",
    url: "https://apprenticeships.me",
    siteName: "Apprenticeships.me",
    type: "website",
    images: [
      {
        url: "/images/readme.jpg",
        width: 1200,
        height: 630,
        alt: "Apprenticeships.me",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apprenticeships.me",
    description:
      "A directory of tech apprenticeship programs to help you find a new career learning from the industry itself.",
  },
  icons: {
    icon: "/images/favicons/favicon.ico",
    apple: "/images/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
