'use client';

import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Crear mailto link
        const mailtoLink = `mailto:contactoprobuho@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;
        setSubmitted(true);

        // Reset form después de 3 segundos
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactMethods = [
        {
            icon: FaEnvelope,
            title: 'Email Principal',
            value: 'contactoprobuho@gmail.com',
            link: 'mailto:contactoprobuho@gmail.com',
            color: 'cyber-cyan',
        },
        {
            icon: FaGithub,
            title: 'GitHub',
            value: '@probuho',
            link: 'https://github.com/probuho',
            color: 'cyber-purple',
        },
        {
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'Antonio Ruiz Canchica',
            link: 'https://www.linkedin.com/in/antonio-jose-ruiz-canchica-7674b4272',
            color: 'cyber-pink',
        },
    ];

    return (
        <section id="contacto" className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Contacto</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Métodos de Contacto */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Formas de contactarme</h3>

                        {contactMethods.map((method, idx) => (
                            <a
                                key={idx}
                                href={method.link}
                                target={method.link.startsWith('http') ? '_blank' : undefined}
                                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className={`block glass-effect p-6 rounded-xl border border-${method.color}/30 hover:border-${method.color} card-hover group`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 bg-${method.color}/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <method.icon className={`w-7 h-7 text-${method.color}`} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">{method.title}</p>
                                        <p className={`text-white font-semibold group-hover:text-${method.color} transition-colors`}>
                                            {method.value}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* Disponibilidad */}
                        <div className="glass-effect p-6 rounded-xl border border-cyber-neon/30 bg-gradient-to-r from-cyber-neon/5 to-cyber-cyan/5">
                            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                <span className="w-3 h-3 bg-cyber-neon rounded-full animate-pulse"></span>
                                Disponible para trabajar
                            </h4>
                            <p className="text-gray-300 text-sm">
                                Actualmente buscando oportunidades como Junior Full Stack Developer.
                                Disponible para trabajo remoto o presencial.
                            </p>
                        </div>
                    </div>

                    {/* Formulario de Contacto */}
                    <div className="glass-effect p-8 rounded-2xl border border-cyber-cyan/30">
                        <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <FaCheckCircle className="w-16 h-16 text-cyber-neon mb-4 animate-bounce" />
                                <h4 className="text-xl font-bold text-cyber-neon mb-2">¡Mensaje enviado!</h4>
                                <p className="text-gray-400">Tu cliente de correo se ha abierto. Completa y envía el mensaje.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-gray-700 rounded-lg text-white focus:border-cyber-cyan focus:outline-none transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-gray-700 rounded-lg text-white focus:border-cyber-cyan focus:outline-none transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-gray-700 rounded-lg text-white focus:border-cyber-cyan focus:outline-none transition-colors"
                                        placeholder="¿De qué quieres hablar?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-300 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-gray-700 rounded-lg text-white focus:border-cyber-cyan focus:outline-none transition-colors resize-none"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full group px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-lg font-semibold text-white hover:scale-105 transition-all hover:shadow-2xl hover:shadow-cyber-cyan/50"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                                        Enviar Mensaje
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
