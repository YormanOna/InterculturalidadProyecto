import { useSpeech } from "react-text-to-speech";
import { Volume2, Pause, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TextToSpeech = ({ text, lang = 'es-ES', variant = 'default' }) => {
    const { speechStatus, start, pause, stop } = useSpeech({ 
        text,
        lang,
        rate: 0.9,
        pitch: 1,
        volume: 1
    });

    const isPlaying = speechStatus === 'started';
    const isPaused = speechStatus === 'paused';

    const handleClick = () => {
        if (isPlaying) {
            pause();
        } else if (isPaused) {
            start();
        } else {
            start();
        }
    };

    const handleStop = (e) => {
        e.stopPropagation();
        stop();
    };

    // Variantes de diseño
    const variants = {
        default: {
            button: "bg-gradient-to-r from-gold-solar-500 to-gold-solar-600 hover:from-gold-solar-600 hover:to-gold-solar-700",
            text: "text-white",
            size: "w-10 h-10",
            iconSize: "w-4 h-4"
        },
        hero: {
            button: "bg-white/90 hover:bg-white backdrop-blur-sm",
            text: "text-terracotta-700",
            size: "w-12 h-12",
            iconSize: "w-5 h-5"
        },
        minimal: {
            button: "bg-cream-100 hover:bg-cream-200 border border-cream-300",
            text: "text-terracotta-600",
            size: "w-9 h-9",
            iconSize: "w-4 h-4"
        }
    };

    const currentVariant = variants[variant] || variants.default;

    return (
        <div className="flex items-center gap-2">
            <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${currentVariant.button} ${currentVariant.size} rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group relative`}
                title={isPlaying ? "Pausar lectura" : "Reproducir audio"}
            >
                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="pause"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Pause className={`${currentVariant.iconSize} ${currentVariant.text}`} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="play"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Volume2 className={`${currentVariant.iconSize} ${currentVariant.text}`} />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {/* Indicador de reproducción */}
                {isPlaying && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-gold-solar-400"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                )}
            </motion.button>

            {/* Botón de stop - solo visible cuando está reproduciendo */}
            <AnimatePresence>
                {(isPlaying || isPaused) && (
                    <motion.button
                        onClick={handleStop}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center shadow-md transition-colors"
                        title="Detener lectura"
                    >
                        <Square className="w-3 h-3 text-white fill-white" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TextToSpeech;
