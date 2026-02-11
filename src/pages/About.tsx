import React, { useState } from "react";

const About: React.FC = () => {
  const [showCV, setShowCV] = useState(false);
  const cvImageUrl = `${import.meta.env.BASE_URL}CV_Moilim_ABDALLAH.jpg`;
  const profileImageUrl = `${import.meta.env.BASE_URL}photo_profil.jpeg`;

  return (
    <section
      id="presentation"
      // py-24 permet d'espacer cette section des suivantes (Compétences, etc.)
      className="min-h-[90vh] flex flex-col justify-center items-center px-6 py-24 text-foreground font-mono"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Conteneur Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImageUrl}
            alt="Moilim ABDALLAH"
            className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover border-4 border-primary shadow-2xl"
          />
        </div>

        {/* Conteneur Texte */}
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary font-mono drop-shadow-lg">
            Bonjour, je suis Moilim ABDALLAH
          </h1>

          <p className="mt-6 text-lg leading-loose font-mono">
            Je suis actuellement en troisième année de <strong>BUT Informatique</strong> à l’<strong>Université Sorbonne Paris Nord</strong>, au sein de l’<strong>IUT de Villetaneuse</strong>. 
            <br /><br />
            Passionné par le développement web, j’ai acquis des compétences solides en <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, et bien d’autres technologies.
            Mon parcours académique et mes projets personnels m’ont permis de développer une expertise en <strong>développement fullstack</strong>, avec une forte orientation vers les technologies modernes et les bonnes pratiques de développement.
            <br /><br />
            Je suis constamment à la recherche de nouvelles opportunités pour apprendre, grandir et contribuer à des projets innovants dans le domaine du développement web.
          </p>

          <button
            onClick={() => setShowCV(!showCV)}
            className="mt-10 px-8 py-4 bg-accent text-white font-semibold rounded-md hover:bg-foreground hover:text-black transition-all duration-300 font-mono shadow-lg active:scale-95"
          >
            {showCV ? "Masquer mon CV" : "Voir mon CV"}
          </button>
        </div>
      </div>

      {/* Section CV avec espacement accru */}
      {showCV && (
        <div className="mt-20 w-full max-w-4xl flex flex-col items-center animate-fade-in-up">
          <div className="relative group">
            <img
              src={cvImageUrl}
              alt="CV Moilim ABDALLAH"
              className="w-full border border-white/10 rounded-lg shadow-2xl"
            />
          </div>

          <a
            href={cvImageUrl}
            download
            className="mt-10 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-primary hover:text-white transition-colors duration-300 font-mono shadow-md"
          >
            Télécharger le CV
          </a>
        </div>
      )}
    </section>
  );
};

export default About;