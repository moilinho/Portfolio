import React, { useState } from "react";
import Slider from "react-slick";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projets = [
  {
    id: 1,
    titre: "SAE S5 — Graye : App de découverte culinaire",
    image: `${import.meta.env.BASE_URL}graye_project_preview.png`,
    descriptionCourte: "Conception et développement d'une application mobile pour aider les étudiants à trouver où manger.",
    descriptionDetaillee: `Développée en équipe dans le cadre du BUT Informatique, Graye est une solution ciblée pour la vie étudiante. 
    L'application propose un système d'onboarding personnalisé (régimes spéciaux, cuisines préférées), une carte interactive pour la géolocalisation des restaurants et une "Graye List" permettant de gérer ses établissements favoris. 
    Ce projet a mis l'accent sur une identité visuelle forte (Duo Violet/Orange) et une expérience utilisateur optimisée pour se démarquer des applications de restauration classiques.`,
    pdf: `${import.meta.env.BASE_URL}RapportCommunication.pdf`,
    github: "https://github.com/RobertGriffaton/SAES55",
    zip: "#"
  },
  {
    id: 2,
    titre: "SAE S3 — Gestion des Stages",
    image: `${import.meta.env.BASE_URL}php_project_preview.png`,
    descriptionCourte: "Développement d'une application web de gestion des stages de BUT Informatique.",
    descriptionDetaillee: `Ce projet complet a impliqué la conception et le développement d'une plateforme de gestion des stages destinée aux étudiants du BUT Informatique. L'application inclut : suivi des étapes du stage, tableaux de bord pour chaque profil (étudiant, tuteur pédagogique, entreprise), notifications automatisées, et gestion documentaire. Le tout en utilisant PHP, SQL, HTML/CSS et une méthodologie de gestion de projet agile.`,
    pdf: `${import.meta.env.BASE_URL}SAE_S301.pdf`,
    github: "https://github.com/DevKosX/GestionDesStagesProject",
    zip: "#"
  },
  {
    id: 3,
    titre: "SAE Java — Calculatrice Orientée Objet",
    image: `${import.meta.env.BASE_URL}java_project_preview.png`,
    descriptionCourte: "Création d'une calculatrice Java orientée objet gérant les opérations de base.",
    descriptionDetaillee: `Dans ce projet, j'ai mis en pratique les principes de la programmation orientée objet en développant une calculatrice en Java. Le projet couvrait la conception de classes, la gestion d'erreurs et l'encapsulation des données.`,
    pdf: `${import.meta.env.BASE_URL}SAE_JAVA.pdf`,
    github: "#",
    zip: `${import.meta.env.BASE_URL}SAE_JAVA.zip`
  },
  {
    id: 4,
    titre: "SAE Python — Tournée Noël",
    image: `${import.meta.env.BASE_URL}python_project_preview.png`,
    descriptionCourte: "Algorithmes Python pour l'optimisation des itinéraires de distribution.",
    descriptionDetaillee: `Conception d'un algorithme optimisant les tournées selon différents critères logistiques, en utilisant Python et des techniques de graphes et heuristiques.`,
    pdf: "#",
    github: "#",
    zip: `${import.meta.env.BASE_URL}SAE_PYTHON.zip`
  },
  {
    id: 5,
    titre: "SAE SQL — Freedom",
    image: `${import.meta.env.BASE_URL}sql_project_preview.png`,
    descriptionCourte: "Création et interrogation d'une base de données PostgreSQL à partir d’un CSV.",
    descriptionDetaillee: `Modélisation d'une base de données relationnelle sur le degré de liberté des pays. Création des tables SQL, importation de données CSV et requêtes complexes.`,
    pdf: `${import.meta.env.BASE_URL}SAE_SQL.pdf`,
    github: "#",
    zip: "#"
  },
];

// --- Composants de flèches personnalisés pour éviter les doublons ---
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div 
      className="absolute top-1/2 -right-8 z-10 -translate-y-1/2 cursor-pointer p-2 hover:scale-125 transition bg-black/20 rounded-full hover:bg-black/40"
      onClick={onClick}
    >
      <ArrowRight color="white" size={30} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div 
      className="absolute top-1/2 -left-8 z-10 -translate-y-1/2 cursor-pointer p-2 hover:scale-125 transition bg-black/20 rounded-full hover:bg-black/40"
      onClick={onClick}
    >
      <ArrowLeft color="white" size={30} />
    </div>
  );
};

const ProjectCard: React.FC<{ project: typeof projets[0]; onClick: () => void }> = ({ project, onClick }) => (
  <div className="mx-4 bg-darkpanel p-6 h-[450px] flex flex-col rounded-2xl shadow-lg text-white border border-white/5 font-mono hover:border-primary/50 transition-colors group">
    <div className="overflow-hidden rounded-xl mb-6 h-48">
      <img src={project.image} alt={project.titre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h3 className="text-xl font-bold text-primary mb-4">{project.titre}</h3>
    <p className="text-sm text-gray-400 line-clamp-3 mb-6">{project.descriptionCourte}</p>
    <div className="mt-auto">
      <button onClick={onClick} className="w-full py-3 bg-accent text-white rounded-lg hover:bg-white hover:text-black transition-all font-bold">
        Détails du projet
      </button>
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: typeof projets[0]; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-6">
    <div className="bg-darkpanel max-w-2xl w-full p-8 rounded-2xl shadow-2xl relative text-white border border-white/10 animate-fade-in-up">
      <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl">✕</button>
      <h2 className="text-3xl font-bold text-primary mb-6">{project.titre}</h2>
      <p className="text-gray-200 leading-relaxed text-lg mb-8">{project.descriptionDetaillee}</p>
      <div className="flex gap-4 flex-wrap pt-6 border-t border-white/10">
        {project.pdf && project.pdf !== "#" && <a href={project.pdf} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-md border border-blue-600/30 hover:bg-blue-600/30 transition">Compte-rendu PDF</a>}
        {project.github !== "#" && <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 hover:bg-white/20 transition">GitHub</a>}
        {project.zip !== "#" && <a href={project.zip} download className="px-4 py-2 bg-green-600/20 text-green-400 rounded-md border border-green-600/30 hover:bg-green-600/30 transition">Télécharger ZIP</a>}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<null | typeof projets[0]>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // On passe le composant directement
    prevArrow: <PrevArrow />, // Slick lui injectera automatiquement onClick
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } }, // Désactive les flèches sur petit mobile pour gagner de la place
    ],
  };

  return (
    <section id="projets" className="min-h-screen px-6 py-24 text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-16 text-primary text-center font-mono uppercase tracking-widest">Mes Projets</h2>
      <div className="w-full max-w-6xl mx-auto relative px-4">
        <Slider {...settings}>
          {projets.map((p) => (
            <div key={p.id}>
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