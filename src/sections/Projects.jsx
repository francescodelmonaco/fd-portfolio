import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';
import { projects } from '../lib/data';

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-8 lg:justify-center overflow-y-auto"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full sm:w-5/6 md:w-4/5 lg:w-3/4">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="transparent-card rounded-3xl p-6"
                    >
                        <div className='flex justify-between gap-4'>
                            <figure className='w-1/3 hidden md:block'>
                                <img
                                    className='rounded-2xl h-50 w-full object-cover'
                                    src={project.screen || "https://picsum.photos/400/400?grayscale"}
                                    alt="Anteprima del progetto"
                                />
                            </figure>

                            <div className='flex flex-col justify-between w-full lg:w-2/3'>
                                <div className='flex flex-col gap-2'>
                                    <h3 className="text-xl font-semibold line-clamp-1">{project.title}</h3>
                                    <span className="text-gray-400 text-xs">{project.type}</span>
                                    <p className="text-gray-400 mb-4 line-clamp-5 lg:line-clamp-3">{project.description}</p>
                                </div>

                                <div className='flex justify-between gap-2'>
                                    <div className='flex flex-wrap gap-2 align-middle'>
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="bg-gray-600 shadow px-2 py-1 rounded-full text-xs font-medium self-center">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 cursor-pointer hover:text-(--gray)">
                                            <Github className="inline-block w-5 h-5" />
                                        </a>
                                    )}

                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 cursor-pointer hover:text-(--gray)">
                                            <Globe className="inline-block w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))
                }
            </div >
        </motion.section >
    );
}
