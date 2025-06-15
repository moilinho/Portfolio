import React from "react";

const competences = {
  "Développement Front-end": [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
  ],
  "Back-end & Base de données": [
    "PostgreSQL",
    "PHP",
    "Java",
    "Python",
    "SQL",
  ],
  "Outils & Méthodologie": [
    "Git / GitHub",
    "Figma",
    "VS Code",
    "Communication",
    "Méthode Agile",
  ],
};

const Competences: React.FC = () => {
  return (
    <section
      id="competences"
      className="min-h-screen px-6 py-16 text-gray-100 bg-transparent"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Mes Compétences
        </h2>

        <div className="space-y-12">
          {Object.entries(competences).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-darkpanel border border-primary text-lg px-6 py-4 rounded-lg text-primary font-semibold shadow-md hover:bg-[#1b8030] hover:text-white transition duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competences;
