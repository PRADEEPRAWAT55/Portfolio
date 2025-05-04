'use client';

import { motion } from 'framer-motion';
import { forwardRef, ForwardedRef } from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Hero = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section 
      ref={ref} 
      id="home"
      className="relative min-h-screen flex items-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      
      {/* Floating gradient blob */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute right-0 top-1/3 w-[600px] h-[600px] opacity-10 mix-blend-screen pointer-events-none"
      >
        <div className="w-full h-full animate-gradient-rotate bg-[conic-gradient(from_var(--angle),#3b82f6_0%,#3b82f6_10%,#10b981_30%,#3b82f6_50%,#3b82f6_70%,#10b981_90%,#3b82f6_100%)] rounded-full" />
      </motion.div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />


      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Pradeep Rawat
            <motion.span 
              className="ml-4 text-blue-400"
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
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
Full Stack Developer building scalable web platforms and intuitive mobile applications using modern frameworks like React, Next.js, Node.js, NestJS, and React Native          </motion.p>

          {/* Quick Contact */}
          <motion.div
            className="flex gap-4 mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="mailto:Pradeep2000rawat@gmail.com"
              className="px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center gap-2 transition-all"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-gray-200">Get in Touch</span>
            </a>
            <a
              href="https://linkedin.com/in/pradeep-rawat"
              className="px-6 py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2 transition-all"
            >
              <Linkedin className="w-5 h-5 text-green-400" />
              <span className="text-gray-200">Connect</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { 
              title: 'Location',
              content: 'Sector 59, Noida, Uttar Pradesh, India',
              icon: <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center">📍</div>,
              color: 'blue'
            },
            { 
              title: 'Phone',
              content: '+91 9149237288',
              icon: <Phone className="w-6 h-6" />,
              color: 'green',
              href: 'tel:+919149237288'
            },
            { 
              title: 'GitHub',
              content: '@PRADEEPRAWAT55',
              icon: <Github className="w-6 h-6" />,
              color: 'blue',
              href: '#'
            },
            { 
              title: 'Experience',
              content: '2+ Years',
              icon: <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center">🌟</div>,
              color: 'green'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl bg-gray-900/50 backdrop-blur-lg border ${
                item.color === 'blue' 
                  ? 'border-blue-500/30 hover:border-blue-400' 
                  : 'border-green-500/30 hover:border-green-400'
              } transition-all`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`p-2 rounded-lg ${
                  item.color === 'blue' 
                    ? 'bg-blue-400/20 text-blue-400' 
                    : 'bg-green-400/20 text-green-400'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-300">{item.title}</h3>
              </div>
              <p className={`text-sm ${
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

      {/* Social Links & Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-gray-600 hover:text-blue-400 transition-colors cursor-pointer">
            <span className="text-2xl">⌄</span>
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