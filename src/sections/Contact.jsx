import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Qui potresti implementare l'invio del form
        console.log('Form submitted:', formData);
        alert('Messaggio inviato! Ti risponderò al più presto.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col justify-center items-center px-12 py-8 min-h-screen"
        >
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl font-light text-gray-900 mb-16 text-center"
            >
                Contatti
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 max-w-4xl w-full">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h3 className="text-2xl font-medium text-gray-800 mb-8">Parliamone</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Sono sempre aperto a nuove opportunità e collaborazioni.
                        Non esitare a contattarmi per discutere di progetti interessanti
                        o semplicemente per fare una chiacchierata sul mondo dello sviluppo web.
                    </p>

                    <div className="space-y-6">
                        <motion.a
                            href="mailto:francescodelmonaco@example.com"
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Mail size={20} />
                            <span>francescodelmonaco@example.com</span>
                        </motion.a>

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
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                name="subject"
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
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                        >
                            <Send size={18} />
                            <span>Invia il messaggio</span>
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
                    © 2025 Francesco Delmonaco. Tutti i diritti riservati.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
