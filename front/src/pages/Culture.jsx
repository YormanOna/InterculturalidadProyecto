import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TextToSpeech from '../components/UI/TextToSpeech';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShirt, 
    faLanguage, 
    faPalette,
    faMale,
    faFemale,
    faGem,
    faScroll,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const Culture = () => {
    const { t, i18n } = useTranslation();

    const speechLang = {
        'es': 'es-ES',
        'en': 'en-US',
        'qu': 'es-ES'
    };

    const menClothingItems = t('culture.clothing.men.items', { returnObjects: true });
    const womenClothingItems = t('culture.clothing.women.items', { returnObjects: true });

    return (
        <div className="min-h-screen bg-cream-50">
            {/* Hero Section mejorado con imagen de fondo */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16 pt-16">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <img 
                        src="/images/Cultura.png" 
                        alt="Cultura Karanki" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-terracotta-900/95 via-terracotta-800/90 to-gold-solar-700/85"></div>
                </div>

                {/* Patrón decorativo */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>

                {/* Elementos decorativos flotantes */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-gold-solar-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-terracotta-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Columna izquierda - Contenido */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block mb-6"
                            >
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                                    <FontAwesomeIcon icon={faShirt} className="text-5xl text-white" />
                                </div>
                            </motion.div>
                            
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white drop-shadow-2xl"
                            >
                                {t('culture.title')}
                            </motion.h1>
                            
                            <div className="flex items-start gap-4">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl md:text-2xl text-cream-100 leading-relaxed drop-shadow-lg flex-1"
                                >
                                    {t('culture.subtitle')}
                                </motion.p>
                                <TextToSpeech 
                                    text={`${t('culture.title')}. ${t('culture.subtitle')}`}
                                    lang={speechLang[i18n.language]}
                                    variant="hero"
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4 mt-8"
                            >
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                                    <FontAwesomeIcon icon={faShirt} className="text-gold-solar-300" />
                                    <span className="text-white font-medium">{t('culture.hero.vestimentaTag')}</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                                    <FontAwesomeIcon icon={faPalette} className="text-pink-300" />
                                    <span className="text-white font-medium">{t('culture.hero.artesaniasTag')}</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                                    <FontAwesomeIcon icon={faLanguage} className="text-turquoise-glaciar-300" />
                                    <span className="text-white font-medium">{t('culture.hero.idiomaTag')}</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Columna derecha - Tarjetas decorativas */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="hidden lg:grid grid-cols-2 gap-4"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                                    <FontAwesomeIcon icon={faMale} className="text-2xl text-white" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{t('culture.hero.menCard.title')}</h3>
                                <p className="text-cream-200 text-sm">{t('culture.hero.menCard.description')}</p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center mb-4">
                                    <FontAwesomeIcon icon={faFemale} className="text-2xl text-white" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{t('culture.hero.womenCard.title')}</h3>
                                <p className="text-cream-200 text-sm">{t('culture.hero.womenCard.description')}</p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-gold-solar-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                                    <FontAwesomeIcon icon={faGem} className="text-2xl text-white" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{t('culture.hero.embroideryCard.title')}</h3>
                                <p className="text-cream-200 text-sm">{t('culture.hero.embroideryCard.description')}</p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-green-chakra-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                                    <FontAwesomeIcon icon={faLanguage} className="text-2xl text-white" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{t('culture.hero.languageCard.title')}</h3>
                                <p className="text-cream-200 text-sm">{t('culture.hero.languageCard.description')}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Flecha indicadora de scroll */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </motion.div>
            </div>

            {/* Sección de imagen de vestimenta - Rediseñada completamente */}
            <section className="relative bg-indigo-nocturno-900">
                {/* Imagen principal en grid split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
                    {/* Lado izquierdo - Imagen */}
                    <div className="relative h-[400px] lg:h-auto overflow-hidden">
                        <img 
                            src="/images/Vestimenta.png" 
                            alt="Vestimenta Tradicional Karanki" 
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-indigo-nocturno-900 lg:opacity-100 opacity-60"></div>
                        
                        {/* Elementos decorativos sobre la imagen */}
                        <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                            <p className="text-gold-solar-300 font-medium text-sm">✨ {t('culture.hero.patrimonio')}</p>
                        </div>
                    </div>

                    {/* Lado derecho - Contenido */}
                    <div className="relative flex items-center bg-gradient-to-br from-indigo-nocturno-900 to-indigo-nocturno-800">
                        {/* Elementos decorativos de fondo */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-solar-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 px-8 lg:px-16 py-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-block px-4 py-2 bg-gold-solar-500/20 backdrop-blur-sm rounded-full border border-gold-solar-400/30 mb-6">
                                    <p className="text-gold-solar-300 font-medium text-sm">
                                        👗 {t('culture.hero.identidad')}
                                    </p>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                    {t('culture.vestimenta.title')}
                                </h2>

                                <div className="flex items-start gap-4 mb-8">
                                    <p className="text-xl text-cream-100 leading-relaxed flex-1">
                                        {t('culture.hero.vestimentaDesc')}
                                    </p>
                                    <TextToSpeech 
                                        text={`${t('culture.vestimenta.title')}. ${t('culture.hero.vestimentaDesc')}`}
                                        lang={speechLang[i18n.language]}
                                        variant="hero"
                                    />
                                </div>

                                {/* Características destacadas */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <FontAwesomeIcon icon={faMale} className="text-sky-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">{t('culture.vestimenta.men')}</h3>
                                            <p className="text-cream-200 text-sm">{t('culture.vestimenta.menDesc')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <FontAwesomeIcon icon={faFemale} className="text-pink-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">{t('culture.vestimenta.women')}</h3>
                                            <p className="text-cream-200 text-sm">{t('culture.vestimenta.womenDesc')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-gold-solar-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <FontAwesomeIcon icon={faGem} className="text-gold-solar-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">{t('culture.vestimenta.embroidery')}</h3>
                                            <p className="text-cream-200 text-sm">{t('culture.vestimenta.embroideryDesc')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-terracotta-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <FontAwesomeIcon icon={faPalette} className="text-terracotta-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">{t('culture.vestimenta.colors')}</h3>
                                            <p className="text-cream-200 text-sm">{t('culture.vestimenta.colorsDesc')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Estadísticas */}
                                <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
                                    <div>
                                        <p className="text-3xl font-bold text-gold-solar-400 mb-1">500+</p>
                                        <p className="text-cream-300 text-sm">{t('culture.vestimenta.yearsOfTradition')}</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-terracotta-400 mb-1">100%</p>
                                        <p className="text-cream-300 text-sm">{t('culture.vestimenta.handmade')}</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-turquoise-glaciar-400 mb-1">∞</p>
                                        <p className="text-cream-300 text-sm">{t('culture.vestimenta.culturalIdentity')}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Onda decorativa de transición */}
                <div className="absolute bottom-0 left-0 right-0 h-20">
                    <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z" fill="#FFFEF9" />
                    </svg>
                </div>
            </section>

            {/* Clothing Section - Diseño mejorado */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-terracotta-700 mb-4">
                        {t('culture.clothing.sectionTitle')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t('culture.clothing.sectionDescription')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Men's Clothing */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-sky-200 overflow-hidden group hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Decoración de fondo */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-sky-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <FontAwesomeIcon icon={faMale} className="text-3xl text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-3xl font-display font-bold text-gray-800">
                                        {t('culture.clothing.men.title')}
                                    </h3>
                                    <p className="text-sky-600 font-medium">Vestimenta Masculina</p>
                                </div>
                                <TextToSpeech 
                                    text={`${t('culture.clothing.men.title')}. ${t('culture.clothing.men.description')}. ${menClothingItems.join('. ')}`}
                                    lang={speechLang[i18n.language]}
                                    variant="minimal"
                                />
                            </div>
                            
                            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                                {t('culture.clothing.men.description')}
                            </p>
                            
                            <div className="space-y-3">
                                {menClothingItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-3 bg-white rounded-xl p-4 border border-sky-200 hover:border-sky-400 hover:shadow-md transition-all group/item"
                                    >
                                        <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-sky-200 transition-colors">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-sky-600 text-lg" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Women's Clothing */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-xl border border-pink-200 overflow-hidden group hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Decoración de fondo */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <FontAwesomeIcon icon={faFemale} className="text-3xl text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-3xl font-display font-bold text-gray-800">
                                        {t('culture.clothing.women.title')}
                                    </h3>
                                    <p className="text-pink-600 font-medium">Vestimenta Femenina</p>
                                </div>
                                <TextToSpeech 
                                    text={`${t('culture.clothing.women.title')}. ${t('culture.clothing.women.description')}. ${womenClothingItems.join('. ')}`}
                                    lang={speechLang[i18n.language]}
                                    variant="minimal"
                                />
                            </div>
                            
                            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                                {t('culture.clothing.women.description')}
                            </p>
                            
                            <div className="space-y-3">
                                {womenClothingItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-3 bg-white rounded-xl p-4 border border-pink-200 hover:border-pink-400 hover:shadow-md transition-all group/item"
                                    >
                                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-pink-200 transition-colors">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-600 text-lg" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Language Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-forest-50 to-gold-50 rounded-2xl p-8 md:p-12 border-2 border-forest-200 mb-16"
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <FontAwesomeIcon icon={faLanguage} className="text-5xl text-forest-600" />
                        <div className="flex-1">
                            <h2 className="text-4xl font-display font-bold text-gray-800">
                                {t('culture.language.title')}
                            </h2>
                            <p className="text-lg text-gray-600">{t('culture.language.subtitle')}</p>
                        </div>
                        <TextToSpeech 
                            text={`${t('culture.language.title')}. ${t('culture.language.subtitle')}. ${t('culture.language.description')}. ${t('culture.language.status')}: ${t('culture.language.statusDescription')}. ${t('culture.language.revitalization')}: ${t('culture.language.revitalizationDescription')}`}
                            lang={speechLang[i18n.language]}
                            variant="default"
                        />
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {t('culture.language.description')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Current Status */}
                        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gold-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {t('culture.language.status')}
                            </h3>
                            <p className="text-gray-700">
                                {t('culture.language.statusDescription')}
                            </p>
                        </div>

                        {/* Revitalization */}
                        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-forest-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {t('culture.language.revitalization')}
                            </h3>
                            <p className="text-gray-700">
                                {t('culture.language.revitalizationDescription')}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Crafts Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block mb-4"
                        >
                            <div className="w-16 h-16 bg-terracotta-100 rounded-2xl flex items-center justify-center mx-auto">
                                <FontAwesomeIcon icon={faPalette} className="text-4xl text-terracotta-600" />
                            </div>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-terracotta-700 mb-4">
                            {t('culture.crafts.title')}
                        </h2>
                        <div className="flex items-start gap-4 justify-center max-w-3xl mx-auto">
                            <p className="text-lg text-gray-600 flex-1">
                                {t('culture.crafts.subtitle')}
                            </p>
                            <TextToSpeech 
                                text={`${t('culture.crafts.title')}. ${t('culture.crafts.subtitle')}. ${t('culture.crafts.embroidery.title')}: ${t('culture.crafts.embroidery.description')}. ${t('culture.crafts.beadwork.title')}: ${t('culture.crafts.beadwork.description')}. ${t('culture.crafts.tablecloths.title')}: ${t('culture.crafts.tablecloths.description')}`}
                                lang={speechLang[i18n.language]}
                                variant="default"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Embroidery */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-gradient-to-br from-terracotta-50 to-orange-50 rounded-3xl p-8 shadow-xl border border-terracotta-200 overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <FontAwesomeIcon icon={faGem} className="text-3xl text-white" />
                                    </div>
                                    <span className="px-3 py-1 bg-terracotta-600 text-white text-xs font-semibold rounded-full">
                                        Tradicional
                                    </span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                                    {t('culture.crafts.embroidery.title')}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('culture.crafts.embroidery.description')}
                                </p>
                            </div>
                        </motion.div>

                        {/* Beadwork */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative bg-gradient-to-br from-gold-solar-50 to-yellow-50 rounded-3xl p-8 shadow-xl border border-gold-solar-200 overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-solar-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gold-solar-500 to-gold-solar-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <FontAwesomeIcon icon={faGem} className="text-3xl text-white" />
                                    </div>
                                    <span className="px-3 py-1 bg-gold-solar-600 text-white text-xs font-semibold rounded-full">
                                        {t('culture.crafts.badges.artisan')}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                                    {t('culture.crafts.beadwork.title')}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('culture.crafts.beadwork.description')}
                                </p>
                            </div>
                        </motion.div>

                        {/* Tablecloths */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative bg-gradient-to-br from-green-chakra-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-green-chakra-200 overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-chakra-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-chakra-500 to-green-chakra-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <FontAwesomeIcon icon={faScroll} className="text-3xl text-white" />
                                    </div>
                                    <span className="px-3 py-1 bg-turquoise-glaciar-600 text-white text-xs font-semibold rounded-full">
                                        {t('culture.crafts.badges.manual')}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                                    {t('culture.crafts.tablecloths.title')}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('culture.crafts.tablecloths.description')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Culture;
