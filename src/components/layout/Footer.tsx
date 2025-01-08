'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, MapPin, Phone, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary md:pt-16 text-gray-800">
            <div className="container max-w-6xl mx-auto px-4 border-t border-secondary/10 pt-10 ">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16">
                    {/* Brand Column */}
                    <div>
                        <Image
                            src="https://res.cloudinary.com/db8phlsfy/image/upload/v1736150504/logo_dark_quwmlx.svg"
                            alt="BrandMe Logo"
                            width={150}
                            height={40}
                            className="mb-6"
                        />
                        <p className="text-secondary font-light mb-6">
                            We help businesses grow their online presence and engage with their audience effectively.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://facebook.com" target="_blank" className="text-secondary hover:text-secondary/80 transition-colors">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" className="text-secondary hover:text-secondary/80 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="text-secondary hover:text-secondary/80 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-xl font-semibold text-secondary mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/social-media-management" className="text-secondary hover:text-secondary/80 transition-colors">
                                    Social Media Management
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/social-media-marketing" className="text-secondary hover:text-secondary/80 transition-colors">
                                    Social Media Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/website-development" className="text-secondary hover:text-secondary/80 transition-colors">
                                    Website Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/linkedin-masterclass" className="text-secondary hover:text-secondary/80 transition-colors">
                                    LinkedIn Masterclass
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-xl font-semibold text-secondary mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-secondary hover:text-secondary/80 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-secondary hover:text-secondary/80 transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-secondary hover:text-secondary/80 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-xl font-semibold text-secondary mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-secondary">
                                <Mail className="w-5 h-5" />
                                <a href="mailto:hello@brandme.top" className="hover:text-secondary/80 transition-colors">
                                    hello@brandme.top
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-secondary">
                                <Phone className="w-5 h-5" />
                                <a href="tel:+1234567890" className="hover:text-secondary/80 transition-colors">
                                    +94 75 418 0422
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-secondary">
                                <MapPin className="w-5 h-5 mt-1" />
                                <p>
                                    Karanavai, Jaffna,
                                    <br />
                                    Sri Lanka
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-secondary/10 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between text-secondary/60">
                        <p>© {new Date().getFullYear()} BrandMe. All rights reserved.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-secondary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-secondary transition-colors">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;