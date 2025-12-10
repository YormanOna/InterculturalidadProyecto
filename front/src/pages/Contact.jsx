import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ChevronDown, ChevronUp, Facebook, Twitter, Instagram } from 'lucide-react';
import Tooltip from '../components/UI/Tooltip';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(t('contact.form.success'));
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const faqs = [
        {
            question: t('contact.faq.q1.question'),
            answer: t('contact.faq.q1.answer'),
        },
        {
            question: t('contact.faq.q2.question'),
            answer: t('contact.faq.q2.answer'),
        },
        {
            question: t('contact.faq.q3.question'),
            answer: t('contact.faq.q3.answer'),
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-turquoise-glaciar-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-display font-bold mb-6">
                        {t('contactPage.title')}
                    </h1>
                    <p className="text-xl mb-12 max-w-3xl mx-auto">
                        {t('contactPage.subtitle')}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
                        {/* Contact Information */}
                        <div className="text-left">
                            <h2 className="text-3xl font-display font-bold mb-6 text-gold-solar-200">
                                {t('contactPage.info.title')}
                            </h2>
                            <div className="space-y-6 text-lg">
                                <p className="flex items-center">
                                    <Phone className="w-6 h-6 mr-3 text-gold-solar-300" />
                                    <span>{t('contactPage.info.phone')}</span>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="w-6 h-6 mr-3 text-gold-solar-300" />
                                    <span>{t('contactPage.info.email')}</span>
                                </p>
                                <p className="flex items-start">
                                    <MapPin className="w-6 h-6 mr-3 text-gold-solar-300 flex-shrink-0" />
                                    <span>{t('contactPage.info.address')}</span>
                                </p>
                                <div className="flex space-x-6 mt-8">
                                    <a href="#" className="text-gold-solar-300 hover:text-gold-solar-500 transition-colors">
                                        <Facebook className="w-7 h-7" />
                                    </a>
                                    <a href="#" className="text-gold-solar-300 hover:text-gold-solar-500 transition-colors">
                                        <Twitter className="w-7 h-7" />
                                    </a>
                                    <a href="#" className="text-gold-solar-300 hover:text-gold-solar-500 transition-colors">
                                        <Instagram className="w-7 h-7" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-cream-100 rounded-2xl p-8 border-2 border-gold-solar-200 shadow-lg text-gray-800 text-left">
                            <h2 className="text-3xl font-display font-bold mb-6 text-terracotta-700">
                                {t('contactPage.form.title')}
                            </h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-lg font-medium mb-2">
                                        {t('contactPage.form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full p-3 border border-cream-300 rounded-lg focus:ring-terracotta-500 focus:border-terracotta-500 transition-colors"
                                        placeholder={t('contactPage.form.namePlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium mb-2">
                                        {t('contactPage.form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full p-3 border border-cream-300 rounded-lg focus:ring-terracotta-500 focus:border-terracotta-500 transition-colors"
                                        placeholder={t('contactPage.form.emailPlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lg font-medium mb-2">
                                        {t('contactPage.form.message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full p-3 border border-cream-300 rounded-lg focus:ring-terracotta-500 focus:border-terracotta-500 transition-colors"
                                        placeholder={t('contactPage.form.messagePlaceholder')}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary">
                                    {t('contactPage.form.submit')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl shadow-xl p-8 border-2 border-cream-200"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Tooltip id="name-tooltip" content="Ingresa tu nombre completo">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contact.form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-cream-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 transition-all"
                                    />
                                </div>
                            </Tooltip>

                            <Tooltip id="email-tooltip" content="Tu correo electrónico de contacto">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contact.form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-cream-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 transition-all"
                                    />
                                </div>
                            </Tooltip>

                            <Tooltip id="message-tooltip" content="Escribe tu mensaje o consulta">
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contact.form.message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border-2 border-cream-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 transition-all resize-none"
                                    />
                                </div>
                            </Tooltip>

                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center space-x-2"
                            >
                                <span>{t('contact.form.send')}</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info & FAQ */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gradient-to-br from-cream-100 to-gold-50 rounded-2xl p-8 border-2 border-gold-200"
                        >
                            <h2 className="text-2xl font-display font-bold mb-6 text-gray-800">
                                {t('contact.info.title')}
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-6 h-6 text-terracotta-600 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{t('contact.info.location')}</p>
                                        <p className="text-gray-600">{t('contact.info.locationText')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Mail className="w-6 h-6 text-terracotta-600 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{t('contact.info.email')}</p>
                                        <p className="text-gray-600">contacto@interculturalidad.org</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Phone className="w-6 h-6 text-terracotta-600 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{t('contact.info.phone')}</p>
                                        <p className="text-gray-600">+593 99 999 9999</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* FAQ */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-xl p-8 border-2 border-cream-200"
                        >
                            <h2 className="text-2xl font-display font-bold mb-6 text-gray-800">
                                {t('contact.faq.title')}
                            </h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-cream-200 pb-4">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full flex items-center justify-between text-left hover:text-terracotta-600 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-800">{faq.question}</span>
                                            {openFaq === index ? (
                                                <ChevronUp className="w-5 h-5 text-terracotta-600" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-terracotta-600" />
                                            )}
                                        </button>
                                        {openFaq === index && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="mt-3 text-gray-600"
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
