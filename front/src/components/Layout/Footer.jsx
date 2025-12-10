import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF, 
    faInstagram, 
    faTwitter, 
    faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { 
    faMapMarkerAlt, 
    faEnvelope, 
    faPhone 
} from '@fortawesome/free-solid-svg-icons';

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

    const socialLinks = [
        { icon: faFacebookF, url: '#', label: 'Facebook', color: 'hover:text-blue-400' },
        { icon: faInstagram, url: '#', label: 'Instagram', color: 'hover:text-pink-400' },
        { icon: faTwitter, url: '#', label: 'Twitter', color: 'hover:text-sky-400' },
        { icon: faYoutube, url: '#', label: 'YouTube', color: 'hover:text-red-400' },
    ];

    return (
        <footer className="bg-indigo-nocturno-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Columna 1: Logo y Descripción */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <img src="/images/icono.png" alt="Karanki Logo" className="h-12 w-12" />
                            <span className="font-display font-bold text-2xl text-white">Karanki</span>
                        </Link>
                        <p className="text-cream-200 text-sm leading-relaxed mb-4">
                            {t('footer.description')}
                        </p>
                        {/* Redes Sociales */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    className={`w-10 h-10 rounded-full bg-indigo-nocturno-800 flex items-center justify-center text-cream-200 ${social.color} transition-all duration-300 hover:scale-110`}
                                    title={social.label}
                                    aria-label={social.label}
                                >
                                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columna 2: Enlaces */}
                    <div>
                        <h3 className="font-display font-semibold text-lg mb-4 text-gold-solar-400">
                            {t('footer.links')}
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-cream-200 hover:text-gold-solar-400 transition-colors duration-300 text-sm flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-gold-solar-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div>
                        <h3 className="font-display font-semibold text-lg mb-4 text-gold-solar-400">
                            {t('footer.contact')}
                        </h3>
                        <ul className="space-y-3 text-sm text-cream-200">
                            <li className="flex items-start space-x-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-terracotta-400 mt-1 flex-shrink-0" />
                                <span>{t('footer.location')}<br />{t('footer.cantons')}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-terracotta-400 flex-shrink-0" />
                                <a href="mailto:info@karanki.ec" className="hover:text-gold-solar-400 transition-colors">
                                    {t('footer.email')}
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FontAwesomeIcon icon={faPhone} className="text-terracotta-400 flex-shrink-0" />
                                <span>{t('footer.phone')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Sobre Nosotros */}
                    <div>
                        <h3 className="font-display font-semibold text-lg mb-4 text-gold-solar-400">
                            {t('footer.mission')}
                        </h3>
                        <p className="text-cream-200 text-sm leading-relaxed mb-4">
                            {t('footer.missionText')}
                        </p>
                        <Link
                            to="/community"
                            className="inline-block px-4 py-2 bg-terracotta-600 text-white rounded-lg text-sm font-medium hover:bg-terracotta-700 transition-colors"
                        >
                            {t('footer.learnMore')}
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-indigo-nocturno-700 pt-8">
                    <div className="flex justify-center items-center">
                        <p className="text-cream-300 text-sm text-center">
                            © {currentYear} {t('footer.rights')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
