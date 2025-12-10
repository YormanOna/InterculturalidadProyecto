import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import InfoCard from '../components/UI/InfoCard';
import Badge from '../components/UI/Badge';
import AnimeBackground from '../components/UI/AnimeBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShirt, 
    faLanguage, 
    faPalette,
    faMale,
    faFemale,
    faGem,
    faScroll
} from '@fortawesome/free-solid-svg-icons';

const Culture = () => {
    const { t } = useTranslation();

    const menClothingItems = t('culture.clothing.men.items', { returnObjects: true });
    const womenClothingItems = t('culture.clothing.women.items', { returnObjects: true });

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="relative bg-terracotta-600 text-white py-20 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-20 -left-20 w-48 h-48 bg-terracotta-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gold-solar-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-green-chakra-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4"
                    >
                        <FontAwesomeIcon icon={faShirt} className="text-6xl" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-display font-bold text-center mb-12 text-white"
                    >
                        {t('culturePage.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90"
                    >
                        {t('culture.subtitle')}
                    </motion.p>
                </div>
            </div>

            {/* Featured Image Section */}
            <section className="relative h-[500px] overflow-hidden">
                <img 
                    src="/images/Vestimenta.png" 
                    alt="Vestimenta Tradicional Karanki" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                        >
                            Vestimenta Tradicional
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white/90 max-w-2xl"
                        >
                            Cada prenda cuenta una historia de identidad y tradición ancestral
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Clothing Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Men's Clothing */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-2 border-sky-200"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <FontAwesomeIcon icon={faMale} className="text-4xl text-sky-600" />
                            <h2 className="text-3xl font-display font-bold text-gray-800">
                                {t('culture.clothing.men.title')}
                            </h2>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            {t('culture.clothing.men.description')}
                        </p>
                        <ul className="space-y-3">
                            {menClothingItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center space-x-3 bg-sky-50 rounded-lg p-3 border border-sky-200"
                                >
                                    <span className="text-2xl">👔</span>
                                    <span className="text-gray-700">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Women's Clothing */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <FontAwesomeIcon icon={faFemale} className="text-4xl text-pink-600" />
                            <h2 className="text-3xl font-display font-bold text-gray-800">
                                {t('culture.clothing.women.title')}
                            </h2>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            {t('culture.clothing.women.description')}
                        </p>
                        <ul className="space-y-3">
                            {womenClothingItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center space-x-3 bg-pink-50 rounded-lg p-3 border border-pink-200"
                                >
                                    <span className="text-2xl">👗</span>
                                    <span className="text-gray-700">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
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
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-800">
                                {t('culture.language.title')}
                            </h2>
                            <p className="text-lg text-gray-600">{t('culture.language.subtitle')}</p>
                        </div>
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
                    <div className="flex items-center justify-center space-x-3 mb-12">
                        <FontAwesomeIcon icon={faPalette} className="text-5xl text-terracotta-600" />
                        <div>
                            <h2 className="text-4xl font-display font-bold text-center gradient-text">
                                {t('culture.crafts.title')}
                            </h2>
                            <p className="text-lg text-gray-600 text-center">{t('culture.crafts.subtitle')}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Embroidery */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-terracotta-200"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <FontAwesomeIcon icon={faGem} className="text-4xl text-terracotta-600" />
                                <Badge label="Tradicional" variant="primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                {t('culture.crafts.embroidery.title')}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('culture.crafts.embroidery.description')}
                            </p>
                        </motion.div>

                        {/* Beadwork */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gold-200"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <FontAwesomeIcon icon={faGem} className="text-4xl text-gold-600" />
                                <Badge label="Artesanal" variant="secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                {t('culture.crafts.beadwork.title')}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('culture.crafts.beadwork.description')}
                            </p>
                        </motion.div>

                        {/* Tablecloths */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-forest-200"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <FontAwesomeIcon icon={faScroll} className="text-4xl text-forest-600" />
                                <Badge label="Manual" variant="info" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                {t('culture.crafts.tablecloths.title')}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('culture.crafts.tablecloths.description')}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Culture;
