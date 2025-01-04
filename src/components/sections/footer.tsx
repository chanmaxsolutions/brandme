'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#f5f5f5] pt-16 text-gray-800 border-t border-gray-200 ">
            <div className="container max-w-6xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16">
                    {/* Brand Column */}
                    <div>
                        <Image
                            src="https://res.cloudinary.com/db8phlsfy/image/upload/v1735983694/Brandme_mhivtu.svg"
                            alt="BrandMe Logo"
                            width={150}
                            height={40}
                            className="mb-6"
                        />
                        <p className="text-gray-600 mb-6">
                            We help businesses grow their online presence and engage with their audience effectively.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-primary transition-colors">
                                <Instagram className="w-6 h-6" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-primary transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/social-media-management" className="text-gray-600 hover:text-primary transition-colors">
                                    Social Media Management
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/social-media-marketing" className="text-gray-600 hover:text-primary transition-colors">
                                    Social Media Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/website-development" className="text-gray-600 hover:text-primary transition-colors">
                                    Website Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/linkedin-masterclass" className="text-gray-600 hover:text-primary transition-colors">
                                    LinkedIn Growth Masterclass
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-600">
                                <Mail className="w-5 h-5" />
                                <a href="mailto:hello@brandme.com" className="hover:text-primary transition-colors">
                                    hello@brandme.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Phone className="w-5 h-5" />
                                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <MapPin className="w-5 h-5 mt-1" />
                                <p>
                                    123 Business Street,
                                    <br />
                                    City, State 12345
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="border-t border-gray-200 py-8 text-center text-gray-600">
                    <p>© {new Date().getFullYear()} BrandMe. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;