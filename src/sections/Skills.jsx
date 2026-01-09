import { motion } from 'framer-motion';
import { frontendSkills, backendSkills } from '../lib/data';

export default function Skills() {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-auto md:min-h-screen flex justify-center items-start lg:items-center px-4 md:px-8 overflow-y-auto py-6"
        >
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 py-6 md:py-0">
                {/* stack frontend */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='flex flex-col gap-5'
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">Frontend Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                        {frontendSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.025,
                                    transition: { duration: 0.2 }
                                }}
                                className="rounded-3xl flex items-center justify-center p-3 sm:p-4 md:p-5 transparent-card"
                            >
                                <div className="flex flex-col items-center text-center gap-2">
                                    <img src={skill.icon} alt={`${skill.name} - Tecnologia sviluppo web frontend`} loading="lazy" decoding="async" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
                                    <span className="font-medium text-xs sm:text-sm md:text-base lg:text-lg">{skill.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* stack backend */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='flex flex-col gap-4 md:gap-5'
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">Backend Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                        {backendSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.025,
                                    transition: { duration: 0.2 }
                                }}
                                className="rounded-3xl flex items-center justify-center p-3 sm:p-4 md:p-5 transparent-card"
                                style={{
                                    textShadow: 'rgba(0, 0, 0, 0.6) 0px 1px 2px, rgba(0, 0, 0, 0.2) 0px 0px 10px',
                                    boxShadow: 'color-mix(in oklch, white 35%, transparent) 0px 0px 2px 1px inset, color-mix(in oklch, white 15%, transparent) 0px 0px 10px 4px inset, rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 24px, rgba(17, 17, 26, 0.05) 0px 16px 56px, rgba(17, 17, 26, 0.05) 0px 4px 16px inset, rgba(17, 17, 26, 0.05) 0px 8px 24px inset, rgba(17, 17, 26, 0.05) 0px 16px 56px inset',
                                    backdropFilter: 'url("#glass-filter-«r25R1»") saturate(1)'
                                }}
                            >
                                <div className="flex flex-col items-center text-center gap-2">
                                    <img src={skill.icon} alt={`${skill.name} - Tecnologia sviluppo web backend`} loading="lazy" decoding="async" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
                                    <span className="font-medium text-xs sm:text-sm md:text-base lg:text-lg">{skill.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};


