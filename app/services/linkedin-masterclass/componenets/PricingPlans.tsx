'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, BookOpen } from 'lucide-react';

const courseDetails = [
    {
        icon: <Calendar className="w-6 h-6" />,
        label: "Next Batch",
        value: "January 15, 2024"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        label: "Duration",
        value: "4 Weeks"
    },
    {
        icon: <Users className="w-6 h-6" />,
        label: "Batch Size",
        value: "Limited to 20"
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        label: "Live Sessions",
        value: "2 Per Week"
    }
];

const PricingSection = () => {
    return (
        <section className="py-20 md:py-32 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tighter">
                            Join Next Cohort
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-secondary font-light tracking-tight">
                                Limited Seats Available
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                Interactive live sessions with hands-on training and real-time feedback.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {courseDetails.map((detail, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 text-center border border-gray-100"
                            >
                                <div className="rounded-full bg-primary p-3 w-fit mx-auto mb-4">
                                    {detail.icon}
                                </div>
                                <p className="text-gray-600 text-sm mb-1">{detail.label}</p>
                                <p className="text-secondary font-semibold text-lg">{detail.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl p-8 md:p-12 border border-gray-100 text-center"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-2xl text-gray-400 line-through">LKR 29,000</span>
                            <div className="flex items-start gap-1">
                                <span className="text-xl text-secondary">LKR</span>
                                <span className="text-5xl font-bold text-secondary">9,999</span>
                            </div>
                        </div>

                        <button className="px-12 py-4 rounded-full bg-primary text-secondary text-xl hover:opacity-90 transition-all duration-300">
                            Reserve Your Seat
                        </button>

                        <p className="text-gray-500 text-sm mt-4">
                            * Limited time offer for early registrations
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;