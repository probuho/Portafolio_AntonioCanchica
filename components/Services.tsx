'use client';

import { FaCode, FaRocket, FaPalette, FaShoppingCart, FaMobile, FaCogs, FaChartLine, FaUsers } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            icon: FaCode,
            title: 'Desarrollo Web Full Stack',
            description: 'Sitios web modernos y aplicaciones web con React, Next.js y TypeScript',
            features: [
                'Landing Pages profesionales',
                'Sitios web corporativos',
                'Aplicaciones web interactivas',
                'Portafolios personalizados',
            ],
            priceRange: 'Desde $300',
            color: 'cyber-cyan',
        },
        {
            icon: FaShoppingCart,
            title: 'E-Commerce & Marketplaces',
            description: 'Tiendas online y plataformas de comercio electrónico completas',
            features: [
                'Tiendas online con carrito',
                'Pasarelas de pago integradas',
                'Panel de administración',
                'Gestión de inventario',
            ],
            priceRange: 'Desde $800',
            color: 'cyber-purple',
        },
        {
            icon: FaUsers,
            title: 'Marketing Digital',
            description: 'Gestión de redes sociales y estrategias de contenido digital',
            features: [
                'Community Management',
                'Creación de contenido',
                'Social Media Strategy',
                'Analítica y reportes',
            ],
            priceRange: 'Desde $200/mes',
            color: 'cyber-pink',
        },
        {
            icon: FaMobile,
            title: 'Desarrollo Responsivo',
            description: 'Diseños que se adaptan perfectamente a todos los dispositivos',
            features: [
                'Mobile-first design',
                'Optimización para tablets',
                'UX/UI moderno',
                'Performance optimizada',
            ],
            priceRange: 'Incluido',
            color: 'cyber-neon',
        },
        {
            icon: FaCogs,
            title: 'Soporte & Mantenimiento',
            description: 'Mantenimiento técnico y actualizaciones de sitios existentes',
            features: [
                'Actualizaciones de seguridad',
                'Corrección de bugs',
                'Mejoras de rendimiento',
                'Soporte técnico continuo',
            ],
            priceRange: 'Desde $150/mes',
            color: 'cyber-blue',
        },
        {
            icon: FaChartLine,
            title: 'Consultoría Técnica',
            description: 'Asesoría en tecnología y optimización de procesos digitales',
            features: [
                'Auditoría de código',
                'Selección de tecnologías',
                'Optimización de procesos',
                'Capacitación técnica',
            ],
            priceRange: 'Por proyecto',
            color: 'cyber-purple',
        },
    ];

    return (
        <section id="servicios" className="relative py-20 md:py-32 overflow-hidden bg-cyber-darker">
            <div className="absolute inset-0 cyber-grid opacity-10"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-neon/10 border border-cyber-neon rounded-full mb-4">
                        <div className="w-2 h-2 bg-cyber-neon rounded-full animate-pulse"></div>
                        <span className="text-cyber-neon font-semibold text-sm">Disponible para proyectos</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Servicios Profesionales</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Transformo ideas en soluciones digitales reales. Desarrollo web moderno, marketing digital y soporte técnico integral.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="glass-effect p-6 rounded-2xl border border-gray-800 hover:border-cyber-purple card-hover group"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-xl bg-${service.color}/20 border border-${service.color}/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <service.icon className={`w-8 h-8 text-${service.color}`} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-purple transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-4 text-sm">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                        <span className={`text-${service.color} mt-1`}>▹</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Price */}
                            <div className={`pt-4 border-t border-gray-800 flex items-center justify-between`}>
                                <span className="text-gray-500 text-sm">Inversión:</span>
                                <span className={`text-${service.color} font-bold text-lg`}>
                                    {service.priceRange}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="glass-effect p-8 md:p-12 rounded-2xl border border-cyber-cyan/30 text-center bg-gradient-to-r from-cyber-purple/5 to-cyber-cyan/5">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        ¿Tienes un proyecto en mente?
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                        Hablemos de tu proyecto. Ofrezco consultas iniciales gratuitas para entender tus necesidades y proponer la mejor solución.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contacto"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-lg font-semibold text-white hover:scale-105 transition-all hover:shadow-2xl hover:shadow-cyber-cyan/50"
                        >
                            <FaRocket className="group-hover:animate-bounce" />
                            Solicitar Cotización Gratis
                        </a>
                        <a
                            href="https://wa.me/584244611848"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass-effect border border-cyber-purple rounded-lg font-semibold text-white hover:scale-105 transition-all hover:border-cyber-neon"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp Directo
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-8 pt-8 border-t border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold gradient-text mb-1">7+</div>
                            <div className="text-gray-400 text-sm">Años de Experiencia</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                            <div className="text-gray-400 text-sm">Proyectos Entregados</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                            <div className="text-gray-400 text-sm">Soporte Disponible</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold gradient-text mb-1">∞</div>
                            <div className="text-gray-400 text-sm">Compromiso Total</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
