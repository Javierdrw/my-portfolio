'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Javier Gutiérrez
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8">
          Desarrollador Web Full Stack
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Apasionado por crear soluciones digitales funcionales y escalables
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            className="glass-card hover-scale px-8 py-4 text-lg rounded-full hover:shadow-lg transition-all duration-300"
          >
            Conoce más sobre mí
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="glass-card hover-scale px-8 py-4 text-lg rounded-full hover:shadow-lg transition-all duration-300"
          >
            Ver proyectos
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}