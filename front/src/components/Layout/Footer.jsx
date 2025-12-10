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
        <footer className="bg-gradient-to-br from-terracotta-900 via-terracotta-800 to-gold-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-terracotta-400 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">KK</span>
                            </div>
                            <span className="font-display font-bold text-xl">
                                Karanki
                            </span>
                        </div>
                        <p className="text-cream-200 text-sm leading-relaxed">
                            Pueblo Indígena Kichwa Karanki - Preservando más de 500 años de cultura ancestral en el corazón de Imbabura, Ecuador.
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
