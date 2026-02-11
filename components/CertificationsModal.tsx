'use client';

import { useState } from 'react';
import { FaTimes, FaCertificate, FaCheckCircle, FaEye, FaFilter } from 'react-icons/fa';
import CertificateViewer from './CertificateViewer';

interface Certification {
    title: string;
    institution: string;
    year: string;
    description?: string;
    verified: boolean;
    certificatePath?: string; // Puede ser .jpg, .png, o .pdf - se detecta automáticamente
    category: 'marketing' | 'tecnico' | 'administrativo' | 'desarrollo' | 'otro';
}

interface CertificationsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CertificationsModal({ isOpen, onClose }: CertificationsModalProps) {
    const [viewerOpen, setViewerOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);
    const [filterCategory, setFilterCategory] = useState<string>('all');

    if (!isOpen) return null;

    // 🎓 AQUÍ PUEDES AGREGAR TODOS TUS CERTIFICADOS
    // Solo cambia el nombre del archivo según lo que tengas (puede ser .jpg, .png, o .pdf)
    const certifications: Certification[] = [
        // === MARKETING DIGITAL === 
        {
            title: 'Social Media Manager',
            institution: 'Creative Diseños Academy',
            year: '2021',
            description: 'Gestión profesional de redes sociales y estrategias de contenido digital',
            verified: true,
            certificatePath: '/certificates/social-media-manager.jpg', // Cambia a .pdf si lo tienes en PDF
            category: 'marketing',
        },
        {
            title: 'Community Manager Online',
            institution: 'Creative Diseños Academy',
            year: '2021',
            description: 'Administración de comunidades digitales y engagement',
            verified: true,
            certificatePath: '/certificates/community-manager-online.pdf', // Ejemplo de PDF
            category: 'marketing',
        },
        {
            title: 'Community Manager',
            institution: 'ALPESINC Agencia de Marketing',
            year: '2021',
            description: 'Estrategias de marketing digital y gestión de marca',
            verified: true,
            certificatePath: '/certificates/community-manager.jpg',
            category: 'marketing',
        },

        // === TÉCNICO/HARDWARE ===
        {
            title: 'Seguridad Electrónica 1',
            institution: 'Instituto de Capacitación Técnica Keys, C.A',
            year: '2017-2018',
            description: 'Instalación y configuración de sistemas de seguridad electrónica',
            verified: true,
            certificatePath: '/certificates/seguridad-electronica.jpg',
            category: 'tecnico',
        },
        {
            title: 'Reparación de Celulares',
            institution: 'Academia Americana',
            year: '2014',
            description: 'Diagnóstico y reparación de dispositivos móviles',
            verified: true,
            certificatePath: '/certificates/reparacion-celulares.jpg',
            category: 'tecnico',
        },
        {
            title: 'Mantenimiento y Reparación de Impresoras',
            institution: 'Instituto de Capacitación Técnica Keys',
            year: '2013',
            description: 'Mantenimiento preventivo y correctivo de equipos de impresión',
            verified: true,
            certificatePath: '/certificates/reparacion-impresoras.jpg',
            category: 'tecnico',
        },
        {
            title: 'Técnico de Reparación de Laptops',
            institution: 'Instituto de Capacitación Técnica Keys',
            year: '2012',
            description: 'Diagnóstico y reparación de hardware y software en laptops',
            verified: true,
            certificatePath: '/certificates/reparacion-laptops.jpg',
            category: 'tecnico',
        },

        // === ADMINISTRATIVO ===
        {
            title: 'Asistente Administrativo',
            institution: 'Academia Americana',
            year: '2015',
            description: 'Gestión administrativa y herramientas ofimáticas',
            verified: true,
            certificatePath: '/certificates/asistente-administrativo.jpg',
            category: 'administrativo',
        },

        // === AGREGA MÁS CERTIFICADOS AQUÍ ===
        // Copia y pega este bloque para cada nuevo certificado:
        /*
        {
          title: 'Nombre del Curso',
          institution: 'Nombre de la Institución',
          year: '2023',
          description: 'Breve descripción del curso',
          verified: true,
          certificatePath: '/certificates/nombre-archivo.jpg', // o .pdf
          category: 'desarrollo', // opciones: marketing, tecnico, administrativo, desarrollo, otro
        },
        */
    ];

    const categories = {
        all: 'Todos',
        marketing: 'Marketing Digital',
        tecnico: 'Técnico/Hardware',
        administrativo: 'Administrativo',
        desarrollo: 'Desarrollo',
        otro: 'Otros',
    };

    const filteredCertifications = filterCategory === 'all'
        ? certifications
        : certifications.filter(cert => cert.category === filterCategory);

    const handleViewCertificate = (cert: Certification) => {
        setSelectedCertificate(cert);
        setViewerOpen(true);
    };

    const handleCloseViewer = () => {
        setViewerOpen(false);
        setTimeout(() => setSelectedCertificate(null), 300);
    };

    // Contar certificaciones por categoría
    const getCategoryCount = (category: string) => {
        if (category === 'all') return certifications.length;
        return certifications.filter(cert => cert.category === category).length;
    };

    return (
        <>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                ></div>

                {/* Modal */}
                <div className="relative w-full max-w-5xl max-h-[90vh] glass-effect rounded-2xl border border-cyber-cyan/30 overflow-hidden animate-slide-up">
                    {/* Header */}
                    <div className="sticky top-0 z-10 glass-effect border-b border-gray-800 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-cyber-purple/20 rounded-lg flex items-center justify-center">
                                    <FaCertificate className="w-6 h-6 text-cyber-purple" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">
                                        Certificaciones Profesionales
                                    </h2>
                                    <p className="text-gray-400 text-sm">
                                        {certifications.length} certificaciones completadas
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                                aria-label="Cerrar modal"
                            >
                                <FaTimes className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Filtros por categoría */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2">
                            <FaFilter className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            {Object.entries(categories).map(([key, label]) => (
                                <button
                                    key={key}
                                    onClick={() => setFilterCategory(key)}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${filterCategory === key
                                            ? 'bg-cyber-purple text-white'
                                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                        }`}
                                >
                                    {label} ({getCategoryCount(key)})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                        <div className="grid md:grid-cols-2 gap-4">
                            {filteredCertifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="glass-effect p-5 rounded-xl border border-gray-800 hover:border-cyber-purple card-hover group"
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyber-purple transition-colors">
                                                {cert.title}
                                            </h3>
                                            <p className="text-cyber-cyan text-sm font-semibold">
                                                {cert.institution}
                                            </p>
                                        </div>
                                        {cert.verified && (
                                            <div className="flex-shrink-0 ml-2">
                                                <FaCheckCircle className="w-5 h-5 text-cyber-neon" title="Certificación verificada" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Year */}
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 bg-cyber-purple/20 border border-cyber-purple/30 rounded-lg text-cyber-purple text-xs font-mono">
                                            {cert.year}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    {cert.description && (
                                        <p className="text-gray-400 text-sm mb-3">
                                            {cert.description}
                                        </p>
                                    )}

                                    {/* Footer con botón Ver Certificado */}
                                    <div className="pt-3 border-t border-gray-800 space-y-2">
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <FaCheckCircle className="w-3 h-3 text-cyber-neon" />
                                                Completado
                                            </span>
                                            {cert.certificatePath && (
                                                <span className="text-cyber-cyan text-[10px]">
                                                    {cert.certificatePath.endsWith('.pdf') ? 'PDF' : 'IMG'}
                                                </span>
                                            )}
                                        </div>

                                        {/* Botón Ver Certificado */}
                                        <button
                                            onClick={() => handleViewCertificate(cert)}
                                            className="w-full px-4 py-2 bg-cyber-cyan/20 border border-cyber-cyan hover:bg-cyber-cyan/30 rounded-lg text-cyber-cyan font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
                                        >
                                            <FaEye />
                                            Ver Certificado
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredCertifications.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-400">No hay certificaciones en esta categoría</p>
                            </div>
                        )}

                        {/* Note */}
                        <div className="mt-6 glass-effect p-4 rounded-xl border border-cyber-cyan/30 bg-cyber-cyan/5">
                            <p className="text-gray-300 text-sm text-center">
                                <FaCheckCircle className="inline w-4 h-4 text-cyber-neon mr-2" />
                                Todas las certificaciones han sido verificadas y completadas exitosamente
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Viewer */}
            {selectedCertificate && (
                <CertificateViewer
                    isOpen={viewerOpen}
                    onClose={handleCloseViewer}
                    certificateUrl={selectedCertificate.certificatePath || ''}
                    title={selectedCertificate.title}
                    institution={selectedCertificate.institution}
                />
            )}
        </>
    );
}
