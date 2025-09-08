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

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12"
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-center">Progetti</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-gray-500 text-xs">{project.type}</span>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                                <Github className="inline-block w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
