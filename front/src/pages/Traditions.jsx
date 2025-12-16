import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FestivalCalendar from '../components/UI/FestivalCalendar';
import TextToSpeech from '../components/UI/TextToSpeech';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSun, 
    faMoon,
    faSeedling,
    faRing,
    faHouse,
    faMusic,
    faDrum,
    faGuitar
} from '@fortawesome/free-solid-svg-icons';

const Traditions = () => {
    const { t, i18n } = useTranslation();

    const speechLang = {
        'es': 'es-ES',
        'en': 'en-US',
        'qu': 'es-ES'
    };

    const intiRaymiActivities = t('traditions.festivals.inti.activities', { returnObjects: true }) || [];
    const musicInstruments = t('traditions.music.instruments.list', { returnObjects: true }) || [];

    return (
        <div className="min-h-screen bg-cream-50">
            {/* Hero Section - Diseño único con split diagonal */}
            <div className="relative min-h-screen overflow-hidden flex items-center -mt-16 pt-16">
                {/* Fondo con gradiente diagonal */}
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise-glaciar-700 via-sky-600 to-purple-andino-700"></div>
                
                {/* Elementos decorativos circulares */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-solar-400/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-chakra-400/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

                {/* Patrón de círculos decorativos */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                        {/* Columna izquierda - Contenido */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white space-y-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="inline-block"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse"></div>
                                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/30">
                                        <FontAwesomeIcon icon={faSun} className="text-7xl text-gold-solar-300" />
                                    </div>
                                </div>
                            </motion.div>

                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-4"
                                >
                                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                                        🎉 {t('traditions.badges.ancestral')}
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
                                >
                                    {t('traditionsPage.title')}
                                </motion.h1>

                                <div className="flex items-start gap-4">
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-xl md:text-2xl text-cream-100 leading-relaxed flex-1"
                                    >
                                        {t('traditions.subtitle')}
                                    </motion.p>
                                    <TextToSpeech 
                                        text={`${t('traditionsPage.title')}. ${t('traditions.subtitle')}`}
                                        lang={speechLang[i18n.language]}
                                        variant="hero"
                                    />
                                </div>
                            </div>

                            {/* Mini tarjetas de festividades */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
                                    <FontAwesomeIcon icon={faSun} className="text-gold-solar-300 text-xl" />
                                    <span className="font-medium">Inti Raymi</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
                                    <FontAwesomeIcon icon={faMoon} className="text-purple-300 text-xl" />
                                    <span className="font-medium">Kulla Raymi</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
                                    <FontAwesomeIcon icon={faSeedling} className="text-green-300 text-xl" />
                                    <span className="font-medium">Paukar Raymi</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Columna derecha - Elementos visuales */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="hidden lg:block"
                        >
                            <div className="relative">
                                {/* Círculo principal con iconos giratorios */}
                                <div className="relative w-96 h-96 mx-auto">
                                    {/* Centro */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 backdrop-blur-md rounded-full border-4 border-white/30 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-5xl mb-2">🌞</div>
                                            <p className="text-white font-bold text-sm">3 Festividades</p>
                                        </div>
                                    </div>

                                    {/* Iconos orbitantes */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0"
                                    >
                                        {/* Inti Raymi */}
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="w-20 h-20 bg-gradient-to-br from-gold-solar-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white/50"
                                            >
                                                <FontAwesomeIcon icon={faSun} className="text-3xl text-white" />
                                            </motion.div>
                                        </div>

                                        {/* Kulla Raymi */}
                                        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white/50"
                                            >
                                                <FontAwesomeIcon icon={faMoon} className="text-3xl text-white" />
                                            </motion.div>
                                        </div>

                                        {/* Paukar Raymi */}
                                        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white/50"
                                            >
                                                <FontAwesomeIcon icon={faSeedling} className="text-3xl text-white" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Divider ondulado */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#FFFEF9"/>
                    </svg>
                </div>
            </div>

            {/* Festival Calendar Component */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <FestivalCalendar />
            </section>

            {/* Main Festivals Section - Mejorada */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-6 py-3 bg-purple-andino-100 rounded-full mb-4">
                        <p className="text-purple-andino-700 font-medium">🎊 {t('traditions.badges.main')}</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
                        {t('traditions.festivals.title')}
                    </h2>
                    <div className="flex items-start gap-4 justify-center max-w-4xl mx-auto">
                        <p className="text-gray-600 text-lg flex-1">
                            {t('traditions.festivals.subtitle')}
                        </p>
                        <TextToSpeech 
                            text={`${t('traditions.festivals.title')}. ${t('traditions.festivals.subtitle')}. ${t('traditions.festivals.inti.name')}: ${t('traditions.festivals.inti.description')}`}
                            lang={speechLang[i18n.language]}
                            variant="default"
                        />
                    </div>
                </motion.div>

                <div className="space-y-12">
                    {/* Inti Raymi - Mejorado */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border-2 border-orange-300 shadow-lg hover:shadow-xl transition-all">
                            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                                <div className="flex items-center space-x-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faSun} className="text-5xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-display font-bold text-gray-800 mb-2">
                                            {t('traditions.festivals.inti.name')}
                                        </h3>
                                        <p className="text-xl text-orange-700 font-medium">{t('traditions.festivals.inti.date')}</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-200 text-orange-800 border border-orange-400">
                                    ☀️ Solsticio
                                </span>
                            </div>
                            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                                {t('traditions.festivals.inti.description')}
                            </p>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                        <span className="text-3xl mr-3">🎉</span>
                                        {t('traditions.festivals.inti.activitiesTitle')}
                                    </h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {intiRaymiActivities.map((activity, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 }}
                                                className="flex items-center space-x-2 text-gray-700"
                                            >
                                                <span className="text-orange-500 font-bold">✦</span>
                                                <span>{activity}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                        <span className="text-3xl mr-3">📍</span>
                                        {t('traditions.festivals.inti.locationsTitle')}
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        {t('traditions.festivals.inti.locations')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Kulla Raymi - Mejorado */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all">
                            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                                <div className="flex items-center space-x-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faMoon} className="text-5xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-display font-bold text-gray-800 mb-2">
                                            {t('traditions.festivals.kulla.name')}
                                        </h3>
                                        <p className="text-xl text-purple-700 font-medium">{t('traditions.festivals.kulla.date')}</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-200 text-purple-800 border border-purple-400">
                                    🌸 Feminidad
                                </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {t('traditions.festivals.kulla.description')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Paukar Raymi - Mejorado */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 md:p-12 border-2 border-green-300 shadow-lg hover:shadow-xl transition-all">
                            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                                <div className="flex items-center space-x-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faSeedling} className="text-5xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-display font-bold text-gray-800 mb-2">
                                            {t('traditions.festivals.pawkar.name')}
                                        </h3>
                                        <p className="text-xl text-green-700 font-medium">{t('traditions.festivals.pawkar.date')}</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-200 text-green-800 border border-green-400">
                                    🌱 Equinoccio
                                </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {t('traditions.festivals.pawkar.description')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Rituals Section */}
            <section className="bg-gradient-to-br from-cream-50 to-gold-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-display font-bold text-center mb-12 gradient-text"
                    >
                        {t('traditions.rituals.title')}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-6 shadow-lg border-2 border-terracotta-200"
                        >
                            <div className="text-5xl mb-4 text-center">☀️</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                                {t('traditions.rituals.inti.title')}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('traditions.rituals.inti.description')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-lg border-2 border-forest-200"
                        >
                            <div className="text-5xl mb-4 text-center">🍲</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                                {t('traditions.rituals.pachamanca.title')}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('traditions.rituals.pachamanca.description')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-xl p-6 shadow-lg border-2 border-gold-200"
                        >
                            <div className="text-5xl mb-4 text-center">🏛️</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                                {t('traditions.rituals.baston.title')}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('traditions.rituals.baston.description')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Lifecycle Ceremonies */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-bold text-center mb-12 gradient-text"
                >
                    {t('traditions.ceremonies.title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Marriage */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose-200"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <FontAwesomeIcon icon={faRing} className="text-5xl text-rose-500" />
                            <h3 className="text-2xl font-display font-bold text-gray-800">
                                {t('traditions.ceremonies.marriage.title')}
                            </h3>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            {t('traditions.ceremonies.marriage.description')}
                        </p>
                        <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-400">
                            <p className="text-gray-700 text-sm">
                                <strong>💐 Sirvicha:</strong> {t('traditions.ceremonies.marriage.sirvicha')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Wasi Pichay */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-200"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <FontAwesomeIcon icon={faHouse} className="text-5xl text-teal-500" />
                            <h3 className="text-2xl font-display font-bold text-gray-800">
                                {t('traditions.ceremonies.wasi.title')}
                            </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            {t('traditions.ceremonies.wasi.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Music Section */}
            <section className="bg-gradient-to-br from-sky-50 to-purple-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <FontAwesomeIcon icon={faMusic} className="text-6xl text-purple-600 mb-4" />
                        <h2 className="text-4xl font-display font-bold gradient-text mb-4">
                            {t('traditions.music.title')}
                        </h2>
                        <div className="flex items-start gap-4 justify-center max-w-4xl mx-auto">
                            <p className="text-lg text-gray-600 flex-1">
                                {t('traditions.music.subtitle')}
                            </p>
                            <TextToSpeech 
                                text={`${t('traditions.music.title')}. ${t('traditions.music.subtitle')}. ${t('traditions.music.instrumentsTitle')}: ${musicInstruments.join(', ')}. ${t('traditions.music.dancesTitle')}: ${t('traditions.music.dances.sanjuanito.title')}, ${t('traditions.music.dances.folklore.title')}`}
                                lang={speechLang[i18n.language]}
                                variant="default"
                            />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Instruments */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <FontAwesomeIcon icon={faDrum} className="text-4xl text-terracotta-600" />
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {t('traditions.music.instrumentsTitle')}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {musicInstruments.map((instrument, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center space-x-3 bg-purple-50 rounded-lg p-3 border border-purple-200"
                                    >
                                        <span className="text-2xl">🎵</span>
                                        <span className="text-gray-700">{instrument}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contemporary Music */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <FontAwesomeIcon icon={faGuitar} className="text-4xl text-sky-600" />
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {t('traditions.music.contemporary.title')}
                                </h3>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {t('traditions.music.contemporary.description')}
                            </p>
                            <div className="space-y-3">
                                <div className="bg-sky-50 rounded-lg p-4 border-l-4 border-sky-400">
                                    <p className="font-bold text-gray-800 mb-1">🎤 Kipiku</p>
                                    <p className="text-gray-600 text-sm">{t('traditions.music.contemporary.kipiku')}</p>
                                </div>
                                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
                                    <p className="font-bold text-gray-800 mb-1">🎸 Amaru</p>
                                    <p className="text-gray-600 text-sm">{t('traditions.music.contemporary.amaru')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Dance */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-gold-100 to-terracotta-100 rounded-2xl p-8 border-2 border-gold-300"
                    >
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
                                <span className="text-4xl">💃</span>
                                <span>{t('traditions.music.dance.title')}</span>
                            </h3>
                            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                {t('traditions.music.dance.description')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Traditions;
