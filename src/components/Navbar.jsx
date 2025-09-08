import { motion } from 'framer-motion';
import { User, Code, Briefcase, Mail } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
    const menuItems = [
        { id: 'about', label: 'CHI SONO', icon: User },
        { id: 'skills', label: 'SKILLS', icon: Code },
        { id: 'projects', label: 'PROGETTI', icon: Briefcase },
        { id: 'contact', label: 'CONTATTI', icon: Mail },
    ];

    return (
        <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col justify-center w-20 lg:w-1/4 relative"
            style={{ backgroundColor: 'var(--black)' }}
        >
            <div className="z-10 flex flex-col h-full justify-between lg:pl-10">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full text-left group relative cursor-pointer flex-1 flex items-center ${isActive ? 'text-white' : 'text-gray-400'
                                } hover:text-white transition-all duration-200`}
                            transition={{ duration: 0.1 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-center justify-center lg:justify-start w-full">
                                <Icon
                                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-15 xl:h-15 ${isActive ? 'text-white' : 'text-gray-500'} group-hover:text-white transition-colors`}
                                />
                                <span className="hidden lg:block ml-4 lg:ml-6 xl:ml-10 text-lg lg:text-2xl xl:text-3xl font-light tracking-[0.15em] lg:tracking-[0.25em] leading-tight">
                                    {item.label}
                                </span>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </motion.nav>
    );
};


