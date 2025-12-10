import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/culture', label: t('nav.culture') },
        { path: '/community', label: t('nav.community') },
        { path: '/traditions', label: t('nav.traditions') },
        { path: '/gallery', label: t('nav.gallery') },
    ];

    return (
        <footer className="bg-indigo-nocturno-900 text-white mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Section 1: Logo and Description */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/images/icono.png" alt="Karanki Logo" className="h-10 w-10" />
                            <span className="font-display font-bold text-xl text-white">Karanki</span>
                        </Link>
                        <p className="text-cream-200 text-sm leading-relaxed">
                            Pueblo Indígena Kichwa Karanki - Preservando más de 500 años de cultura ancestral en el corazón de Imbabura, Ecuador.
                        </p>
                    </div>

                    {/* Section 2: Links */}
                    <div className="space-y-4">
                        <h3 className="font-display font-semibold text-lg mb-4">
                            {t('footer.links')}
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-cream-200 hover:text-gold-300 transition-colors duration-300 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 3: Social Media Links (Placeholder) */}
                    <div className="space-y-4">
                        <h3 className="font-display font-semibold text-lg mb-4">
                            {t('footer.follow')}
                        </h3>
                        <p className="text-cream-200 text-sm">
                            {t('footer.social_media_description')}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-cream-200 hover:text-gold-300 transition-colors duration-300 text-lg" title="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-cream-200 hover:text-gold-300 transition-colors duration-300 text-lg" title="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-cream-200 hover:text-gold-300 transition-colors duration-300 text-lg" title="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-terracotta-700 mt-8 pt-8 text-center">
                    <p className="text-cream-300 text-sm">
                        © {currentYear} Pueblo Indígena Kichwa Karanki. {t('footer.rights')}.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
