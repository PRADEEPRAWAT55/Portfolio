'use client';

import { motion } from 'framer-motion';
import { forwardRef, ForwardedRef } from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Hero = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section 
      ref={ref} 
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Floating gradient blob - Mobile optimized */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/3 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] opacity-10 mix-blend-screen pointer-events-none"
      >
        <div className="w-full h-full animate-gradient-rotate rounded-full" />
      </motion.div>

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:24px_24px]" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:max-w-2xl text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Pradeep Rawat
            <motion.span 
              className="ml-2 sm:ml-4 text-blue-400"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              |
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8"
          >
            Full Stack Developer building scalable web platforms and intuitive mobile applications using modern frameworks like React, Next.js, Node.js, NestJS, and React Native
          </motion.p>

          {/* Quick Contact - Stack on mobile */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="mailto:Pradeep2000rawat@gmail.com"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-sm sm:text-base text-gray-200">Get in Touch</span>
            </a>
            <a
              href="https://linkedin.com/in/pradeep-rawat"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span className="text-sm sm:text-base text-gray-200">Connect</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { 
              title: 'Location',
              content: 'Sector 59, Noida, Uttar Pradesh, India',
              icon: <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-400/20 flex items-center justify-center">📍</div>,
              color: 'blue'
            },
            { 
              title: 'Phone',
              content: '+91 9149237288',
              icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: 'green',
              href: 'tel:+919149237288'
            },
            { 
              title: 'GitHub',
              content: '@PRADEEPRAWAT55',
              icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: 'blue',
              href: '#'
            },
            { 
              title: 'Experience',
              content: '2+ Years',
              icon: <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-400/20 flex items-center justify-center">🌟</div>,
              color: 'green'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`p-4 sm:p-6 rounded-xl bg-gray-900/50 backdrop-blur-lg border ${
                item.color === 'blue' 
                  ? 'border-blue-500/30 hover:border-blue-400' 
                  : 'border-green-500/30 hover:border-green-400'
              } transition-all`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                <div className={`p-2 rounded-lg ${
                  item.color === 'blue' 
                    ? 'bg-blue-400/20 text-blue-400' 
                    : 'bg-green-400/20 text-green-400'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-medium text-gray-300">{item.title}</h3>
              </div>
              <p className={`text-xs sm:text-sm ${
                item.color === 'blue' 
                  ? 'text-blue-300' 
                  : 'text-green-300'
              } font-mono`}>
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-gray-600 hover:text-blue-400 transition-colors cursor-pointer">
            <span className="text-2xl sm:text-3xl">⌄</span>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes gradient-rotate {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
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
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;