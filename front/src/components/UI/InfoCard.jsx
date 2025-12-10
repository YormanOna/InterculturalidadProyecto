import { motion } from 'framer-motion';
import Badge from './Badge';
import Tooltip from './Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({
    title,
    description,
    icon,
    badges = [],
    tooltip,
    children,
    className = '',
    color
}) => {
    const cardContent = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`card ${className}`}
        >
            {icon && (
                <div className="mb-4">
                    <div className={`w-12 h-12 bg-${color}-500 rounded-lg flex items-center justify-center shadow-md`}>
                        {typeof icon === 'object' && icon.prefix && icon.iconName ? (
                            <FontAwesomeIcon icon={icon} className="text-2xl text-white" />
                        ) : (
                            <span className="text-2xl text-white">{icon}</span>
                        )}
                    </div>
                </div>
            )}

            {title && (
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-display font-semibold text-indigo-nocturno-800 flex-1">
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
