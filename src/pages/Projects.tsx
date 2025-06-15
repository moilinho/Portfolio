import React, { useState } from "react";
import Slider from "react-slick";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projets = [
  {
    id: 1,
    titre: "SAE SQL — Freedom in the World",
    image: `${import.meta.env.BASE_URL}sql_project_preview.png`,
    descriptionCourte: "Création et interrogation d'une base de données PostgreSQL à partir d’un CSV.",
    descriptionDetaillee: `Dans le cadre d’un projet universitaire, j’ai conçu une base de données relationnelle sur le degré de liberté des pays. 
Ce projet m’a permis de modéliser les entités (régions, pays, types de libertés...), de créer les tables SQL à la main et via un AGL, d’importer les données depuis un fichier CSV et de manipuler la base avec des requêtes complexes.`,
    pdf: `${import.meta.env.BASE_URL}SAE_SQL.pdf`,
    github: "#",
    zip: "#"
  },
  {
    id: 2,
    titre: "SAE Java — Calculatrice Orientée Objet",
    image: `${import.meta.env.BASE_URL}java_project_preview.png`,
    descriptionCourte: "Création d'une calculatrice Java orientée objet gérant les opérations de base.",
    descriptionDetaillee: `Dans ce projet, j'ai mis en pratique les principes de la programmation orientée objet en développant une calculatrice en Java. 
Le projet couvrait la conception de classes, la gestion d'erreurs, l'encapsulation des données et une interface simple via le terminal.`,
    pdf: `${import.meta.env.BASE_URL}SAE_JAVA.pdf`,
    github: "#",
    zip: `${import.meta.env.BASE_URL}SAE_JAVA.zip`
  },
  {
    id: 3,
    titre: "SAE Python — Optimisation de la tournée du Père Noël",
    image: `${import.meta.env.BASE_URL}python_project_preview.png`,
    descriptionCourte: "Algorithmes Python pour l'optimisation des itinéraires de distribution.",
    descriptionDetaillee: `Dans ce projet, nous avons conçu un algorithme permettant d'optimiser les tournées du Père Noël selon différents critères logistiques, en utilisant Python et des techniques telles que le backtracking ou des heuristiques de graphes.`,
    pdf: "#",
    github: "#",
    zip: `${import.meta.env.BASE_URL}SAE_PYTHON.zip`
  },
  {
    id: 4,
    titre: "SAE S3 — Application de Gestion des Stages",
    image: `${import.meta.env.BASE_URL}php_project_preview.png`,
    descriptionCourte: "Développement d'une application web de gestion des stages de BUT Informatique.",
    descriptionDetaillee: `Ce projet complet a impliqué la conception et le développement d'une plateforme de gestion des stages destinée aux étudiants du BUT Informatique. L'application inclut : suivi des étapes du stage, tableaux de bord pour chaque profil (étudiant, tuteur pédagogique, entreprise), notifications automatisées, et gestion documentaire. Le tout en utilisant PHP, SQL, HTML/CSS et une méthodologie de gestion de projet agile.`,
    pdf: `${import.meta.env.BASE_URL}SAE_S301.pdf`,
    github: "https://github.com/DevKosX/GestionDesStagesProject",
    zip: "#"
  },
];

const ProjectCard: React.FC<{ project: typeof projets[0]; onClick: () => void }> = ({ project, onClick }) => (
  <div className="project-card bg-darkpanel p-4 h-[380px] flex flex-col justify-between items-center rounded-lg shadow text-white border border-gray-700">
    <img src={project.image} alt={project.titre} className="w-full h-40 object-cover rounded mb-4" />
    <h3 className="text-lg font-semibold text-primary text-center">{project.titre}</h3>
    <p className="text-sm text-gray-300 text-center mt-2">{project.descriptionCourte}</p>
    <div className="mt-4 w-full flex justify-center">
      <button onClick={onClick} className="px-4 py-2 bg-accent text-white rounded hover:bg-foreground hover:text-black transition">
        Voir plus
      </button>
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: typeof projets[0]; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-darkpanel max-w-2xl w-full p-6 rounded-lg shadow-xl relative text-white">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
      <h2 className="text-2xl font-bold text-primary mb-4">{project.titre}</h2>
      <p className="text-gray-200 whitespace-pre-line mb-4">{project.descriptionDetaillee}</p>
      <div className="flex gap-4 flex-wrap">
        {project.pdf && <a href={project.pdf} target="_blank" rel="noreferrer" className="underline text-blue-400">Voir le compte rendu</a>}
        {project.github !== "#" && <a href={project.github} target="_blank" rel="noreferrer" className="underline text-blue-400">Voir sur GitHub</a>}
        {project.zip !== "#" && <a href={project.zip} download className="underline text-blue-400">Télécharger le ZIP</a>}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<null | typeof projets[0]>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(3, projets.length),
    slidesToScroll: 1,
    centerMode: projets.length < 3,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(2, projets.length), centerMode: projets.length < 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
    nextArrow: <ArrowRight color="white" />, 
    prevArrow: <ArrowLeft color="white" />,
  };

  return (
    <section id="projets" className="min-h-screen px-6 py-16 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10 text-primary text-center">Mes Projets</h2>
      <div className="w-full max-w-6xl mx-auto">
        <Slider {...settings}>
          {projets.map((p) => (
            <div key={p.id} className="flex justify-center">
              <ProjectCard project={p} onClick={() => setSelected(p)} />
            </div>
          ))}
        </Slider>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Projects;