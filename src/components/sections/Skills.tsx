'use client';

import { motion, useAnimation } from 'framer-motion';
import { forwardRef, ForwardedRef, useEffect } from 'react';
import { Skill } from '@/lib/constants';
import { techIcons } from '@/lib/tech-icons';
import Tilt from 'react-parallax-tilt';

type SkillsProps = {
  skills: Skill[];
};

const Skills = forwardRef(({ skills }: SkillsProps, ref: ForwardedRef<HTMLElement>) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section ref={ref} id="skills" className="py-20 bg-slate-900 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-animated">
            Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting exceptional digital experiences with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, idx) => (
            <Tilt
              key={skill.name}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#3b82f6"
              glarePosition="all"
              glareBorderRadius="16px"
              scale={1.02}
              transitionSpeed={1000}>
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.25 }
                }}
                className="group h-full bg-slate-900/90 backdrop-blur-lg p-6 lg:p-8 rounded-2xl border border-slate-700 hover:border-blue-500/60 transition-all duration-300 shadow-xl relative" style={{ transformStyle: 'preserve-3d' }}>
                
                <div className="relative z-10">
                  {/* Header with icon */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {skill.name}
                    </h3>
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                      {idx === 0 ? '⚡' : idx === 1 ? '🎨' : '🛠️'}
                    </motion.div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-gray-700 rounded-full mb-6 overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.2, 
                        delay: idx * 0.2,
                        ease: "easeOut"
                      }}
                      className="h-full bg-blue-600 rounded-full" />
                  </div>

                  {/* Tech stack items */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIdx) => (
                      <motion.div 
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: idx * 0.1 + itemIdx * 0.05,
                          duration: 0.3
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="group/item flex items-center gap-2 text-sm px-3 py-2 bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500/60 transition-all duration-300 cursor-pointer">
                        {techIcons[item as keyof typeof techIcons] ? (
                          <motion.span 
                            className="text-slate-300 group-hover/item:text-blue-400 transition-colors text-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}>
                            {techIcons[item as keyof typeof techIcons]}
                          </motion.span>
                        ) : (
                          <span className="text-gray-500 group-hover/item:text-blue-400 transition-colors">▹</span> 
                        )}
                        <span className="text-gray-300 group-hover/item:text-white transition-colors font-medium">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;