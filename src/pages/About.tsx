import React, { useState } from "react";

const About: React.FC = () => {
  const [showCV, setShowCV] = useState(false);
  const cvImageUrl = `${import.meta.env.BASE_URL}cv_moilim.png`;

  return (
    <section
      id="presentation"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-foreground"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary font-mono drop-shadow">
          Bonjour, je suis Moilim ABDALLAH
        </h1>

        <p className="mt-4 text-lg leading-relaxed">
          Je suis actuellement en deuxième année de <strong>BUT Informatique</strong> à l’<strong>Université Sorbonne Paris Nord</strong>, au sein de l’<strong>IUT de Villetaneuse</strong>. 
          Depuis mes débuts dans le développement web, je suis animé par une véritable curiosité pour le fonctionnement des technologies qui nous entourent. 
          Passionné par le code, l’innovation et le design d’interfaces, je m’efforce de créer des solutions élégantes, utiles et performantes.
          Curieux, rigoureux et créatif, j’aime relever de nouveaux défis pour progresser continuellement. 
          Comprendre en profondeur les mécanismes derrière chaque outil ou langage est pour moi un vrai plaisir
        </p>

        <button
          onClick={() => setShowCV(!showCV)}
          className="mt-8 px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-foreground hover:text-black transition duration-300"
        >
          {showCV ? "Masquer mon CV" : "Voir mon CV"}
        </button>

        {showCV && (
  <div className="mt-8 w-full max-w-3xl flex flex-col items-center animate-fade-in-up">
    <img
      src={cvImageUrl}
      alt="CV Moilim ABDALLAH"
      className="w-full border border-foreground rounded-md shadow-md"
    />

    <a
      href={cvImageUrl}
      download
      className="mt-4 px-5 py-2 bg-white text-black font-semibold rounded hover:bg-foreground hover:text-white transition"
    >
      Télécharger le CV
    </a>
  </div>
)}

      </div>
    </section>
  );
};

export default About;




