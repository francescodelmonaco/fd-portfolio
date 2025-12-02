import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';
import fotoProfilo from '../assets/img/foto-profilo.png';
import cvFile from '../assets/cv-francesco-delmonaco.pdf';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full lg:h-screen flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 overflow-y-auto"
        >
            <div className="flex flex-col w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 text-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
                {/* foto profilo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="w-45 h-45 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden shadow-xl shadow-white/10 mx-auto">
                        <img
                            src={fotoProfilo}
                            alt="Foto profilo"
                            width="256"
                            height="256"
                            decoding="async"
                            fetchPriority="high"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* intestazione */}
                <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
                >
                    Francesco Delmonaco
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400"
                >
                    Jr Full Stack Web Developer
                </motion.p>

                {/* link social */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-15 pt-6 sm:pt-8 md:pt-10"
                >
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="https://github.com/francescodelmonaco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center sm:justify-start text-gray-400 hover:text-white transition-colors gap-2 sm:gap-3"
                    >
                        <Github className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        <span className="text-sm sm:text-base md:text-lg">GitHub</span>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="https://www.linkedin.com/in/francescodelmonaco/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center sm:justify-start text-gray-400 hover:text-white transition-colors gap-2 sm:gap-3"
                    >
                        <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        <span className="text-sm sm:text-base md:text-lg">LinkedIn</span>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={cvFile}
                        download="cv-francesco-delmonaco.pdf"
                        className="flex items-center justify-center sm:justify-start text-gray-400 hover:text-white transition-colors gap-2 sm:gap-3"
                    >
                        <FileText className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        <span className="text-sm sm:text-base md:text-lg">CV</span>
                    </motion.a>
                </motion.div>
            </div>
        </motion.div >
    );
};


