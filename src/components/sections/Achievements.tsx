'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

type AchievementsProps = {
  achievements: string[];
};

const Achievements = forwardRef<HTMLElement, AchievementsProps>(({ achievements }, ref) => {
  return (
    <section ref={ref} id="achievements" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-700 rounded-lg flex items-center space-x-4"
            >
              <div className="flex-shrink-0 w-3 h-3 bg-blue-400 rounded-full" />
              <p className="text-gray-300">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Achievements.displayName = 'Achievements';

export default Achievements;