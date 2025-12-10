import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    const circles = [
        { size: 400, color: 'from-primary-200/30 to-primary-100/20', delay: 0, duration: 20 },
        { size: 300, color: 'from-earth-200/30 to-earth-100/20', delay: 2, duration: 25 },
        { size: 350, color: 'from-sky-200/30 to-sky-100/20', delay: 4, duration: 22 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {circles.map((circle, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-full bg-${circle.color}-500 blur-3xl`}
                    style={{
                        width: circle.size,
                        height: circle.size,
                        left: `${20 + index * 30}%`,
                        top: `${10 + index * 20}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: circle.duration,
                        repeat: Infinity,
                        delay: circle.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;
