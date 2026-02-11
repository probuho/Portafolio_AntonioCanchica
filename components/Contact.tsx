'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simular envío (aquí integrarías con tu backend o servicio de email)
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                projectType: '',
                budget: '',
                timeline: '',
                message: ''
            });

            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const projectTypes = [
        'Landing Page',
        'Sitio Web Corporativo',
        'E-Commerce / Marketplace',
        'Aplicación Web',
        'Marketing Digital',
        'Soporte & Mantenimiento',
        'Consultoría Técnica',
        'Otro'
    ];

    const budgets = [
        'Menos de $300',
        '$300 - $800',
        '$800 - $1,500',
        '$1,500 - $3,000',
        'Más de $3,000',
        'Aún no estoy seguro'
    ];

    const timelines = [
        'Lo antes posible',
        '1-2 semanas',
        '2-4 semanas',
        '1-2 meses',
        '2+ meses',
        'Flexible'
    ];

    return (
        <section id="contacto" className="relative py-20 md:py-32 overflow-hidden bg-cyber-darker">
            <div className="absolute inset-0 cyber-grid opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Hablemos de Tu Proyecto</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Primera consulta gratuita. Cuéntame tu idea y te envío una propuesta personalizada en 24-48 horas.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Availability Badge */}
                        <div className="glass-effect p-6 rounded-2xl border border-cyber-neon/30 bg-cyber-neon/5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-cyber-neon rounded-full animate-pulse"></div>
                                <h3 className="text-xl font-bold text-white">Estado Actual</h3>
                            </div>
                            <p className="text-cyber-neon font-semibold text-lg mb-2">
                                🟢 Disponible para Proyectos
                            </p>
                            <p className="text-gray-400 text-sm">
                                Aceptando nuevos clientes. Respuesta en menos de 24 horas.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="glass-effect p-6 rounded-2xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-4">Contáctame Directamente</h3>
                            <div className="space-y-4">
                                {/* Email */}
                                <a
                                    href="mailto:contactoprobuho@gmail.com"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyber-cyan/10 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-cyber-cyan/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold text-sm">Email Principal</p>
                                        <p className="text-cyber-cyan text-sm">contactoprobuho@gmail.com</p>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/584244611848"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyber-neon/10 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-cyber-neon/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyber-neon" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold text-sm">WhatsApp</p>
                                        <p className="text-cyber-neon text-sm">Chat directo</p>
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/antonio-jose-ruiz-canchica-7674b4272"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyber-blue/10 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-cyber-blue/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyber-blue" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold text-sm">LinkedIn</p>
                                        <p className="text-cyber-blue text-sm">Red profesional</p>
                                    </div>
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/probuho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyber-purple/10 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-cyber-purple/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyber-purple" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold text-sm">GitHub</p>
                                        <p className="text-cyber-purple text-sm">@probuho</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Guarantee */}
                        <div className="glass-effect p-6 rounded-2xl border border-cyber-pink/30 bg-cyber-pink/5">
                            <h3 className="text-lg font-bold text-white mb-2">
                                💯 Garantía de Satisfacción
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Si no estás completamente satisfecho con el resultado, trabajaré hasta que lo estés. Sin cargos adicionales.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl border border-gray-800">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                                        Nombre Completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyber-cyan focus:ring-2 focus:ring-cyber-cyan/50 transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyber-cyan focus:ring-2 focus:ring-cyber-cyan/50 transition-all"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                                        Teléfono (Opcional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyber-cyan focus:ring-2 focus:ring-cyber-cyan/50 transition-all"
                                        placeholder="+58 424..."
                                    />
                                </div>

                                {/* Project Type */}
                                <div>
                                    <label htmlFor="projectType" className="block text-white font-semibold mb-2">
                                        Tipo de Proyecto *
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white focus:border-cyber-cyan focus:ring-2 focus:ring-cyber-cyan/50 transition-all"
                                    >
                                        <option value="">Selecciona una opción</option>
                                        {projectTypes.map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Budget */}
                                <div>
                                    <label htmlFor="budget" className="block text-white font-semibold mb-2">
                                        Presupuesto Estimado *
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white focus:border-cyber-cyan focus:ring-2 focus:ring-cyber-cyan/50 transition-all"
                                    >
                                        <option value="">Selecciona un rango</option>
                                        {budgets.map((budget) => (
                                            <option key={budget} value={budget}>{budget}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Timeline */}
                                <div>
                                    <label htmlFor="timeline" className="block text-white font-semibold mb-2">
                                        Timeline Deseado *
                                    </label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white focus:border-cyber-cyan focus:ring-2 focus:ring-cyber-cyan/50 transition-all"
                                    >
                                        <option value="">¿Cuándo lo necesitas?</option>
                                        {timelines.map((timeline) => (
                                            <option key={timeline} value={timeline}>{timeline}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-white font-semibold mb-2">
                                    Cuéntame Sobre Tu Proyecto *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyber-cyan focus:ring-2 focus:ring-cyber-cyan/50 transition-all resize-none"
                                    placeholder="Describe tu proyecto, objetivos, funcionalidades deseadas, etc. Cuanto más detalle, mejor."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`
                  w-full px-8 py-4 rounded-lg font-semibold text-white transition-all
                  ${status === 'sending'
                                        ? 'bg-gray-600 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-cyber-cyan to-cyber-blue hover:scale-105 hover:shadow-2xl hover:shadow-cyber-cyan/50'
                                    }
                  flex items-center justify-center gap-2
                `}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Enviando...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <FaCheckCircle />
                                        ¡Mensaje Enviado!
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Enviar Solicitud de Cotización
                                    </>
                                )}
                            </button>

                            {/* Success Message */}
                            {status === 'success' && (
                                <div className="mt-4 p-4 bg-cyber-neon/10 border border-cyber-neon rounded-lg">
                                    <p className="text-cyber-neon font-semibold flex items-center gap-2">
                                        <FaCheckCircle />
                                        ¡Gracias! Te responderé en menos de 24 horas.
                                    </p>
                                </div>
                            )}

                            {/* Error Message */}
                            {status === 'error' && (
                                <div className="mt-4 p-4 bg-red-500/10 border border-red-500 rounded-lg">
                                    <p className="text-red-500 font-semibold flex items-center gap-2">
                                        <FaExclamationCircle />
                                        Hubo un error. Por favor intenta de nuevo o contáctame directamente.
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
