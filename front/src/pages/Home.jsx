import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/UI/Hero';
import InfoCard from '../components/UI/InfoCard';
import TextToSpeech from '../components/UI/TextToSpeech';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShirt, 
    faUsers, 
    faSun, 
    faMapMarkerAlt,
    faUserFriends,
    faChurch,
    faMountain,
    faMapLocationDot,
    faTree,
    faWheatAwn,
    faLeaf
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const { t, i18n } = useTranslation();

    // Mapeo de idiomas para text-to-speech
    const speechLang = {
        'es': 'es-ES',
        'en': 'en-US',
        'qu': 'es-ES' // Kichwa usa español como fallback
    };

    const features = [
        {
            icon: faShirt,
            title: t('home.features.culture.title'),
            description: t('home.features.culture.description'),
            link: '/culture',
            badges: [{ label: 'Cultura', variant: 'primary' }],
            color: 'terracotta',
        },
        {
            icon: faUsers,
            title: t('home.features.community.title'),
            description: t('home.features.community.description'),
            link: '/community',
            badges: [{ label: 'Comunidad', variant: 'secondary' }],
            color: 'gold-solar',
        },
        {
            icon: faSun,
            title: t('home.features.traditions.title'),
            description: t('home.features.traditions.description'),
            link: '/traditions',
            badges: [{ label: 'Tradiciones', variant: 'info' }],
            color: 'turquoise-glaciar',
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
        { 
            name: t('home.location.ibarra'), 
            icon: faMountain,
            color: 'text-terracotta-600',
            bgColor: 'bg-terracotta-50'
        },
        { 
            name: t('home.location.otavalo'), 
            icon: faWheatAwn,
            color: 'text-gold-solar-600',
            bgColor: 'bg-gold-solar-50'
        },
        { 
            name: t('home.location.antonioAnte'), 
            icon: faMapLocationDot,
            color: 'text-green-chakra-600',
            bgColor: 'bg-green-chakra-50'
        },
        { 
            name: t('home.location.pimampiro'), 
            icon: faTree,
            color: 'text-turquoise-glaciar-600',
            bgColor: 'bg-turquoise-glaciar-50'
        },
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

            {/* Hero Image Section - Nuestro Territorio */}
            <section className="relative h-[500px] overflow-hidden">
                {/* Imagen de fondo con parallax */}
                <div className="absolute inset-0">
                    <img 
                        src="/images/Ubicacion.png" 
                        alt="Territorio Karanki" 
                        className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3000ms]"
                    />
                    {/* Overlay con gradiente diagonal */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-nocturno-900/95 via-indigo-nocturno-900/85 to-indigo-nocturno-900/70"></div>
                    
                    {/* Patrón decorativo */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                {/* Elementos decorativos animados */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-gold-solar-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-terracotta-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

                {/* Contenido */}
                <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                        {/* Columna izquierda - Texto */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-4 py-2 bg-gold-solar-500/20 backdrop-blur-sm rounded-full border border-gold-solar-400/30 mb-6"
                            >
                                <p className="text-gold-solar-300 font-medium text-sm">
                                    {t('home.location.badge')}
                                </p>
                            </motion.div>

                            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 drop-shadow-2xl">
                                {t('home.location.title')}
                            </h2>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-1">
                                    <p className="text-2xl text-cream-100 mb-6 drop-shadow-lg">
                                        {t('home.location.subtitle')}
                                    </p>
                                    <p className="text-lg text-cream-200/90 leading-relaxed">
                                        {t('home.location.description')}
                                    </p>
                                </div>
                                <TextToSpeech 
                                    text={`${t('home.location.title')}. ${t('home.location.subtitle')}. ${t('home.location.description')}`}
                                    lang={speechLang[i18n.language]}
                                    variant="hero"
                                />
                            </div>
                        </motion.div>

                        {/* Columna derecha - Info destacada */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="hidden lg:grid grid-cols-2 gap-4"
                        >
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                                <div className="text-gold-solar-400 text-4xl mb-2">🏔️</div>
                                <h3 className="text-white font-bold text-lg mb-1">{t('home.location.stats.altitude')}</h3>
                                <p className="text-cream-200 text-sm">{t('home.location.stats.altitudeValue')}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                                <div className="text-terracotta-400 text-4xl mb-2">🌡️</div>
                                <h3 className="text-white font-bold text-lg mb-1">{t('home.location.stats.climate')}</h3>
                                <p className="text-cream-200 text-sm">{t('home.location.stats.climateValue')}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                                <div className="text-green-chakra-400 text-4xl mb-2">🌾</div>
                                <h3 className="text-white font-bold text-lg mb-1">{t('home.location.stats.agriculture')}</h3>
                                <p className="text-cream-200 text-sm">{t('home.location.stats.agricultureValue')}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                                <div className="text-turquoise-glaciar-400 text-4xl mb-2">💧</div>
                                <h3 className="text-white font-bold text-lg mb-1">{t('home.location.stats.resources')}</h3>
                                <p className="text-cream-200 text-sm">{t('home.location.stats.resourcesValue')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Onda decorativa en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-20">
                    <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z" fill="#FFFEF9" />
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-br from-cream-50 via-white to-cream-50 py-20 relative overflow-hidden">
                {/* Decoración de fondo */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-solar-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-terracotta-700 mb-4">
                            {t('home.stats.sectionTitle')}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            {t('home.stats.sectionSubtitle')}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Elemento decorativo de fondo */}
                                <div className={`absolute top-0 right-0 w-32 h-32 ${
                                    index === 0 ? 'bg-terracotta-100' :
                                    index === 1 ? 'bg-gold-solar-100' :
                                    'bg-green-chakra-100'
                                } rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`}></div>
                                
                                <div className="relative z-10">
                                    <div className="mb-4 inline-block">
                                        <div className={`w-16 h-16 md:w-18 md:h-18 rounded-xl bg-gradient-to-br ${
                                            index === 0 ? 'from-terracotta-500 to-terracotta-600' :
                                            index === 1 ? 'from-gold-solar-500 to-gold-solar-600' :
                                            'from-green-chakra-500 to-green-chakra-600'
                                        } flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                            <FontAwesomeIcon 
                                                icon={stat.icon} 
                                                className="text-3xl text-white" 
                                            />
                                        </div>
                                    </div>
                                    <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 group-hover:text-terracotta-600 transition-colors">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-600 font-medium text-base md:text-lg">
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Línea decorativa inferior */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                                    index === 0 ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600' :
                                    index === 1 ? 'bg-gradient-to-r from-gold-solar-500 to-gold-solar-600' :
                                    'bg-gradient-to-r from-green-chakra-500 to-green-chakra-600'
                                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-display font-bold text-terracotta-700 mb-4">
                        {t('home.features.sectionTitle')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('home.features.sectionSubtitle')}
                    </p>
                </motion.div>

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
                                    color={feature.color}
                                    className="h-full hover:scale-105 transition-transform"
                                />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="bg-terracotta-50 py-20 pattern-dots relative overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-terracotta-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold-200/30 rounded-full blur-3xl"></div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 text-terracotta-700"
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
            <section className="bg-gradient-to-b from-white to-cream-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-4xl font-display font-bold text-terracotta-700 mb-4">
                            {t('home.location.sectionTitle')}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t('home.location.sectionSubtitle')}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {territories.map((territory, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 group"
                            >
                                <div className={`w-16 h-16 ${territory.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                    <FontAwesomeIcon 
                                        icon={territory.icon} 
                                        className={`text-3xl ${territory.color}`}
                                    />
                                </div>
                                <p className="text-sm font-medium text-gray-700 text-center leading-relaxed">
                                    {territory.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action dentro de la misma sección */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-terracotta-600 to-gold-solar-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
                    >
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            {t('home.location.territoryCta.title')}
                        </h3>
                        <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                            {t('home.location.territoryCta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/traditions"
                                className="px-8 py-4 bg-white text-terracotta-700 rounded-xl font-semibold hover:bg-cream-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {t('home.location.territoryCta.ctaTraditions')}
                            </Link>
                            <Link
                                to="/cosmovision"
                                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                            >
                                {t('home.location.territoryCta.ctaCosmovision')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
