'use client';

import { FaCode, FaRocket, FaDownload } from 'react-icons/fa';

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
            {/* Efectos de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-cyber-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyber-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in">
                    {/* Saludo */}
                    <p className="text-cyber-cyan text-lg md:text-xl mb-4 font-mono">
                        {'<Hola, soy />'}
                    </p>

                    {/* Nombre */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                        <span className="gradient-text glow-text">Antonio Ruiz Canchica</span>
                    </h1>

                    {/* Título */}
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 mb-8">
                        Junior <span className="text-cyber-pink">Full Stack</span> Developer
                    </h2>

                    {/* Descripción */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Desarrollador apasionado por crear experiencias digitales increíbles.
                        <br className="hidden md:block" />
                        Amante de la ciencia ficción, la cultura geek y las tecnologías del futuro.
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['React', 'TypeScript', 'Next.js', 'HTML5', 'Laravel'].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 glass-effect rounded-lg text-sm font-mono text-cyber-cyan border border-cyber-cyan/30 hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyber-cyan/50 transition-all"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#proyectos"
                            className="group relative px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyber-cyan/50"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <FaRocket className="group-hover:rotate-45 transition-transform" />
                                Ver Proyectos
                            </span>
                        </a>

                        <a
                            href="#cv"
                            className="group px-8 py-4 glass-effect rounded-lg font-semibold text-white border-2 border-cyber-pink hover:bg-cyber-pink/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyber-pink/50"
                        >
                            <span className="flex items-center gap-2">
                                <FaDownload className="group-hover:animate-bounce" />
                                Descargar CV
                            </span>
                        </a>

                        <a
                            href="#contacto"
                            className="group px-8 py-4 glass-effect rounded-lg font-semibold text-white border-2 border-cyber-purple hover:bg-cyber-purple/10 transition-all hover:scale-105"
                        >
                            <span className="flex items-center gap-2">
                                <FaCode />
                                Contactar
                            </span>
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
