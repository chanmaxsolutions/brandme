import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-50" />

            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-9xl font-semibold mb-6 tracking-tighter">
                        <span className="text-primary">Social</span>
                        <br />
                        <span className="text-secondary">Business</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-3xl text-gray-600 mb-12 max-w-2xl mx-auto font-light tracking-tighter">
                        We help businesses grow their online presence and engage with their audience effectively.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="inline-flex items-center justify-center px-8 py-3 text-lg  text-white bg-primary rounded-full hover:opacity-90 transition-all duration-300">
                            Get A Quote

                        </button>
                        <button className="inline-flex items-center justify-center px-8 py-3 text-lg  text-primary border-2 border-primary rounded-full hover:bg-secondary hover:text-white transition-all duration-300">
                            Our Services
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;