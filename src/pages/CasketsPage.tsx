import React from 'react';
import { ASSET_IMAGES } from '../data/images';
import { COMPANY_INFO } from '../data/companyData';
import {
  Heart,
  CheckCircle,
  Phone,
  MessageCircle,
  Truck,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

interface CasketsPageProps {
  onNavigate: (page: string) => void;
  onOpenLightbox: (item: any) => void;
}

export const CasketsPage: React.FC<CasketsPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const bereavementWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Epeke Creations, I am inquiring with respect to your caskets and coffins availability and pricing.'
  )}`;

  const models = [
    {
      title: 'Solid Mahogany Heritage Casket',
      type: 'Full-Couch / Half-Couch Casket',
      finish: 'Deep Satin Mahogany',
      interior: 'Ruched Ivory Satin with Tufted Headrest',
      handles: 'Cast Polished Brass Swing-Bars',
      description:
        'Crafted from premium solid timber with deep, hand-rubbed satin mahogany finish. Features reinforced base construction and elegant brass appointments for dignified ceremony.',
      image: ASSET_IMAGES.caskets,
    },
    {
      title: 'Traditional Six-Sided Contour Coffin',
      type: 'Contoured Six-Sided Coffin',
      finish: 'Rich Dark Cherrywood Gloss',
      interior: 'Padded White Satin with Lace Accent',
      handles: 'Polished Chrome Swing-Bars',
      description:
        'A timeless traditional shape with a raised tiered lid, smooth mirror-gloss cherry finish, and robust weight-rated metal swing handles. Suitable for both burial and cremation.',
      image: ASSET_IMAGES.traditionalCoffin,
    },
    {
      title: 'Warm Walnut Cathedral Tiered Casket',
      type: 'Raised Cathedral Lid Casket',
      finish: 'Warm Natural Walnut Veneer',
      interior: 'Pleated Champagne Velvet Interior',
      handles: 'Antique Bronze Hardware',
      description:
        'Featuring an arched cathedral lid design, rich walnut grain, and antique bronze corner reinforcements with swing-bar handles.',
      image: ASSET_IMAGES.caskets,
    },
  ];

  const finishOptions = [
    { name: 'Rich Mahogany', desc: 'Deep warm reddish-brown with hand-rubbed satin or high-gloss sheen' },
    { name: 'Warm Walnut', desc: 'Rich chocolate tones highlighting natural straight wood grain' },
    { name: 'Classic Dark Cherry', desc: 'Traditional polished luster with subtle crimson warmth' },
    { name: 'Golden Oak', desc: 'Natural light amber finish accentuating organic timber texture' },
    { name: 'Pure Dignified White', desc: 'Flawless satin or gloss white with silver or gold fittings' },
  ];

  const interiorOptions = [
    { name: 'Ruched Ivory Satin', desc: 'Delicately gathered soft satin lining with matching padded pillow' },
    { name: 'Pleated Velvet', desc: 'Plush, comfortable champagne or white velvet with quilted padding' },
    { name: 'Crepe & Lace Accents', desc: 'Subtle dignified lace edging tailored to family tradition' },
  ];

  return (
    <div className="w-full">
      {/* Respectful Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Respectful Craftsmanship
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
              CASKETS & COFFINS
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We design and craft quality caskets and coffins with reverence, quiet dignity, and meticulous care. Serving funeral directors, undertakers, bereavement societies, and families directly with dependable, compassionate support.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={bereavementWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confidential WhatsApp Inquiry</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Urgent Telephone: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Craftsmanship Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Quiet Dignity & Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Crafted to Honor Loved Ones with Respect
              </h2>
              <p>
                At Epeke Creations, we recognize that selecting a casket or coffin takes place during moments of deep grief and emotional strain. Our funeral manufacturing workshop is grounded in quiet respect, integrity, and personal accountability.
              </p>
              <p>
                Every piece is constructed with reinforced load-bearing bases, tight-fitting lids, secure corner fastenings, and heavy-duty swing-bar handles that have undergone rigorous weight testing. We use quality timbers and veneers, applying multiple coats of protective lacquer to achieve a refined, peaceful luster.
              </p>

              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <Truck className="w-4 h-4 text-blue-600 mb-1.5" />
                  <strong className="block text-slate-900">Discreet Delivery</strong>
                  <span className="text-slate-500">Prompt transport to funeral parlors across Gauteng</span>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <Shield className="w-4 h-4 text-blue-600 mb-1.5" />
                  <strong className="block text-slate-900">Structural Integrity</strong>
                  <span className="text-slate-500">Reinforced base rated for safe pallbearer transit</span>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <Layers className="w-4 h-4 text-blue-600 mb-1.5" />
                  <strong className="block text-slate-900">Custom Sizing</strong>
                  <span className="text-slate-500">Standard, extra-width and extra-length options</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={ASSET_IMAGES.caskets}
                alt="High quality mahogany casket craftsmanship"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Models Showcase */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
              Our Products
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
              Carefully Crafted Casket & Coffin Designs
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Each vessel is built to high standards of durability, dignity, and aesthetic grace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="h-60 overflow-hidden bg-slate-950">
                    <img
                      src={m.image}
                      alt={m.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                      {m.type}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {m.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-800">Finish:</span>
                        <span>{m.finish}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-800">Interior:</span>
                        <span>{m.interior}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-800">Hardware:</span>
                        <span>{m.handles}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Epeke Creations, I am inquiring regarding the "${m.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inquire Regarding Availability</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes & Custom Options */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Finishes */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Craftsmanship Details
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Timber Finishes & Exterior Lustres
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We offer multiple natural wood finishes prepared with multi-stage hand sanding, deep penetrating stains, and protective topcoats.
              </p>

              <div className="space-y-3 pt-2">
                {finishOptions.map((f, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-sm text-slate-900">{f.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interior & Hardware */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Linings & Appointments
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Upholstery, Linings & Hardware
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Interior linings are tailored with premium ruched satins and soft velvets, padded for dignified presentation during viewings.
              </p>

              <div className="space-y-3 pt-2">
                {interiorOptions.map((opt, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-sm text-slate-900">{opt.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{opt.desc}</p>
                  </div>
                ))}

                <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-200 mt-4 text-xs text-blue-950 space-y-1">
                  <strong className="block font-bold">Custom Sizing Options:</strong>
                  <p>Standard Adult (approx. 2000mm × 600mm), Extra-Wide (650mm – 750mm), and Extended Length models manufactured on request.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Undertakers & Funeral Directors Supply Notice */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Wholesale & Funeral Director Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Direct Supply for Funeral Undertakers & Burial Societies
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We partner with registered funeral parlors, undertakers, and burial societies across South Africa. We offer regular dispatch, bulk wholesale pricing, and guaranteed availability of key casket lines.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              Request Supply Price List
            </button>
            <a
              href={bereavementWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Parlor WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
