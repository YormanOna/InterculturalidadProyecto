import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ImageGallery from '../components/UI/ImageGallery';

const Gallery = () => {
    const { t } = useTranslation();

    const categories = [
        { id: 'all', label: t('gallery.categories.all') },
        { id: 'landscapes', label: t('gallery.categories.landscapes') },
        { id: 'people', label: t('gallery.categories.people') },
        { id: 'crafts', label: t('gallery.categories.crafts') },
        { id: 'festivals', label: t('gallery.categories.festivals') },
    ];

    // Images with i18n translations - Using local images
    const images = [
        {
            id: 1,
            src: '/images/Ubicacion.png',
            alt: t('gallery.images.mountains.title'),
            title: t('gallery.images.mountains.title'),
            description: t('gallery.images.mountains.description'),
            category: 'landscapes',
        },
        {
            id: 2,
            src: '/images/Image1.png',
            alt: t('gallery.images.fields.title'),
            title: t('gallery.images.fields.title'),
            description: t('gallery.images.fields.description'),
            category: 'landscapes',
        },
        {
            id: 3,
            src: '/images/Vestimenta.png',
            alt: t('gallery.images.textiles.title'),
            title: t('gallery.images.textiles.title'),
            description: t('gallery.images.textiles.description'),
            category: 'crafts',
        },
        {
            id: 4,
            src: '/images/Festividades/Fiestas1.png',
            alt: t('gallery.images.celebration.title'),
            title: t('gallery.images.celebration.title'),
            description: t('gallery.images.celebration.description'),
            category: 'festivals',
        },
        {
            id: 5,
            src: '/images/Conocenos.png',
            alt: t('gallery.images.village.title'),
            title: t('gallery.images.village.title'),
            description: t('gallery.images.village.description'),
            category: 'landscapes',
        },
        {
            id: 6,
            src: '/images/Cultura.png',
            alt: t('gallery.images.pottery.title'),
            title: t('gallery.images.pottery.title'),
            description: t('gallery.images.pottery.description'),
            category: 'crafts',
        },
        {
            id: 7,
            src: '/images/Identidad.png',
            alt: t('gallery.images.sunset.title'),
            title: t('gallery.images.sunset.title'),
            description: t('gallery.images.sunset.description'),
            category: 'people',
        },
        {
            id: 8,
            src: '/images/Tradiciones.png',
            alt: t('gallery.images.baskets.title'),
            title: t('gallery.images.baskets.title'),
            description: t('gallery.images.baskets.description'),
            category: 'crafts',
        },
        {
            id: 9,
            src: '/images/Festividades/Fiestas2.png',
            alt: t('gallery.images.dance.title'),
            title: t('gallery.images.dance.title'),
            description: t('gallery.images.dance.description'),
            category: 'festivals',
        },
        {
            id: 10,
            src: '/images/Festividades/Fiestas3.png',
            alt: t('gallery.images.celebration.title'),
            title: t('gallery.images.celebration.title'),
            description: t('gallery.images.celebration.description'),
            category: 'festivals',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-br from-terracotta-600 via-sky-600 to-gold-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-display font-bold mb-4"
                    >
                        {t('gallery.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90"
                    >
                        {t('gallery.subtitle')}
                    </motion.p>
                </div>
            </div>

            {/* Gallery */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <ImageGallery images={images} categories={categories} />
            </section>
        </div>
    );
};

export default Gallery;
