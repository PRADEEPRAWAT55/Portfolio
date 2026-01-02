"use client";

import { motion, useAnimationControls } from "framer-motion";
import { forwardRef, ForwardedRef, useEffect } from "react";
import { Linkedin, Github, Mail, Phone, Download, ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
    const controls = useAnimationControls();
    
    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        });
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section
            ref={ref}
            id="home"
            className="relative min-h-screen flex items-center px-4 sm:px-6 bg-slate-900 overflow-hidden pt-20">
            
            {/* Subtle particles background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            background: [
                                'rgba(59, 130, 246, 0.35)',
                                'rgba(14, 165, 233, 0.35)',
                                'rgba(16, 185, 129, 0.35)'
                            ][i % 3],
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.15, 0.45, 0.15],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:24px_24px]" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center relative z-10">
                {/* Left Column - Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:max-w-2xl text-center lg:text-left">
                    
                    <motion.h1 
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 relative">
                        <motion.span 
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent bg-[length:200%_auto] font-extrabold">
                            Pradeep Rawat
                        </motion.span>
                        <motion.span
                            className="ml-2 sm:ml-4 text-cyan-300"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}>
                            |
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-semibold h-20">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer 🚀',
                                2000,
                                'React Native Expert 📱',
                                2000,
                                'UI/UX Enthusiast 🎨',
                                2000,
                                'Problem Solver 💡',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent"
                        />
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                        Building scalable web platforms and intuitive mobile applications using modern frameworks like
                        <span className="text-blue-300 font-semibold"> React</span>,
                        <span className="text-cyan-300 font-semibold"> Next.js</span>,
                        <span className="text-emerald-300 font-semibold"> Node.js</span>, and
                        <span className="text-blue-200 font-semibold"> React Native</span>
                    </motion.p>

                    {/* Quick Contact - Stack on mobile */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                        <motion.a
                            href="mailto:Pradeep2000rawat@gmail.com"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center gap-2 overflow-hidden shadow-lg shadow-blue-500/30 transition-all duration-300">
                            {/* Animated shine effect */}
                            <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                            />
                            <Mail className="w-5 h-5 text-white relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                            <span className="text-base font-semibold text-white relative z-10">Get in Touch</span>
                            <ArrowRight className="w-4 h-4 text-white relative z-10 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/pradeep-rawat-psr"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-6 py-3 bg-slate-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                            <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-blue-400 relative z-10 group-hover:scale-110 transition-all" />
                            <span className="text-base text-gray-200 font-medium relative z-10">Connect</span>
                        </motion.a>
                    </motion.div>

                    {/* Stats Row - Enhanced */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap gap-6 justify-center lg:justify-start">
                        {[
                            { value: "3", label: "Years Experience", icon: "📅" },
                            { value: "3+", label: "Projects Built", icon: "🚀" },
                            { value: "100%", label: "Client Satisfaction", icon: "⭐" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 0.3 }}
                                className="relative group">
                                <div className="text-center p-4 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700 group-hover:border-blue-500/60 transition-all duration-300 relative overflow-hidden">
                                    <div className="text-3xl mb-2 relative z-10">{stat.icon}</div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white relative z-10">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-400 font-medium relative z-10">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Column - Contact Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {[
                        {
                            title: "Location",
                            content: "Noida, Uttar Pradesh",
                            icon: "📍",
                            color: "blue",
                            gradient: "from-blue-500/20 to-blue-600/20"
                        },
                        {
                            title: "Phone",
                            content: "+91 9149237288",
                            icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
                            color: "green",
                            href: "tel:+919149237288",
                            gradient: "from-green-500/20 to-green-600/20"
                        },
                        {
                            title: "GitHub",
                            content: "@PRADEEPRAWAT55",
                            icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
                            color: "purple",
                            href: "https://github.com/PRADEEPRAWAT55",
                            gradient: "from-purple-500/20 to-purple-600/20"
                        },
                        {
                            title: "Experience",
                            content: "3 Years",
                            icon: "🌟",
                            color: "orange",
                            gradient: "from-orange-500/20 to-orange-600/20"
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -8, 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className={`group relative p-4 sm:p-6 rounded-xl bg-gradient-to-br ${item.gradient} backdrop-blur-lg border border-gray-700/50 hover:border-${item.color}-500/50 transition-all cursor-pointer overflow-hidden`}>
                            
                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="shimmer absolute inset-0" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                                    <motion.div
                                        animate={floatingAnimation}
                                        className={`p-2 rounded-lg bg-${item.color}-400/20`}>
                                        {typeof item.icon === 'string' ? (
                                            <div className="text-xl">{item.icon}</div>
                                        ) : (
                                            <div className={`text-${item.color}-400`}>{item.icon}</div>
                                        )}
                                    </motion.div>
                                    <h3 className="text-sm sm:text-base font-semibold text-gray-200">{item.title}</h3>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-300 font-mono">
                                    {item.content}
                                </p>
                            </div>

                            {item.href && (
                                <a 
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-20"
                                    aria-label={item.title}
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
                <motion.div 
                    animate={{ y: [0, 15, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }}>
                    <motion.div 
                        className="flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors cursor-pointer group"
                        whileHover={{ scale: 1.1 }}>
                        <span className="text-xs uppercase tracking-wider">Scroll</span>
                        <span className="text-2xl sm:text-3xl group-hover:animate-bounce">⌄</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            <style jsx global>{`
                @keyframes gradient-rotate {
                    from {
                        --angle: 0deg;
                    }
                    to {
                        --angle: 360deg;
                    }
                }

                .animate-gradient-rotate {
                    animation: gradient-rotate 10s linear infinite;
                    background: conic-gradient(
                        from var(--angle),
                        #3b82f6 0%,
                        #3b82f6 10%,
                        #10b981 30%,
                        #3b82f6 50%,
                        #3b82f6 70%,
                        #10b981 90%,
                        #3b82f6 100%
                    );
                }

                @property --angle {
                    syntax: "<angle>";
                    initial-value: 0deg;
                    inherits: false;
                }
            `}</style>
        </section>
    );
});

Hero.displayName = "Hero";
export default Hero;
