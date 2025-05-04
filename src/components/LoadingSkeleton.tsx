// components/LoadingSkeleton.tsx
'use client';

import { motion } from 'framer-motion';

// Custom animation configuration
// Modify these in the component
const skeletonVariants = {
    initial: { opacity: 0.3 },
    animate: { 
      opacity: 0.7,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

interface LoadingSkeletonProps {
  animationSpeed?: number;
  baseColor?: string;
  highlightColor?: string;
  shimmerIntensity?: number;
}

const LoadingSkeleton = ({
  animationSpeed = 1.5,
  baseColor = 'bg-gray-800',
  highlightColor = 'bg-gray-700',
  shimmerIntensity = 0.3
}: LoadingSkeletonProps) => {
  return (
    <div className={`min-h-screen bg-gray-900 p-6`}>
      <motion.div 
        className="container mx-auto mb-20 space-y-8"
        initial="initial"
        animate="animate"
        variants={skeletonVariants}
        custom={animationSpeed}
      >
        <div className={`mx-auto h-12 w-3/5 rounded-full ${baseColor}`} />
        <div className={`mx-auto h-6 w-2/5 rounded-full ${baseColor}`} />
        <div className="flex justify-center gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`h-12 w-32 rounded-lg ${baseColor}`}
              style={{
                opacity: shimmerIntensity
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Skills Section with Custom Animation Speed */}
      <div className="container mx-auto mb-20 space-y-12">
        <div className={`h-10 w-1/4 rounded-full ${baseColor}`} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i}
              className={`space-y-4 rounded-xl p-6 ${baseColor}`}
              transition={{ 
                duration: animationSpeed,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              animate={{
                backgroundColor: [
                  baseColor, 
                  highlightColor, 
                  baseColor
                ]
              }}
            >
              <div className={`h-6 w-2/3 rounded-full ${highlightColor}`} />
              <div className={`h-2 w-full rounded-full ${highlightColor}`} />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className={`h-6 w-16 rounded-md ${highlightColor}`}
                    style={{ opacity: shimmerIntensity }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section with Layered Animations */}
      <div className="container mx-auto mb-20 space-y-12">
        <div className={`h-10 w-1/3 rounded-full ${baseColor}`} />
        <div className="relative">
          <div className={`absolute left-1/2 h-full w-1 -translate-x-1/2 ${baseColor}`} />
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              className="relative mb-12"
              initial={{ x: i % 2 === 0 ? -20 : 20 }}
              animate={{ x: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 50,
                damping: 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              <div className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full ${highlightColor}`} />
              <div className="ml-auto w-full md:w-1/2">
                <div className={`space-y-4 rounded-lg p-6 ${baseColor}`}>
                  <div className={`h-6 w-2/3 rounded-full ${highlightColor}`} />
                  <div className={`h-4 w-1/2 rounded-full ${highlightColor}`} />
                  <div className="space-y-2">
                    {[1, 2, 3].map((j) => (
                      <div
                        key={j}
                        className={`h-4 w-full rounded-full ${highlightColor}`}
                        style={{ opacity: shimmerIntensity }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default LoadingSkeleton;