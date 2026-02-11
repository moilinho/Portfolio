import React from "react";

const Formation: React.FC = () => {
  return (
    <section
      id="formation"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-transparent text-gray-100 font-mono"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-16 text-primary text-center font-mono">
          Mon Parcours
        </h2>

        <div className="space-y-12 font-mono">
          {/* BUT Informatique */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl text-white transform hover:scale-[1.01] transition-transform">
            <h3 className="text-2xl font-semibold text-primary">
              BUT Informatique – Université Sorbonne Paris Nord
            </h3>
            <p className="text-gray-400 text-sm mb-4 italic">(2023–2026)</p>
            <p className="text-gray-200 mt-4 leading-relaxed text-lg">
              En formation à l’IUT de Villetaneuse, je développe mes compétences
              en algorithmique, développement web, conception d’applications, bases de données et travail en équipe sur des projets concrets.
              <br/><br/>
              Cette formation me permet d'allier <strong>rigueur</strong> et <strong>créativité</strong> dans mes apprentissages.
            </p>
          </div>

          {/* Stage Movira */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl text-white transform hover:scale-[1.01] transition-transform">
            <h3 className="text-2xl font-semibold text-primary">
              Stage – Movira
            </h3>
            <p className="text-gray-400 text-sm mb-4 italic">(3 février – 28 mars 2025)</p>
            <p className="text-gray-200 mt-4 leading-relaxed text-lg">
              Un stage de deux mois qui m’a permis de consolider mes acquis à travers le développement et l'intégration des interfaces web interactives et responsives, en appliquant des technologies modernes comme <strong>Next.js</strong>, <strong>TypeScript</strong> et <strong>Tailwind CSS</strong>.
            </p>
          </div>

          {/* Lycée */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl text-white transform hover:scale-[1.01] transition-transform">
            <h3 className="text-2xl font-semibold text-primary">
              Lycée Général – Bac mention Assez Bien
            </h3>
            <p className="text-gray-400 text-sm mb-4 italic">Option européenne anglais (2023)</p>
            <p className="text-gray-200 mt-4 leading-relaxed text-lg">
              Une formation générale solide avec une spécialisation en mathématiques et en physique-chimie. L'option européenne anglais m'a permis de développer une bonne maîtrise de l'anglais, essentielle dans le domaine de l'informatique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;