'use client';

import { useState } from 'react';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';
import CertificationsModal from './CertificationsModal';

export default function CV() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const experience = [
        {
            title: 'Junior Full Stack Developer',
            company: 'Proyectos Personales y Freelance',
            period: '2020 - Presente',
            description: 'Desarrollo de aplicaciones web modernas con React, TypeScript y Next.js aplicando IA generativa',
            achievements: [
                'Desarrollo de plataforma marketplace con integración de APIs',
                'Implementación de interfaces con diseño UX/UI moderno',
                'Aplicación de IA generativa en desarrollo siguiendo mejores prácticas',
                'Creación de contenido digital y gestión de redes sociales',
            ],
        },
        {
            title: 'Encargado de Tienda - Gestión Integral',
            company: 'Multiservicios Computer Service R&J, C.A',
            period: 'Jul 2017 - Oct 2019',
            description: 'Gestión completa de operaciones técnicas y administrativas como responsable de tienda',
            achievements: [
                'Atención directa a clientes y diagnóstico de necesidades técnicas',
                'Diagnóstico, reparación y mantenimiento de computadoras y equipos',
                'Gestión de compras e inventario de productos tecnológicos',
                'Generación de reportes diarios de ventas y control de gestión',
                'Supervisión de todas las operaciones de la tienda',
            ],
        },
        {
            title: 'Encargado de Tienda - Operaciones y Soporte',
            company: 'Inversiones Ultraviolet F.V 2013',
            period: 'Sep 2013 - Mar 2017',
            description: 'Gestión de tienda especializada en videojuegos y películas con soporte técnico avanzado',
            achievements: [
                'Supervisión completa de operaciones diarias',
                'Gestión de inventario digital y físico',
                'Solución creativa de problemas técnicos',
                'Creación de menús de discos y masterización digital',
                'Búsqueda y edición de contenido multimedia',
                'Atención y asesoría a clientes',
            ],
        },
        {
            title: 'Vendedor Técnico',
            company: 'La Boutique Tecnológica C.A',
            period: 'Abr 2013 - Sep 2014',
            description: 'Venta y asesoría técnica en productos tecnológicos',
            achievements: [
                'Asesoría técnica especializada a clientes',
                'Configuración de equipos tecnológicos',
            ],
        },
    ];

    const education = [
        {
            degree: 'Técnico Superior Universitario en Informática',
            institution: 'Universidad Nacional Experimental de las Telecomunicaciones e Informática (UNETI)',
            period: 'Sep 2019 - 2025',
            description: 'Ciclo completado. Formación integral en desarrollo de software, sistemas, redes y telecomunicaciones',
            status: 'Completado',
        },
        {
            degree: 'Bachiller en Ciencias',
            institution: 'U.E Pedagogía Moderna',
            period: '2006 - 2011',
            description: 'Educación secundaria con énfasis en ciencias',
            status: 'Completado',
        },
    ];

    const certifications = [
        'Social Media Manager - Creative Diseños Academy (2021)',
        'Community Manager Online - Creative Diseños Academy (2021)',
        'Community Manager - ALPESINC Agencia de Marketing (2021)',
        'Seguridad Electrónica 1 - Instituto Keys (2017-2018)',
        'Asistente Administrativo - Academia Americana (2015)',
        'Reparación de Celulares - Academia Americana (2014)',
        'Mantenimiento y Reparación de Impresoras - Instituto Keys (2013)',
        'Técnico de Reparación de Laptops - Instituto Keys (2012)',
    ];

    return (
        <section id="cv" className="relative py-20 md:py-32 overflow-hidden bg-cyber-dark/50">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Currículum Vitae</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
                    <button
                        onClick={() => window.print()}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-lg font-semibold text-white hover:scale-105 transition-all hover:shadow-2xl hover:shadow-cyber-cyan/50"
                    >
                        <FaDownload className="group-hover:animate-bounce" />
                        Descargar CV en PDF
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Columna Izquierda - Info Personal */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Información de Contacto */}
                        <div className="glass-effect p-6 rounded-2xl border border-cyber-cyan/30">
                            <h3 className="text-xl font-bold text-cyber-cyan mb-4 flex items-center gap-2">
                                <FaCode />
                                Información de Contacto
                            </h3>
                            <div className="space-y-3 text-gray-300">
                                <div>
                                    <p className="text-gray-500 text-sm">Email Principal</p>
                                    <a
                                        href="mailto:contactoprobuho@gmail.com"
                                        className="text-cyber-cyan hover:text-cyber-pink transition-colors break-all"
                                    >
                                        contactoprobuho@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Email Profesional</p>
                                    <a
                                        href="mailto:antonioruizc.94@gmail.com"
                                        className="text-cyber-cyan hover:text-cyber-pink transition-colors break-all"
                                    >
                                        antonioruizc.94@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">LinkedIn</p>
                                    <a
                                        href="https://www.linkedin.com/in/antonio-jose-ruiz-canchica-7674b4272"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyber-cyan hover:text-cyber-pink transition-colors break-all"
                                    >
                                        Ver perfil completo →
                                    </a>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">GitHub</p>
                                    <a
                                        href="https://github.com/probuho"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyber-cyan hover:text-cyber-pink transition-colors"
                                    >
                                        @probuho
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Certificaciones */}
                        <div className="glass-effect p-6 rounded-2xl border border-cyber-purple/30">
                            <h3 className="text-xl font-bold text-cyber-purple mb-4 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <FaCertificate />
                                    Certificaciones
                                </span>
                                <span className="text-sm font-normal text-gray-400">
                                    {certifications.length} completadas
                                </span>
                            </h3>
                            <ul className="space-y-2 mb-4">
                                {certifications.slice(0, 4).map((cert, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                        <span className="text-cyber-purple mt-1">▹</span>
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                            {certifications.length > 4 && (
                                <p className="text-gray-400 text-sm mb-4">
                                    + {certifications.length - 4} certificaciones más
                                </p>
                            )}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full px-4 py-3 bg-cyber-purple/20 border border-cyber-purple hover:bg-cyber-purple/30 rounded-lg text-cyber-purple font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <FaCertificate />
                                Ver Todas las Certificaciones
                            </button>
                        </div>
                    </div>

                    {/* Columna Derecha - Experiencia y Educación */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Experiencia */}
                        <div className="glass-effect p-8 rounded-2xl border border-cyber-pink/30">
                            <h3 className="text-2xl font-bold text-cyber-pink mb-6 flex items-center gap-2">
                                <FaBriefcase />
                                Experiencia
                            </h3>
                            <div className="space-y-6">
                                {experience.map((exp, idx) => (
                                    <div key={idx} className="border-l-2 border-cyber-pink pl-6">
                                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                                        <p className="text-cyber-cyan font-semibold">{exp.company}</p>
                                        <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                                        <p className="text-gray-300 mb-3">{exp.description}</p>
                                        <ul className="space-y-1">
                                            {exp.achievements.map((achievement, aidx) => (
                                                <li key={aidx} className="flex items-start gap-2 text-gray-300 text-sm">
                                                    <span className="text-cyber-pink mt-1">▹</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Educación */}
                        <div className="glass-effect p-8 rounded-2xl border border-cyber-cyan/30">
                            <h3 className="text-2xl font-bold text-cyber-cyan mb-6 flex items-center gap-2">
                                <FaGraduationCap />
                                Educación
                            </h3>
                            <div className="space-y-6">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="border-l-2 border-cyber-cyan pl-6">
                                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                        <p className="text-cyber-cyan font-semibold">{edu.institution}</p>
                                        <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                                        <p className="text-gray-300">{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mensaje Motivacional */}
                        <div className="glass-effect p-8 rounded-2xl border border-cyber-purple/30 bg-gradient-to-r from-cyber-purple/5 to-cyber-pink/5">
                            <h3 className="text-xl font-bold text-white mb-3">💼 ¿Por qué trabajar conmigo?</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Soy un desarrollador apasionado y comprometido, siempre dispuesto a aprender nuevas tecnologías.
                                Mi creatividad geek y mi amor por la ciencia ficción me impulsan a crear soluciones innovadoras
                                y fuera de lo común. Estoy listo para aportar energía fresca, ideas creativas y un trabajo dedicado
                                a cualquier equipo que confíe en mí.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Certificaciones */}
            <CertificationsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
