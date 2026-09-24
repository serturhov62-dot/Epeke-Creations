import React from 'react';
import { GalleryItem, COMPANY_INFO } from '../data/companyData';
import { X, MessageCircle, ArrowRight, Check } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onQuoteItem: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onQuoteItem,
}) => {
  if (!item) return null;

  const itemWhatsAppMessage = `Hello Epeke Creations, I am interested in a quote for your work: "${item.title}" (${item.categoryLabel}).`;
  const itemWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    itemWhatsAppMessage
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="w-full md:w-3/5 bg-slate-950 flex items-center justify-center relative min-h-[300px] md:min-h-[460px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Details & Inquiries Pane */}
        <div className="w-full md:w-2/5 p-6 sm:p-7 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              <span>{item.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-normal">Custom Project</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 leading-tight">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>

            {/* Specifications */}
            <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
              <span className="text-xs font-semibold text-slate-900 block">
                Technical Specifications:
              </span>
              <p className="text-xs text-slate-600 font-mono">
                {item.specs}
              </p>
            </div>

            {/* Quality Standard */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Fabricated to custom dimensions upon order</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={itemWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onQuoteItem(item);
                onClose();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <span>Include in Quote Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
