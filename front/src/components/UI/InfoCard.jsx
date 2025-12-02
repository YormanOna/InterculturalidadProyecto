import { motion } from 'framer-motion';
import Badge from './Badge';
import Tooltip from './Tooltip';

const InfoCard = ({
    title,
    description,
    icon: Icon,
    image,
    badges = [],
    tooltip,
    children,
    className = ''
}) => {
    const cardContent = (
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
                    <div className="w-12 h-12 bg-gradient-to-br from-terracotta-500 to-gold-500 rounded-lg flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                </div>
            )}

            {title && (
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-display font-semibold text-gray-800 flex-1">
                        {title}
                    </h3>
                    {badges.length > 0 && (
                        <div className="flex flex-wrap gap-2 ml-2">
                            {badges.map((badge, index) => (
                                <Badge key={index} variant={badge.variant || 'primary'}>
                                    {badge.label}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {description && (
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            )}

            {children}
        </motion.div>
    );

    if (tooltip) {
        return (
            <Tooltip id={`tooltip-${title}`} content={tooltip}>
                {cardContent}
            </Tooltip>
        );
    }

    return cardContent;
};

export default InfoCard;
