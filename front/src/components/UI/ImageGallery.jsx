import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ImageGallery = ({ images, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = selectedCategory === 'all'
        ? images
        : images.filter(img => img.category === selectedCategory);

    return (
        <div>
            {/* Category Filter */}
            {categories && (
                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-700 shadow'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                                        {image.description && (
                                            <p className="text-white/90 text-sm mt-1">{image.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-white text-2xl font-semibold">{selectedImage.title}</h3>
                                {selectedImage.description && (
                                    <p className="text-white/80 mt-2">{selectedImage.description}</p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageGallery;
