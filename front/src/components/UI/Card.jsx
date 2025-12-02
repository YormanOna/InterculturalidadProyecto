import { motion } from 'framer-motion';

const Card = ({ title, description, icon: Icon, image, children, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`card ${className}`}
        >
            {image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {Icon && (
                <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-earth-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                </div>
            )}

            {title && (
                <h3 className="text-2xl font-display font-semibold mb-3 text-gray-800">
                    {title}
                </h3>
            )}

            {description && (
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            )}

            {children}
        </motion.div>
    );
};

export default Card;
