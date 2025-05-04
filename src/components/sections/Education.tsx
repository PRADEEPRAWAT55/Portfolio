// components/sections/Education.tsx
'use client';

import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';
import { EducationItem } from '@/lib/constants';

interface EducationProps {
  education: EducationItem[];
}

const Education = forwardRef((
  { education }: EducationProps,
  ref: ForwardedRef<HTMLElement>
) => {
  return (
    <section ref={ref} id="education" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {edu.institution}
              </h3>
              <p className="text-gray-300 mt-2">{edu.degree}</p> 
              <p className="text-gray-400 text-sm mt-2">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Education.displayName = 'Education';

export default Education;