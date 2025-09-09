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
            className="w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-8 lg:justify-center"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="bg-(--pure-white) rounded-lg shadow-lg p-6 flex flex-col justify-between"
                    >
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <span className="text-gray-500 text-xs">{project.type}</span>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="bg-blue-900 text-gray-300 px-2 py-1 rounded-full text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="self-end text-blue-900 cursor-pointer hover:text-(--blue)">
                            <Github className="inline-block w-5 h-5" />
                        </a>
                    </motion.div>
                ))
                }
            </div >
        </motion.div >
    );
}
