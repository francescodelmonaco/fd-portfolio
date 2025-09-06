import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';
import fotoProfilo from '../assets/img/foto-profilo.png';
import cvFile from '../assets/cv-francesco-delmonaco.pdf';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-screen flex justify-center items-center"
        >
            <div className="flex flex-col w-3/4 text-center gap-7">
                {/* foto profilo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="w-100 h-100 rounded-full overflow-hidden shadow-lg">
                        <img
                            src={fotoProfilo}
                            alt="Francesco Delmonaco"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* intestazione */}
                <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-6xl"
                >
                    Francesco Delmonaco
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl text-gray-600"
                >
                    Jr Full Stack Web Developer
                </motion.p>

                {/* link social */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex justify-center gap-15 pt-10"
                >
                    <a
                        href="https://github.com/francescodelmonaco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors gap-3"
                    >
                        <Github size={50} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/francescodelmonaco/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors gap-3"
                    >
                        <Linkedin size={50} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href={cvFile}
                        download="cv-francesco-delmonaco.pdf"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors gap-3"
                    >
                        <FileText size={50} />
                        <span>CV</span>
                    </a>
                </motion.div>
            </div>
        </motion.div >
    );
};

export default About;
