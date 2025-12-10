import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import InfoCard from '../components/UI/InfoCard';
import Badge from '../components/UI/Badge';
import AnimeBackground from '../components/UI/AnimeBackground';
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
    const { t } = useTranslation();

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
            {/* Header */}
            <div className="relative bg-indigo-nocturno-800 text-white py-20 overflow-hidden">
                {/* Decorative celestial bodies */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-andino-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse-slow"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-gold-solar-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
                <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-turquoise-glaciar-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse-slow animation-delay-4000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4"
                    >
                        <FontAwesomeIcon icon={faMountain} className="text-6xl" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-display font-bold text-center mb-12 text-white"
                    >
                        {t('cosmovisionPage.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90"
                    >
                        {t('cosmovision.subtitle')}
                    </motion.p>
                </div>
            </div>

            {/* Pacha Mama Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-green-chakra-50 rounded-2xl p-8 md:p-12 border-2 border-green-chakra-200 mb-16 shadow-lg"
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <FontAwesomeIcon icon={faMountain} className="text-4xl text-green-chakra-800" />
                        <h2 className="text-4xl font-display font-bold text-center mb-8 text-green-chakra-800">
                            {t('cosmovisionPage.sections.pachamama.title')}
                        </h2>
                    </div>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10 text-gray-800">
                        {t('cosmovisionPage.sections.pachamama.description')}
                    </p>

                    {/* Four Elements */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">
                            {t('cosmovision.pachaMama.elements.title')}
                        </h3>
                        <p className="text-gray-700 mb-6 text-center">
                            {t('cosmovision.pachaMama.elements.description')}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {elements.map((element, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col items-center p-6 bg-cream-50 rounded-lg hover:shadow-md transition-shadow"
                                >
                                    <FontAwesomeIcon 
                                        icon={element.icon} 
                                        className={`text-5xl mb-3 ${element.color}`} 
                                    />
                                    <p className="text-sm font-semibold text-gray-700">{element.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Signs of Nature */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-display font-bold text-center mb-12 text-gold-solar-400">
                        {t('cosmovision.signs.title')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Astral Signs */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-sky-200">
                            <div className="flex items-center space-x-3 mb-6">
                                <FontAwesomeIcon icon={faSun} className="text-3xl text-gold-600" />
                                <h3 className="text-2xl font-display font-bold text-gray-800">
                                    {t('cosmovision.signs.astral.title')}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <span className="text-2xl">☀️🌈</span>
                                    <p className="text-gray-700">{t('cosmovision.signs.astral.sun')}</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-2xl">🌙🌈</span>
                                    <p className="text-gray-700">{t('cosmovision.signs.astral.moon')}</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-2xl">🌈</span>
                                    <p className="text-gray-700">{t('cosmovision.signs.astral.rainbow')}</p>
                                </li>
                            </ul>
                        </div>

                        {/* Animal Signs */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-terracotta-200">
                            <div className="flex items-center space-x-3 mb-6">
                                <FontAwesomeIcon icon={faDove} className="text-3xl text-terracotta-600" />
                                <h3 className="text-2xl font-display font-bold text-gray-800">
                                    {t('cosmovision.signs.animals.title')}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {animalSigns.map((sign, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <span className="text-2xl">{sign.emoji}</span>
                                        <p className="text-gray-700">{sign.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Natural Beliefs */}
                    <div className="bg-gradient-to-br from-sky-50 to-forest-50 rounded-2xl p-8 shadow-lg border-2 border-sky-200">
                        <div className="flex items-center space-x-3 mb-4">
                            <FontAwesomeIcon icon={faWater} className="text-3xl text-sky-600" />
                            <h3 className="text-2xl font-display font-bold text-gray-800">
                                {t('cosmovision.signs.nature.title')}
                            </h3>
                        </div>
                        <p className="text-gray-700 flex items-start space-x-3">
                            <span className="text-2xl">💧🏔️</span>
                            <span>{t('cosmovision.signs.nature.puruhanta')}</span>
                        </p>
                    </div>
                </motion.div>

                {/* Ancestral Medicine */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-display font-bold text-center mb-12 text-gold-solar-400">
                        {t('cosmovision.medicine.title')}
                    </h2>

                    {/* Healing Practices */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {healingPractices.map((practice, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-cream-200"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <FontAwesomeIcon 
                                        icon={practice.icon} 
                                        className="text-3xl text-terracotta-600" 
                                    />
                                    <Badge label={practice.badge} variant="secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {practice.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {practice.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Medicinal Plants */}
                    <div className="bg-gradient-to-br from-forest-50 to-gold-50 rounded-2xl p-8 md:p-12 border-2 border-forest-200">
                        <div className="flex items-center space-x-3 mb-8">
                            <FontAwesomeIcon icon={faSeedling} className="text-4xl text-forest-600" />
                            <h3 className="text-3xl font-display font-bold text-gray-800">
                                {t('cosmovision.medicine.plants.title')}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {medicinalPlants.map((plant, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-forest-500"
                                >
                                    <div className="flex items-start space-x-3">
                                        <span className="text-3xl">🌿</span>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-1">{plant.name}</h4>
                                            <p className="text-sm text-gray-600">{plant.use}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Cosmovision;
