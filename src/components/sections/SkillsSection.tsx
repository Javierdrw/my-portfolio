'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Habilidades
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino y utilizo en mis proyectos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * skills.indexOf(skill) }}
              className="glass-card p-6 hover-scale"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-full ${
                  skill.category === 'frontend' ? 'bg-primary' :
                  skill.category === 'backend' ? 'bg-secondary' :
                  skill.category === 'tools' ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-800'
                }`} />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>{skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
