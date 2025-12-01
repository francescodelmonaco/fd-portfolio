import { motion } from 'framer-motion';
import { menuItems } from '../lib/data';

export default function Navbar({ activeSection, setActiveSection }) {

    return (
        <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-[70%] self-center flex flex-col justify-center w-40 relative rounded-full mx-12 transparent-card"
        >
            <div className="z-10 flex flex-col h-full self-center justify-between py-12 relative">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full group relative cursor-pointer ${isActive ? 'text-white' : 'text-gray-400'
                                } hover:text-white transition-all duration-200`}
                            transition={{ duration: 0.1 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeBackground"
                                    className="absolute inset-0 bg-white/15 rounded-full"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }}
                                />
                            )}
                            <div className="p-5 relative z-10">
                                <Icon
                                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-15 xl:h-15 ${isActive ? 'text-white' : 'text-gray-400'} group-hover:text-white transition-colors`}
                                />
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </motion.nav>
    );
};


