'use client';

import { FaRobot, FaBookOpen, FaFilm, FaGamepad } from 'react-icons/fa';

export default function About() {
    const interests = [
        {
            icon: FaRobot,
            title: 'Ciencia Ficción',
            description: 'Blade Runner, Matrix, Cyberpunk 2077',
            color: 'cyber-cyan',
        },
        {
            icon: FaBookOpen,
            title: 'Novelas Sci-Fi',
            description: 'Explorador de mundos futuristas',
            color: 'cyber-purple',
        },
        {
            icon: FaFilm,
            title: 'Cine Épico',
            description: 'El Señor de los Anillos, Alita',
            color: 'cyber-pink',
        },
        {
            icon: FaGamepad,
            title: 'Cultura Geek',
            description: 'Evangelion y más allá',
            color: 'cyber-blue',
        },
    ];

    return (
        <section id="sobre-mi" className="relative py-20 md:py-32 overflow-hidden">
            {/* Grid de fondo */}
            <div className="absolute inset-0 cyber-grid opacity-30"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Sobre Mí</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-neon mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Texto */}
                    <div className="space-y-6">
                        <div className="glass-effect p-8 rounded-2xl border border-cyber-cyan/30 hover:border-cyber-cyan transition-all">
                            <h3 className="text-2xl md:text-3xl font-bold text-cyber-cyan mb-4">
                                ¡Hola! Soy Antonio 👋
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Soy un <span className="text-cyber-pink font-semibold">Junior Full Stack Developer</span> apasionado
                                por crear soluciones digitales innovadoras. Actualmente estoy aprendiendo y creciendo en el mundo
                                del desarrollo web, trabajando con tecnologías como <span className="text-cyber-cyan">React</span>,{' '}
                                <span className="text-cyber-cyan">TypeScript</span> y <span className="text-cyber-cyan">Next.js</span>.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Mi viaje como desarrollador está impulsado por mi amor a la <span className="text-cyber-purple font-semibold">ciencia ficción</span> y
                                la <span className="text-cyber-purple font-semibold">cultura geek</span>. Creo que la tecnología es
                                nuestro puente hacia el futuro que hemos imaginado en películas como Blade Runner o Matrix.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Actualmente estoy buscando oportunidades para demostrar mis habilidades y seguir aprendiendo.
                                Me motiva crear proyectos que no solo funcionen bien, sino que también inspiren.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-cyber-purple/20 border border-cyber-purple rounded-lg text-cyber-purple font-mono text-sm">
                                💼 Disponible para trabajar
                            </span>
                            <span className="px-4 py-2 bg-cyber-cyan/20 border border-cyber-cyan rounded-lg text-cyber-cyan font-mono text-sm">
                                🚀 Siempre aprendiendo
                            </span>
                        </div>
                    </div>

                    {/* Intereses */}
                    <div className="grid grid-cols-2 gap-6">
                        {interests.map((interest, index) => (
                            <div
                                key={index}
                                className={`glass-effect p-6 rounded-xl border border-${interest.color}/30 hover:border-${interest.color} card-hover group`}
                            >
                                <interest.icon className={`w-12 h-12 text-${interest.color} mb-4 group-hover:scale-110 transition-transform`} />
                                <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                                <p className="text-gray-400 text-sm">{interest.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quote */}
                <div className="mt-16 text-center">
                    <blockquote className="glass-effect p-8 rounded-2xl border border-cyber-pink/30 max-w-3xl mx-auto">
                        <p className="text-xl md:text-2xl text-gray-300 italic mb-4">
                            "El futuro no se predice, se construye línea por línea de código."
                        </p>
                        <footer className="text-cyber-pink font-semibold">— Antonio Ruiz Canchica</footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
