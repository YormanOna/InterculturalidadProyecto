import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/UI/Hero';
import InfoCard from '../components/UI/InfoCard';
import { Sparkles, Users, Calendar, Mountain, Globe2, Heart, BookOpen, Music, Palmtree } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: Sparkles,
            title: t('home.features.culture.title'),
            description: t('home.features.culture.description'),
            link: '/culture',
            badges: [{ label: 'Cultura', variant: 'primary' }],
        },
        {
            icon: Users,
            title: t('home.features.community.title'),
            description: t('home.features.community.description'),
            link: '/community',
            badges: [{ label: 'Comunidad', variant: 'secondary' }],
        },
        {
            icon: Calendar,
            title: t('home.features.traditions.title'),
            description: t('home.features.traditions.description'),
            link: '/traditions',
            badges: [{ label: 'Tradiciones', variant: 'info' }],
        },
    ];

    const culturalHighlights = [
        { icon: Mountain, title: 'Paisajes Andinos', color: 'text-forest-600' },
        { icon: Music, title: 'Música Tradicional', color: 'text-gold-600' },
        { icon: Palmtree, title: 'Flora Nativa', color: 'text-forest-500' },
        { icon: BookOpen, title: 'Sabiduría Ancestral', color: 'text-terracotta-600' },
    ];

    return (
        <div>
            <Hero
                title={t('home.hero.title')}
                subtitle={t('home.hero.subtitle')}
                cta={t('home.hero.cta')}
                ctaLink="/culture"
                ctaSecondary={t('home.hero.ctaSecondary')}
                ctaSecondaryLink="/gallery"
            />

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Link key={index} to={feature.link} className="block">
                            <InfoCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                badges={feature.badges}
                                className="h-full hover:scale-105 transition-transform"
                            />
                        </Link>
                    ))}
                </div>
            </section>

            {/* Cultural Highlights */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {culturalHighlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-cream-200"
                        >
                            <item.icon className={`w-12 h-12 mb-3 ${item.color}`} />
                            <p className="text-sm font-medium text-gray-700 text-center">{item.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* About Section */}
            <section className="bg-gradient-to-br from-cream-100 via-white to-gold-50 py-20 pattern-dots relative overflow-hidden">
                {/* Elementos decorativos */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-terracotta-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold-200/30 rounded-full blur-3xl"></div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gold-200"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="flex gap-4">
                                <Globe2 className="w-10 h-10 text-sky-600 animate-pulse-slow" />
                                <Heart className="w-10 h-10 text-terracotta-600 animate-pulse-slow" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-display font-bold mb-6 gradient-text">
                            {t('home.about.title')}
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            {t('home.about.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section - Nuevas estadísticas visuales */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center p-8 bg-gradient-to-br from-terracotta-50 to-terracotta-100 rounded-2xl shadow-lg"
                    >
                        <div className="text-5xl font-bold text-terracotta-600 mb-2">500+</div>
                        <p className="text-lg text-gray-700">Años de Historia</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center p-8 bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl shadow-lg"
                    >
                        <div className="text-5xl font-bold text-gold-600 mb-2">50+</div>
                        <p className="text-lg text-gray-700">Tradiciones Vivas</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center p-8 bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl shadow-lg"
                    >
                        <div className="text-5xl font-bold text-forest-600 mb-2">100+</div>
                        <p className="text-lg text-gray-700">Comunidades</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
