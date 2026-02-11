'use client';

import { FaComments, FaLightbulb, FaCode, FaRocket, FaHandshake } from 'react-icons/fa';

export default function Process() {
    const steps = [
        {
            number: '01',
            icon: FaComments,
            title: 'Consulta Inicial',
            description: 'Hablamos de tu proyecto, objetivos y visión. Primera consulta totalmente gratuita.',
            duration: '30-60 min',
            color: 'cyber-cyan',
        },
        {
            number: '02',
            icon: FaLightbulb,
            title: 'Propuesta & Cotización',
            description: 'Te envío una propuesta detallada con alcance, timeline y presupuesto transparente.',
            duration: '1-2 días',
            color: 'cyber-purple',
        },
        {
            number: '03',
            icon: FaCode,
            title: 'Desarrollo',
            description: 'Inicio el desarrollo con actualizaciones regulares. Puedes ver el progreso en tiempo real.',
            duration: '1-4 semanas',
            color: 'cyber-pink',
        },
        {
            number: '04',
            icon: FaRocket,
            title: 'Revisión & Ajustes',
            description: 'Revisamos juntos el proyecto. Hago los ajustes necesarios hasta tu total satisfacción.',
            duration: '3-5 días',
            color: 'cyber-neon',
        },
        {
            number: '05',
            icon: FaHandshake,
            title: 'Entrega & Soporte',
            description: 'Entrego el proyecto finalizado con documentación. Soporte post-entrega incluido.',
            duration: 'Ongoing',
            color: 'cyber-blue',
        },
    ];

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-cyber-dark">
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/50 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Cómo Trabajo</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Proceso transparente y colaborativo. Mantengo comunicación constante y te involucro en cada paso.
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple via-cyber-pink via-cyber-neon to-cyber-blue transform -translate-y-1/2 opacity-20"></div>

                    <div className="grid grid-cols-5 gap-4">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Step Card */}
                                <div className="glass-effect p-6 rounded-2xl border border-gray-800 hover:border-cyber-purple card-hover group">
                                    {/* Number Badge */}
                                    <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-${step.color} flex items-center justify-center font-bold text-cyber-darker shadow-xl`}>
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-xl bg-${step.color}/20 border border-${step.color}/30 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                                        <step.icon className={`w-8 h-8 text-${step.color}`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-4 text-center">
                                        {step.description}
                                    </p>

                                    {/* Duration */}
                                    <div className={`text-center pt-3 border-t border-gray-800`}>
                                        <span className="text-gray-500 text-xs">Duración:</span>
                                        <div className={`text-${step.color} font-semibold text-sm mt-1`}>
                                            {step.duration}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden space-y-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative pl-12">
                            {/* Timeline Line */}
                            {index !== steps.length - 1 && (
                                <div className={`absolute left-6 top-16 bottom-0 w-0.5 bg-${step.color}/30`}></div>
                            )}

                            {/* Number Circle */}
                            <div className={`absolute left-0 top-0 w-12 h-12 rounded-full bg-${step.color} flex items-center justify-center font-bold text-cyber-darker shadow-xl`}>
                                {step.number}
                            </div>

                            {/* Card */}
                            <div className="glass-effect p-6 rounded-2xl border border-gray-800">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-lg bg-${step.color}/20 border border-${step.color}/30 flex items-center justify-center flex-shrink-0`}>
                                        <step.icon className={`w-6 h-6 text-${step.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {step.title}
                                        </h3>
                                        <span className={`text-${step.color} text-sm font-semibold`}>
                                            {step.duration}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Commitment Section */}
                <div className="mt-16 glass-effect p-8 rounded-2xl border border-cyber-neon/30 bg-cyber-neon/5">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                💪 Mi Compromiso Contigo
                            </h3>
                            <p className="text-gray-300">
                                Comunicación constante, entregas a tiempo, código de calidad y soporte post-entrega.
                                Tu éxito es mi éxito. Trabajo hasta que estés 100% satisfecho.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="text-6xl">🤝</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
