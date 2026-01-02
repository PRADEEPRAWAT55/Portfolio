'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { Trophy, Star, Award, Zap } from 'lucide-react';

type AchievementsProps = {
  achievements: string[];
};

const icons = [Trophy, Star, Award, Zap];

const Achievements = forwardRef<HTMLElement, AchievementsProps>(({ achievements }, ref) => {
  return (
    <section ref={ref} id="achievements" className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-animated">
            Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and accomplishments throughout my journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={achievement}
                initial={{ scale: 0.8, opacity: 0, rotateY: -20 }}
                whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group p-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-yellow-500/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden">
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="shimmer absolute inset-0" />
                </div>

                {/* Gradient orb */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10 flex items-start space-x-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  
                  {/* Text */}
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors flex-1">
                    {achievement}
                  </p>
                </div>

                {/* Decorative dots */}
                <div className="absolute bottom-4 right-4 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className="w-2 h-2 bg-yellow-400/30 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Achievements.displayName = 'Achievements';

export default Achievements;