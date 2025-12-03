import { motion } from 'framer-motion';
import { Github, Linkedin, Send, FileText } from 'lucide-react';
import { useState, useRef } from 'react';
import cvFile from '../assets/cv-francesco-delmonaco.pdf';
import emailjs from '@emailjs/browser';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

// informazioni emailjs
const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const contactTemplateId = import.meta.env.VITE_EMAIL_JS_CONTACT_US_TEMPLATE_ID
const autoReplyTemplateId = import.meta.env.VITE_EMAIL_JS_AUTO_REPLY_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

const year = new Date().getFullYear();

export default function Contacts() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
    });
    const [showAlert, setShowAlert] = useState(false);

    // Funzione per mostrare l'alert e chiuderlo dopo 5 secondi
    const triggerAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Prima invia la mail "contact us" a te
        emailjs.sendForm(
            serviceId,
            contactTemplateId,
            form.current,
            publicKey
        )
            .then(() => {
                // Poi invia la mail di auto-reply all'utente
                emailjs.send(
                    serviceId,
                    autoReplyTemplateId,
                    {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        title: formData.title,
                        message: formData.message
                    },
                    publicKey
                )
                    .then(() => {
                        triggerAlert();
                        setFormData({ name: '', email: '', title: '', message: '' });
                        setLoading(false);
                    })
                    .catch((error) => {
                        // In caso di errore, puoi mostrare un alert diverso se vuoi
                        setLoading(false);
                    });
            })
            .catch((error) => {
                // In caso di errore, puoi mostrare un alert diverso se vuoi
                setLoading(false);
            });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-8 lg:justify-center overflow-y-auto"
        >
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
                {showAlert && <Alert onClose={() => setShowAlert(false)} />}

                {/* informazioni contatto */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h3 className="text-xl sm:text-2xl font-medium mb-6 sm:mb-8">Restiamo in contatto...</h3>
                    <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-justify text-sm sm:text-base">
                        Sono sempre aperto a nuove opportunità e collaborazioni. Non esitare a contattarmi per discutere di progetti oppure semplicemente per fare una chiacchierata sul mondo della programmazione!
                    </p>

                    <div className="flex justify-center gap-6 sm:gap-8 mb-8 sm:mb-12">
                        <motion.a
                            href="https://github.com/francescodelmonaco"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5 sm:w-8 sm:h-8" />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/francescodelmonaco/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-5 h-5 sm:w-8 sm:h-8" />
                        </motion.a>

                        <motion.a
                            href={cvFile}
                            download="cv-francesco-delmonaco.pdf"
                            whileHover={{ scale: 1.2 }}
                            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <FileText className="w-5 h-5 sm:w-8 sm:h-8" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* modulo di contatto */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                Nome e cognome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 transparent-card rounded-full text-sm sm:text-base"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 transparent-card rounded-full text-sm sm:text-base"
                            />
                        </div>

                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-2">
                                Oggetto della email
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 transparent-card rounded-full text-sm sm:text-base"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                Messaggio
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 transparent-card rounded-3xl resize-none text-sm sm:text-base"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: loading ? 1 : 1.01 }}
                            whileTap={{ scale: loading ? 1 : 0.99 }}
                            className={`cursor-pointer w-full py-2 sm:py-3 px-4 sm:px-6 rounded-full font-medium transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base ${loading
                                ? 'bg-gray-500 cursor-not-allowed'
                                : 'bg-gray-500 hover:bg-gray-600'
                                } text-white`}
                        >
                            {loading ? (
                                <>
                                    <Loader />
                                    <span>Invio in corso...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>Invia il messaggio</span>
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            {/* piè di pagina */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-12 sm:mt-16 p-6 sm:p-8 border-t border-gray-400 text-center w-9/12"
            >
                <p className="text-gray-400 text-xs sm:text-sm">
                    © {year} Francesco Delmonaco. Tutti i diritti riservati.
                </p>
            </motion.div>
        </motion.section>
    );
}

