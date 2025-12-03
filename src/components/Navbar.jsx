import { motion } from 'framer-motion';
import { menuItems } from '../lib/data';

export default function Navbar({ activeSection, setActiveSection }) {

    return (
        <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-[7%] lg:h-[50%] w-[90%] md:w-[60%] lg:w-[7%] xl:w-[5%] self-center flex justify-center relative rounded-full mx-12 my-6 lg:my-0 lg:py-12"
        >
            <div className="z-10 flex lg:flex-col w-full h-full items-center self-center justify-between relative mx-2 lg:mx-0 transparent-card rounded-full">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-auto group relative cursor-pointer ${isActive ? 'text-white' : 'text-gray-400'
                                } hover:text-white transition-all duration-200`}
                            transition={{ duration: 0.1 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeBackground"
                                    className="absolute inset-0 bg-white/15 rounded-full m-2"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }}
                                />
                            )}
                            <div className="p-5 relative z-10">
                                <Icon
                                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 ${isActive ? 'text-white' : 'text-gray-400'} group-hover:text-white transition-colors`}
                                />
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </motion.nav>
    );
};


