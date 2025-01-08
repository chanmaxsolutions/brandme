'use client';

import React from 'react';
import { motion } from 'framer-motion';

const processes = [
    {
        number: "01",
        title: "Foundation Setup",
        description: "Begin with core LinkedIn fundamentals and profile optimization techniques.",
        details: [
            "Profile Assessment",
            "Goal Setting",
            "Strategy Planning",
            "Profile Enhancement"
        ]
    },
    {
        number: "02",
        title: "Content Creation",
        description: "Master the art of creating engaging LinkedIn content that drives results.",
        details: [
            "Content Strategy",
            "Post Templates",
            "Writing Workshop",
            "Engagement Tactics"
        ]
    },
    {
        number: "03",
        title: "Network Building",
        description: "Learn strategic networking approaches to grow your professional circle.",
        details: [
            "Connection Strategy",
            "Outreach Methods",
            "Group Engagement",
            "Relationship Building"
        ]
    },
    {
        number: "04",
        title: "Lead Generation",
        description: "Convert your LinkedIn presence into a consistent lead generation engine.",
        details: [
            "Prospect Finding",
            "Messaging Templates",
            "Follow-up System",
            "Conversion Tracking"
        ]
    }
];

const LearningJourney = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tighter">
                            Learning Journey
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-secondary font-light tracking-tight">
                                Your Path to Mastery
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                A structured learning path designed to take you from LinkedIn basics to advanced growth strategies.
                            </p>
                        </div>
                    </motion.div>

                    <div className="space-y-24">
                        {processes.map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                                    <div className="md:col-span-2 flex md:justify-end">
                                        <div className="text-8xl font-bold text-primary/20 tracking-tighter">
                                            {process.number}
                                        </div>
                                    </div>

                                    <div className="md:col-span-10">
                                        <div className="bg-primary/5 rounded-xl p-8 md:p-12 border border-secondary/10">
                                            <h3 className="text-4xl md:text-5xl font-semibold text-secondary tracking-tighter mb-6">
                                                {process.title}
                                            </h3>
                                            <p className="text-xl text-gray-600 font-light mb-10">
                                                {process.description}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                {process.details.map((detail, detailIndex) => (
                                                    <div
                                                        key={detailIndex}
                                                        className="flex items-center gap-4"
                                                    >
                                                        <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-[0.6rem]"></div>
                                                        <span className="text-xl text-gray-600 font-light">
                                                            {detail}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningJourney;