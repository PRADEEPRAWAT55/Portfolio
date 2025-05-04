'use client';

import { motion } from 'framer-motion';
import { forwardRef, ForwardedRef } from 'react';
import { Skill } from '@/lib/constants';
import { techIcons } from '@/lib/tech-icons';

type SkillsProps = {
  skills: Skill[];
};

const Skills = forwardRef(({ skills }: SkillsProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} id="skills" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: idx * 0.3 }}
              className="bg-gray-700 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="h-1 bg-gray-600 rounded-full mb-4">
                <div 
                  className="h-full bg-blue-400 rounded-full transition-all duration-500" 
                  style={{ width: `100%` }}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <div 
                    key={item}
                    className="flex items-center gap-2 text-sm px-2 py-1 bg-gray-800 rounded-md"
                  >
                    {techIcons[item as keyof typeof techIcons] ? (
                      <span className="text-blue-400">
                        {techIcons[item as keyof typeof techIcons]}
                      </span>
                    ) : (
                      <span className="text-gray-500">▹</span> 
                    )}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;