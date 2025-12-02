import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimeBackground from './AnimeBackground';

const Hero = ({ title, subtitle, cta, ctaLink, ctaSecondary, ctaSecondaryLink }) => {
    return (
        <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-gold-50">
            <AnimeBackground variant="hero" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 gradient-text"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    {cta && ctaLink && (
                        <a
                            href={ctaLink}
                            className="btn-primary flex items-center space-x-2 group"
                        >
                            <span>{cta}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    )}

                    {ctaSecondary && ctaSecondaryLink && (
                        <a
                            href={ctaSecondaryLink}
                            className="btn-secondary flex items-center space-x-2"
                        >
                            <span>{ctaSecondary}</span>
                        </a>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
