import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Travel Journal',
            description: 'Applicazione full-stack per la gestione di un diario di viaggio con autenticazione utenti e database.',
            tech: ['React', 'Node.js', 'Express', 'MySQL'],
            github: 'https://github.com/francescodelmonaco/travel-journal-app',
            type: 'Frontend + Backend'
        },
        {
            title: 'VinylMatch',
            description: 'Piattaforma frontend per la ricerca e il matching di vinili musicali con interfaccia moderna.',
            tech: ['React', 'CSS', 'JavaScript'],
            github: 'https://github.com/francescodelmonaco/progetto-finale-spec-frontend-front',
            type: 'Frontend'
        },
        {
            title: 'Kick Shop',
            description: 'E-commerce completo per la vendita di scarpe con gestione carrello e sistema di pagamento.',
            tech: ['React', 'Node.js', 'Express', 'MySQL'],
            github: 'https://github.com/francescodelmonaco/kick-shop',
            type: 'Frontend + Backend'
        },
        {
            title: 'BooRoad',
            description: 'Applicazione frontend per la prenotazione di viaggi con interfaccia utente intuitiva.',
            tech: ['React', 'CSS', 'JavaScript'],
            github: 'https://github.com/francescodelmonaco/BooRoad',
            type: 'Frontend'
        },
        {
            title: 'Task Manager',
            description: 'Applicazione React per la gestione di task e progetti con funzionalità di organizzazione.',
            tech: ['React', 'JavaScript', 'CSS'],
            github: 'https://github.com/francescodelmonaco/ex-react-task-manager',
            type: 'Frontend'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
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
                Progetti
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        variants={itemVariants}
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.3 }
                        }}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                    {project.type}
                                </span>
                            </div>

                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Github size={16} />
                                    <span className="text-sm">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
