import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import InfoCard from '../components/UI/InfoCard';
import Badge from '../components/UI/Badge';
import Tooltip from '../components/UI/Tooltip';
import AnimeBackground from '../components/UI/AnimeBackground';
import { Shirt, MessageCircle, Heart, Palette } from 'lucide-react';

const Culture = () => {
    const { t } = useTranslation();

    const sections = [
        {
            icon: Shirt,
            title: t('culture.clothing.title'),
            description: t('culture.clothing.description'),
            badges: [{ label: t('gallery.categories.crafts'), variant: 'secondary' }],
        },
        {
            icon: MessageCircle,
            title: t('culture.language.title'),
            description: t('culture.language.description'),
            badges: [{ label: 'Kichwa', variant: 'info' }],
        },
        {
            icon: Palette,
            title: t('culture.crafts.title'),
            description: t('culture.crafts.description'),
            badges: [{ label: t('gallery.categories.crafts'), variant: 'primary' }],
        },
    ];

    const values = [
        { text: t('culture.values.list.ayni'), tooltip: 'Principio andino de reciprocidad' },
        { text: t('culture.values.list.minka'), tooltip: 'Trabajo comunitario tradicional' },
        { text: t('culture.values.list.respect'), tooltip: 'Madre Tierra' },
        { text: t('culture.values.list.solidarity'), tooltip: 'Apoyo mutuo comunitario' },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-terracotta-600 via-gold-600 to-forest-600 text-white py-20 overflow-hidden">
                <AnimeBackground variant="subtle" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-display font-bold mb-4"
                    >
                        {t('culture.title')}
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

            {/* Content Sections */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sections.map((section, index) => (
                        <InfoCard
                            key={index}
                            icon={section.icon}
                            title={section.title}
                            description={section.description}
                            badges={section.badges}
                        />
                    ))}
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-cream-100 to-gold-50 rounded-2xl p-8 md:p-12 border-2 border-gold-200"
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <Heart className="w-8 h-8 text-terracotta-600" />
                        <h2 className="text-3xl font-display font-bold text-gray-800">
                            {t('culture.values.title')}
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {t('culture.values.description')}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {values.map((value, index) => (
                            <Tooltip key={index} id={`value-${index}`} content={value.tooltip}>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-help border border-cream-200"
                                >
                                    <div className="w-2 h-2 bg-terracotta-600 rounded-full"></div>
                                    <span className="text-gray-700 font-medium">{value.text}</span>
                                    <Badge variant="success">✓</Badge>
                                </motion.li>
                            </Tooltip>
                        ))}
                    </ul>
                </motion.div>
            </section>
        </div>
    );
};

export default Culture;
