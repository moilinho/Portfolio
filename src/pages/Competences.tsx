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
    <section id="competences" className="min-h-screen px-6 py-24 text-white bg-transparent font-mono">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-20 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes Compétences
        </motion.h2>

        {Object.entries(competences).map(([category, items], i) => (
          <motion.div 
            key={category} 
            className="mb-20 last:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-300 mb-10 text-center border-b border-white/10 pb-4 inline-block px-10">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-10 md:gap-14">
              {items.map(({ name, icon }) => (
                <motion.div 
                  key={name} 
                  className="flex flex-col items-center w-28"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white/5 p-4 rounded-xl mb-3 shadow-inner">
                    <img src={icon} alt={name} className="w-12 h-12 object-contain drop-shadow-md" />
                  </div>
                  <span className="text-sm text-gray-300 text-center font-medium leading-tight">{name}</span>
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