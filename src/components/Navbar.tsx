"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

type NavbarProps = {
    activeSection: string;
    scrollPercentage: number;
};

const Navbar = ({ activeSection, scrollPercentage }: NavbarProps) => {
    const sections = [
        { id: "home", label: "Home" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "achievements", label: "Achievements" },
    ];

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md z-50 shadow-xl border-b border-gray-800/50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {/* Glowing Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400/80 via-green-400/80 to-blue-400/80"
                style={{
                    width: `${scrollPercentage}%`,
                    filter: `blur(${scrollPercentage > 0 ? 8 : 0}px)`,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
            />

            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Enhanced Tech Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-2 cursor-pointer group relative"
                        onClick={() => scrollToSection("home")}>
                        {/* Animated Code Brackets */}
                        <motion.div
                            className="relative p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-green-400/20"
                            animate={{
                                rotate: [0, -5, 5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}>
                            <span className="text-blue-400 font-mono text-xl tracking-tighter">{"</>"}</span>
                            <div className="absolute inset-0 bg-blue-400/10 rounded-lg animate-pulse" />
                        </motion.div>

                        {/* Developer Identity */}
                        <div className="relative pl-2">
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent relative">
                                <span className="absolute -left-3 top-0 text-blue-400/40 text-2xl"></span>
                                Pradeep
                                <span className="ml-2 text-sm font-mono text-green-400 bg-gray-800 px-2 py-1 rounded-md border border-green-400/20">
                                    dev@v2.2.0
                                </span>
                            </span>

                            {/* Hover Effect */}
                            <div className="absolute -bottom-5 left-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                <span className="text-xs font-mono text-gray-400 bg-gray-800 px-2 py-1 rounded-md border border-gray-700">
                                    $ npm start
                                </span>
                            </div>
                        </div>

                        {/* Cyber-style Caret */}
                        <motion.div
                            className="ml-2 w-[2px] h-6 bg-gradient-to-b from-green-400 to-blue-400"
                            animate={{
                                opacity: [0, 1, 0],
                                y: [-2, 0, 2],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>

                    {/* Holographic Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {sections.map((section) => (
                            <motion.button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="relative px-4 py-2.5 rounded-lg overflow-hidden group"
                                whileHover={{ y: -2 }}>
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Text */}
                                <span
                                    className={`relative z-10 text-sm font-medium ${
                                        activeSection === section.id ? "text-blue-400" : "text-gray-400 group-hover:text-gray-200"
                                    }`}>
                                    {section.label}
                                </span>

                                {/* Active Indicator */}
                                {activeSection === section.id && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-green-400"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25,
                                        }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Cyber-style Contact Button */}
                    <motion.a
                        href="mailto:Pradeep2000rawat@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-cyan-400 relative group transition-all">
                        {/* Animated Border */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Icon & Text */}
                        <Mail className="w-5 h-5 text-cyan-400 group-hover:text-green-400 transition-colors" />
                        <span className="text-gray-200 text-sm font-medium group-hover:text-cyan-300 transition-colors">Contact Me</span>
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
