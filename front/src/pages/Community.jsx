import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TextToSpeech from '../components/UI/TextToSpeech';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUsers, 
    faHandshake,
    faSeedling,
    faHouse,
    faCow,
    faStore,
    faUserTie,
    faFemale,
    faShop
} from '@fortawesome/free-solid-svg-icons';

const Community = () => {
    const { t, i18n } = useTranslation();

    const speechLang = {
        'es': 'es-ES',
        'en': 'en-US',
        'qu': 'es-ES'
    };

    const crops = t('community.economy.agriculture.crops', { returnObjects: true });

    // Función para obtener el icono apropiado para cada cultivo
    const getCropIcon = (crop) => {
        const cropName = crop.toLowerCase();
        if (cropName.includes('papa')) return '🥔';
        if (cropName.includes('maíz') || cropName.includes('sara')) return '🌽';
        if (cropName.includes('oca')) return '🟣';
        if (cropName.includes('melloco')) return '🟡';
        if (cropName.includes('cebada') || cropName.includes('barley')) return '🌾';
        if (cropName.includes('trigo') || cropName.includes('wheat')) return '🌾';
        if (cropName.includes('haba') || cropName.includes('broad')) return '🫘';
        if (cropName.includes('chocho') || cropName.includes('lupin')) return '🫛';
        if (cropName.includes('quinua') || cropName.includes('quinoa') || cropName.includes('kinwa')) return '🌾';
        return '🌱'; // Default icon
    };

    return (
        <div className="min-h-screen bg-cream-50">
            {/* Hero Section - Diseño completamente diferente */}
            <div className="relative bg-gradient-to-br from-green-chakra-900 via-forest-800 to-terracotta-900 overflow-hidden">
                {/* Imagen de fondo con parallax effect */}
                <div className="absolute inset-0 opacity-30">
                    <img 
                        src="/images/Conocenos.png" 
                        alt="Comunidad Karanki" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Patrón geométrico andino */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 35px,
                            rgba(255,255,255,0.1) 35px,
                            rgba(255,255,255,0.1) 70px
                        ), repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 35px,
                            rgba(255,255,255,0.1) 35px,
                            rgba(255,255,255,0.1) 70px
                        )`
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
                    {/* Diseño vertical centrado */}
                    <div className="flex flex-col items-center text-center space-y-8">
                        {/* Icono principal con efecto de brillo */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gold-solar-400/30 rounded-full blur-2xl animate-pulse"></div>
                            <div className="relative w-32 h-32 bg-gradient-to-br from-gold-solar-400 to-terracotta-500 rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
                                <FontAwesomeIcon icon={faUsers} className="text-6xl text-white" />
                            </div>
                        </motion.div>

                        {/* Título principal */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white drop-shadow-2xl">
                                {t('communityPage.title')}
                            </h1>
                            <div className="w-32 h-1 bg-gradient-to-r from-gold-solar-400 via-white to-gold-solar-400 mx-auto rounded-full"></div>
                        </motion.div>

                        {/* Subtítulo */}
                        <div className="flex items-start gap-4 justify-center max-w-4xl">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-2xl md:text-3xl text-cream-100 leading-relaxed font-light flex-1 text-center"
                            >
                                {t('community.subtitle')}
                            </motion.p>
                            <TextToSpeech 
                                text={`${t('communityPage.title')}. ${t('community.subtitle')}`}
                                lang={speechLang[i18n.language]}
                                variant="hero"
                            />
                        </div>

                        {/* Estadísticas en línea horizontal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-wrap justify-center gap-8 pt-8"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center space-y-2"
                            >
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                    <span className="text-4xl">🏘️</span>
                                </div>
                                <p className="text-4xl font-bold text-gold-solar-300">12+</p>
                                <p className="text-cream-200 text-sm">{t('communityPage.stats.communities')}</p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center space-y-2"
                            >
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                    <span className="text-4xl">👨‍👩‍👧‍👦</span>
                                </div>
                                <p className="text-4xl font-bold text-green-chakra-300">1500+</p>
                                <p className="text-cream-200 text-sm">{t('communityPage.stats.families')}</p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center space-y-2"
                            >
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                    <span className="text-4xl">⏳</span>
                                </div>
                                <p className="text-4xl font-bold text-sky-300">500+</p>
                                <p className="text-cream-200 text-sm">{t('communityPage.stats.yearsOfHistory')}</p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center space-y-2"
                            >
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                    <span className="text-4xl">🌾</span>
                                </div>
                                <p className="text-4xl font-bold text-terracotta-300">∞</p>
                                <p className="text-cream-200 text-sm">{t('communityPage.stats.livingTradition')}</p>
                            </motion.div>
                        </motion.div>

                        {/* Tags informativos */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="flex flex-wrap justify-center gap-4 pt-4"
                        >
                            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 flex items-center space-x-2">
                                <FontAwesomeIcon icon={faHandshake} className="text-gold-solar-300 text-lg" />
                                <span className="text-white font-medium">{t('communityPage.tags.minga')}</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 flex items-center space-x-2">
                                <FontAwesomeIcon icon={faUserTie} className="text-sky-300 text-lg" />
                                <span className="text-white font-medium">{t('communityPage.tags.government')}</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 flex items-center space-x-2">
                                <FontAwesomeIcon icon={faSeedling} className="text-green-chakra-300 text-lg" />
                                <span className="text-white font-medium">{t('communityPage.tags.agriculture')}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Onda decorativa inferior */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#FFFEF9"/>
                    </svg>
                </div>
            </div>

            {/* Organization Section - Rediseñada */}
            <section className="relative bg-gradient-to-br from-indigo-nocturno-900 via-indigo-nocturno-800 to-purple-andino-900 py-20">
                {/* Elementos decorativos de fondo */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-solar-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 3px 3px, white 2px, transparent 0)',
                    backgroundSize: '60px 60px'
                }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-6 py-3 bg-gold-solar-500/20 backdrop-blur-sm rounded-full border border-gold-solar-400/30 mb-6">
                            <p className="text-gold-solar-300 font-medium">🏛️ {t('community.badges.organization')}</p>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            {t('community.organization.title')}
                        </h2>
                        <div className="flex items-start gap-4 justify-center max-w-4xl mx-auto">
                            <p className="text-xl text-cream-100 leading-relaxed flex-1">
                                {t('community.organization.subtitle')}
                            </p>
                            <TextToSpeech 
                                text={`${t('community.organization.title')}. ${t('community.organization.subtitle')}. ${t('community.organization.cabildo.title')}: ${t('community.organization.cabildo.description')}. ${t('community.organization.elders.title')}: ${t('community.organization.elders.description')}. ${t('community.organization.women.title')}: ${t('community.organization.women.description')}`}
                                lang={speechLang[i18n.language]}
                                variant="hero"
                            />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Consejo de Cabildo */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative bg-gradient-to-br from-sky-500/90 to-blue-600/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full">
                                <div className="flex flex-col h-full">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faUserTie} className="text-3xl text-white" />
                                    </div>
                                    
                                    <h3 className="text-3xl font-display font-bold text-white mb-4">
                                        {t('community.organization.cabildo.title')}
                                    </h3>
                                    
                                    <p className="text-cream-100 leading-relaxed mb-6 flex-grow">
                                        {t('community.organization.cabildo.description')}
                                    </p>
                                    
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                        <p className="text-white text-sm">
                                            <span className="font-bold">👤 Roles:</span> {t('community.organization.cabildo.roles')}
                                        </p>
                                    </div>

                                    {/* Badge decorativo */}
                                    <div className="absolute top-6 right-6">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                                            {t('community.badges.authority')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Consejo de Ancianos */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-solar-500 to-yellow-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative bg-gradient-to-br from-gold-solar-500/90 to-yellow-600/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full">
                                <div className="flex flex-col h-full">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform">
                                        👴
                                    </div>
                                    
                                    <h3 className="text-3xl font-display font-bold text-white mb-4">
                                        {t('community.organization.elders.title')}
                                    </h3>
                                    
                                    <p className="text-cream-100 leading-relaxed flex-grow">
                                        {t('community.organization.elders.description')}
                                    </p>

                                    {/* Badge decorativo */}
                                    <div className="absolute top-6 right-6">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                                            {t('community.badges.wisdom')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Participación de Mujeres */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative bg-gradient-to-br from-pink-500/90 to-rose-600/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full">
                                <div className="flex flex-col h-full">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faFemale} className="text-3xl text-white" />
                                    </div>
                                    
                                    <h3 className="text-3xl font-display font-bold text-white mb-4">
                                        {t('community.organization.women.title')}
                                    </h3>
                                    
                                    <p className="text-cream-100 leading-relaxed flex-grow">
                                        {t('community.organization.women.description')}
                                    </p>

                                    {/* Badge decorativo */}
                                    <div className="absolute top-6 right-6">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                                            {t('community.badges.equity')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Minga Section - Rediseñada como panel destacado */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden"
                    >
                        {/* Efecto de brillo de fondo */}
                        <div className="absolute inset-0 bg-gradient-to-r from-terracotta-500/20 via-gold-solar-500/20 to-terracotta-500/20 rounded-3xl blur-xl"></div>
                        
                        <div className="relative bg-gradient-to-br from-terracotta-600/80 to-terracotta-700/80 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
                            {/* Patrón decorativo interno */}
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: 'linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)',
                                backgroundSize: '20px 20px'
                            }}></div>

                            <div className="relative p-10 md:p-16">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Contenido principal */}
                                    <div>
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                                <FontAwesomeIcon icon={faHandshake} className="text-5xl text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                                                    {t('community.minga.title')}
                                                </h2>
                                                <span className="inline-flex items-center mt-2 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                                                    Trabajo Colectivo
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-xl text-cream-100 mb-8 leading-relaxed">
                                            {t('community.minga.description')}
                                        </p>

                                        {/* Características destacadas */}
                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                                                <span className="text-xl">💪</span>
                                                <span className="text-white font-medium text-sm">Solidaridad</span>
                                            </div>
                                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                                                <span className="text-xl">🤝</span>
                                                <span className="text-white font-medium text-sm">Reciprocidad</span>
                                            </div>
                                            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                                                <span className="text-xl">🏘️</span>
                                                <span className="text-white font-medium text-sm">Comunidad</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tarjetas informativas */}
                                    <div className="space-y-4">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                                        >
                                            <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                                                <span className="text-3xl mr-3">💪</span>
                                                {t('community.minga.principleTitle')}
                                            </h4>
                                            <p className="text-cream-200 leading-relaxed">{t('community.minga.principle')}</p>
                                        </motion.div>
                                        
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                                        >
                                            <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                                                <span className="text-3xl mr-3">🛠️</span>
                                                {t('community.minga.activitiesTitle')}
                                            </h4>
                                            <p className="text-cream-200 leading-relaxed">{t('community.minga.activities')}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Economy Section */}
            <section className="bg-gradient-to-br from-forest-50 to-cream-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-display font-bold gradient-text mb-4">
                            {t('community.economy.title')}
                        </h2>
                        <p className="text-lg text-gray-600">
                            {t('community.economy.subtitle')}
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {/* Agriculture */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-forest-200"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <FontAwesomeIcon icon={faSeedling} className="text-5xl text-forest-600" />
                                <div className="flex-1">
                                    <h3 className="text-3xl font-display font-bold text-gray-800">
                                        {t('community.economy.agriculture.title')}
                                    </h3>
                                    <span className="inline-flex items-center mt-1 px-3 py-1 rounded-full text-xs font-medium bg-forest-100 text-forest-700 border border-forest-300">
                                        Tradicional
                                    </span>
                                </div>
                                <TextToSpeech 
                                    text={`${t('community.economy.agriculture.title')}. ${t('community.economy.agriculture.description')}. ${t('community.economy.agriculture.cropsTitle')}: ${crops.join(', ')}`}
                                    lang={speechLang[i18n.language]}
                                    variant="default"
                                />
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {t('community.economy.agriculture.description')}
                            </p>
                            
                            <div className="bg-forest-50 rounded-xl p-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">
                                    {t('community.economy.agriculture.cropsTitle')}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {crops.map((crop, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="bg-white rounded-lg p-4 border-2 border-forest-200 flex items-center space-x-3 cursor-pointer hover:border-forest-400 hover:shadow-md transition-all"
                                        >
                                            <span className="text-3xl">{getCropIcon(crop)}</span>
                                            <span className="text-gray-700 font-medium">{crop}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Livestock */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-terracotta-200"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <FontAwesomeIcon icon={faCow} className="text-5xl text-terracotta-600" />
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-gray-800">
                                        {t('community.economy.livestock.title')}
                                    </h3>
                                    <span className="inline-flex items-center mt-1 px-3 py-1 rounded-full text-xs font-medium bg-terracotta-100 text-terracotta-700 border border-terracotta-300">
                                        Ganadería
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {t('community.economy.livestock.description')}
                            </p>
                        </motion.div>

                        {/* Tourism & Barter */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Community Tourism */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-sky-200"
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <FontAwesomeIcon icon={faHouse} className="text-5xl text-sky-600" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">
                                            {t('community.economy.tourism.title')}
                                        </h3>
                                        <span className="inline-flex items-center mt-1 px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-700 border border-sky-300">
                                            Sostenible
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    {t('community.economy.tourism.description')}
                                </p>
                                <div className="bg-sky-50 rounded-lg p-4 border-l-4 border-sky-400">
                                    <p className="text-gray-700 text-sm">
                                        <strong>🏔️ Destacado:</strong> {t('community.economy.tourism.example')}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Barter System */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gold-200"
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <FontAwesomeIcon icon={faStore} className="text-5xl text-gold-600" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">
                                            {t('community.economy.barter.title')}
                                        </h3>
                                        <span className="inline-flex items-center mt-1 px-3 py-1 rounded-full text-xs font-medium bg-gold-solar-100 text-gold-solar-700 border border-gold-solar-300">
                                            Ancestral
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('community.economy.barter.description')}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community;
