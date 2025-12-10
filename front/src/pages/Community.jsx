import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Badge from '../components/UI/Badge';
import AnimeBackground from '../components/UI/AnimeBackground';
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
    const { t } = useTranslation();

    const crops = t('community.economy.agriculture.crops', { returnObjects: true });

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-gold-600 via-terracotta-600 to-forest-700 text-white py-20 overflow-hidden">
                <AnimeBackground variant="subtle" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4"
                    >
                        <FontAwesomeIcon icon={faUsers} className="text-6xl" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-display font-bold mb-4"
                    >
                        {t('community.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90"
                    >
                        {t('community.subtitle')}
                    </motion.p>
                </div>
            </div>

            {/* Organization Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-display font-bold gradient-text mb-4">
                        {t('community.organization.title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t('community.organization.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Consejo de Cabildo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-2 border-sky-200 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <FontAwesomeIcon icon={faUserTie} className="text-5xl text-sky-600" />
                            <Badge label="Autoridad" variant="primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {t('community.organization.cabildo.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {t('community.organization.cabildo.description')}
                        </p>
                        <div className="bg-sky-50 rounded-lg p-4 border-l-4 border-sky-400">
                            <p className="text-gray-700 text-sm">
                                <strong>👤 Roles:</strong> {t('community.organization.cabildo.roles')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Consejo de Ancianos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gold-200 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-5xl">👴</div>
                            <Badge label="Sabiduría" variant="secondary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {t('community.organization.elders.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {t('community.organization.elders.description')}
                        </p>
                    </motion.div>

                    {/* Participación de Mujeres */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <FontAwesomeIcon icon={faFemale} className="text-5xl text-pink-600" />
                            <Badge label="Equidad" variant="info" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {t('community.organization.women.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {t('community.organization.women.description')}
                        </p>
                    </motion.div>
                </div>

                {/* Minga Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-terracotta-50 to-gold-50 rounded-2xl p-8 md:p-12 border-2 border-terracotta-200 shadow-lg"
                >
                    <div className="flex items-center space-x-4 mb-6">
                        <FontAwesomeIcon icon={faHandshake} className="text-6xl text-terracotta-600" />
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-800">
                                {t('community.minga.title')}
                            </h2>
                            <Badge label="Trabajo Colectivo" variant="primary" />
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {t('community.minga.description')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                <span className="text-2xl mr-2">💪</span>
                                {t('community.minga.principleTitle')}
                            </h4>
                            <p className="text-gray-700">{t('community.minga.principle')}</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                <span className="text-2xl mr-2">🛠️</span>
                                {t('community.minga.activitiesTitle')}
                            </h4>
                            <p className="text-gray-700">{t('community.minga.activities')}</p>
                        </div>
                    </div>
                </motion.div>
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
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-gray-800">
                                        {t('community.economy.agriculture.title')}
                                    </h3>
                                    <Badge label="Tradicional" variant="success" />
                                </div>
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
                                            className="bg-white rounded-lg p-4 border-2 border-forest-200 flex items-center space-x-3"
                                        >
                                            <span className="text-3xl">🌱</span>
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
                                    <Badge label="Ganadería" variant="primary" />
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
                                        <Badge label="Sostenible" variant="info" />
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
                                        <Badge label="Ancestral" variant="secondary" />
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
