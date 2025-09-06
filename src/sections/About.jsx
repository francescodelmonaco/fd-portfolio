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
            className="w-full h-screen flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12"
        >
            <div className="flex flex-col w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 text-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
                {/* foto profilo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden shadow-lg mx-auto">
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
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
                >
                    Francesco Delmonaco
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600"
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
                    <a
                        href="https://github.com/francescodelmonaco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-gray-900 transition-colors gap-2 sm:gap-3"
                    >
                        <Github className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        <span className="text-sm sm:text-base md:text-lg">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/francescodelmonaco/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-gray-900 transition-colors gap-2 sm:gap-3"
                    >
                        <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        <span className="text-sm sm:text-base md:text-lg">LinkedIn</span>
                    </a>
                    <a
                        href={cvFile}
                        download="cv-francesco-delmonaco.pdf"
                        className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-gray-900 transition-colors gap-2 sm:gap-3"
                    >
                        <FileText className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        <span className="text-sm sm:text-base md:text-lg">CV</span>
                    </a>
                </motion.div>
            </div>
        </motion.div >
    );
};

export default About;
