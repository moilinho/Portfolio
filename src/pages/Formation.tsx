import React from "react";

const Formation: React.FC = () => {
  return (
    <section
      id="formation"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-transparent text-gray-100"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary text-center">
          Mon Parcours
        </h2>

        <div className="space-y-8">

          {/* BUT Informatique */}
          <div className="bg-accent rounded-xl p-6 shadow-md text-white">
            <h3 className="text-xl font-semibold">
              BUT Informatique – Université Sorbonne Paris Nord (2023–2026)
            </h3>
            <p className="text-gray-300 mt-2">
              En formation à l’IUT de Villetaneuse, je développe mes compétences
              en algorithmique, développement web, conception d’applications, bases de données et travail en équipe sur des projets concrets.
              Cette formation me permet d'allier rigueur et créativité dans mes apprentissages.
            </p>
          </div>

          {/* Stage Movira */}
          <div className="bg-accent rounded-xl p-6 shadow-md text-white">
            <h3 className="text-xl font-semibold">
              Stage – Movira (3 février – 28 mars 2025)
            </h3>
            <p className="text-gray-300 mt-2">
              Un stage de deux mois qui m’a permis de consolider mes acquis à travers le développement et l'intégration des interfaces web interactives et responsives, en appliquant des technologies modernes comme Next.js, TypeScript et Tailwind CSS.
            </p>
          </div>

          {/* Lycée */}
          <div className="bg-accent rounded-xl p-6 shadow-md text-white">
            <h3 className="text-xl font-semibold">
              Lycée Général – Bac mention Assez Bien, option européenne anglais (2023)
            </h3>
            <p className="text-gray-300 mt-2">
              Une formation générale solide avec une spécialisation en mathématiques et en physique-chimie, renforçant mes compétences analytiques et ma capacité à résoudre des problèmes complexes. L'option européenne anglais m'a permis de développer une bonne maîtrise de l'anglais, essentielle dans le domaine de l'informatique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
