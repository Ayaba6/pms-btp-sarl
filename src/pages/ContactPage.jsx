import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { contact } from '../data/site';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

const subjects = ['Construction / BTP', 'Forage & hydraulique', 'Aménagement / clôture', 'Maintenance industrielle', 'Transport', 'Fournitures / commerce', 'Autre'];

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125154.0041130635!2d-1.5615512!3d12.3714277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e9598f4a22467%3A0x4c16a69542da6f2!2sOuagadougou%2C%20Burkina%20Faso!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr';

const field =
  'w-full bg-transparent border-0 border-b border-ink/20 px-0 py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:ring-0 focus:border-pmsBlue transition-colors';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: subjects[0], message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Ouvre le logiciel de messagerie du visiteur avec la demande pré-remplie.
  const onSubmit = (e) => {
    e.preventDefault();
    const body = `Nom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone}\n\n${form.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`[Site web] ${form.subject}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const items = [
    { icon: Phone, label: 'Téléphone', value: contact.phones.join(' / '), href: contact.phoneHref },
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: 'Adresse', value: `${contact.postal} — ${contact.city}` },
    { icon: Clock, label: 'Horaires', value: contact.hours },
  ];

  return (
    <main>
      <PageHeader
        crumb="Contact"
        eyebrow="Restons en contact"
        title="Parlons de votre projet."
        intro="Construction, forage, aménagement ou équipement : décrivez-nous votre besoin, nous vous répondons rapidement avec une proposition adaptée."
        image="/images/realisations/portail-2.jpg"
      />

      <section className="bg-sand-50 py-20 sm:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="display-xl text-3xl sm:text-4xl text-ink">Nos coordonnées</h2>
            <ul className="mt-10 border-t border-ink/10">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-5 py-6 border-b border-ink/10">
                  <span className="w-11 h-11 grid place-items-center bg-ink text-white shrink-0"><Icon size={18} /></span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block font-semibold text-ink hover:text-pmsBlue break-all">{value}</a>
                    ) : (
                      <p className="mt-1 font-semibold text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn mt-8 bg-[#1FA855] text-white hover:bg-[#178a45] w-full sm:w-auto">
              <MessageCircle size={18} /> Écrire sur WhatsApp
            </a>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-12 shadow-[0_30px_80px_-30px_rgba(13,21,34,0.25)]">
              {sent ? (
                <div className="py-14 text-center">
                  <span className="w-16 h-16 mx-auto grid place-items-center bg-pmsBlue text-white"><Send size={26} /></span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">Votre messagerie s'est ouverte</h3>
                  <p className="mt-3 text-ink/60 max-w-md mx-auto text-sm leading-relaxed">
                    Il ne vous reste qu'à envoyer l'email pré-rempli. Si rien ne s'est ouvert, écrivez-nous directement à{' '}
                    <a href={`mailto:${contact.email}`} className="text-pmsBlue font-semibold">{contact.email}</a>.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-ghost-dark mt-8">Nouvelle demande</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-8">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink">Demande de devis</h3>
                    <p className="mt-2 text-sm text-ink/55">Gratuit et sans engagement.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <label className="block">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">Nom complet *</span>
                      <input name="name" required value={form.name} onChange={onChange} placeholder="Votre nom" className={field} />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">Email *</span>
                      <input type="email" name="email" required value={form.email} onChange={onChange} placeholder="vous@exemple.com" className={field} />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">Téléphone</span>
                      <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+226 …" className={field} />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">Type de projet</span>
                      <select name="subject" value={form.subject} onChange={onChange} className={`${field} cursor-pointer`}>
                        {subjects.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">Votre projet *</span>
                    <textarea name="message" rows={5} required value={form.message} onChange={onChange} placeholder="Nature des travaux, localisation, délais souhaités…" className={`${field} resize-none`} />
                  </label>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Envoyer ma demande <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-20">
          <div className="h-[380px] sm:h-[460px] overflow-hidden grayscale-[60%] hover:grayscale-0 transition-all duration-700">
            <iframe title="Localisation PMS Sarl" src={mapSrc} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>
    </main>
  );
}
