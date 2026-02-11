'use client';

import { useState } from 'react';
import { FaTimes, FaExpand, FaEye } from 'react-icons/fa';
import Image from 'next/image';

interface CertificateViewerProps {
    isOpen: boolean;
    onClose: () => void;
    certificateUrl: string;
    title: string;
    institution: string;
}

export default function CertificateViewer({
    isOpen,
    onClose,
    certificateUrl,
    title,
    institution,
}: CertificateViewerProps) {
    const [isZoomed, setIsZoomed] = useState(false);

    if (!isOpen) return null;

    // Prevenir clic derecho en la imagen
    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        return false;
    };

    // Prevenir arrastrar imagen
    const handleDragStart = (e: React.DragEvent) => {
        e.preventDefault();
        return false;
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-6xl max-h-[95vh] glass-effect rounded-2xl border border-cyber-cyan/30 overflow-hidden animate-slide-up">
                {/* Header */}
                <div className="sticky top-0 z-10 glass-effect border-b border-gray-800 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white">{title}</h3>
                            <p className="text-gray-400 text-sm">{institution}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsZoomed(!isZoomed)}
                                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-cyber-cyan hover:bg-gray-800 transition-all"
                                aria-label={isZoomed ? 'Reducir' : 'Ampliar'}
                            >
                                <FaExpand className="w-4 h-4" />
                            </button>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                                aria-label="Cerrar"
                            >
                                <FaTimes className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-auto max-h-[calc(95vh-80px)] bg-gray-900">
                    <div
                        className={`relative mx-auto transition-all duration-300 ${isZoomed ? 'max-w-full' : 'max-w-3xl'
                            }`}
                        onContextMenu={handleContextMenu}
                        onDragStart={handleDragStart}
                    >
                        {/* Contenedor de imagen con marca de agua */}
                        <div
                            className="relative select-none"
                            style={{
                                userSelect: 'none',
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                            }}
                        >
                            {/* Imagen del certificado */}
                            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                                {certificateUrl ? (
                                    <Image
                                        src={certificateUrl}
                                        alt={`Certificado: ${title}`}
                                        width={1200}
                                        height={900}
                                        className="w-full h-auto"
                                        draggable={false}
                                        onContextMenu={handleContextMenu}
                                        style={{
                                            pointerEvents: 'none',
                                            userSelect: 'none',
                                        }}
                                        unoptimized
                                    />
                                ) : (
                                    <div className="w-full aspect-[4/3] flex items-center justify-center bg-gray-800">
                                        <div className="text-center">
                                            <FaEye className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                            <p className="text-gray-400">Certificado no disponible</p>
                                            <p className="text-gray-500 text-sm mt-2">
                                                Sube el archivo del certificado para visualizarlo
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Marca de agua diagonal */}
                                <div
                                    className="absolute inset-0 pointer-events-none select-none"
                                    style={{
                                        background: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 200px,
                      rgba(6, 182, 212, 0.03) 200px,
                      rgba(6, 182, 212, 0.03) 400px
                    )`,
                                    }}
                                >
                                    {/* Textos de marca de agua */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div
                                            className="text-6xl md:text-8xl font-bold opacity-5 select-none pointer-events-none"
                                            style={{
                                                transform: 'rotate(-45deg)',
                                                color: '#06b6d4',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                            }}
                                        >
                                            ANTONIO RUIZ
                                        </div>
                                    </div>

                                    {/* Marca de agua adicional en las esquinas */}
                                    <div className="absolute top-4 right-4 text-xs text-cyber-cyan/30 font-mono select-none">
                                        © Antonio Ruiz Canchica
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-xs text-cyber-cyan/30 font-mono select-none">
                                        Portafolio Oficial
                                    </div>
                                </div>

                                {/* Overlay transparente para prevenir capturas fáciles */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(transparent, transparent)',
                                    }}
                                ></div>
                            </div>

                            {/* Advertencia de protección */}
                            <div className="mt-4 glass-effect p-3 rounded-lg border border-cyber-cyan/20">
                                <p className="text-gray-400 text-xs text-center flex items-center justify-center gap-2">
                                    <span className="text-cyber-cyan">🔒</span>
                                    Este certificado está protegido. La copia, descarga o distribución no autorizada está prohibida.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Prevenir selección de texto en todo el modal */}
            <style jsx>{`
        * {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
        </div>
    );
}
