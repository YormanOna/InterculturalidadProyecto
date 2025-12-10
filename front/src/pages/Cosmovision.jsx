import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TextToSpeech from '../components/UI/TextToSpeech';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMountain, 
    faSun, 
    faMoon, 
    faRainbow, 
    faDove, 
    faDog, 
    faCrow,
    faSeedling,
    faHeart,
    faWater,
    faWind,
    faFire
} from '@fortawesome/free-solid-svg-icons';

const Cosmovision = () => {
    const { t, i18n } = useTranslation();

    const speechLang = {
        'es': 'es-ES',
        'en': 'en-US',
        'qu': 'es-ES'
    };

    const elements = [
        { icon: faWater, label: 'Agua', color: 'text-sky-600' },
        { icon: faWind, label: 'Aire', color: 'text-forest-400' },
        { icon: faFire, label: 'Fuego', color: 'text-terracotta-600' },
        { icon: faMountain, label: 'Pacha', color: 'text-gold-700' },
    ];

    const astralSigns = [
        {
            icon: faSun,
            title: t('cosmovision.signs.astral.title'),
            signs: [
                { text: t('cosmovision.signs.astral.sun'), emoji: '☀️🌈' },
                { text: t('cosmovision.signs.astral.moon'), emoji: '🌙🌈' },
                { text: t('cosmovision.signs.astral.rainbow'), emoji: '🌈' },
            ]
        }
    ];

    const animalSigns = [
        { icon: faDog, text: t('cosmovision.signs.animals.dogs'), emoji: '🐕' },
        { icon: faDove, text: t('cosmovision.signs.animals.condor'), emoji: '🦅' },
        { icon: faCrow, text: t('cosmovision.signs.animals.owl'), emoji: '🦉' },
    ];

    const healingPractices = [
        {
            title: t('cosmovision.medicine.healing.midwifery.title'),
            description: t('cosmovision.medicine.healing.midwifery.description'),
            icon: faHeart,
            badge: 'Partería'
        },
        {
            title: t('cosmovision.medicine.healing.limpia.title'),
            description: t('cosmovision.medicine.healing.limpia.description'),
            icon: faWind,
            badge: 'Limpia'
        },
        {
            title: t('cosmovision.medicine.healing.espanto.title'),
            description: t('cosmovision.medicine.healing.espanto.description'),
            icon: faSeedling,
            badge: 'Espanto'
        },
    ];

    const medicinalPlants = t('cosmovision.medicine.plants.list', { returnObjects: true });

    return (
        <div className="min-h-screen">
            {/* Hero - Cosmic Design */}
            <div className="relative bg-gradient-to-br from-indigo-nocturno-900 via-purple-andino-800 to-indigo-nocturno-900 text-white overflow-hidden">
                {/* Animated cosmic background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-gold-solar-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-1 h-1 bg-turquoise-glaciar-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cream-200 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-solar-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-turquoise-glaciar-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>

                {/* Orbital elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
                    <div className="absolute inset-0 rounded-full border-2 border-gold-solar-400 animate-spin" style={{animationDuration: '30s'}}></div>
                    <div className="absolute inset-8 rounded-full border-2 border-turquoise-glaciar-400 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
                    <div className="absolute inset-16 rounded-full border-2 border-purple-andino-400 animate-spin" style={{animationDuration: '20s'}}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center space-x-2 bg-purple-andino-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gold-solar-400/30"
                            >
                                <FontAwesomeIcon icon={faMountain} className="text-gold-solar-400" />
                                <span className="text-sm font-medium text-gold-solar-300">{t('cosmovisionPage.hero.stats.sacred')}</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                                {t('cosmovisionPage.hero.title')}
                            </h1>
                            <div className="flex items-start gap-4 mb-8">
                                <div className="flex-1">
                                    <p className="text-xl text-purple-100 mb-4 leading-relaxed">
                                        {t('cosmovisionPage.hero.subtitle')}
                                    </p>
                                    <p className="text-cream-200 text-base leading-relaxed">
                                        {t('cosmovisionPage.hero.description')}
                                    </p>
                                </div>
                                <TextToSpeech 
                                    text={`${t('cosmovisionPage.hero.title')}. ${t('cosmovisionPage.hero.subtitle')}. ${t('cosmovisionPage.hero.description')}`}
                                    lang={speechLang[i18n.language]}
                                    variant="hero"
                                />
                            </div>
                        </motion.div>

                        {/* Right side - Circular stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex justify-center items-center"
                        >
                            {/* Center circle */}
                            <div className="relative w-48 h-48 bg-gradient-to-br from-purple-andino-600 to-indigo-nocturno-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-gold-solar-400/30">
                                <FontAwesomeIcon icon={faMountain} className="text-6xl text-gold-solar-300" />
                            </div>

                            {/* Orbiting stat cards */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="bg-gradient-to-br from-sky-500 to-turquoise-glaciar-600 px-6 py-3 rounded-xl shadow-lg border-2 border-white/20"
                                    >
                                        <p className="text-white font-bold text-center whitespace-nowrap">
                                            <FontAwesomeIcon icon={faWater} className="mr-2" />
                                            {t('cosmovisionPage.hero.stats.elements')}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                        className="bg-gradient-to-br from-terracotta-500 to-terracotta-700 px-6 py-3 rounded-xl shadow-lg border-2 border-white/20"
                                    >
                                        <p className="text-white font-bold text-center whitespace-nowrap">
                                            <FontAwesomeIcon icon={faSun} className="mr-2" />
                                            {t('cosmovisionPage.hero.stats.worlds')}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Pacha Mama Section - Redesigned */}
            <section className="bg-cream-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-chakra-500 to-forest-600 rounded-full mb-6 shadow-lg">
                            <FontAwesomeIcon icon={faMountain} className="text-3xl text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-green-chakra-700">
                            {t('cosmovisionPage.pachamama.title')}
                        </h2>
                        <div className="flex items-start gap-4 justify-center max-w-5xl mx-auto mb-6">
                            <div className="flex-1 text-center">
                                <p className="text-xl text-gray-600 mb-6">
                                    {t('cosmovisionPage.pachamama.subtitle')}
                                </p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    {t('cosmovisionPage.pachamama.intro')}
                                </p>
                            </div>
                            <TextToSpeech 
                                text={`${t('cosmovisionPage.pachamama.title')}. ${t('cosmovisionPage.pachamama.subtitle')}. ${t('cosmovisionPage.pachamama.intro')}`}
                                lang={speechLang[i18n.language]}
                                variant="default"
                            />
                        </div>
                    </motion.div>

                    {/* Four Elements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {/* Water */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative bg-gradient-to-br from-sky-400 to-turquoise-glaciar-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden min-h-[280px] flex flex-col"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
                            <FontAwesomeIcon icon={faWater} className="text-5xl mb-4 relative z-10" />
                            <h3 className="text-2xl font-bold mb-3 relative z-10">{t('cosmovisionPage.pachamama.elements.water.title')}</h3>
                            <p className="text-sky-50 relative z-10">{t('cosmovisionPage.pachamama.elements.water.description')}</p>
                        </motion.div>

                        {/* Air */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative bg-gradient-to-br from-green-chakra-500 to-green-chakra-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden min-h-[280px] flex flex-col"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
                            <FontAwesomeIcon icon={faWind} className="text-5xl mb-4 relative z-10" />
                            <h3 className="text-2xl font-bold mb-3 relative z-10">{t('cosmovisionPage.pachamama.elements.air.title')}</h3>
                            <p className="text-green-50 relative z-10">{t('cosmovisionPage.pachamama.elements.air.description')}</p>
                        </motion.div>

                        {/* Fire */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative bg-gradient-to-br from-terracotta-500 to-terracotta-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden min-h-[280px] flex flex-col"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
                            <FontAwesomeIcon icon={faFire} className="text-5xl mb-4 relative z-10" />
                            <h3 className="text-2xl font-bold mb-3 relative z-10">{t('cosmovisionPage.pachamama.elements.fire.title')}</h3>
                            <p className="text-terracotta-50 relative z-10">{t('cosmovisionPage.pachamama.elements.fire.description')}</p>
                        </motion.div>

                        {/* Earth */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group relative bg-gradient-to-br from-gold-solar-500 to-gold-solar-700 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden min-h-[280px] flex flex-col"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
                            <FontAwesomeIcon icon={faMountain} className="text-5xl mb-4 relative z-10" />
                            <h3 className="text-2xl font-bold mb-3 relative z-10">{t('cosmovisionPage.pachamama.elements.earth.title')}</h3>
                            <p className="text-gold-50 relative z-10">{t('cosmovisionPage.pachamama.elements.earth.description')}</p>
                        </motion.div>
                    </div>

                    {/* Sacred Places Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-andino-600 to-indigo-nocturno-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-solar-400/10 rounded-full transform translate-x-32 -translate-y-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-turquoise-glaciar-400/10 rounded-full transform -translate-x-24 translate-y-24"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-16 h-16 bg-gold-solar-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faMountain} className="text-2xl text-gold-solar-300" />
                                </div>
                                <h3 className="text-3xl font-display font-bold">{t('cosmovisionPage.pachamama.sacred.title')}</h3>
                            </div>
                            <p className="text-lg text-purple-100 leading-relaxed max-w-4xl">
                                {t('cosmovisionPage.pachamama.sacred.description')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Third section - Signs and rest of content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Signs of Nature */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <h2 className="text-4xl font-display font-bold text-center text-gold-solar-400">
                            {t('cosmovision.signs.title')}
                        </h2>
                        <TextToSpeech 
                            text={`${t('cosmovision.signs.title')}. ${t('cosmovision.signs.astral.title')}: ${t('cosmovision.signs.astral.sun')}. ${t('cosmovision.signs.astral.moon')}. ${t('cosmovision.signs.astral.rainbow')}. ${t('cosmovision.signs.animals.title')}: ${t('cosmovision.signs.animals.dogs')}. ${t('cosmovision.signs.animals.condor')}. ${t('cosmovision.signs.animals.owl')}`}
                            lang={speechLang[i18n.language]}
                            variant="default"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Astral Signs */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-sky-200">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">☀️</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-800">
                                    {t('cosmovision.signs.astral.title')}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <span className="text-2xl flex-shrink-0">☀️</span>
                                    <p className="text-gray-700">{t('cosmovision.signs.astral.sun')}</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-2xl flex-shrink-0">🌙</span>
                                    <p className="text-gray-700">{t('cosmovision.signs.astral.moon')}</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-2xl flex-shrink-0">🌈</span>
                                    <p className="text-gray-700">{t('cosmovision.signs.astral.rainbow')}</p>
                                </li>
                            </ul>
                        </div>

                        {/* Animal Signs */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-terracotta-200">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🦅</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-800">
                                    {t('cosmovision.signs.animals.title')}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <span className="text-2xl flex-shrink-0">🐕</span>
                                    <p className="text-gray-700">{t('cosmovision.signs.animals.dogs')}</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-2xl flex-shrink-0">🦅</span>
                                    <p className="text-gray-700">{t('cosmovision.signs.animals.condor')}</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-2xl flex-shrink-0">🦉</span>
                                    <p className="text-gray-700">{t('cosmovision.signs.animals.owl')}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Natural Beliefs */}
                    <div className="bg-gradient-to-br from-sky-50 to-forest-50 rounded-2xl p-8 shadow-lg border-2 border-sky-200">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                                <span className="text-2xl">💧</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-gray-800">
                                {t('cosmovision.signs.nature.title')}
                            </h3>
                        </div>
                        <p className="text-gray-700 flex items-start space-x-3">
                            <span className="text-2xl flex-shrink-0">🏔️</span>
                            <span>{t('cosmovision.signs.nature.puruhanta')}</span>
                        </p>
                    </div>
                </motion.div>

                {/* Ancestral Medicine */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-terracotta-500 to-terracotta-700 rounded-full mb-4 shadow-lg">
                            <FontAwesomeIcon icon={faHeart} className="text-2xl text-white" />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <h2 className="text-4xl font-display font-bold text-terracotta-600">
                                {t('cosmovision.medicine.title')}
                            </h2>
                            <TextToSpeech 
                                text={`${t('cosmovision.medicine.title')}. ${t('cosmovision.medicine.healing.midwifery.title')}: ${t('cosmovision.medicine.healing.midwifery.description')}. ${t('cosmovision.medicine.healing.limpia.title')}: ${t('cosmovision.medicine.healing.limpia.description')}. ${t('cosmovision.medicine.healing.espanto.title')}: ${t('cosmovision.medicine.healing.espanto.description')}`}
                                lang={speechLang[i18n.language]}
                                variant="default"
                            />
                        </div>
                    </div>

                    {/* Healing Practices */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {/* Partería */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-terracotta-500 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FontAwesomeIcon icon={faHeart} className="text-2xl text-terracotta-600" />
                                </div>
                                <span className="px-3 py-1 bg-terracotta-100 text-terracotta-700 text-xs font-semibold rounded-full">
                                    Partería
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {t('cosmovision.medicine.healing.midwifery.title')}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {t('cosmovision.medicine.healing.midwifery.description')}
                            </p>
                        </motion.div>

                        {/* Limpia */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-sky-500 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FontAwesomeIcon icon={faWind} className="text-2xl text-sky-600" />
                                </div>
                                <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full">
                                    Limpia
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {t('cosmovision.medicine.healing.limpia.title')}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {t('cosmovision.medicine.healing.limpia.description')}
                            </p>
                        </motion.div>

                        {/* Espanto */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-chakra-500 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-green-chakra-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FontAwesomeIcon icon={faSeedling} className="text-2xl text-green-chakra-600" />
                                </div>
                                <span className="px-3 py-1 bg-green-chakra-100 text-green-chakra-700 text-xs font-semibold rounded-full">
                                    Espanto
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {t('cosmovision.medicine.healing.espanto.title')}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {t('cosmovision.medicine.healing.espanto.description')}
                            </p>
                        </motion.div>
                    </div>

                    {/* Medicinal Plants */}
                    <div className="bg-gradient-to-br from-green-chakra-50 via-forest-50 to-gold-50 rounded-3xl p-8 md:p-12 border-2 border-forest-300 shadow-xl">
                        <div className="flex items-center justify-center space-x-3 mb-10">
                            <div className="w-14 h-14 bg-forest-600 rounded-full flex items-center justify-center shadow-lg">
                                <FontAwesomeIcon icon={faSeedling} className="text-2xl text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-forest-700">
                                {t('cosmovision.medicine.plants.title')}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Llantén */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-chakra-500"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🌱</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[0]?.name || 'Llantén'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[0]?.use || 'Infecciones urinarias, catarros, gripes'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Ortiga */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-forest-500"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🍃</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[1]?.name || 'Ortiga'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[1]?.use || 'Purificación, frío muscular'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Linaza */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-gold-solar-500"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🌾</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[2]?.name || 'Linaza'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[2]?.use || 'Heridas, quemaduras, masajes'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pelo de choclo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-gold-solar-600"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🌽</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[3]?.name || 'Pelo de choclo'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[3]?.use || 'Dolor de barriga'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Juana yuyu */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-chakra-600"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🌿</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[4]?.name || 'Juana yuyu'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[4]?.use || 'Heridas, golpes, inflamaciones'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Hierba mora */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-purple-andino-500"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🍀</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[5]?.name || 'Hierba mora'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[5]?.use || 'Desinflamar golpes'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Juyanguilla */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-sky-500"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🌸</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[6]?.name || 'Juyanguilla'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[6]?.use || 'Dolores de cabeza, mareos'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Menta */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-chakra-500"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🌿</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[7]?.name || 'Menta'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[7]?.use || 'Fatiga mental y física'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Manzanilla */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.45 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-gold-solar-400"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🌼</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[8]?.name || 'Manzanilla'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[8]?.use || 'Diarreas, cólicos estomacales'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Tifo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-forest-600"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🌱</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[9]?.name || 'Tifo'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[9]?.use || 'Hinchazón del estómago'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Anís */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.55 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-purple-andino-400"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">⭐</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[10]?.name || 'Anís'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[10]?.use || 'Digestión, períodos menstruales'}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Manzana */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-terracotta-400"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-3xl flex-shrink-0">🍎</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{medicinalPlants[11]?.name || 'Manzana'}</h4>
                                        <p className="text-sm text-gray-600">{medicinalPlants[11]?.use || 'Diarreas'}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Cosmovision;
