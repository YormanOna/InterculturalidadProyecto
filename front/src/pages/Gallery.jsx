import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faImage, 
    faMountain, 
    faUserGroup, 
    faPalette, 
    faDrum,
    faTimes,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const categories = [
        { id: 'all', label: t('gallery.categories.all'), icon: faImage, color: 'from-purple-andino-500 to-indigo-nocturno-600' },
        { id: 'landscapes', label: t('gallery.categories.landscapes'), icon: faMountain, color: 'from-green-chakra-500 to-forest-600' },
        { id: 'people', label: t('gallery.categories.people'), icon: faUserGroup, color: 'from-terracotta-500 to-terracotta-700' },
        { id: 'crafts', label: t('gallery.categories.crafts'), icon: faPalette, color: 'from-gold-solar-500 to-gold-solar-700' },
        { id: 'festivals', label: t('gallery.categories.festivals'), icon: faDrum, color: 'from-turquoise-glaciar-500 to-sky-600' },
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

    const filteredImages = selectedCategory === 'all'
        ? images
        : images.filter(img => img.category === selectedCategory);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const handleNextImage = () => {
        const nextIndex = (currentImageIndex + 1) % filteredImages.length;
        setCurrentImageIndex(nextIndex);
        setSelectedImage(filteredImages[nextIndex]);
    };

    const handlePrevImage = () => {
        const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
        setCurrentImageIndex(prevIndex);
        setSelectedImage(filteredImages[prevIndex]);
    };

    return (
        <div className="min-h-screen bg-cream-50">
            {/* Hero Section - Mosaic Design */}
            <div className="relative bg-gradient-to-br from-indigo-nocturno-900 via-purple-andino-800 to-indigo-nocturno-900 text-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border-4 border-gold-solar-400 rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-turquoise-glaciar-400 rounded-full"></div>
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-terracotta-400 transform rotate-45"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-gold-solar-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gold-solar-400/30">
                                <FontAwesomeIcon icon={faImage} className="text-gold-solar-400" />
                                <span className="text-sm font-medium text-gold-solar-300">Galería Visual</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                                {t('galleryPage.title')}
                            </h1>
                            <p className="text-xl text-purple-100 leading-relaxed mb-8">
                                {t('gallery.subtitle')}
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                                    <span className="text-3xl font-bold text-gold-solar-400">{images.length}</span>
                                    <span className="text-sm text-cream-200">{t('galleryPage.stats.photos')}</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                                    <span className="text-3xl font-bold text-turquoise-glaciar-400">{categories.length - 1}</span>
                                    <span className="text-sm text-cream-200">{t('galleryPage.stats.categories')}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right side - Image Mosaic */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:grid grid-cols-3 gap-3 h-96"
                        >
                            {images.slice(0, 6).map((img, idx) => (
                                <motion.div
                                    key={img.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className={`relative overflow-hidden rounded-xl shadow-lg ${
                                        idx === 0 ? 'col-span-2 row-span-2' : ''
                                    }`}
                                >
                                    <img 
                                        src={img.src} 
                                        alt={img.alt} 
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Category Filter - Improved Design */}
            <section className="bg-white shadow-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                                    selectedCategory === category.id
                                        ? 'text-white shadow-lg'
                                        : 'bg-cream-100 text-gray-700 hover:bg-cream-200'
                                }`}
                            >
                                {selectedCategory === category.id && (
                                    <motion.div
                                        layoutId="categoryBackground"
                                        className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center space-x-2">
                                    <FontAwesomeIcon icon={category.icon} />
                                    <span>{category.label}</span>
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid - Improved Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="group cursor-pointer"
                                onClick={() => handleImageClick(image, index)}
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                                            {image.description && (
                                                <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                                            )}
                                        </div>
                                    </div>
                                    {/* Category badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">
                                            {categories.find(c => c.id === image.category)?.label}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                {filteredImages.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <FontAwesomeIcon icon={faImage} className="text-6xl text-gray-300 mb-4" />
                        <p className="text-gray-500 text-lg">No hay imágenes en esta categoría</p>
                    </motion.div>
                )}
            </section>

            {/* Lightbox Modal - Improved with navigation */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FontAwesomeIcon icon={faTimes} className="text-white text-xl" />
                        </button>

                        {/* Previous button */}
                        {filteredImages.length > 1 && (
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrevImage();
                                }}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} className="text-white text-xl" />
                            </button>
                        )}

                        {/* Next button */}
                        {filteredImages.length > 1 && (
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNextImage();
                                }}
                            >
                                <FontAwesomeIcon icon={faChevronRight} className="text-white text-xl" />
                            </button>
                        )}

                        {/* Image content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="max-w-6xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                                />
                            </div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
                            >
                                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                                {selectedImage.description && (
                                    <p className="text-white/80 text-lg">{selectedImage.description}</p>
                                )}
                                <div className="mt-4 flex items-center justify-center space-x-2">
                                    <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                                        {currentImageIndex + 1} / {filteredImages.length}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
