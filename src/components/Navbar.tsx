"use client";

import { motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";

type NavbarProps = {
    activeSection: string;
    scrollPercentage: number;
};

const Navbar = ({ activeSection, scrollPercentage }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = [
        { id: "home", label: "Home" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "achievements", label: "Achievements" },
    ];

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
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
            transition={{ duration: 0.5 }}
        >
            {/* Progress Bar */}
            <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-200"
                    style={{ width: `${scrollPercentage}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </motion.div>

            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-2 cursor-pointer group relative"
                        onClick={() => scrollToSection("home")}
                    >
                        {/* Simplified Mobile Logo */}
                        <div className="md:hidden p-2 rounded-lg bg-blue-400/20">
                            <span className="text-blue-400 font-mono text-lg">{"</>"}</span>
                        </div>

                        {/* Desktop Logo */}
                        <div className="hidden md:flex items-center space-x-2">
                            <motion.div
                                className="relative p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-green-400/20"
                                animate={{ rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-blue-400 font-mono text-xl tracking-tighter">{"</>"}</span>
                                <div className="absolute inset-0 bg-blue-400/10 rounded-lg animate-pulse" />
                            </motion.div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                                Pradeep
                            </span>
                        </div>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-blue-400 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {sections.map((section) => (
                            <motion.button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="relative px-4 py-2.5 rounded-lg overflow-hidden group"
                                whileHover={{ y: -2 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className={`relative z-10 text-sm font-medium ${activeSection === section.id ? "text-blue-400" : "text-gray-400 group-hover:text-gray-200"}`}>
                                    {section.label}
                                </span>
                                {activeSection === section.id && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-green-400"
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Contact Button - Hidden on Mobile */}
                    <motion.a
                        href="mailto:Pradeep2000rawat@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        className="hidden md:flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-cyan-400 relative group transition-all"
                    >
                        <Mail className="w-5 h-5 text-cyan-400 group-hover:text-green-400 transition-colors" />
                        <span className="text-gray-200 text-sm font-medium group-hover:text-cyan-300 transition-colors">Contact</span>
                    </motion.a>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md py-4"
                    >
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`w-full px-6 py-3 text-left ${activeSection === section.id ? "text-blue-400 bg-gray-800/50" : "text-gray-400 hover:bg-gray-800/30"}`}
                            >
                                {section.label}
                            </button>
                        ))}
                        <a
                            href="mailto:Pradeep2000rawat@gmail.com"
                            className="flex items-center space-x-2 px-6 py-3 mt-4 text-gray-400 hover:bg-gray-800/30"
                        >
                            <Mail className="w-5 h-5 text-cyan-400" />
                            <span>Contact</span>
                        </a>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;