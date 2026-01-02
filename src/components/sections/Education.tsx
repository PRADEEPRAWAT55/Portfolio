// components/sections/Education.tsx
'use client';

import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';
import { EducationItem } from '@/lib/constants';
import { GraduationCap, Calendar } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface EducationProps {
  education: EducationItem[];
}

const Education = forwardRef((
  { education }: EducationProps,
  ref: ForwardedRef<HTMLElement>
) => {
  return (
    <section ref={ref} id="education" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-animated">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <Tilt
              key={edu.institution}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#8b5cf6"
              glarePosition="all"
              glareBorderRadius="20px"
              scale={1.02}
              transitionSpeed={1000}>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                className="group h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="shimmer absolute inset-0" />
                </div>

                {/* Gradient orb */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-4 bg-purple-500/20 rounded-xl mb-6 group-hover:bg-purple-500/30 transition-colors">
                    <GraduationCap className="w-8 h-8 text-purple-400" />
                  </motion.div>

                  {/* Institution */}
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3 group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {edu.institution}
                  </h3>
                  
                  {/* Degree */}
                  <p className="text-gray-300 text-lg font-medium mb-4 group-hover:text-white transition-colors">
                    {edu.degree}
                  </p>
                  
                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
});

Education.displayName = 'Education';

export default Education;