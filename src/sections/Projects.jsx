import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
    {
        title: 'Travel Journal',
        description: 'Applicazione full-stack per la gestione di un diario di viaggio con autenticazione utenti e database.',
        tech: ['React', 'Node.js', 'Supabase', 'Tailwind'],
        github: 'https://github.com/francescodelmonaco/travel-journal-app',
        type: 'Frontend + Backend'
    },
    {
        title: 'VinylMatch',
        description: 'Piattaforma frontend per la ricerca e il matching di vinili musicali con interfaccia moderna.',
        tech: ['React', 'Bootstrap'],
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
        tech: ['React', 'Bootstrap'],
        github: 'https://github.com/francescodelmonaco/BooRoad',
        type: 'Frontend'
    },
    {
        title: 'Task Manager',
        description: 'Applicazione React per la gestione di task e progetti con funzionalità di organizzazione.',
        tech: ['React', 'CSS'],
        github: 'https://github.com/francescodelmonaco/ex-react-task-manager',
        type: 'Frontend'
    }
];

const Projects = () => {
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
            className="flex justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-8"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        variants={itemVariants}
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.3 }
                        }}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 sm:p-5"
                    >
                        <div className="flex justify-between items-center mb-2 sm:mb-3">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{project.title}</h3>
                            <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-1">
                                {project.type}
                            </span>
                        </div>

                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div className="mb-3">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                <span className="text-sm">GitHub</span>
                            </a>
                        </div>

                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
