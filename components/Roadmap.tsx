'use client';

import { FaGraduationCap, FaBriefcase, FaCode, FaRocket, FaCertificate, FaLaptopCode } from 'react-icons/fa';

export default function Roadmap() {
    const milestones = [
        {
            year: '2011',
            icon: FaGraduationCap,
            title: 'Bachiller en Ciencias',
            description: 'Graduado de U.E Pedagogía Moderna',
            type: 'education',
            color: 'cyber-cyan',
        },
        {
            year: '2012-2014',
            icon: FaCertificate,
            title: 'Formación Técnica',
            description: 'Certificaciones: Reparación de Laptops, Mantenimiento de Impresoras, Reparación de Celulares',
            type: 'certification',
            color: 'cyber-purple',
        },
        {
            year: '2012-2019',
            icon: FaBriefcase,
            title: 'Carrera en Soporte Técnico',
            description: 'Desde Almacenista hasta Encargado. Experiencia en hardware, software, redes y gestión de operaciones',
            type: 'work',
            color: 'cyber-pink',
        },
        {
            year: '2017-2018',
            icon: FaCertificate,
            title: 'Seguridad Electrónica',
            description: 'Especialización en sistemas de seguridad electrónica - Instituto Keys',
            type: 'certification',
            color: 'cyber-purple',
        },
        {
            year: '2019-2025',
            icon: FaGraduationCap,
            title: 'TSU en Informática - UNETI',
            description: 'Completó satisfactoriamente Técnico Superior Universitario en Informática. Formación integral en desarrollo, sistemas y redes',
            type: 'education',
            color: 'cyber-cyan',
        },
        {
            year: '2020-2021',
            icon: FaLaptopCode,
            title: 'Transición a Desarrollo Web',
            description: 'Aprendizaje intensivo de HTML, CSS, JavaScript. Certificaciones en Community Manager y Social Media',
            type: 'transition',
            color: 'cyber-neon',
        },
        {
            year: '2022-2024',
            icon: FaCode,
            title: 'Desarrollo Full Stack',
            description: 'Especialización en React, TypeScript, Next.js. Desarrollo de proyectos personales y marketplace',
            type: 'work',
            color: 'cyber-pink',
        },
        {
            year: '2025-Presente',
            icon: FaRocket,
            title: 'Desarrollo con IA + TSU',
            description: 'Obtención del título TSU. Aplicación de IA generativa en desarrollo. Búsqueda activa de oportunidades profesionales',
            type: 'current',
            color: 'cyber-neon',
        },
    ];

    const getIconBg = (color: string) => {
        return `bg-${color}/20`;
    };

    const getBorderColor = (color: string) => {
        return `border-${color}`;
    };

    return (
        <section id="roadmap" className="relative py-20 md:py-32 overflow-hidden bg-cyber-dark/50">
            <div className="absolute inset-0 cyber-grid opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Mi Trayectoria</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Desde soporte técnico hasta desarrollo web con IA - Mi roadmap profesional
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Línea vertical central - solo desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-neon opacity-30"></div>

                    {/* Milestones */}
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-col md:gap-8`}
                            >
                                {/* Contenido */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div
                                        className={`glass-effect p-6 rounded-xl border border-${milestone.color}/30 hover:border-${milestone.color} card-hover group`}
                                    >
                                        {/* Año */}
                                        <div className={`text-${milestone.color} font-bold text-xl mb-2 font-mono`}>
                                            {milestone.year}
                                        </div>

                                        {/* Título */}
                                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 justify-start md:justify-start">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <span>{milestone.title}</span>
                                                    <milestone.icon className={`w-5 h-5 text-${milestone.color} md:inline hidden`} />
                                                </>
                                            ) : (
                                                <>
                                                    <milestone.icon className={`w-5 h-5 text-${milestone.color} md:inline hidden`} />
                                                    <span>{milestone.title}</span>
                                                </>
                                            )}
                                        </h3>

                                        {/* Descripción */}
                                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                                    </div>
                                </div>

                                {/* Icono central - solo desktop */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                                    <div className={`w-16 h-16 rounded-full bg-${milestone.color}/20 border-4 border-${milestone.color} flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform`}>
                                        <milestone.icon className={`w-7 h-7 text-${milestone.color}`} />
                                    </div>
                                </div>

                                {/* Icono mobile */}
                                <div className={`md:hidden w-12 h-12 rounded-full bg-${milestone.color}/20 border-2 border-${milestone.color} flex items-center justify-center mb-4`}>
                                    <milestone.icon className={`w-6 h-6 text-${milestone.color}`} />
                                </div>

                                {/* Espacio vacío del otro lado */}
                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="glass-effect p-6 rounded-xl border border-cyber-cyan/30 text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyber-cyan mb-2">7+</div>
                        <div className="text-gray-400 text-sm">Años de Experiencia Técnica</div>
                    </div>
                    <div className="glass-effect p-6 rounded-xl border border-cyber-purple/30 text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyber-purple mb-2">8+</div>
                        <div className="text-gray-400 text-sm">Certificaciones Técnicas</div>
                    </div>
                    <div className="glass-effect p-6 rounded-xl border border-cyber-pink/30 text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyber-pink mb-2">4+</div>
                        <div className="text-gray-400 text-sm">Empresas de Tecnología</div>
                    </div>
                    <div className="glass-effect p-6 rounded-xl border border-cyber-neon/30 text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyber-neon mb-2">5+</div>
                        <div className="text-gray-400 text-sm">Años Estudiando Desarrollo</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <div className="glass-effect p-8 rounded-2xl border border-cyber-cyan/30 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            🚀 El Siguiente Paso
                        </h3>
                        <p className="text-gray-300 mb-6">
                            De soporte técnico a desarrollo web con IA. Mi trayectoria combina conocimiento práctico de sistemas
                            con desarrollo moderno. Listo para el siguiente desafío profesional.
                        </p>
                        <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-lg font-semibold text-white hover:scale-105 transition-all hover:shadow-2xl hover:shadow-cyber-cyan/50"
                        >
                            <FaRocket />
                            Hablemos de Oportunidades
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
