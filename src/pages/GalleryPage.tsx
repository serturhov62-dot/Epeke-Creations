import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/companyData';
import { Maximize2, Sparkles, Filter } from 'lucide-react';

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onNavigate: (page: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenLightbox,
  onNavigate,
}) => {
  const [filter, setFilter] = useState<'all' | 'steel' | 'wood' | 'caskets' | 'electrical'>('all');

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Completed Projects
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
              OUR WORK / GALLERY
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our portfolio of custom steel fabrication, bespoke wooden cabinetry, respectful caskets and coffins, and certified electrical installations. Click on any item to view high-resolution details, technical specifications, and inquiry options.
            </p>

            {/* Filtering Buttons as requested */}
            <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-slate-800/80 rounded-xl border border-slate-700 w-fit">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setFilter('steel')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  filter === 'steel'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                STEEL WORK
              </button>
              <button
                onClick={() => setFilter('wood')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  filter === 'wood'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                WOOD WORK
              </button>
              <button
                onClick={() => setFilter('caskets')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  filter === 'caskets'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                CASKETS & COFFINS
              </button>
              <button
                onClick={() => setFilter('electrical')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  filter === 'electrical'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                ELECTRICAL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 text-xs text-slate-500 font-medium">
            <span>
              Showing <strong className="text-slate-800">{filteredItems.length}</strong> verified projects
            </span>
            <span className="hidden sm:inline">Click any photograph to enlarge</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-200 flex flex-col justify-between"
              >
                {/* Image Container with hover overlay and expand icon */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge */}
                  <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-900/80 text-white rounded backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>

                  {/* Expand icon hover cue */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span className="truncate max-w-[220px]">{item.specs.split('·')[0]}</span>
                    <span className="text-blue-600 font-sans font-bold flex items-center gap-1">
                      Enlarge <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick quote trigger beneath gallery */}
          <div className="mt-16 p-8 bg-white rounded-2xl border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Have a similar piece or project in mind?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Send us reference photos or your desired dimensions, and we'll provide a prompt, detailed quote.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => onNavigate('quote')}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Request a Custom Quote
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Contact Our Workshop
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
