'use client';

import React from 'react';
import { Users, Target, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="bg-primary py-20 md:py-32">
            <div className="container max-w-6xl mx-auto px-4">
                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
                >
                    {/* Left Column */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-8">
                            We Create <br />
                            Digital Impact
                        </h2>
                        <p className="text-lg md:text-xl text-white/80 mb-8 font-light">
                            At BrandMe, we transform ideas into powerful digital experiences.
                            Our passion for innovation drives us to create solutions that make
                            a lasting impact for our clients.
                        </p>
                        <button className="rounded-full  bg-white text-primary px-8 py-3 text-lg hover:opacity-90 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Right Column - Stats */}
                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { number: "10+", label: "Years Experience" },
                            { number: "200+", label: "Projects Delivered" },
                            { number: "95%", label: "Client Satisfaction" },
                            { number: "50+", label: "Team Members" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-5xl md:text-7xl font-bold text-white mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-white/80 text-xl font-light">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Values Section */}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { icon: <Users className="w-6 h-6" />, title: "Client-Focused" },
                        { icon: <Target className="w-6 h-6" />, title: "Result-Driven" },
                        { icon: <Globe className="w-6 h-6" />, title: "Global Reach" },
                        { icon: <Zap className="w-6 h-6" />, title: "Fast Execution" }
                    ].map((value, index) => (
                        <div key={index} className="bg-primary border border-gray-100/10 rounded-xl p-6 text-center transition-all duration-300">
                            <div className="bg-secondary text-white rounded-2xl p-4 w-fit mx-auto mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl tracking-tighter text-white">
                                {value.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;