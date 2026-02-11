'use client';

import { FaReact, FaHtml5, FaLaravel, FaDatabase, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript, SiFigma, SiPostgresql } from 'react-icons/si';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Frontend & Diseño',
            color: 'cyber-cyan',
            skills: [
                { name: 'React', icon: FaReact, level: 75 },
                { name: 'TypeScript', icon: SiTypescript, level: 70 },
                { name: 'Next.js', icon: SiNextdotjs, level: 65 },
                { name: 'HTML5', icon: FaHtml5, level: 85 },
                { name: 'CSS3', icon: SiTailwindcss, level: 80 },
                { name: 'JavaScript', icon: SiJavascript, level: 75 },
            ],
        },
        {
            title: 'Backend & Bases de Datos',
            color: 'cyber-purple',
            skills: [
                { name: 'Laravel', icon: FaLaravel, level: 45 },
                { name: 'Node.js', icon: FaNodeJs, level: 55 },
                { name: 'PostgreSQL', icon: SiPostgresql, level: 50 },
                { name: 'Databases', icon: FaDatabase, level: 60 },
            ],
        },
        {
            title: 'Sistemas & Redes',
            color: 'cyber-pink',
            skills: [
                { name: 'Windows', icon: FaNodeJs, level: 90 },
                { name: 'Linux Ubuntu', icon: FaDatabase, level: 70 },
                { name: 'Redes LAN', icon: FaGitAlt, level: 75 },
                { name: 'Cableado', icon: FaGitAlt, level: 80 },
            ],
        },
        {
            title: 'Herramientas & IA',
            color: 'cyber-neon',
            skills: [
                { name: 'Git', icon: FaGitAlt, level: 70 },
                { name: 'Figma', icon: SiFigma, level: 55 },
                { name: 'IA Generativa', icon: FaReact, level: 75 },
                { name: 'Photoshop', icon: SiFigma, level: 65 },
            ],
        },
    ];

    const softSkills = [
        'Trabajo en equipo',
        'Resolución de problemas técnicos',
        'Aprendizaje rápido',
        'Atención al cliente',
        'Pensamiento analítico',
        'Gestión de proyectos',
        'Creatividad digital',
        'Adaptabilidad',
    ];

    return (
        <section id="habilidades" className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Habilidades</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Tecnologías y herramientas con las que trabajo
                    </p>
                </div>

                {/* Habilidades Técnicas */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Hard Skills
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, idx) => (
                            <div
                                key={idx}
                                className="glass-effect p-6 rounded-2xl border border-gray-800 hover:border-cyber-cyan transition-all"
                            >
                                <h4 className={`text-xl font-bold text-${category.color} mb-6 flex items-center gap-2`}>
                                    <span className={`w-3 h-3 bg-${category.color} rounded-full animate-pulse`}></span>
                                    {category.title}
                                </h4>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div key={skillIdx}>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <skill.icon className={`w-5 h-5 text-${category.color}`} />
                                                    <span className="text-white font-medium">{skill.name}</span>
                                                </div>
                                                <span className="text-gray-400 text-sm">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r from-${category.color} to-cyber-pink rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Soft Skills
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="glass-effect px-6 py-3 rounded-full border border-cyber-purple/30 hover:border-cyber-purple hover:scale-105 transition-all group"
                            >
                                <span className="text-white group-hover:text-cyber-purple transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learning Section */}
                <div className="mt-16 text-center">
                    <div className="glass-effect p-8 rounded-2xl border border-cyber-cyan/30 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-cyber-cyan mb-4">
                            🚀 Actualmente Aprendiendo
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Siempre expandiendo mis conocimientos en nuevas tecnologías y mejores prácticas de desarrollo.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="px-4 py-2 bg-cyber-purple/20 border border-cyber-purple text-cyber-purple rounded-lg font-mono text-sm">
                                Next.js avanzado
                            </span>
                            <span className="px-4 py-2 bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan rounded-lg font-mono text-sm">
                                Testing
                            </span>
                            <span className="px-4 py-2 bg-cyber-pink/20 border border-cyber-pink text-cyber-pink rounded-lg font-mono text-sm">
                                DevOps
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
