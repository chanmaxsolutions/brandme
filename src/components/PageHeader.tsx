'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    const { scrollY } = useScroll();

    // Transform values for multiple parallax effects
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
    const titleY = useTransform(scrollY, [0, 300], [0, 100]);
    const descriptionY = useTransform(scrollY, [0, 300], [0, 50]);
    const blur = useTransform(scrollY, [0, 300], [0, 10]);

    return (
        <section className="relative h-screen bg-primary border-b border-gray-100 overflow-hidden">
            <motion.div
                className="container mx-auto px-4 h-full flex flex-col items-center justify-center"
                style={{
                    y,
                    opacity,
                    scale,
                    filter: blur.toString().includes('0') ? 'blur(0px)' : `blur(${blur.toString()}px)`
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="max-w-4xl text-center"
                >
                    {/* Main Heading */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter text-secondary mb-8"
                        style={{ y: titleY }}
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        className="text-xl md:text-2xl text-secondary/60 font-light mx-auto"
                        style={{ y: descriptionY }}
                    >
                        {description}
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PageHeader;