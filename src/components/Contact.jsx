"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Adresse email invalide.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Message envoyé avec succès !");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.error || "Erreur lors de l'envoi du message.");
      }
    } catch (err) {
      setError("Erreur de connexion. Veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Contactez-moi</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Vous avez un projet en tête? Discutons-en.
        </p>
        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nom complet *</label>
                <input 
                  type="text" 
                  id="name" 
                  value={form.name} 
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Adresse email *</label>
                <input 
                  type="email" 
                  id="email" 
                  value={form.email} 
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-white mb-2">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                value={form.subject} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message *</label>
              <textarea 
                id="message" 
                rows={5} 
                value={form.message} 
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 text-white"
              ></textarea>
            </div>
            {error && <div className="text-red-500 text-center p-3 bg-red-500/10 rounded-lg">{error}</div>}
            {success && <div className="text-green-500 text-center p-3 bg-green-500/10 rounded-lg">{success}</div>}
            <button 
              type="submit" 
              className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}