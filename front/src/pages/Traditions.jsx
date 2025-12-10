import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Badge from '../components/UI/Badge';
import AnimeBackground from '../components/UI/AnimeBackground';
import FestivalCalendar from '../components/UI/FestivalCalendar';
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
    const { t } = useTranslation();

    const intiRaymiActivities = t('traditions.festivals.inti.activities', { returnObjects: true }) || [];
    const musicInstruments = t('traditions.music.instruments.list', { returnObjects: true }) || [];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-sky-600 via-terracotta-600 to-gold-600 text-white py-20 overflow-hidden">
                <AnimeBackground variant="subtle" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4"
                    >
                        <FontAwesomeIcon icon={faSun} className="text-6xl animate-pulse" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-display font-bold mb-4"
                    >
                        {t('traditions.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90"
                    >
                        {t('traditions.subtitle')}
                    </motion.p>
                </div>
            </div>

            {/* Festival Calendar Component */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <FestivalCalendar />
            </section>

            {/* Main Festivals Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-bold text-center mb-4 gradient-text"
                >
                    {t('traditions.festivals.title')}
                </motion.h2>
                <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
                    {t('traditions.festivals.subtitle')}
                </p>

                <div className="space-y-12">
                    {/* Inti Raymi */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 shadow-lg"
                    >
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={faSun} className="text-6xl text-orange-500" />
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-gray-800">
                                        {t('traditions.festivals.inti.name')}
                                    </h3>
                                    <p className="text-lg text-gray-600">{t('traditions.festivals.inti.date')}</p>
                                </div>
                            </div>
                            <Badge label="Solsticio" variant="secondary" />
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                            {t('traditions.festivals.inti.description')}
                        </p>
                        
                        <div className="bg-white rounded-xl p-6 mb-6">
                            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="text-2xl mr-2">🎉</span>
                                {t('traditions.festivals.inti.activitiesTitle')}
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {intiRaymiActivities.map((activity, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center space-x-2 bg-orange-50 rounded-lg p-3 border border-orange-200"
                                    >
                                        <span className="text-orange-500">✦</span>
                                        <span className="text-gray-700">{activity}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-orange-100 rounded-lg p-4 border-l-4 border-orange-500">
                            <p className="text-gray-700">
                                <strong>📍 {t('traditions.festivals.inti.locationsTitle')}:</strong> {t('traditions.festivals.inti.locations')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Kulla Raymi */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200 shadow-lg"
                    >
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={faMoon} className="text-6xl text-purple-500" />
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-gray-800">
                                        {t('traditions.festivals.kulla.name')}
                                    </h3>
                                    <p className="text-lg text-gray-600">{t('traditions.festivals.kulla.date')}</p>
                                </div>
                            </div>
                            <Badge label="Feminidad" variant="info" />
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {t('traditions.festivals.kulla.description')}
                        </p>
                    </motion.div>

                    {/* Paukar Raymi */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 md:p-12 border-2 border-green-200 shadow-lg"
                    >
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={faSeedling} className="text-6xl text-green-600" />
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-gray-800">
                                        {t('traditions.festivals.pawkar.name')}
                                    </h3>
                                    <p className="text-lg text-gray-600">{t('traditions.festivals.pawkar.date')}</p>
                                </div>
                            </div>
                            <Badge label="Equinoccio" variant="success" />
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {t('traditions.festivals.pawkar.description')}
                        </p>
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
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('traditions.music.subtitle')}
                        </p>
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
