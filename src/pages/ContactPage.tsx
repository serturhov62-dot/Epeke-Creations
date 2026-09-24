import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { EpekeLogo } from '../components/EpekeLogo';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ShieldCheck,
  Navigation,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedDirect, setSubmittedDirect] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const whatsappMessage = `Hello Epeke Creations,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nSubject: ${formData.subject || 'General Inquiry'}\n\nMessage:\n${formData.message}`;
  const whatsappDirectUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    formData.message ? whatsappMessage : COMPANY_INFO.whatsappDefaultMessage
  )}`;

  const emailSubject = encodeURIComponent(
    formData.subject ? `Epeke Creations Inquiry: ${formData.subject}` : 'Epeke Creations Website Inquiry'
  );
  const emailBody = encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, contact phone, and message.');
      return;
    }
    setErrorMsg('');

    // If an external static form service (e.g. Formspree/Web3Forms) is configured
    if (COMPANY_INFO.formEndpoint && COMPANY_INFO.formEndpoint.trim() !== '') {
      setIsSubmitting(true);
      try {
        const response = await fetch(COMPANY_INFO.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSubmittedDirect(true);
        } else {
          setErrorMsg('Form submission failed. Please contact us directly via WhatsApp or Phone.');
        }
      } catch (err) {
        setErrorMsg('Network error. Please contact us directly via WhatsApp or Phone.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Static GitHub Pages mode: Show formatted dispatch action with 1-click WhatsApp & Email buttons
      setSubmittedDirect(true);
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappDefaultMessage
  )}`;

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Get in Touch
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
              CONTACT US
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Reach out to Epeke Creations for inquiries, custom fabrication quotes, casket arrangements, or electrical service calls. We are here to assist you with dependable advice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Connect Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {/* Phone Button */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase text-slate-500 block">
                  Call Us Directly
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.altPhone}`}
                  className="text-xs text-slate-500 hover:text-blue-600 transition-colors block"
                >
                  Alt: {COMPANY_INFO.altPhoneDisplay}
                </a>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase text-emerald-800 block">
                  WhatsApp Support
                </span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-emerald-950 hover:text-emerald-700 transition-colors block"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.altWhatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-700 hover:underline block"
                >
                  Alt: {COMPANY_INFO.altPhoneDisplay}
                </a>
              </div>
            </div>

            {/* Email Button */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden space-y-0.5">
                <span className="text-xs font-bold uppercase text-slate-500 block">
                  Send An Email
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                >
                  {COMPANY_INFO.email}
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.altEmail}`}
                  className="text-xs text-slate-500 hover:text-blue-600 transition-colors truncate block"
                >
                  {COMPANY_INFO.altEmail}
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
                    EPEKE CREATIONS
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Quality Craftsmanship · Practical Solutions · Built With Care
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      SL
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Contact Person:</strong>
                      <span className="text-slate-700">{COMPANY_INFO.contactPerson}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Phone:</strong>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-blue-600 block">
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                      <a href={`tel:${COMPANY_INFO.altPhone}`} className="text-slate-500 hover:text-blue-600 block text-xs">
                        Alt: {COMPANY_INFO.altPhoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">WhatsApp:</strong>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-800 block"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.altWhatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline block text-xs"
                      >
                        Alt: {COMPANY_INFO.altPhoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="break-all">
                      <strong className="block text-slate-900 font-semibold">Email:</strong>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-600 block">
                        {COMPANY_INFO.email}
                      </a>
                      <a href={`mailto:${COMPANY_INFO.altEmail}`} className="text-slate-500 hover:text-blue-600 block text-xs">
                        Alt: {COMPANY_INFO.altEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Location:</strong>
                      <p className="text-slate-600">
                        {COMPANY_INFO.address}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Service Coverage: {COMPANY_INFO.serviceAreas}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                    <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Business Hours:</strong>
                      <ul className="space-y-1 text-slate-600 mt-1">
                        {COMPANY_INFO.hours.map((h, i) => (
                          <li key={i} className="flex justify-between gap-4">
                            <span>{h.days}:</span>
                            <span className="font-mono text-slate-800">{h.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Professional South African custom fabrication, woodwork, and electrical services.</span>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Send Us A Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your message and our office will get back to you promptly.
                </p>

                {submittedDirect ? (
                  <div className="mt-6 p-6 sm:p-7 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-4 animate-in fade-in">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Your Message is Ready to Send!</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        To ensure fast response from our workshop manager, choose your preferred communication channel below:
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Message via WhatsApp</span>
                      </a>

                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-sm transition-colors"
                      >
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span>Send via Email Client</span>
                      </a>
                    </div>

                    <div className="pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-slate-500">
                      <span>Message drafted for: {COMPANY_INFO.phoneDisplay}</span>
                      <button
                        onClick={() => {
                          setSubmittedDirect(false);
                          setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
                        }}
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        Draft another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {errorMsg && (
                      <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                        {errorMsg}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 071 080 8080"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.co.za"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Inquiry Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="e.g. Steel Bed Frame or Electrical Upgrade"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share details about your inquiry or requirements..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Submitting...' : 'Send Message'}</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center">
                      Direct transmission to Epeke Creations via WhatsApp and Email.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Map & Location Section */}
          <div className="mt-14 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Workshop & Operational Base
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Location & Northern Cape Base
                </h3>
                <p className="text-xs text-slate-500">
                  Keimoes, Northern Cape, South Africa
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Keimoes,Northern+Cape,South+Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors shrink-0"
              >
                <Navigation className="w-3.5 h-3.5 text-blue-600" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Stylized Interactive Map Frame */}
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 flex items-center justify-center text-center p-6">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 max-w-md bg-slate-950/90 backdrop-blur-md p-6 rounded-xl border border-slate-800 text-white shadow-2xl">
                <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h4 className="font-bold text-base">Epeke Creations Workshop</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Based in Keimoes, Northern Cape, delivering custom steel fabrication, precision woodworking, respectful caskets and coffins, and electrical services, with regional dispatch and nationwide courier service for custom orders.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 flex justify-center gap-4 text-xs font-mono text-slate-400">
                  <span>Keimoes</span>
                  <span>·</span>
                  <span>Upington</span>
                  <span>·</span>
                  <span>Northern Cape</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
