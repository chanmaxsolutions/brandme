import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Brandme - Social Media Marketing Agency",
  description: "Professional social media marketing services to grow your brand",
  icons: {
    icon: 'https://res.cloudinary.com/db8phlsfy/image/upload/v1736069770/favicon_znvon2.svg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-light text-dark" suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer /> {/* Add the Footer component */}
      </body>
    </html>
  );
}
