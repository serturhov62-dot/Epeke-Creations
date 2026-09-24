/**
 * Epeke Creations - Official Company Website
 * Custom Steel Fabrication, Woodworking, Caskets & Electrical Services
 * Keimoes, Northern Cape, South Africa
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { CasketsPage } from './pages/CasketsPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { GalleryItem, COMPANY_INFO } from './data/companyData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('steel');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [quoteInitialService, setQuoteInitialService] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync state with browser hash for seamless multi-page URL routing
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const [route, query] = hash.split('?');
      if (route && ['home', 'about', 'services', 'gallery', 'caskets', 'quote', 'contact'].includes(route)) {
        setActivePage(route);
      } else if (!hash) {
        setActivePage('home');
      }

      if (query && query.startsWith('cat=')) {
        const cat = query.replace('cat=', '');
        setSelectedServiceCategory(cat);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string, category?: string) => {
    setActivePage(page);
    if (category) {
      setSelectedServiceCategory(category);
      window.location.hash = `#/${page}?cat=${category}`;
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
  };

  const handleQuoteItem = (item: GalleryItem) => {
    setQuoteInitialService(item.categoryLabel);
    handleNavigate('quote');
  };

  const handleQuoteService = (serviceName: string) => {
    setQuoteInitialService(serviceName);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const floatingWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappDefaultMessage
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Page Routing Body */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {activePage === 'services' && (
          <ServicesPage
            initialCategory={selectedServiceCategory}
            onNavigate={handleNavigate}
            onQuoteService={handleQuoteService}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            onOpenLightbox={handleOpenLightbox}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'caskets' && (
          <CasketsPage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'quote' && (
          <QuotePage initialService={quoteInitialService} />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* High-Resolution Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={handleCloseLightbox}
        onQuoteItem={handleQuoteItem}
      />

      {/* Floating Action Buttons: WhatsApp Quick Chat & Scroll to Top */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-white text-slate-700 hover:text-slate-950 border border-slate-200 shadow-md rounded-full transition-all duration-150 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Direct Chat Badge */}
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all duration-150 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
          aria-label="Chat with Epeke Creations on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide uppercase pr-0.5">
            WhatsApp Us
          </span>
        </a>
      </div>
    </div>
  );
}
