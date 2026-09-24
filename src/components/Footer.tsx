import React from 'react';
import { EpekeLogo } from './EpekeLogo';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, serviceCategory?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappDefaultMessage
  )}`;

  const handleNav = (page: string, category?: string) => {
    onNavigate(page, category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Primary Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Purpose Column (Spans 2 on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <EpekeLogo variant="compact" inverted />
            </div>

            <p className="text-sm text-slate-400 font-medium tracking-wide max-w-md">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Epeke Creations provides custom steel work, custom woodworking, respectful caskets and coffins, and electrical installations. Built with reliable workmanship and practical design across South Africa.
            </p>

            {/* Official Registration Markers (shown only if configured) */}
            {COMPANY_INFO.regNumber ? (
              <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
                <p>Registration No: <span className="text-slate-300">{COMPANY_INFO.regNumber}</span></p>
                {COMPANY_INFO.taxNumber && (
                  <p>Tax Reference No: <span className="text-slate-300">{COMPANY_INFO.taxNumber}</span></p>
                )}
              </div>
            ) : null}

            {/* Primary Action Button in Footer */}
            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 active:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => handleNav('quote')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Work & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('caskets')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Caskets & Coffins
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quote')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Request a Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Category Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('services', 'steel')}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Steel Work & Fabrication
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services', 'wood')}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Custom Woodwork & Cabinets
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('caskets')}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Caskets & Coffins
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services', 'electrical')}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Electrical Services & Repairs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services', 'steel')}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Security Gates & Doors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services', 'wood')}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Kitchen Cupboards & Units
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Contact Information
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="text-slate-300 font-medium">
                <span>{COMPANY_INFO.contactPerson}</span>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="block hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.altPhone}`}
                    className="block text-slate-400 hover:text-white transition-colors text-[11px]"
                  >
                    Alt: {COMPANY_INFO.altPhoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-emerald-300 transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay} (WhatsApp)
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.altWhatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-emerald-300 transition-colors text-[11px] text-emerald-400/80"
                  >
                    {COMPANY_INFO.altPhoneDisplay} (Alt WhatsApp)
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="block hover:text-white transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.altEmail}`}
                    className="block text-slate-400 hover:text-white transition-colors break-all text-[11px]"
                  >
                    {COMPANY_INFO.altEmail}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Fri: 07:30 – 17:00</p>
                  <p>Sat: 08:00 – 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Clean Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Epeke Creations. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Quality Craftsmanship</span>
            <span>·</span>
            <span>Practical Solutions</span>
            <span>·</span>
            <span>Built With Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
