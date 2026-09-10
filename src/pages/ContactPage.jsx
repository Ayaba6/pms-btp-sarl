import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // ==========================================
  // METS TON LIEN GOOGLE MAPS (src de l'iframe) ICI :
  // ==========================================
  const mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125154.0041130635!2d-1.5615512!3d12.3714277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e9598f4a22467%3A0x4c16a69542da6f2!2sOuagadougou%2C%20Burkina%20Faso!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* En-tête de la page */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-pmsRed font-semibold uppercase tracking-wider text-xs">
            <span className="w-8 h-0.5 bg-pmsRed"></span> Restons en contact <span className="w-8 h-0.5 bg-pmsRed"></span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Discutons de <span className="text-pmsBlue">vos projets</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Une question, un devis pour un chantier de BTP, un forage ou des équipements industriels ? Notre équipe vous répond dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Informations de contact (colonne de gauche) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Nos Coordonnées</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Contactez-nous directement via nos canaux officiels ou rendez-nous visite à nos bureaux.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-pmsBlue">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Téléphone</p>
                  <a href="tel:+22670129797" className="text-base font-medium hover:text-pmsBlue transition-colors">
                    +226 70 12 97 97 / 76 21 72 71
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-pmsBlue">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</p>
                  <a href="mailto:esfsalgo@gmail.com" className="text-base font-medium hover:text-pmsBlue transition-colors">
                    esfsalgo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-pmsBlue">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Adresse</p>
                  <p className="text-base font-medium">Ouagadougou, Burkina Faso</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-pmsBlue">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Heures d'ouverture</p>
                  <p className="text-base font-medium">Lundi - Samedi : 08h00 - 18h00</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Prestige Multi Services - BTP Sarl, votre partenaire de référence pour le génie civil et les services industriels.
              </p>
            </div>
          </div>

          {/* Formulaire de contact (colonne de droite) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-100">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message envoyé avec succès !</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm">
                  Merci de nous avoir contactés. Notre équipe étudiera votre demande et vous recontactera très rapidement.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-pmsBlue text-white font-medium rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Envoyez-nous un message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Jean Ouédraogo"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pmsBlue text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Adresse Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: jean@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pmsBlue text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ex: +226 XX XX XX XX"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pmsBlue text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Objet de la demande</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Devis travaux BTP / Forage"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pmsBlue text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Votre message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre besoin en détail..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pmsBlue text-sm transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-pmsRed hover:bg-red-800 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg transition-all text-sm tracking-wide"
                >
                  Envoyer le message <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Section Google Maps dynamique */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-slate-100 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="text-pmsRed" size={24} /> Notre localisation
            </h3>
            <span className="text-xs text-slate-500 font-medium">Ouagadougou, Burkina Faso</span>
          </div>
          <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe 
              title="Localisation PMS Sarl"
              src={mapIframeSrc} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}