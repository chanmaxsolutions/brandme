// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { defaultMetadata } from './metadata';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "BrandMe - Social Media Marketing Agency",
  description: "Professional social media marketing services to grow your brand",
  icons: {
    icon: 'https://res.cloudinary.com/db8phlsfy/image/upload/v1736069770/favicon_znvon2.svg',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "BrandMe",
  "url": "https://brandme.top",
  "description": "Leading social media marketing agency in Sri Lanka",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Karanavai",
    "addressLocality": "Jaffna",
    "addressRegion": "Northern Province",
    "addressCountry": "Sri Lanka"
  },
  "priceRange": "$$",
  "telephone": "+94 75 418 0422",
  "email": "hello@brandme.top",
  "foundingDate": "2023",
  "areaServed": ["Sri Lanka", "Global"],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "9.6615",
      "longitude": "80.0255"
    }
  },
  "sameAs": [
    "https://www.facebook.com/brandme",
    "https://www.instagram.com/brandme",
    "https://www.linkedin.com/company/brandme"
  ],
  "services": [
    "Social Media Marketing",
    "Social Media Management",
    "Content Creation",
    "Performance Marketing",
    "Web Development",
    "Linkedin Course"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "30",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sendil Kumar"
      },
      "reviewBody": "Working with BrandMe has been transformative for our social media presence. Their strategic approach and creative content have significantly boosted our engagement rates."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dinesh Bose"
      },
      "reviewBody": "The team at BrandMe doesn't just deliver services; they deliver results. Our online presence has grown exponentially since we started working with them."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vaithiyanathan. M"
      },
      "reviewBody": "Their attention to detail and understanding of our brand voice has made them an invaluable partner in our digital journey."
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-light text-dark" suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}