import { motion } from 'framer-motion';
import { User, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
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
            className="h-full flex flex-col justify-center w-full md:w-1/4 relative"
            style={{ backgroundColor: '#121212' }}
        >
            <div className="z-10 flex flex-col h-full justify-between">
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
                            <div className="flex items-center gap-3 md:gap-10 pl-10">
                                <Icon
                                    className={`w-15 h-15 ${isActive ? 'text-white' : 'text-gray-500'} group-hover:text-white transition-colors`}
                                />
                                <span className="text-lg md:text-2xl lg:text-3xl font-light tracking-[0.1em] md:tracking-[0.25em] leading-tight">
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

export default Navbar;
