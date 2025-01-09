'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial scroll position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { href: '/services/social-media-management', label: 'Social Media Management' },
        { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
        { href: '/services/website-development', label: 'Website Development' },
        { href: '/services/linkedin-masterclass', label: 'LinkedIn Masterclass' },
    ];

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all bg-white duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : ''
            }`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                {/* Rest of your navigation code remains exactly the same */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative h-10 w-44">
                        <Image
                            src="https://res.cloudinary.com/db8phlsfy/image/upload/v1736069770/logo_lrs2c8.svg"
                            alt="Brandme Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                            quality={100}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Regular Nav Links */}
                        <Link href="/" className="text-secondary hover:text-primary transition-colors duration-300 text-lg">
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="text-secondary hover:text-primary transition-colors duration-300 text-lg flex items-center gap-1">
                                Services
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute hidden group-hover:block top-full left-0 w-64 bg-white shadow-lg rounded-xl py-2">
                                {services.map((service) => (
                                    <Link
                                        key={service.label}
                                        href={service.href}
                                        className="block px-4 py-3 text-secondary  hover:text-primary hover:bg-slate-50 transition-colors duration-300"
                                    >
                                        {service.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Other Nav Links */}
                        <Link href="/about" className="text-secondary hover:text-primary transition-colors duration-300 text-lg">
                            About
                        </Link>
                        <Link href="/contact" className="text-secondary hover:text-primary transition-colors duration-300 text-lg">
                            Contact
                        </Link>

                        {/* Get Started Button */}
                        <Link
                            href="/get-quote"
                            className="bg-primary text-secondary px-8 py-3 rounded-full hover:opacity-90 transition-colors duration-300 text-lg"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-8 w-8 text-gray-800" />
                        ) : (
                            <Menu className="h-8 w-8 text-gray-800" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
                        <div className="px-4 py-4 space-y-4">
                            {/* Home Link */}
                            <Link
                                href="/"
                                className="block text-gray-800 hover:text-primary transition-colors duration-300 text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>

                            {/* Services Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="flex items-center justify-between w-full text-gray-800 hover:text-primary transition-colors duration-300 text-lg"
                                >
                                    Services
                                    <ChevronDown className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isServicesOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {services.map((service) => (
                                            <Link
                                                key={service.label}
                                                href={service.href}
                                                className="block text-gray-800 hover:text-primary py-2 transition-colors duration-300"
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    setIsServicesOpen(false);
                                                }}
                                            >
                                                {service.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Other Nav Links */}
                            {navLinks.slice(1).map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block text-gray-800 hover:text-primary transition-colors duration-300 text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Mobile Get Started Button */}
                            <Link
                                href="/get-quote"
                                className="block bg-primary text-secondary px-8 py-3 rounded-full hover:opacity-90 transition-colors duration-300 text-lg text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navigation;