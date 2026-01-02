'use client';

import { motion } from 'framer-motion';
import { forwardRef, ForwardedRef } from 'react';
import { ExperienceItem } from '@/lib/constants';
import { Briefcase, Calendar } from 'lucide-react';

type ExperienceProps = {
  experiences: ExperienceItem[];
};

const Experience = forwardRef(({ experiences }: ExperienceProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} id="experience" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-animated">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building innovative solutions and leading technical teams
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line - enhanced */}
          <div className="hidden md:block absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 transform -translate-x-1/2 rounded-full opacity-30" />
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100 
              }}
              className="relative mb-16 md:flex md:justify-center"
            >
              {/* Timeline dot - enhanced */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute top-8 left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full shadow-lg shadow-blue-500/50 animate-pulse" />
                <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-ping opacity-75" />
              </motion.div>
              
              {/* Content container */}
              <div className={`relative md:max-w-[45%] ${idx % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} 
                ml-8 md:ml-0 pl-8 md:pl-0 border-l-2 md:border-l-0 border-gray-700`}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="group p-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700/50 hover:border-blue-500/50 transition-all relative overflow-hidden">
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="shimmer absolute inset-0" />
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 bg-blue-500/20 rounded-lg">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 font-medium text-lg mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mt-6">
                      {exp.highlights.map((highlight, hIdx) => (
                        <motion.li 
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: hIdx * 0.1 }}
                          className="flex items-start group/item">
                          <motion.span 
                            whileHover={{ scale: 1.3, x: 5 }}
                            className="text-green-400 mr-3 mt-1 group-hover/item:text-blue-400 transition-colors">
                            ▹
                          </motion.span>
                          <span className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';
export default Experience;