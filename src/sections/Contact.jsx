import { motion } from 'framer-motion';
import { Github, Linkedin, Send, FileText } from 'lucide-react';
import { useState, useRef } from 'react';
import cvFile from '../assets/cv-francesco-delmonaco.pdf';
import emailjs from '@emailjs/browser';
import Loader from '../components/Loader';

// emailjs info
const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

const year = new Date().getFullYear();

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setFormData(prev => ({
                ...prev,
                subject: value
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey
        )
            .then(() => {
                alert('Messaggio inviato con successo!');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setLoading(false);
            })
            .catch((error) => {
                alert('Errore nell\'invio del messaggio. Riprova più tardi.');
                console.error('EmailJS error:', error);
                setLoading(false);
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col justify-center items-center min-h-screen"
        >
            <div className="grid md:grid-cols-2 gap-16 w-3/4">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h3 className="text-2xl font-medium text-gray-800 mb-8">Parliamone</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                        Sono sempre aperto a nuove opportunità e collaborazioni.
                        Non esitare a contattarmi per discutere di progetti interessanti
                        o semplicemente per fare una chiacchierata sul mondo dello sviluppo web.
                    </p>

                    <div className="space-y-6">
                        <motion.a
                            href="https://github.com/francescodelmonaco"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Github size={20} />
                            <span>GitHub</span>
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/francescodelmonaco/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                        </motion.a>

                        <motion.a
                            href={cvFile}
                            download="cv-francesco-delmonaco.pdf"
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <FileText size={20} />
                            <span>CV</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Nome e cognome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Oggetto della email
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="title"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Messaggio
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={5}
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: loading ? 1 : 1.02 }}
                            whileTap={{ scale: loading ? 1 : 0.98 }}
                            className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${loading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gray-900 hover:bg-gray-800'
                                } text-white`}
                        >
                            {loading ? (
                                <>
                                    <Loader />
                                    <span>Invio in corso...</span>
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    <span>Invia il messaggio</span>
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-16 pt-8 border-t border-gray-200 text-center"
            >
                <p className="text-gray-500 text-sm">
                    © {year} Francesco Delmonaco. Tutti i diritti riservati.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Contact;