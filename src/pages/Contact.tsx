import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
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
          toast.error("Erreur. Veuillez réessayer.");
        }
      })
      .catch(() => toast.error("Erreur réseau."));
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-24 text-white flex flex-col items-center justify-center font-mono">
      <h2 className="text-4xl font-bold mb-4 text-primary text-center">Contactez-moi</h2>
      <p className="mb-16 text-gray-400 text-center max-w-xl text-lg">
        Une question ou une opportunité ? N'hésitez pas à m'envoyer un message !
      </p>

      <div className="bg-darkpanel/50 backdrop-blur-md border border-white/5 rounded-2xl shadow-2xl p-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xgvyyyqn"
          method="POST"
          className="md:col-span-2 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="nom" type="text" placeholder="Nom *" required className="p-4 rounded-lg bg-black/40 border border-gray-700 focus:border-primary outline-none transition" />
            <input name="prenom" type="text" placeholder="Prénom *" required className="p-4 rounded-lg bg-black/40 border border-gray-700 focus:border-primary outline-none transition" />
            <input name="email" type="email" placeholder="E-Mail *" required className="p-4 rounded-lg bg-black/40 border border-gray-700 focus:border-primary outline-none transition" />
            <input name="telephone" type="tel" placeholder="Téléphone" className="p-4 rounded-lg bg-black/40 border border-gray-700 focus:border-primary outline-none transition" />
          </div>
          <input name="objet" type="text" placeholder="Objet *" required className="w-full p-4 rounded-lg bg-black/40 border border-gray-700 focus:border-primary outline-none transition" />
          <textarea name="message" placeholder="Votre message *" required className="w-full p-4 rounded-lg bg-black/40 border border-gray-700 focus:border-primary outline-none transition h-44 resize-none" />
          <button type="submit" className="w-full md:w-auto px-10 py-4 bg-accent text-white font-bold rounded-lg hover:bg-primary transition-all shadow-lg active:scale-95">
            ENVOYER LE MESSAGE
          </button>
        </form>

        {/* Coordonnées */}
        <div className="flex flex-col justify-between py-2">
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-primary border-b border-primary/20 pb-2">Coordonnées</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-200 hover:text-primary transition"><Mail className="text-primary" size={24} /> <span>Moilim.Abdallah@outlook.fr</span></div>
              <div className="flex items-center gap-4 text-gray-200 hover:text-primary transition"><Phone className="text-primary" size={24} /> <span>07 68 74 57 78</span></div>
              <div className="flex items-center gap-4 text-gray-200 hover:text-primary transition"><MapPin className="text-primary" size={24} /> <span>Clichy (92)</span></div>
            </div>
          </div>
          
          <div className="pt-10 flex flex-col gap-4">
            <a href="https://www.linkedin.com/in/moilim-abdallah-743340305/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition border border-white/5">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 invert" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/moilinho" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition border border-white/5">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" className="w-6 h-6 invert" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </section>
  );
};

export default Contact;