import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/culture', label: t('nav.culture') },
        { path: '/community', label: t('nav.community') },
        { path: '/traditions', label: t('nav.traditions') },
        { path: '/cosmovision', label: t('nav.cosmovision') },
        { path: '/gallery', label: t('nav.gallery') },
    ];

    const languages = [
        { code: 'es', label: t('language.spanish'), flag: '🇪🇸' },
        { code: 'en', label: t('language.english'), flag: '🇬🇧' },
        { code: 'qu', label: t('language.kichwa'), flag: '🏔️' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangOpen(false);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-2 border-terracotta-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-terracotta-600 to-gold-600 rounded-lg flex items-center justify-center shadow-md">
                            <span className="text-white font-bold text-xl">KK</span>
                        </div>
                        <span className="font-display font-bold text-xl gradient-text hidden sm:block">
                            Karanki
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-terracotta-600 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-terracotta-50 hover:text-terracotta-700'
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
                                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gold-50 hover:bg-gold-100 transition-colors border border-gold-200"
                            >
                                <Globe className="w-5 h-5 text-gold-700" />
                                <span className="text-sm font-medium text-gold-700 hidden sm:inline">
                                    {languages.find(l => l.code === i18n.language)?.flag || '🌍'}
                                </span>
                            </button>

                            <AnimatePresence>
                                {langOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-cream-200"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`w-full text-left px-4 py-2 hover:bg-terracotta-50 transition-colors flex items-center space-x-3 ${i18n.language === lang.code ? 'bg-terracotta-50 text-terracotta-700' : 'text-gray-700'
                                                    }`}
                                            >
                                                <span className="text-xl">{lang.flag}</span>
                                                <span className="font-medium">{lang.label}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg bg-terracotta-50 text-terracotta-700 hover:bg-terracotta-100 transition-colors"
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
                            className="md:hidden pb-4"
                        >
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                                                ? 'bg-terracotta-600 text-white shadow-md'
                                                : 'text-gray-700 hover:bg-terracotta-50 hover:text-terracotta-700'
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
