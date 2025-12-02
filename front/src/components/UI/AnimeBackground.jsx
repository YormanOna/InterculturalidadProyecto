import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const AnimeBackground = ({ variant = 'default' }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        containerRef.current.innerHTML = '';

        // Configuración según variante
        const configs = {
            default: {
                elements: 15,
                colors: ['rgba(255, 107, 53, 0.08)', 'rgba(255, 176, 39, 0.08)', 'rgba(61, 154, 98, 0.08)'],
                size: { min: 40, max: 120 },
            },
            hero: {
                elements: 12,
                colors: ['rgba(255, 176, 39, 0.12)', 'rgba(255, 107, 53, 0.1)', 'rgba(14, 165, 233, 0.08)'],
                size: { min: 60, max: 150 },
            },
            subtle: {
                elements: 8,
                colors: ['rgba(255, 176, 39, 0.06)', 'rgba(61, 154, 98, 0.06)', 'rgba(255, 107, 53, 0.06)'],
                size: { min: 80, max: 180 },
            }
        };

        const config = configs[variant] || configs.default;

        // Crear círculos sutiles
        for (let i = 0; i < config.elements; i++) {
            const circle = document.createElement('div');
            const size = Math.random() * (config.size.max - config.size.min) + config.size.min;
            const color = config.colors[Math.floor(Math.random() * config.colors.length)];
            
            circle.className = 'anime-circle';
            circle.style.position = 'absolute';
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.borderRadius = '50%';
            circle.style.backgroundColor = color;
            circle.style.left = `${Math.random() * 100}%`;
            circle.style.top = `${Math.random() * 100}%`;
            circle.style.filter = 'blur(40px)';
            circle.style.opacity = '0';
            
            containerRef.current.appendChild(circle);
        }

        // Animación suave de aparición y movimiento
        animate('.anime-circle', {
            translateY: () => [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
            ],
            translateX: () => [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
            ],
            opacity: [
                { to: 1, duration: 2000 },
                { to: 0.6, duration: 3000 },
                { to: 1, duration: 2000 }
            ],
            scale: [
                { to: 1.2, duration: 4000 },
                { to: 0.8, duration: 4000 }
            ],
            duration: 12000,
            ease: 'inOutQuad',
            loop: true,
            delay: stagger(800),
        });

    }, [variant]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div ref={containerRef} className="w-full h-full relative" />
        </div>
    );
};

export default AnimeBackground;
