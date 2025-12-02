import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: 'transparent',
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.3,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: ['#D4734B', '#C08B4E', '#5C8547', '#5B9BD5'],
                },
                links: {
                    color: '#D4734B',
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce',
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    animation: {
                        enable: true,
                        speed: 0.5,
                        minimumValue: 0.1,
                    },
                },
                shape: {
                    type: ['circle', 'triangle'],
                },
                size: {
                    value: { min: 2, max: 6 },
                    random: true,
                    animation: {
                        enable: true,
                        speed: 2,
                        minimumValue: 1,
                    },
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            className="absolute inset-0 pointer-events-none"
        />
    );
};

export default ParticleBackground;
