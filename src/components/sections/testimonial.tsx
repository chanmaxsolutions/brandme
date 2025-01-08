'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    text: string;
}

const testimonials: TestimonialProps[] = [
    {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechCorp Inc",
        text: "Working with BrandMe has been transformative for our social media presence. Their strategic approach and creative content have significantly boosted our engagement rates."
    },
    {
        name: "Michael Chen",
        role: "CEO",
        company: "Startup Hub",
        text: "The team at BrandMe doesn't just deliver services; they deliver results. Our online presence has grown exponentially since we started working with them."
    },
    {
        name: "Emma Davis",
        role: "Brand Manager",
        company: "Fashion Forward",
        text: "Their attention to detail and understanding of our brand voice has made them an invaluable partner in our digital journey."
    }
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container max-w-5xl mx-auto px-4">
                {/* Section Header */}


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tighter">
                        Success Stories
                    </h2>
                    <div className="space-y-6">
                        <p className="text-3xl text-secondary font-light tracking-tight">
                            Real Results, Real Impact
                        </p>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            See how we've helped businesses like yours transform their digital presence and achieve measurable growth through strategic social media solutions.
                        </p>
                    </div>
                </motion.div>

                {/* Testimonial Slider */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <div className="hidden md:block">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16">
                            <button
                                onClick={handlePrevious}
                                className="p-3 rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16">
                            <button
                                onClick={handleNext}
                                className="p-3 rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex md:hidden justify-between mb-6">
                        <button
                            onClick={handlePrevious}
                            className="p-3 rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Testimonial Card */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl p-8 md:p-12  border border-gray-100"
                    >
                        <div className="flex flex-col items-center text-center">
                            {/* Testimonial Text */}
                            <p className="text-2xl md:text-4xl text-gray-700 mb-8 font-light tracking-tighter">
                                &ldquo;{testimonials[currentIndex].text}&rdquo;
                            </p>

                            {/* Client Details */}
                            <h4 className="text-2xl md:text-3xl font-semibold text-secondary mb-2">
                                {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-xl text-gray-500 font-light">
                                {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                            </p>
                        </div>
                    </motion.div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;