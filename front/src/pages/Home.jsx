import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/UI/Hero';
import InfoCard from '../components/UI/InfoCard';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShirt, 
    faUsers, 
    faSun, 
    faMapMarkerAlt,
    faUserFriends,
    faChurch,
    faMountain
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: faShirt,
            title: t('home.features.culture.title'),
            description: t('home.features.culture.description'),
            link: '/culture',
            badges: [{ label: 'Cultura', variant: 'primary' }],
        },
        {
            icon: faUsers,
            title: t('home.features.community.title'),
            description: t('home.features.community.description'),
            link: '/community',
            badges: [{ label: 'Comunidad', variant: 'secondary' }],
        },
        {
            icon: faSun,
            title: t('home.features.traditions.title'),
            description: t('home.features.traditions.description'),
            link: '/traditions',
            badges: [{ label: 'Tradiciones', variant: 'info' }],
        },
    ];

    const stats = [
        { 
            value: t('home.stats.population'), 
            label: t('home.stats.populationLabel'), 
            icon: faUserFriends,
            color: 'text-terracotta-600' 
        },
        { 
            value: t('home.stats.communities'), 
            label: t('home.stats.communitiesLabel'), 
            icon: faChurch,
            color: 'text-gold-600' 
        },
        { 
            value: t('home.stats.location'), 
            label: t('home.stats.locationLabel'), 
            icon: faMountain,
            color: 'text-forest-600' 
        },
    ];

    const territories = [
        { name: t('home.location.ibarra'), icon: '🏔️' },
        { name: t('home.location.otavalo'), icon: '🌾' },
        { name: t('home.location.antonioAnte'), icon: '🌻' },
        { name: t('home.location.pimampiro'), icon: '🍃' },
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

            {/* Hero Image Section */}
            <section className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="/images/Ubicacion.png" 
                        alt="Territorio Karanki" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-andino-900/80 via-terracotta-900/70 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            {t('home.location.title')}
                        </h2>
                        <p className="text-xl text-white/90">
                            Sierra Norte del Ecuador - Provincia de Imbabura
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-br from-cream-50 via-white to-gold-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border-2 border-cream-200"
                            >
                                <FontAwesomeIcon 
                                    icon={stat.icon} 
                                    className={`text-5xl mb-4 ${stat.color}`} 
                                />
                                <p className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</p>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Link key={index} to={feature.link} className="block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <InfoCard
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                    badges={feature.badges}
                                    className="h-full hover:scale-105 transition-transform"
                                    isFontAwesome={true}
                                />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gradient-to-br from-terracotta-50 via-cream-100 to-gold-50 py-20 pattern-dots relative overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-terracotta-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold-200/30 rounded-full blur-3xl"></div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text"
                    >
                        {t('home.about.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-700 leading-relaxed"
                    >
                        {t('home.about.description')}
                    </motion.p>
                </div>
            </section>

            {/* Territory Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-bold text-center mb-12 gradient-text"
                >
                    {t('home.location.title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {territories.map((territory, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-cream-200"
                        >
                            <div className="text-5xl mb-4 text-center">{territory.icon}</div>
                            <p className="text-sm font-medium text-gray-700 text-center leading-relaxed">
                                {territory.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-forest-600 via-terracotta-600 to-gold-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-display font-bold mb-6"
                    >
                        Descubre Más Sobre Nuestra Cultura
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl mb-8 text-white/90"
                    >
                        Explora nuestras tradiciones, festividades y la sabiduría ancestral del pueblo Karanki
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/traditions"
                            className="px-8 py-4 bg-white text-terracotta-700 rounded-lg font-semibold hover:bg-cream-50 transition-colors shadow-lg"
                        >
                            Ver Festividades
                        </Link>
                        <Link
                            to="/cosmovision"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                        >
                            Conocer Cosmovisión
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
