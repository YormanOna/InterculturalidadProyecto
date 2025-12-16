import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/culture', label: t('nav.culture') },
        { path: '/community', label: t('nav.community') },
        { path: '/traditions', label: t('nav.traditions') },
        { path: '/cosmovision', label: t('nav.cosmovision') },
        { path: '/gallery', label: t('nav.gallery') },
        { path: '/learn', label: t('nav.learn') },
    ];

    const languages = [
        { code: 'es', label: 'Español', flag: '🇪🇸', nativeName: 'Español' },
        { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
        { code: 'qu', label: 'Kichwa', flag: '🏔️', nativeName: 'Kichwa' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangOpen(false);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 border-b-2 border-terracotta-200' 
                : 'bg-transparent border-b-2 border-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/images/icono.png" alt="Karanki Logo" className="h-10 w-10" />
                        <span className={`font-display font-bold text-xl hidden sm:block transition-colors duration-300 ${
                            isScrolled ? 'text-terracotta-700' : 'text-white'
                        }`}>
                            Karanki
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    isActive(link.path)
                                        ? 'bg-terracotta-600 text-white shadow-md'
                                        : isScrolled
                                            ? 'text-gray-700 hover:bg-terracotta-50 hover:text-terracotta-700'
                                            : 'text-white hover:bg-white/20 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Language Switcher & Mobile Menu Button */}
                    <div className="flex items-center space-x-2">
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-solar-50 to-gold-solar-100 hover:from-gold-solar-100 hover:to-gold-solar-200 transition-all duration-300 border-2 border-gold-solar-300 shadow-sm hover:shadow-md group"
                            >
                                <Globe className="w-5 h-5 text-gold-solar-700 group-hover:rotate-12 transition-transform duration-300" />
                                <span className="text-2xl">
                                    {languages.find(l => l.code === i18n.language)?.flag || '🌍'}
                                </span>
                                <span className="text-sm font-semibold text-gold-solar-800 hidden sm:inline">
                                    {languages.find(l => l.code === i18n.language)?.nativeName || 'Language'}
                                </span>
                            </button>

                            <AnimatePresence>
                                {langOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl py-2 border-2 border-gold-solar-200 overflow-hidden"
                                    >
                                        {languages.map((lang, index) => (
                                            <motion.button
                                                key={lang.code}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`w-full text-left px-4 py-3 transition-all duration-200 flex items-center space-x-3 group ${
                                                    i18n.language === lang.code 
                                                        ? 'bg-gradient-to-r from-terracotta-50 to-gold-solar-50 border-l-4 border-terracotta-600' 
                                                        : 'hover:bg-gradient-to-r hover:from-cream-50 hover:to-gold-solar-50 hover:border-l-4 hover:border-gold-solar-400'
                                                }`}
                                            >
                                                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                                                    {lang.flag}
                                                </span>
                                                <div className="flex flex-col">
                                                    <span className={`font-bold text-sm ${
                                                        i18n.language === lang.code 
                                                            ? 'text-terracotta-700' 
                                                            : 'text-gray-700 group-hover:text-terracotta-600'
                                                    }`}>
                                                        {lang.nativeName}
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        {lang.label}
                                                    </span>
                                                </div>
                                                {i18n.language === lang.code && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="ml-auto"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-terracotta-600"></div>
                                                    </motion.div>
                                                )}
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-2 rounded-lg transition-colors ${
                                isScrolled 
                                    ? 'bg-terracotta-50 text-terracotta-700 hover:bg-terracotta-100' 
                                    : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`md:hidden pb-4 ${!isScrolled ? 'bg-white/10 backdrop-blur-md rounded-lg mt-2' : ''}`}
                        >
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                            isActive(link.path)
                                                ? 'bg-terracotta-600 text-white shadow-md'
                                                : isScrolled
                                                    ? 'text-gray-700 hover:bg-terracotta-50 hover:text-terracotta-700'
                                                    : 'text-white hover:bg-white/20'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
