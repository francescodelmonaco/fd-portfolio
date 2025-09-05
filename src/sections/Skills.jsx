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

const Skills = () => {
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
            className="w-full h-full flex justify-center items-center px-4 md:px-8 lg:px-12 py-8 md:py-16 min-h-screen"
        >
            <div className="flex flex-col gap-8 md:gap-10 max-w-5xl w-4/5 px-4">
                {/* Frontend Stack */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='flex flex-col gap-4 md:gap-5'
                >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">Frontend Stack</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {frontendSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 min-h-[120px] md:min-h-[150px] flex items-center justify-center"
                            >
                                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20" />
                                    <span className="text-gray-700 font-medium text-sm md:text-base lg:text-lg">{skill.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Backend Stack */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='flex flex-col gap-4 md:gap-5'
                >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">Backend Stack</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {backendSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 min-h-[120px] md:min-h-[150px] flex items-center justify-center"
                            >
                                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16" />
                                    <span className="text-gray-700 font-medium text-sm md:text-base lg:text-lg">{skill.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Skills;
