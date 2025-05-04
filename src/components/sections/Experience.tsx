'use client';

import { motion } from 'framer-motion';
import { forwardRef, ForwardedRef } from 'react';
import { ExperienceItem } from '@/lib/constants';

type ExperienceProps = {
  experiences: ExperienceItem[];
};

const Experience = forwardRef(({ experiences }: ExperienceProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} id="experience" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2" />
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: 'tween' }}
              className="relative mb-12"
            >
              <div className="absolute top-6 left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 z-10" />
              
              <div className={`relative ${idx % 2 === 0 ? 'pr-28' : 'pl-28'} md:w-1/2 ${idx % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                  <p className="text-gray-400 mb-2">
                    {exp.company} • {exp.duration}
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-300">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
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