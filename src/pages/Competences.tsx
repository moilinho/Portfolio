import React from "react";
import { motion } from "framer-motion";

const base = `${import.meta.env.BASE_URL}`;

const competences = {
  "Développement Front-end": [
    { name: "TypeScript", icon: `${base}typescript.png` },
    { name: "React", icon: `${base}react.png` },
    { name: "Tailwind CSS", icon: `${base}tailwind.png` },
    { name: "HTML", icon: `${base}html.png` },
    { name: "CSS", icon: `${base}css.png` },
    { name: "JavaScript", icon: `${base}javascript.png` },
    { name: "Next.js", icon: `${base}nextjs.png` },
    { name: "Vue.js", icon: `${base}vuejs.png` },
  ],
  "Back-end & Base de données": [
    { name: "PostgreSQL", icon: `${base}postgresql.png` },
    { name: "PHP", icon: `${base}php.png` },
    { name: "Java", icon: `${base}java.png` },
    { name: "Python", icon: `${base}python.png` },
    { name: "Node.js", icon: `${base}nodejs.png` },
  ],
  "Outils & Méthodologie": [
    { name: "Git / GitHub", icon: `${base}github.png` },
    { name: "Figma", icon: `${base}figma.png` },
    { name: "Visual Studio Code", icon: `${base}vscode.png` },
    { name: "Communication", icon: `${base}communication.png` },
    { name: "Méthode Agile", icon: `${base}agile.png` },
  ],
};

const Competences: React.FC = () => {
  return (
    <section id="competences" className="min-h-screen px-6 py-16 text-white bg-transparent font-mono">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mes Compétences
        </motion.h2>

        {Object.entries(competences).map(([category, items], i) => (
          <motion.div 
            key={category} 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center">{category}</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {items.map(({ name, icon }) => (
                <motion.div 
                  key={name} 
                  className="flex flex-col items-center w-24"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={icon} alt={name} className="w-12 h-12 mb-2 object-contain drop-shadow-md" />
                  <span className="text-sm text-gray-200 text-center">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Competences;
