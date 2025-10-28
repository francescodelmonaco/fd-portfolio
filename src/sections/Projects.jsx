import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '../lib/data';

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-8 lg:justify-center overflow-y-auto"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="bg-(--pure-white) rounded-lg shadow-lg p-6 flex flex-col justify-between"
                    >
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between gap-2'>
                                <h3 className="text-xl font-semibold">{project.title}</h3>

                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-900 cursor-pointer hover:text-(--blue)">
                                    <Github className="inline-block w-5 h-5" />
                                </a>
                            </div>
                            <span className="text-gray-500 text-xs">{project.type}</span>
                            <p className="text-gray-600 mb-4 line-clamp-5 lg:line-clamp-2">{project.description}</p>
                        </div>
                        <div className='flex flex-wrap gap-2 align-middle'>
                            {project.tech.map((tech, i) => (
                                <span key={i} className="bg-blue-900 text-white px-2 py-1 rounded-full text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))
                }
            </div >
        </motion.div >
    );
}
