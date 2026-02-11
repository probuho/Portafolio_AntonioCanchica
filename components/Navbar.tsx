'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#sobre-mi', label: 'Sobre Mí', tab: 'portfolio' },
        { href: '#servicios', label: 'Servicios', tab: 'freelance' },
        { href: '#roadmap', label: 'Mi Trayectoria', tab: 'portfolio' },
        { href: '#proyectos', label: 'Proyectos', tab: 'portfolio' },
        { href: '#habilidades', label: 'Habilidades', tab: 'portfolio' },
        { href: '#cv', label: 'CV', tab: 'portfolio' },
        { href: '#contacto', label: 'Contacto', tab: 'freelance' },
    ];

    const socialLinks = [
        { href: 'https://github.com/probuho', icon: FaGithub, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/antonio-jose-ruiz-canchica-7674b4272', icon: FaLinkedin, label: 'LinkedIn' },
        { href: 'mailto:contactoprobuho@gmail.com', icon: FaEnvelope, label: 'Email' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, tab?: string) => {
        // Si tiene tab asociado, disparar evento personalizado para cambiar tab
        if (tab) {
            window.dispatchEvent(new CustomEvent('changeTab', { detail: tab }));
        }
    };

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
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.tab)}
                                className="text-gray-300 hover:text-cyber-cyan transition-colors relative group"
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
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-effect border-t border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    handleNavClick(e, link.tab);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-gray-300 hover:text-cyber-cyan transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
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
