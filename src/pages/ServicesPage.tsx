import React, { useState, useEffect } from 'react';
import { ASSET_IMAGES } from '../data/images';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Wrench,
  Layers,
  HeartHandshake,
  Zap,
  Phone,
} from 'lucide-react';

interface ServicesPageProps {
  initialCategory?: string;
  onNavigate: (page: string, category?: string) => void;
  onQuoteService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialCategory = 'steel',
  onNavigate,
  onQuoteService,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'steel' | 'wood' | 'caskets' | 'electrical'>('all');

  useEffect(() => {
    if (initialCategory && ['steel', 'wood', 'caskets', 'electrical'].includes(initialCategory)) {
      setActiveTab(initialCategory as any);
      // Smooth scroll to the section
      const el = document.getElementById(`service-sec-${initialCategory}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialCategory]);

  const whatsappInquireUrl = (serviceName: string) =>
    `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Hello Epeke Creations, I am enquiring about your ${serviceName} services.`
    )}`;

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Complete Capabilities
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
              OUR SERVICES
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Epeke Creations provides custom steel work, custom woodworking, respectful caskets and coffins, and electrical services. Built with durable materials, practical engineering, and dependable customer service.
            </p>

            {/* Filter Buttons / Interactive Segmented Controls */}
            <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-slate-800/80 rounded-xl border border-slate-700 w-fit">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                All Services
              </button>
              <button
                onClick={() => setActiveTab('steel')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  activeTab === 'steel'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                Steel Work
              </button>
              <button
                onClick={() => setActiveTab('wood')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  activeTab === 'wood'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                Wood Work
              </button>
              <button
                onClick={() => setActiveTab('caskets')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  activeTab === 'caskets'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                Caskets & Coffins
              </button>
              <button
                onClick={() => setActiveTab('electrical')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  activeTab === 'electrical'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                Electrical
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <div className="py-12 sm:py-16 space-y-24 bg-white">
        {/* =======================================================
            CATEGORY 1 — STEEL WORK
           ======================================================= */}
        {(activeTab === 'all' || activeTab === 'steel') && (
          <section id="service-sec-steel" className="scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-slate-200 pb-16">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Category 1 · Precision Metal Fabrication
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  STEEL WORK & CUSTOM FABRICATION
                </h2>

                <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
                  We fabricate durable, tailor-made steel structures and custom furniture using heavy-gauge mild and stainless steel. Each piece is measured, cut, TIG or MIG welded, and finished with protective anti-corrosion primer and premium powder coating.
                </p>

                {/* Imagery Grid for Steel Work (Multiple realistic photos) */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 relative group">
                    <img
                      src={ASSET_IMAGES.steelWork}
                      alt="Custom steel minimalist dining table and modern security gate"
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white border-t border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Custom Steel Furniture & Tables</p>
                      <p className="text-xs text-slate-500">Matte black powder-coated bases with welded structural joints</p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 relative group">
                    <img
                      src={ASSET_IMAGES.steelBedGate}
                      alt="Custom steel canopy bed frame and architectural security door"
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white border-t border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Steel Beds & Architectural Security Doors</p>
                      <p className="text-xs text-slate-500">Heavy-gauge box section frames with tamper-resistant hinges</p>
                    </div>
                  </div>
                </div>

                {/* Specific Offerings List */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Steel Work Services Include:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                      {[
                        'Custom steel furniture (dining tables, coffee tables, consoles)',
                        'Steel tables and industrial study desks',
                        'Steel chairs, barstools and patio seating',
                        'Steel beds (canopy frames, platform frames, double bunks)',
                        'Steel frames and architectural interior partitions',
                        'Security doors with decorative & high-security infills',
                        'Security gates (sliding driveway & pedestrian gates)',
                        'Custom brackets, heavy-duty mountings & supports',
                        'Industrial shelving and retail storage racks',
                        'Welding and fabrication (MIG, TIG, stick welding)',
                        'General steel fabrication and equipment repairs',
                        'Custom metal structures, pergolas and carports',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action Box */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                        Custom Steel Specifications
                      </h4>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        We manufacture strictly according to your required dimensions, steel gauges, and RAL powder-coat colors. Send us your measurements or sketch.
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                        <p><strong className="text-slate-800">Lead Times:</strong> Typically 7–14 business days</p>
                        <p><strong className="text-slate-800">Finishes:</strong> Matte Black, Charcoal, Gloss, Galvanized</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <button
                        onClick={() => {
                          onQuoteService('Steel Work');
                          onNavigate('quote');
                        }}
                        className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      >
                        Request Steel Work Quote
                      </button>
                      <a
                        href={whatsappInquireUrl('Steel Work')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =======================================================
            CATEGORY 2 — WOOD WORK
           ======================================================= */}
        {(activeTab === 'all' || activeTab === 'wood') && (
          <section id="service-sec-wood" className="scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-slate-200 pb-16">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Category 2 · Bespoke Carpentry & Cabinetry
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  CUSTOM WOOD WORK & CABINETRY
                </h2>

                <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
                  Our custom carpentry workshop produces high-grade built-in cupboards, modern kitchen cabinets, solid wood furniture, and tailored storage. We combine precision edge-banding, robust joinery, and durable hardware for timeless warmth and functionality.
                </p>

                {/* Imagery Grid for Wood Work */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 relative group">
                    <img
                      src={ASSET_IMAGES.woodWork}
                      alt="Custom solid wood kitchen cabinetry and oak wardrobes"
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white border-t border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Custom Built-In Kitchen & Bedroom Cabinets</p>
                      <p className="text-xs text-slate-500">Fine natural grain veneers, soft-close hinges, and integrated lighting</p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 relative group">
                    <img
                      src={ASSET_IMAGES.kitchenCupboards}
                      alt="Floor to ceiling modern kitchen cupboards and solid wood island"
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white border-t border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Modern Cupboards & Floating Timber Shelving</p>
                      <p className="text-xs text-slate-500">Precision joinery tailored to room contours and plumbing</p>
                    </div>
                  </div>
                </div>

                {/* Specific Offerings List */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Wood Work Services Include:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                      {[
                        'Custom cabinets (bespoke storage & display cases)',
                        'Kitchen cabinets (full renovations & modular units)',
                        'Wardrobes and walk-in closet systems',
                        'Cupboards (bedroom, linen, pantry and garage)',
                        'Shelving (floating solid wood shelves & bookcases)',
                        'TV units and floating media entertainment centers',
                        'Solid wood dining tables (Kiaat, Oak, Pine, Teak)',
                        'Executive desks and ergonomic home office workstations',
                        'Custom freestanding furniture pieces',
                        'Wood-and-steel hybrid furniture designs',
                        'General carpentry, door hanging and architraves',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action Box */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                        Custom Joinery Consultation
                      </h4>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        We visit your home or business to take exact measurements, provide timber samples, and review drawer/hinge hardware options.
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                        <p><strong className="text-slate-800">Timber Choices:</strong> Kiaat, Oak, Pine, Meranti, SupaWood</p>
                        <p><strong className="text-slate-800">Hardware:</strong> Heavy-duty soft-close European runners</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <button
                        onClick={() => {
                          onQuoteService('Wood Work');
                          onNavigate('quote');
                        }}
                        className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      >
                        Request Woodwork Quote
                      </button>
                      <a
                        href={whatsappInquireUrl('Wood Work')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =======================================================
            CATEGORY 3 — CASKETS & COFFINS (Respectful & Professional)
           ======================================================= */}
        {(activeTab === 'all' || activeTab === 'caskets') && (
          <section id="service-sec-caskets" className="scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-slate-200 pb-16">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl">
                    <HeartHandshake className="w-5 h-5 text-blue-700" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                    Category 3 · Dignified Funeral Craftsmanship
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  CASKETS & COFFINS
                </h2>

                <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
                  Crafted with reverence, quiet dignity, and meticulous attention to detail. We manufacture premium coffins and caskets for funeral directors, burial societies, and private families throughout South Africa. Our designs prioritize structural strength, elegant finishing, and dignified comfort.
                </p>

                {/* Respectful Product Imagery Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 relative group">
                    <img
                      src={ASSET_IMAGES.caskets}
                      alt="Solid mahogany handcrafted casket with brass swing handles and satin lining"
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white border-t border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Handcrafted Heritage Solid Wood Casket</p>
                      <p className="text-xs text-slate-500">Rich satin mahogany finish with plush ruched ivory satin interior</p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 relative group">
                    <img
                      src={ASSET_IMAGES.traditionalCoffin}
                      alt="Traditional six-sided polished cherry coffin with chrome swing bars"
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white border-t border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Classic Six-Sided Contour Coffin</p>
                      <p className="text-xs text-slate-500">Tiered raised lid, polished chrome handles, and secure weight-tested base</p>
                    </div>
                  </div>
                </div>

                {/* Specific Offerings List */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Caskets & Coffins Craftsmanship Specifications:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                      {[
                        'Traditional six-sided shaped coffins',
                        'Rectangular caskets (full-couch & half-couch models)',
                        'Different lid designs (flat, raised, double tiered, cathedral)',
                        'Different wood finishes (Mahogany, Cherry, Walnut, Oak, White)',
                        'Custom bespoke options honoring religious & cultural traditions',
                        'Interior options (quilted velvet, ruched ivory satin, soft lace trim)',
                        'Handles and hardware (solid brass, polished chrome, swing bars)',
                        'Custom sizing (standard adult, oversized length & width options)',
                        'Discreet, respectful delivery across Northern Cape & nearby regions',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Respectful Service Box */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                        Bereavement Care & Supply
                      </h4>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        We understand that funeral arrangements require fast, dependable, and compassionate service. We maintain reserved stock for urgent dispatch.
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                        <p><strong className="text-slate-800">Dispatch:</strong> Same-day or next-day delivery in Northern Cape</p>
                        <p><strong className="text-slate-800">Bulk Supply:</strong> Direct wholesale available for undertakers</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <button
                        onClick={() => onNavigate('caskets')}
                        className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        View Caskets Dedicated Page
                      </button>
                      <a
                        href={whatsappInquireUrl('Caskets & Coffins')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Confidential WhatsApp Inquiry</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =======================================================
            CATEGORY 4 — ELECTRICAL SERVICES
           ======================================================= */}
        {(activeTab === 'all' || activeTab === 'electrical') && (
          <section id="service-sec-electrical" className="scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Category 4 · Electrical Installations & Repairs
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  ELECTRICAL SERVICES
                </h2>

                <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
                  Professional electrical installations, distribution board modernization, lighting, fault diagnosis, and maintenance. All work is performed with neat routing, proper isolation, and thorough safety checks. Services are subject to applicable regulations and requirements.
                </p>

                {/* Electrical Imagery Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 relative group">
                    <img
                      src={ASSET_IMAGES.electrical}
                      alt="Professional electrician inspecting distribution board panel with circuit breakers"
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white border-t border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Distribution Board Upgrades & Rewiring</p>
                      <p className="text-xs text-slate-500">Neat cable grouping, certified surge arrestors, and earth leakage balance</p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 relative group">
                    <img
                      src={ASSET_IMAGES.commercialElectrical}
                      alt="Architectural commercial lighting and suspended conduit installation"
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white border-t border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Architectural Lighting & Commercial Power</p>
                      <p className="text-xs text-slate-500">High-efficiency LED downlights, dimmers, and 3-phase machinery circuits</p>
                    </div>
                  </div>
                </div>

                {/* Specific Offerings List */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Electrical Services Include:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                      {[
                        'Electrical installations for new houses, extensions & offices',
                        'Electrical repairs and emergency power restorations',
                        'Lighting installation (energy-efficient LEDs, chandeliers, pendants)',
                        'Plug, socket and modern wall switch installations',
                        'Fault finding, earth leakage tripping diagnosis & cable tracing',
                        'Preventative maintenance and electrical safety audits',
                        'Electrical upgrades (DB boards, surge protection, new circuits)',
                        'Inverter, battery backup and generator manual changeover switches',
                        'Residential electrical work (stoves, geysers, pool pumps, gates)',
                        'Commercial electrical work (workshops, retail lighting, sub-boards)',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action Box */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                        Safety & Reliability
                      </h4>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        We prioritize safety, load calculations, and neat routing so your property runs safely without tripping or electrical hazards.
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                        <p><strong className="text-slate-800">Safety:</strong> Work adheres to applicable safety regulations</p>
                        <p><strong className="text-slate-800">Coverage:</strong> Johannesburg, Pretoria, East Rand</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <button
                        onClick={() => {
                          onQuoteService('Electrical Services');
                          onNavigate('quote');
                        }}
                        className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      >
                        Request Electrical Quote
                      </button>
                      <a
                        href={whatsappInquireUrl('Electrical Services')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Cross-Service Banner */}
      <section className="py-14 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Need combined fabrication and electrical installation?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              For example: motorized sliding steel gates, illuminated cabinetry, or workshop power fitouts.
            </p>
          </div>
          <button
            onClick={() => onNavigate('quote')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg shrink-0"
          >
            Request a Combined Quote
          </button>
        </div>
      </section>
    </div>
  );
};
