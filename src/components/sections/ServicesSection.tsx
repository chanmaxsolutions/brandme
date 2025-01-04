'use client';

import React from 'react';
import { Instagram, BarChart3, Globe, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
    href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index, href }) => (
    <Link href={href}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            className="group bg-white rounded-xl p-8 md:p-12 border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer relative"
        >
            <div className="flex flex-col gap-6 md:gap-8">
                <div className="rounded-2xl bg-primary/5 p-4 text-primary w-fit">
                    {icon}
                </div>

                <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-primary mb-4">
                        {title}
                    </h3>

                    <p className="text-lg md:text-xl text-gray-400 font-light">
                        {description}
                    </p>
                </div>

                {/* Arrow that appears on hover */}
                <div className="absolute top-8 right-8 transform opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                </div>
            </div>
        </motion.div>
    </Link>
);

const ServicesSection: React.FC = () => {
    const services = [
        {
            title: "Social Media Management",
            description: "Expert management of your social media accounts that drives real engagement",
            icon: <Instagram className="w-6 h-6 md:w-8 md:h-8" />,
            href: "/services/social-media-management"
        },
        {
            title: "Social Media Marketing",
            description: "Strategic campaigns that reach your target audience and drive measurable business results.",
            icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
            href: "/services/social-media-marketing"
        },
        {
            title: "Website Development",
            description: "Custom website solutions that reflect your brand identity and drive business growth.",
            icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
            href: "/services/website-development"
        },
        {
            title: "LinkedIn Growth Masterclass",
            description: "Transform your professional network and leverage LinkedIn for business networking and growth.",
            icon: <Linkedin className="w-6 h-6 md:w-8 md:h-8" />,
            href: "/services/linkedin-masterclass"
        }
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="container max-w-6xl mx-auto px-4">
                {/* Clean Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-secondary mb-6 md:mb-8">
                        Our Services
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        We help brands establish a strong digital presence through our comprehensive suite of services.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            index={index}
                            href={service.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;