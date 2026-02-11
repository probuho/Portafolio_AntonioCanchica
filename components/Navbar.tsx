'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaBriefcase, FaUser } from 'react-icons/fa';

interface NavbarProps {
    activeTab: 'freelance' | 'portfolio';
    onTabChange: (tab: 'freelance' | 'portfolio') => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Links que cambian según el tab activo
    const freelanceLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#servicios', label: 'Servicios' },
        { href: '#proceso', label: 'Cómo Trabajo' },
        { href: '#contacto', label: 'Contacto' },
    ];

    const portfolioLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#sobre-mi', label: 'Sobre Mí' },
        { href: '#roadmap', label: 'Trayectoria' },
        { href: '#proyectos', label: 'Proyectos' },
        { href: '#habilidades', label: 'Skills' },
        { href: '#cv', label: 'CV' },
    ];

    const currentLinks = activeTab === 'freelance' ? freelanceLinks : portfolioLinks;

    const socialLinks = [
        { href: 'https://github.com/probuho', icon: FaGithub, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/antonio-jose-ruiz-canchica-7674b4272', icon: FaLinkedin, label: 'LinkedIn' },
        { href: 'mailto:contactoprobuho@gmail.com', icon: FaEnvelope, label: 'Email' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="#inicio" className="text-2xl font-bold gradient-text hover:scale-110 transition-transform">
                        &lt;AR /&gt;
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Tab Switcher integrado */}
                        <div className="flex items-center gap-2 px-2 py-1 glass-effect rounded-full border border-gray-700">
                            <button
                                onClick={() => onTabChange('freelance')}
                                className={`
                                    px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300
                                    flex items-center gap-2
                                    ${activeTab === 'freelance'
                                        ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                    }
                                `}
                            >
                                <FaBriefcase className="w-4 h-4" />
                                <span>Contrátame</span>
                            </button>
                            <button
                                onClick={() => onTabChange('portfolio')}
                                className={`
                                    px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300
                                    flex items-center gap-2
                                    ${activeTab === 'portfolio'
                                        ? 'bg-gradient-to-r from-cyber-purple to-cyber-pink text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                    }
                                `}
                            >
                                <FaUser className="w-4 h-4" />
                                <span>Portafolio</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="h-8 w-px bg-gray-700"></div>

                        {/* Links según tab activo */}
                        {currentLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-cyber-cyan transition-colors relative group text-sm"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.href}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyber-pink transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden glass-effect border-t border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* Tab Switcher Mobile */}
                        <div className="px-3 py-2">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        onTabChange('freelance');
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`
                                        flex-1 px-4 py-3 rounded-lg font-semibold text-sm transition-all
                                        flex items-center justify-center gap-2
                                        ${activeTab === 'freelance'
                                            ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-white'
                                            : 'glass-effect text-gray-400'
                                        }
                                    `}
                                >
                                    <FaBriefcase />
                                    Contrátame
                                </button>
                                <button
                                    onClick={() => {
                                        onTabChange('portfolio');
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`
                                        flex-1 px-4 py-3 rounded-lg font-semibold text-sm transition-all
                                        flex items-center justify-center gap-2
                                        ${activeTab === 'portfolio'
                                            ? 'bg-gradient-to-r from-cyber-purple to-cyber-pink text-white'
                                            : 'glass-effect text-gray-400'
                                        }
                                    `}
                                >
                                    <FaUser />
                                    Portafolio
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gray-700 my-2"></div>

                        {/* Links según tab */}
                        {currentLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-gray-300 hover:text-cyber-cyan transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Social Links Mobile */}
                        <div className="flex space-x-4 px-3 pt-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-cyber-pink transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
