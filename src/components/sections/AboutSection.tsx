'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Sobre mí
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Soy Desarrollador Web Full Stack formado en MindHub, con sólidos conocimientos en desarrollo Frontend y Backend. Me especializo en JavaScript y manejo herramientas modernas como React.js, Node.js, Express.js, MongoDB, Express.js, Tailwind CSS y Git/GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Formación</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Desarrollador Web Full Stack</h4>
                  <p className="text-gray-600 dark:text-gray-400">MindHub Bootcamp</p>
                  <p className="text-gray-600 dark:text-gray-400">Tecnologías: HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, MongoDB, Express.js, Git & GitHub.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Objetivos</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 mr-3" />
                  <div>
                    <h4 className="font-semibold mb-1">Corto Plazo</h4>
                    <p className="text-gray-600 dark:text-gray-400">Conseguir mi primer empleo como Desarrollador Web para ganar experiencia profesional.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 mr-3" />
                  <div>
                    <h4 className="font-semibold mb-1">Largo Plazo</h4>
                    <p className="text-gray-600 dark:text-gray-400">Convertirme en Desarrollador Senior y especializarme en tecnologías modernas del stack JavaScript.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}