import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        toast.success("Message envoyé avec succès !");
        form.reset();
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    })
    .catch(() => toast.error("Erreur réseau."));
};

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-16 text-white flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-bold mb-2 text-primary text-center">Contactez-moi</h2>
      <p className="mb-10 text-gray-300 text-center">
        N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
      </p>

      <div className="bg-darkpanel rounded-xl shadow-md p-8 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Formulaire */}
        <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xgvyyyqn"
        method="POST"
        className="md:col-span-2 space-y-4"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="nom"
              type="text"
              placeholder="Nom *"
              required
              className="p-3 rounded bg-black/40 border border-gray-700 text-white"
            />
            <input
              name="prenom"
              type="text"
              placeholder="Prénom *"
              required
              className="p-3 rounded bg-black/40 border border-gray-700 text-white"
            />
            <input
              name="email"
              type="email"
              placeholder="E-Mail *"
              required
              className="p-3 rounded bg-black/40 border border-gray-700 text-white"
            />
            <input
              name="telephone"
              type="tel"
              placeholder="Téléphone"
              className="p-3 rounded bg-black/40 border border-gray-700 text-white"
            />
          </div>

          <input
            name="objet"
            type="text"
            placeholder="Objet *"
            required
            className="w-full p-3 rounded bg-black/40 border border-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Message *"
            required
            className="w-full p-3 rounded bg-black/40 border border-gray-700 text-white h-32"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-foreground hover:text-black transition"
          >
            ENVOYER
          </button>
        </form>

        {/* Coordonnées */}
        <div className="space-y-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Mail size={18} /> Moilim.Abdallah@outlook.fr
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} /> 07 68 74 57 78
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} /> Clichy (92)
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/moilim-abdallah-743340305/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5 invert"
              />
              Profil LinkedIn
            </a>
            <a
              href="https://github.com/moilinho"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                alt="GitHub"
                className="w-5 h-5 invert"
              />
              Profil GitHub
            </a>
          </div>
        </div>
      </div>
      {/* Toast container pour afficher les messages */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        />
    </section>
  );
};

export default Contact;
