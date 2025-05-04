'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Project } from '@/lib/constants';
import Image from 'next/image';
import { techIcons } from '@/lib/tech-icons';
import { forwardRef, ForwardedRef } from 'react';

type ProjectsProps = {
  projects: Project[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="bg-gray-700 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 rounded-lg overflow-hidden mb-6">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      {/* Project Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-blue-400">{project.name}</h3>
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Live Demo"
            >
              <FiExternalLink size={20} />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="View Code"
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Role Badge */}
      <div className="mb-4">
        <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm">
          {project.role}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6">{project.description}</p>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {techIcons[tech as keyof typeof techIcons] && (
                <span className="text-blue-400">{techIcons[tech as keyof typeof techIcons]}</span>
              )}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      {project.features && (
        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start text-gray-300">
                <span className="text-blue-400 mr-2">▹</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const Projects = forwardRef(({ projects }: ProjectsProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} id="projects" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;