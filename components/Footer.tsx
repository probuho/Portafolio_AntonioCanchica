'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaRocket } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            href: 'https://github.com/probuho',
            icon: FaGithub,
            label: 'GitHub',
            color: 'hover:text-cyber-cyan',
        },
        {
            href: 'https://www.linkedin.com/in/antonio-jose-ruiz-canchica-7674b4272',
            icon: FaLinkedin,
            label: 'LinkedIn',
            color: 'hover:text-cyber-purple',
        },
        {
            href: 'mailto:contactoprobuho@gmail.com',
            icon: FaEnvelope,
            label: 'Email',
            color: 'hover:text-cyber-pink',
        },
    ];

    const quickLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#sobre-mi', label: 'Sobre Mí' },
        { href: '#proyectos', label: 'Proyectos' },
        { href: '#habilidades', label: 'Habilidades' },
        { href: '#cv', label: 'CV' },
        { href: '#contacto', label: 'Contacto' },
    ];

    return (
        <footer className="relative bg-cyber-darker border-t border-gray-800 overflow-hidden">
            {/* Grid de fondo */}
            <div className="absolute inset-0 cyber-grid opacity-10"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Contenido Principal */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Columna 1 - Branding */}
                    <div>
                        <a href="#inicio" className="text-3xl font-bold gradient-text mb-4 inline-block">
                            &lt;AR /&gt;
                        </a>
                        <p className="text-gray-400 mb-4">
                            Junior Full Stack Developer apasionado por crear el futuro, una línea de código a la vez.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400">
                            <FaRocket className="text-cyber-neon" />
                            <span className="text-sm">Construyendo el mañana hoy</span>
                        </div>
                    </div>

                    {/* Columna 2 - Enlaces Rápidos */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyber-cyan transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-cyber-cyan transition-all"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3 - Redes Sociales */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Conéctate Conmigo</h3>
                        <div className="flex gap-4 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className={`w-12 h-12 glass-effect rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all hover:scale-110`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm">
                            ¿Tienes un proyecto en mente?
                            <br />
                            <a href="#contacto" className="text-cyber-cyan hover:text-cyber-pink transition-colors">
                                ¡Hablemos! →
                            </a>
                        </p>
                    </div>
                </div>

                {/* Separador */}
                <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mb-8"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                    <p>
                        © {currentYear} Antonio José Ruiz Canchica. Todos los derechos reservados.
                    </p>
                    <p className="flex items-center gap-2">
                        Hecho con <FaHeart className="text-cyber-pink animate-pulse" /> y mucho café ☕
                    </p>
                </div>

                {/* Easter Egg - Quote */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600 text-xs italic font-mono">
                        "En un mundo de código infinito, cada bug es una aventura." - Antonio RC
                    </p>
                </div>
            </div>
        </footer>
    );
}
