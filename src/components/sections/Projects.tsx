'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Project } from '@/lib/constants';
import Image from 'next/image';
import { techIcons, getTechIcon } from '@/lib/tech-icons';
import { forwardRef, ForwardedRef } from 'react';
import Tilt from 'react-parallax-tilt';
import ReadMore from '@/components/ReadMore';

type ProjectsProps = {
  projects: Project[];
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    }
  };

  return (
    <Tilt
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      glareEnable={true}
      glareMaxOpacity={0.12}
      glareColor="#3b82f6"
      glarePosition="all"
      glareBorderRadius="20px"
      scale={1.01}
      transitionSpeed={400}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ 
          y: -6,
          rotateX: 3,
          transition: { duration: 0.22, ease: 'easeOut' }
        }}
        className="group h-full bg-slate-900/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-blue-500/60 relative"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform', backfaceVisibility: 'hidden' }}>
        
        {/* Project Image with Overlay */}
        {project.image && (
          <div className="relative h-56 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Floating action buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white shadow-lg backdrop-blur-sm transition-colors relative z-40"
                  aria-label="Live Demo">
                  <FiExternalLink size={18} />
                </motion.a>
              )}
              {project.codeUrl && (
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white shadow-lg backdrop-blur-sm transition-colors relative z-40"
                  aria-label="View Code">
                  <FiGithub size={18} />
                </motion.a>
              )}
            </div>

            {/* Role badge */}
            <div className="absolute bottom-4 left-4">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg relative z-40">
                {project.role}
              </motion.span>
            </div>
            {project.demoUrl && (
              <div className="absolute bottom-4 right-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-2 rounded-full text-sm font-semibold text-white shadow-lg hover:scale-105 transition-transform relative z-40">
                  <FiExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Project Header */}
          <motion.h3 
            className="text-2xl font-bold mb-3 gradient-text-animated group-hover:scale-105 transition-transform origin-left">
            {project.name}
          </motion.h3>

          

          {/* Description */}
          <ReadMore className="text-gray-400 mb-6" clamp={3}>
            {project.description}
          </ReadMore>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ 
                                scale: 1.1, 
                                y: -3,
                                transition: { duration: 0.2 }
                              }}
                              className="flex items-center gap-2 bg-slate-700/60 hover:bg-slate-700 px-3 py-2 rounded-full text-sm border border-slate-600/60 hover:border-blue-500/60 transition-all cursor-pointer">
                              {getTechIcon(tech) && (
                                <motion.span 
                                  className="text-blue-300 group-hover:text-blue-400 transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                  >
                                  {getTechIcon(tech)}
                                </motion.span>
                              )}
                              <span className="text-gray-200 font-medium">{tech}</span>
                            </motion.div>
                          ))}
            </div>
            {!project.image && project.demoUrl ? (
            <div className="mb-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-2 mt-5 rounded-full text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform">
                <FiExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            </div>
          ):(
            <div className="mb-4">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-2 mt-5 rounded-full text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform">
                <FiGithub size={18} />
                <span> Repo</span>
              </a>
            </div>
          )}
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="border-t border-gray-700/50 pt-4">
              <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <motion.li 
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start text-gray-400 text-sm group/feature">
                    <motion.span 
                      className="text-blue-400 mr-2 mt-1 group-hover/feature:text-green-400 transition-colors"
                      whileHover={{ scale: 1.3, x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}>
                      ▹
                    </motion.span>
                    <span className="group-hover/feature:text-gray-300 transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Click overlay to open demoUrl (keeps buttons clickable via z-index) */}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} demo`} className="absolute inset-0 z-20" />
        )}

        {/* Animated border gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 animate-shimmer" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const Projects = forwardRef(({ projects }: ProjectsProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} id="projects" className="py-20 bg-slate-900 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-animated">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions to innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;