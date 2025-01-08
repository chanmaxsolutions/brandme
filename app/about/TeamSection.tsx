'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

function TeamSection() {
    return (
        <div className="pt-36 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tighter">Meet The Founder</h2>

                        <div className="space-y-6">
                            <p className="text-3xl text-secondary font-light tracking-tight">
                                Everything You Need to Know
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                Passionate and dedicated to transforming your digital presence.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-lg mx-auto text-center"
                    >
                        <div className="w-52 h-52 rounded-xl overflow-hidden mx-auto mb-6">
                            <img
                                src="https://res.cloudinary.com/db8phlsfy/image/upload/v1736329399/Untitled_design_2_fujrmz.png"
                                alt="Team Member"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-semibold text-secondary tracking-tighter mb-2">Thanujaah Sivagneswaran</h3>
                        <p className="text-xl text-secondary/80 font-light mb-4">Founder & Social Media Strategist</p>


                        <div className="flex items-center justify-center space-x-4">
                            <motion.a
                                href="https://www.linkedin.com/in/thanujaahs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="text-primary hover:text-primary/80 transition-colors duration-300"
                            >
                                <Linkedin size={32} />
                            </motion.a>
                            <motion.a
                                href="mailto:hello@brandme.top"
                                whileHover={{ scale: 1.1 }}
                                className="text-primary hover:text-primary/80 transition-colors duration-300"
                            >
                                <Mail size={32} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default TeamSection;