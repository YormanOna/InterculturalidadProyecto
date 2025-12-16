import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBook, 
    faUsers, 
    faTree,
    faHashtag,
    faPalette,
    faPaw,
    faUtensils,
    faHand,
    faVolumeHigh,
    faHeart,
    faSun
} from '@fortawesome/free-solid-svg-icons';

const Learn = () => {
    const { t, i18n } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('greetings');

    const categories = [
        { id: 'greetings', icon: faHand, color: 'from-terracotta-500 to-terracotta-700' },
        { id: 'family', icon: faUsers, color: 'from-gold-solar-500 to-gold-solar-700' },
        { id: 'nature', icon: faTree, color: 'from-green-chakra-500 to-forest-600' },
        { id: 'numbers', icon: faHashtag, color: 'from-turquoise-glaciar-500 to-sky-600' },
        { id: 'colors', icon: faPalette, color: 'from-purple-andino-500 to-indigo-nocturno-600' },
        { id: 'animals', icon: faPaw, color: 'from-terracotta-600 to-gold-solar-600' },
        { id: 'food', icon: faUtensils, color: 'from-green-chakra-600 to-turquoise-glaciar-600' },
        { id: 'body', icon: faHeart, color: 'from-terracotta-500 to-purple-andino-600' },
    ];

    // Palabras en español-kichwa (las palabras son las mismas para todos los idiomas)
    const wordsData = t('learn.words', { returnObjects: true });

    const speakWord = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'es-ES'; // Usar español para Kichwa
            utterance.rate = 0.8; // Más lento para mejor comprensión
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="min-h-screen bg-cream-50">
            {/* Hero Section */}
            <div className="relative min-h-screen bg-gradient-to-br from-purple-andino-900 via-indigo-nocturno-900 to-terracotta-900 text-white overflow-hidden flex items-center -mt-16 pt-16">
                {/* Elementos decorativos */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-gold-solar-400 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise-glaciar-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Patrón decorativo */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Contenido izquierdo */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center space-x-2 bg-gold-solar-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gold-solar-400/30"
                            >
                                <FontAwesomeIcon icon={faBook} className="text-gold-solar-400" />
                                <span className="text-sm font-medium text-gold-solar-300">{t('learn.hero.badge')}</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
                            >
                                {t('learn.title')}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl text-cream-100 leading-relaxed mb-8"
                            >
                                {t('learn.subtitle')}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4"
                            >
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                                    <FontAwesomeIcon icon={faBook} className="text-3xl text-gold-solar-400" />
                                    <div>
                                        <div className="text-2xl font-bold">8</div>
                                        <div className="text-sm text-cream-200">Categorías</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                                    <FontAwesomeIcon icon={faVolumeHigh} className="text-3xl text-turquoise-glaciar-400" />
                                    <div>
                                        <div className="text-2xl font-bold">60+</div>
                                        <div className="text-sm text-cream-200">Palabras</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Imagen derecha */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-solar-400/30 to-turquoise-glaciar-400/30 rounded-3xl blur-2xl"></div>
                                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                    <div className="grid grid-cols-2 gap-4">
                                        {['Alli puncha', 'Tayta', 'Inti', 'Yurak'].map((word, index) => (
                                            <motion.div
                                                key={word}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.6 + index * 0.1 }}
                                                className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 hover:scale-105 transition-transform cursor-pointer"
                                                onClick={() => speakWord(word)}
                                            >
                                                <FontAwesomeIcon icon={faSun} className="text-4xl text-gold-solar-300 mb-3" />
                                                <div className="font-display font-bold text-lg">{word}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Categorías */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            {t('learn.practice.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('learn.practice.subtitle')}
                        </p>
                    </motion.div>

                    {/* Tabs de categorías */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                                    selectedCategory === category.id
                                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                <FontAwesomeIcon icon={category.icon} />
                                <span>{t(`learn.categories.${category.id}`)}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Grid de palabras */}
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {wordsData[selectedCategory]?.map((word, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gradient-to-br from-cream-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-2 border-transparent hover:border-terracotta-300"
                                onClick={() => speakWord(word.kichwa)}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-500 mb-1">Español</div>
                                        <div className="text-lg font-semibold text-gray-800">{word.spanish}</div>
                                    </div>
                                    <button
                                        className="p-2 rounded-full bg-terracotta-100 text-terracotta-600 group-hover:bg-terracotta-600 group-hover:text-white transition-colors"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            speakWord(word.kichwa);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faVolumeHigh} />
                                    </button>
                                </div>

                                <div className="border-t-2 border-gold-solar-200 pt-4">
                                    <div className="text-sm font-medium text-gray-500 mb-1">Kichwa</div>
                                    <div className="text-2xl font-display font-bold text-terracotta-700 mb-2">
                                        {word.kichwa}
                                    </div>
                                    <div className="text-sm text-gray-500 italic">
                                        [{word.pronunciation}]
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sección de práctica */}
            <section className="py-16 bg-gradient-to-br from-cream-100 to-gold-solar-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <FontAwesomeIcon icon={faBook} className="text-6xl text-terracotta-600 mb-6" />
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Sigue Aprendiendo
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            El Kichwa es parte fundamental de nuestra identidad Karanki. Cada palabra lleva consigo siglos de sabiduría ancestral.
                        </p>
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="text-5xl mb-4">🗣️</div>
                            <p className="text-lg text-gray-700 italic">
                                "Shimikunata yachayqa, kawsayta yachaymi"
                            </p>
                            <p className="text-gray-600 mt-2">
                                (Aprender palabras es aprender a vivir)
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Learn;
