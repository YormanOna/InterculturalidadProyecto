import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import InfoCard from '../components/UI/InfoCard';
import Badge from '../components/UI/Badge';
import AnimeBackground from '../components/UI/AnimeBackground';
import { Music, Sparkles, BookOpen } from 'lucide-react';

const Traditions = () => {
    const { t } = useTranslation();

    const festivals = [
        {
            name: t('traditions.festivals.inti.name'),
            description: t('traditions.festivals.inti.description'),
            emoji: '☀️',
            badge: 'Solsticio',
            variant: 'secondary',
        },
        {
            name: t('traditions.festivals.pawkar.name'),
            description: t('traditions.festivals.pawkar.description'),
            emoji: '🌸',
            badge: 'Primavera',
            variant: 'success',
        },
        {
            name: t('traditions.festivals.kulla.name'),
            description: t('traditions.festivals.kulla.description'),
            emoji: '🌙',
            badge: 'Feminidad',
            variant: 'info',
        },
    ];

    const culturalAspects = [
        {
            icon: Music,
            title: t('traditions.music.title'),
            description: t('traditions.music.description'),
            badges: [{ label: 'Música', variant: 'secondary' }],
        },
        {
            icon: Sparkles,
            title: t('traditions.rituals.title'),
            description: t('traditions.rituals.description'),
            badges: [{ label: 'Ceremonias', variant: 'primary' }],
        },
        {
            icon: BookOpen,
            title: t('traditions.stories.title'),
            description: t('traditions.stories.description'),
            badges: [{ label: 'Sabiduría', variant: 'info' }],
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-sky-600 via-terracotta-600 to-gold-600 text-white py-20 overflow-hidden">
                <AnimeBackground variant="subtle" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

            {/* Festivals Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-bold text-center mb-12 gradient-text"
                >
                    {t('traditions.festivals.title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {festivals.map((festival, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-cream-200"
                        >
                            <div className="text-6xl mb-4 text-center">{festival.emoji}</div>
                            <div className="flex justify-center mb-3">
                                <Badge variant={festival.variant}>{festival.badge}</Badge>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-center mb-4 text-gray-800">
                                {festival.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                {festival.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Cultural Aspects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {culturalAspects.map((aspect, index) => (
                        <InfoCard
                            key={index}
                            icon={aspect.icon}
                            title={aspect.title}
                            description={aspect.description}
                            badges={aspect.badges}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Traditions;
