import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronLeft, 
    faChevronRight,
    faSun,
    faMoon,
    faSeedling,
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

const FestivalCalendar = () => {
    const { t } = useTranslation();
    const [selectedFestival, setSelectedFestival] = useState(null);

    const festivals = [
        {
            id: 1,
            month: 3,
            day: 21,
            name: t('traditions.festivals.pawkar.name'),
            shortName: 'Paukar Raymi',
            icon: faSeedling,
            color: 'green-chakra',
            description: t('traditions.festivals.pawkar.description'),
            image: '/images/Festividades/Fiestas3.png'
        },
        {
            id: 2,
            month: 6,
            day: 21,
            name: t('traditions.festivals.inti.name'),
            shortName: 'Inti Raymi',
            icon: faSun,
            color: 'gold-solar',
            description: t('traditions.festivals.inti.description'),
            image: '/images/Festividades/Fiestas1.png'
        },
        {
            id: 3,
            month: 9,
            day: 21,
            name: t('traditions.festivals.kulla.name'),
            shortName: 'Kulla Raymi',
            icon: faMoon,
            color: 'purple-andino',
            description: t('traditions.festivals.kulla.description'),
            image: '/images/Festividades/Fiestas2.png'
        },
    ];

    const months = [
        { num: 1, name: t('calendar.months.january', 'Enero') },
        { num: 2, name: t('calendar.months.february', 'Febrero') },
        { num: 3, name: t('calendar.months.march', 'Marzo') },
        { num: 4, name: t('calendar.months.april', 'Abril') },
        { num: 5, name: t('calendar.months.may', 'Mayo') },
        { num: 6, name: t('calendar.months.june', 'Junio') },
        { num: 7, name: t('calendar.months.july', 'Julio') },
        { num: 8, name: t('calendar.months.august', 'Agosto') },
        { num: 9, name: t('calendar.months.september', 'Septiembre') },
        { num: 10, name: t('calendar.months.october', 'Octubre') },
        { num: 11, name: t('calendar.months.november', 'Noviembre') },
        { num: 12, name: t('calendar.months.december', 'Diciembre') },
    ];

    const getFestivalsForMonth = (monthNum) => {
        return festivals.filter(f => f.month === monthNum);
    };

    const getColorClasses = (color) => {
        const colorMap = {
            'green-chakra': {
                bg: 'bg-green-chakra-50',
                border: 'border-green-chakra-400',
                text: 'text-green-chakra-700',
                icon: 'text-green-chakra-600',
                glow: 'shadow-glow-turquoise'
            },
            'gold-solar': {
                bg: 'bg-gold-solar-50',
                border: 'border-gold-solar-400',
                text: 'text-gold-solar-700',
                icon: 'text-gold-solar-600',
                glow: 'shadow-glow-gold'
            },
            'purple-andino': {
                bg: 'bg-purple-andino-50',
                border: 'border-purple-andino-400',
                text: 'text-purple-andino-700',
                icon: 'text-purple-andino-600',
                glow: 'shadow-glow-purple'
            }
        };
        return colorMap[color] || colorMap['green-chakra'];
    };

    return (
        <div className="w-full">
            {/* Timeline View */}
            <div className="mb-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center mb-8"
                >
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl text-purple-andino-500 mr-3" />
                    <h3 className="text-3xl font-display font-bold gradient-text">
                        {t('calendar.title', 'Calendario de Festividades')}
                    </h3>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-chakra-400 rounded-full transform -translate-y-1/2 z-0"></div>

                    {/* Festival Cards on Timeline */}
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
                        {festivals.map((festival, index) => {
                            const colors = getColorClasses(festival.color);
                            return (
                                <motion.div
                                    key={festival.id}
                                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className={`relative bg-white rounded-2xl p-6 shadow-neo-1 hover:shadow-neo-2 transition-all duration-300 border-2 ${colors.border} cursor-pointer group`}
                                    onClick={() => setSelectedFestival(festival)}
                                >
                                    {/* Date Badge */}
                                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.bg} ${colors.border} border-2 rounded-full px-4 py-2 shadow-lg`}>
                                        <p className={`text-sm font-bold ${colors.text}`}>
                                            {festival.day} {months[festival.month - 1].name}
                                        </p>
                                    </div>

                                    {/* Icon */}
                                    <div className={`flex justify-center mb-4 mt-6`}>
                                        <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center group-hover:animate-pacha-breath`}>
                                            <FontAwesomeIcon icon={festival.icon} className={`text-4xl ${colors.icon}`} />
                                        </div>
                                    </div>

                                    {/* Festival Name */}
                                    <h4 className={`text-xl font-bold text-center mb-3 ${colors.text}`}>
                                        {festival.shortName}
                                    </h4>

                                    {/* Short Description */}
                                    <p className="text-gray-600 text-sm text-center line-clamp-2">
                                        {festival.description.substring(0, 100)}...
                                    </p>

                                    {/* Hover Indicator */}
                                    <div className="mt-4 text-center">
                                        <span className={`text-xs ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                                            Click para ver más →
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Modal de detalles del festival */}
            <AnimatePresence>
                {selectedFestival && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFestival(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        >
                            {/* Modal content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
                            >
                                {/* Botón cerrar */}
                                <button
                                    onClick={() => setSelectedFestival(null)}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all shadow-lg"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Imagen del festival */}
                                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                                    <img 
                                        src={selectedFestival.image} 
                                        alt={selectedFestival.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-${selectedFestival.color}-900/80 to-transparent`}></div>
                                    
                                    {/* Fecha en badge flotante */}
                                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl">
                                        <p className={`text-2xl font-bold ${getColorClasses(selectedFestival.color).text}`}>
                                            {selectedFestival.day}
                                        </p>
                                        <p className="text-sm text-gray-600 font-medium">
                                            {months[selectedFestival.month - 1].name}
                                        </p>
                                    </div>
                                </div>

                                {/* Contenido del modal */}
                                <div className="p-8">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className={`w-16 h-16 ${getColorClasses(selectedFestival.color).bg} rounded-2xl flex items-center justify-center border-2 ${getColorClasses(selectedFestival.color).border}`}>
                                            <FontAwesomeIcon icon={selectedFestival.icon} className={`text-3xl ${getColorClasses(selectedFestival.color).icon}`} />
                                        </div>
                                        <div>
                                            <h3 className={`text-4xl font-display font-bold ${getColorClasses(selectedFestival.color).text}`}>
                                                {selectedFestival.name}
                                            </h3>
                                            <p className="text-gray-600 text-lg">
                                                {selectedFestival.day} de {months[selectedFestival.month - 1].name}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`${getColorClasses(selectedFestival.color).bg} rounded-2xl p-6 mb-6 border ${getColorClasses(selectedFestival.color).border}`}>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            {selectedFestival.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => setSelectedFestival(null)}
                                            className={`px-8 py-4 bg-gradient-to-r ${getColorClasses(selectedFestival.color).bg} ${getColorClasses(selectedFestival.color).text} rounded-xl font-semibold hover:shadow-lg transition-all duration-300 border-2 ${getColorClasses(selectedFestival.color).border}`}
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Vista Anual con Modal */}
            <div className="mt-16">
                <h4 className="text-2xl font-bold text-center mb-8 text-gray-800">
                    {t('calendar.yearView', 'Vista Anual')}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {months.map((month) => {
                        const monthFestivals = getFestivalsForMonth(month.num);
                        const hasFestival = monthFestivals.length > 0;
                        
                        return (
                            <motion.div
                                key={month.num}
                                whileHover={{ scale: hasFestival ? 1.05 : 1 }}
                                className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                                    hasFestival 
                                        ? `${getColorClasses(monthFestivals[0].color).bg} ${getColorClasses(monthFestivals[0].color).border} cursor-pointer shadow-md hover:shadow-lg` 
                                        : 'bg-gray-50 border-gray-200'
                                }`}
                                onClick={() => hasFestival && setSelectedFestival(monthFestivals[0])}
                            >
                                <p className={`text-center font-semibold ${hasFestival ? getColorClasses(monthFestivals[0].color).text : 'text-gray-400'}`}>
                                    {month.name}
                                </p>
                                {hasFestival && (
                                    <div className="flex justify-center mt-2">
                                        {monthFestivals.map(f => (
                                            <FontAwesomeIcon 
                                                key={f.id}
                                                icon={f.icon} 
                                                className={`text-2xl ${getColorClasses(f.color).icon} animate-pulse-slow`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FestivalCalendar;
