import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  primaryColor = 'terracotta',
  icon = null,
  iconColor = 'white',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`card ${className}`}
    >
      {icon && (
        <div
          className={`w-12 h-12 bg-${primaryColor}-500 rounded-lg flex items-center justify-center shadow-md mb-4`}
        >
          {typeof icon === 'string' ? (
            <span className={`text-2xl text-${iconColor}`}>{icon}</span>
          ) : (
            <icon.type {...icon.props} className={`w-6 h-6 text-${iconColor}`} />
          )}
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
