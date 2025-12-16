import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = ({ title, subtitle, cta, ctaLink, ctaSecondary, ctaSecondaryLink }) => {
    const { t } = useTranslation();
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        '/images/Cultura.png',
        '/images/Tradiciones.png',
        '/images/Identidad.png',
        '/images/Vestimenta.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16 pt-16">
            {/* Carrusel de imágenes de fondo */}
            <div className="absolute inset-0 z-0">
                {images.map((image, index) => (
                    <div
                        key={image}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Hero background ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay con gradiente para mejorar legibilidad */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-nocturno-900/90 via-indigo-nocturno-800/85 to-terracotta-700/80"></div>
                    </div>
                ))}
            </div>

            {/* Elementos decorativos animados */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gold-solar-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise-glaciar-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-andino-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <div className="inline-block px-4 py-2 bg-gold-solar-500/20 backdrop-blur-sm rounded-full border border-gold-solar-400/30 mb-6">
                        <p className="text-gold-solar-200 font-medium text-sm">
                            {t('home.hero.badge')}
                        </p>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white drop-shadow-2xl"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl sm:text-2xl text-cream-100 mb-10 max-w-3xl mx-auto drop-shadow-lg"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    {cta && ctaLink && (
                        <a
                            href={ctaLink}
                            className="px-8 py-4 bg-terracotta-600 text-white rounded-xl font-semibold hover:bg-terracotta-700 transition-all duration-300 shadow-2xl hover:shadow-terracotta-600/50 transform hover:-translate-y-1 flex items-center space-x-2 group"
                        >
                            <span>{cta}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    )}

                    {ctaSecondary && ctaSecondaryLink && (
                        <a
                            href={ctaSecondaryLink}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg"
                        >
                            <span>{ctaSecondary}</span>
                        </a>
                    )}
                </motion.div>

                {/* Indicadores del carrusel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex justify-center space-x-2 mt-12"
                >
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentImage
                                    ? 'bg-gold-solar-400 w-8'
                                    : 'bg-white/40 hover:bg-white/60'
                            }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Patrón decorativo sutil en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
    );
};

export default Hero;
