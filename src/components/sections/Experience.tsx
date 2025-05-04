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
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2" />
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.4 }}
              className="relative mb-12 md:flex md:justify-center"
            >
              {/* Timeline dot - centered on mobile */}
              <div className="absolute top-6 left-4 md:left-1/2 w-4 h-4 bg-blue-400 rounded-full md:transform md:-translate-x-1/2 z-10" />
              
              {/* Content container */}
              <div className={`relative md:max-w-[45%] ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} 
                ml-8 md:ml-0 pl-8 md:pl-0 border-l-2 md:border-l-0 border-gray-700`}>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                  <p className="text-gray-400 mb-2 text-sm md:text-base">
                    {exp.company} • {exp.duration}
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-300 text-sm md:text-base">
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