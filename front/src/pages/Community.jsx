import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import InfoCard from '../components/UI/InfoCard';
import Badge from '../components/UI/Badge';
import AnimeBackground from '../components/UI/AnimeBackground';
import { Sun, Sprout, Users2, PartyPopper } from 'lucide-react';

const Community = () => {
    const { t } = useTranslation();

    const sections = [
        {
            icon: Sun,
            title: t('community.daily.title'),
            description: t('community.daily.description'),
            badges: [{ label: 'Vida Rural', variant: 'primary' }],
        },
        {
            icon: Users2,
            title: t('community.organization.title'),
            description: t('community.organization.description'),
            badges: [{ label: 'Democracia', variant: 'info' }],
        },
        {
            icon: PartyPopper,
            title: t('community.events.title'),
            description: t('community.events.description'),
            badges: [{ label: t('gallery.categories.festivals'), variant: 'secondary' }],
        },
    ];

    const crops = [
        { name: t('community.agriculture.crops.corn'), emoji: '🌽', color: 'gold' },
        { name: t('community.agriculture.crops.potato'), emoji: '🥔', color: 'terracotta' },
        { name: t('community.agriculture.crops.quinoa'), emoji: '🌾', color: 'forest' },
        { name: t('community.agriculture.crops.beans'), emoji: '🫘', color: 'terracotta' },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-gold-600 via-terracotta-600 to-forest-700 text-white py-20 overflow-hidden">
                <AnimeBackground variant="subtle" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

                {/* Agriculture Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-forest-50 to-gold-50 rounded-2xl p-8 md:p-12 border-2 border-forest-200"
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <Sprout className="w-8 h-8 text-forest-600" />
                        <h2 className="text-3xl font-display font-bold text-gray-800">
                            {t('community.agriculture.title')}
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {t('community.agriculture.description')}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {crops.map((crop, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-cream-200"
                            >
                                <div className="text-5xl mb-3">{crop.emoji}</div>
                                <p className="text-gray-700 font-medium mb-2">{crop.name}</p>
                                <Badge variant={crop.color === 'gold' ? 'secondary' : crop.color === 'forest' ? 'success' : 'primary'}>
                                    Sagrado
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Community;
