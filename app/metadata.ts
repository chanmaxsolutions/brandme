// src/app/metadata.ts
import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
    metadataBase: new URL('https://brandme.top'),
    title: 'BrandMe - Social Media Marketing Agency Sri Lanka',
    description: 'Leading social media marketing agency in Sri Lanka. We offer comprehensive social media management, content creation, and digital marketing services to help businesses grow their online presence.',
    keywords: [
        'social media marketing',
        'social media management',
        'digital marketing agency',
        'social media agency sri lanka',
        'digital marketing sri lanka',
        'social media marketing jaffna',
        'content creation',
        'performance marketing',
        'web development'
    ].join(', '),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://brandme.top',
        siteName: 'BrandMe',
        title: 'BrandMe - Social Media Marketing Agency Sri Lanka',
        description: 'Leading social media marketing agency in Sri Lanka. Expert social media management and digital marketing services for business growth.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BrandMe - Social Media Marketing Agency Sri Lanka',
        description: 'Leading social media marketing agency in Sri Lanka. Expert social media management and digital marketing services for business growth.',
        images: [
            {
                url: 'https://res.cloudinary.com/db8phlsfy/image/upload/v1736426670/IMG_9466_ghxsyx.png',
                width: 1200,
                height: 630,
                alt: 'BrandMe - Social Media Marketing Agency',
            },
        ],
    },
    alternates: {
        canonical: 'https://brandme.top',
    },

}