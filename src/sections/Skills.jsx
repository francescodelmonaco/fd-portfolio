import { motion } from 'framer-motion';
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';
import bootstrapIcon from '../assets/icons/bootstrap.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import nodeIcon from '../assets/icons/node js.svg';
import expressIcon from '../assets/icons/express.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import supabaseIcon from '../assets/icons/supabase.svg';

const frontendSkills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'Bootstrap', icon: bootstrapIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'React', icon: reactIcon },
];

const backendSkills = [
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Express', icon: expressIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Supabase', icon: supabaseIcon },
];

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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-8"
        >
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
                {/* stack frontend */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='flex flex-col gap-5'
                >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center">Frontend Stack</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                        {frontendSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-3 sm:p-4 md:p-5"
                            >
                                <div className="flex flex-col items-center text-center gap-2">
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
                                    <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base lg:text-lg">{skill.name}</span>
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
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center">Backend Stack</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                        {backendSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-3 sm:p-4 md:p-5"
                            >
                                <div className="flex flex-col items-center text-center gap-2">
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
                                    <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base lg:text-lg">{skill.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};


