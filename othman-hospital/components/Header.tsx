'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const handleScroll = () => {
        const sections = ['home', 'services', 'clinics', 'doctors', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const { top, bottom } = element.getBoundingClientRect();
                if (top <= 100 && bottom >= 100) {
                    setActiveSection(section);
                    break;
                }
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-[var(--primary-color)] hover:opacity-80 transition-opacity">
                        مجمع العثمان الطبي
                    </Link>

                    {/* القائمة الرئيسية */}
                    <ul className="hidden md:flex space-x-8 space-x-reverse">
                        <li>
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`text-gray-700 hover:text-[var(--primary-color)] transition-colors relative ${
                                    activeSection === 'home' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                الرئيسية
                                {activeSection === 'home' && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary-color)]"></div>
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('services')}
                                className={`text-gray-700 hover:text-[var(--primary-color)] transition-colors relative ${
                                    activeSection === 'services' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                خدماتنا
                                {activeSection === 'services' && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary-color)]"></div>
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('clinics')}
                                className={`text-gray-700 hover:text-[var(--primary-color)] transition-colors relative ${
                                    activeSection === 'clinics' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                عياداتنا
                                {activeSection === 'clinics' && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary-color)]"></div>
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('doctors')}
                                className={`text-gray-700 hover:text-[var(--primary-color)] transition-colors relative ${
                                    activeSection === 'doctors' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                أطباؤنا
                                {activeSection === 'doctors' && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary-color)]"></div>
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`text-gray-700 hover:text-[var(--primary-color)] transition-colors relative ${
                                    activeSection === 'contact' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                اتصل بنا
                                {activeSection === 'contact' && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary-color)]"></div>
                                )}
                            </button>
                        </li>
                    </ul>

                    {/* زر القائمة للشاشات الصغيرة */}
                    <button 
                        className="md:hidden text-2xl hover:opacity-80 transition-opacity"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                {/* القائمة المتحركة للشاشات الصغيرة */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                    <ul className="mt-4 space-y-4">
                        <li>
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`w-full text-right text-gray-700 hover:text-[var(--primary-color)] transition-colors ${
                                    activeSection === 'home' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                الرئيسية
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('services')}
                                className={`w-full text-right text-gray-700 hover:text-[var(--primary-color)] transition-colors ${
                                    activeSection === 'services' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                خدماتنا
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('clinics')}
                                className={`w-full text-right text-gray-700 hover:text-[var(--primary-color)] transition-colors ${
                                    activeSection === 'clinics' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                عياداتنا
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('doctors')}
                                className={`w-full text-right text-gray-700 hover:text-[var(--primary-color)] transition-colors ${
                                    activeSection === 'doctors' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                أطباؤنا
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`w-full text-right text-gray-700 hover:text-[var(--primary-color)] transition-colors ${
                                    activeSection === 'contact' ? 'text-[var(--primary-color)]' : ''
                                }`}
                            >
                                اتصل بنا
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header; 