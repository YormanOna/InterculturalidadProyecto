import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/culture', label: t('nav.culture') },
        { path: '/community', label: t('nav.community') },
        { path: '/traditions', label: t('nav.traditions') },
        { path: '/gallery', label: t('nav.gallery') },
        { path: '/contact', label: t('nav.contact') },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="bg-gradient-to-br from-terracotta-900 via-terracotta-800 to-gold-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-terracotta-400 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">IC</span>
                            </div>
                            <span className="font-display font-bold text-xl">
                                Interculturalidad
                            </span>
                        </div>
                        <p className="text-cream-200 text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
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

                    {/* Contact & Social Section */}
                    <div>
                        <h3 className="font-display font-semibold text-lg mb-4">
                            {t('footer.social')}
                        </h3>
                        <div className="flex space-x-4 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 bg-terracotta-700 hover:bg-gold-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <div className="space-y-2 text-sm text-cream-200">
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>contacto@interculturalidad.org</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>+593 99 999 9999</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>{t('contact.info.locationText')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-terracotta-700 mt-8 pt-8 text-center">
                    <p className="text-cream-300 text-sm">
                        © {currentYear} Interculturalidad. {t('footer.rights')}.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
