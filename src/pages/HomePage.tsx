import React from 'react';
import { ASSET_IMAGES } from '../data/images';
import { COMPANY_INFO, TESTIMONIALS, GALLERY_ITEMS } from '../data/companyData';
import { EpekeLogo } from '../components/EpekeLogo';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  Compass,
  Zap,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, category?: string) => void;
  onOpenLightbox: (item: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const whatsappHeroUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappDefaultMessage
  )}`;

  const serviceCards = [
    {
      id: 'steel',
      title: 'STEEL WORK',
      description:
        'Custom steel furniture, gates, frames, structures and fabrication.',
      image: ASSET_IMAGES.steelWork,
      highlights: ['Steel Furniture & Beds', 'Security Doors & Gates', 'TIG & MIG Welding'],
    },
    {
      id: 'wood',
      title: 'WOOD WORK',
      description:
        'Custom cabinets, furniture, cupboards and woodworking projects.',
      image: ASSET_IMAGES.woodWork,
      highlights: ['Kitchen & Bedroom Cupboards', 'Custom Solid Wood Desks', 'Fine Joinery'],
    },
    {
      id: 'caskets',
      title: 'CASKETS & COFFINS',
      description:
        'Quality caskets and coffins with respectful, carefully crafted designs.',
      image: ASSET_IMAGES.caskets,
      highlights: ['Dignified Timber Finishes', 'Satin Lined Interiors', 'Respectful Delivery'],
    },
    {
      id: 'electrical',
      title: 'ELECTRICAL',
      description:
        'Professional electrical installation, maintenance and related services.',
      image: ASSET_IMAGES.electrical,
      highlights: ['DB Board Upgrades & Rewiring', 'Lighting & Power Points', 'Fault Finding'],
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Subtle background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40 z-10" />

        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={ASSET_IMAGES.hero}
            alt="Epeke Creations Custom Metal Fabrication and Woodworking Workshop"
            className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-medium tracking-wide mb-6">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Custom Fabrication & Electrical Solutions · South Africa</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight uppercase font-sans">
              EPEKE CREATIONS
            </h1>

            {/* Subheadline */}
            <p className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400 font-sans">
              {COMPANY_INFO.tagline}
            </p>

            {/* Supporting text */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('quote')}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg hover:shadow-blue-600/30 transition-all duration-150 text-center"
              >
                REQUEST A QUOTE
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-slate-200 bg-slate-800/80 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 rounded-lg transition-all duration-150 text-center backdrop-blur-sm"
              >
                <span>VIEW OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300 text-xs">
              <div>
                <p className="font-bold text-white text-base">Custom Made</p>
                <p className="text-slate-400">Tailored to exact specs</p>
              </div>
              <div>
                <p className="font-bold text-white text-base">Gauteng Based</p>
                <p className="text-slate-400">Serving South Africa</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-bold text-white text-base">Practical Design</p>
                <p className="text-slate-400">Durable craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR SERVICE CARDS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Core Divisions
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Specialized Craftsmanship & Technical Services
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Each division at Epeke Creations operates with specialized tools, qualified workmanship, and rigorous attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 border border-slate-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-mono font-semibold text-white/90 uppercase tracking-wider">
                      Epeke Creations
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {card.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Service Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('services', card.id)}
                    className="w-full py-2.5 px-4 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>VIEW SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (Prominent on homepage as required) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Brand Badge & Craft Proof */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden">
                <div className="flex justify-center mb-6">
                  <EpekeLogo variant="full" />
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-3 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Business Name</span>
                    <span className="font-medium text-slate-900">Epeke Creations</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Core Services</span>
                    <span>Steel, Wood, Caskets, Electrical</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Location</span>
                    <span>Gauteng, South Africa</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Coverage</span>
                    <span>Residential & Commercial</span>
                  </div>
                </div>
              </div>

              {/* Quick direct contact card */}
              <div className="p-6 bg-blue-900 text-white rounded-2xl space-y-3">
                <h4 className="font-bold text-sm tracking-wide uppercase text-blue-200">
                  Have a specific project in mind?
                </h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  We review custom blueprints, photos of spaces, and specific dimensional requirements.
                </p>
                <div className="pt-1 flex gap-3">
                  <a
                    href={whatsappHeroUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Grounded, Professional Business Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Who We Are
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  ABOUT EPEKE CREATIONS
                </h2>
              </div>

              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  Epeke Creations is an established South African multidisciplinary workshop specializing in custom steel fabrication, bespoke woodworking, dignified caskets and coffins, and electrical services.
                </p>
                <p>
                  We provide practical, custom-made solutions for residential homeowners, commercial businesses, contractors, and individual clients. Rather than mass-producing generic items, we listen carefully to what you need, take accurate measurements, select appropriate materials, and craft solutions that fit both your space and budget.
                </p>
                <p>
                  Our work is built on simple, dependable values: honest communication, fair pricing, durable materials, and respect for our customers' time and property. Whether fabricating a heavy-duty security gate, installing kitchen cabinetry, delivering a dignified resting place for a loved one, or rewiring a residential distribution board, we work with quiet care and pride in our craftsmanship.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    Quality Workmanship
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Solid joints, clean welds, smooth finishes, and safe electrical installations that endure daily use.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-blue-600" />
                    Custom Designs & Practicality
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Tailored to your exact dimensional constraints, layout preferences, and functional needs.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Reliable Service
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Prompt response times, clear milestone updates, and respectful on-site installation manners.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Respect & Care
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Especially in our funeral caskets division, where compassion and dignified presentation take precedence.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Read our full company story & workshop standards</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED WORK & GALLERY TEASER */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Design Examples & Capabilities
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Custom Design Examples & Specifications
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Explore example designs and specifications of custom steel, woodwork, caskets, and electrical installations. Built to your exact requirements upon order.
              </p>
            </div>

            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.slice(0, 6).map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 bg-slate-900/80 text-white rounded backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 bg-blue-600/90 text-white rounded backdrop-blur-sm">
                    {item.badge || 'Example Design'}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="truncate max-w-[200px]">{item.specs.split('·')[0]}</span>
                    <span className="text-blue-600 font-sans font-semibold group-hover:translate-x-0.5 transition-transform">
                      Inspect →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASKETS DIVISION DIGNIFIED SPOTLIGHT */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl">
              <img
                src={ASSET_IMAGES.caskets}
                alt="Epeke Creations Handcrafted Caskets and Coffins"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Dignified Funeral Products
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Respectful, Carefully Crafted Caskets & Coffins
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We understand the sensitivity of honoring a loved one. Epeke Creations manufactures high-grade coffins and caskets featuring handcrafted solid timber and premium veneers, plush satin upholstery, sturdy load-tested brass and chrome handles, and dignified finishes.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Available directly to funeral parlors, undertakers, burial societies, and private families across Gauteng. We provide prompt, quiet service with transparent pricing.
              </p>

              <div className="pt-3 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('caskets')}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                >
                  View Caskets & Coffins Range
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Epeke Creations, I am inquiring regarding your caskets and coffins availability.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Bereavement WhatsApp Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Customer Feedback
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Customer Reviews Coming Soon
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Your feedback matters. As we complete more custom projects across Gauteng, verified client reviews and project photographs will be added here.
            </p>
          </div>

          <div className="max-w-3xl mx-auto p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              Have you worked with Epeke Creations on a steel, woodworking, casket, or electrical project? We welcome your comments, photographs, and feedback.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit Feedback via WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('quote')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-sm transition-colors"
              >
                <span>Request a Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
            Ready to start your custom project?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
            Contact Epeke Creations today for an itemized quotation, material advice, or technical consultation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider bg-slate-950 text-white hover:bg-slate-900 rounded-lg shadow-lg transition-colors"
            >
              Request a Free Quote
            </button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
