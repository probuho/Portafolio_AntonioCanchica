'use client';

import { useState } from 'react';
import { FaBriefcase, FaUser } from 'react-icons/fa';

interface TabSwitcherProps {
    onTabChange: (tab: 'freelance' | 'portfolio') => void;
    activeTab: 'freelance' | 'portfolio';
}

export default function TabSwitcher({ onTabChange, activeTab }: TabSwitcherProps) {
    return (
        <section className="sticky top-16 z-40 py-6 glass-effect border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div className="inline-flex rounded-2xl glass-effect p-2 border border-gray-700">
                        {/* Tab Freelance */}
                        <button
                            onClick={() => onTabChange('freelance')}
                            className={`
                relative px-8 py-4 rounded-xl font-semibold transition-all duration-300
                flex items-center gap-3
                ${activeTab === 'freelance'
                                    ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-white shadow-2xl shadow-cyber-cyan/50'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }
              `}
                        >
                            <FaBriefcase className={`w-5 h-5 ${activeTab === 'freelance' ? 'animate-bounce' : ''}`} />
                            <div className="text-left">
                                <div className="text-lg">Contrátame</div>
                                <div className="text-xs opacity-80">Servicios & Proyectos</div>
                            </div>
                            {activeTab === 'freelance' && (
                                <div className="absolute -top-1 -right-1">
                                    <div className="w-3 h-3 bg-cyber-neon rounded-full animate-pulse"></div>
                                </div>
                            )}
                        </button>

                        {/* Tab Portfolio */}
                        <button
                            onClick={() => onTabChange('portfolio')}
                            className={`
                relative px-8 py-4 rounded-xl font-semibold transition-all duration-300
                flex items-center gap-3
                ${activeTab === 'portfolio'
                                    ? 'bg-gradient-to-r from-cyber-purple to-cyber-pink text-white shadow-2xl shadow-cyber-purple/50'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }
              `}
                        >
                            <FaUser className={`w-5 h-5 ${activeTab === 'portfolio' ? 'animate-bounce' : ''}`} />
                            <div className="text-left">
                                <div className="text-lg">Mi Portafolio</div>
                                <div className="text-xs opacity-80">Experiencia & Skills</div>
                            </div>
                            {activeTab === 'portfolio' && (
                                <div className="absolute -top-1 -right-1">
                                    <div className="w-3 h-3 bg-cyber-pink rounded-full animate-pulse"></div>
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                {/* Indicador de qué estás viendo */}
                <div className="text-center mt-4">
                    <p className="text-gray-500 text-sm">
                        {activeTab === 'freelance' ? (
                            <span className="text-cyber-cyan">💼 Descubre cómo puedo ayudarte con tu proyecto</span>
                        ) : (
                            <span className="text-cyber-pink">👨‍💻 Conoce mi experiencia y habilidades</span>
                        )}
                    </p>
                </div>
            </div>
        </section>
    );
}
