import React from 'react';
import { EpekeLogo } from '../components/EpekeLogo';
import { COMPANY_INFO } from '../data/companyData';
import { ASSET_IMAGES } from '../data/images';
import {
  ShieldCheck,
  CheckCircle,
  Hammer,
  FileCheck2,
  Users2,
  Phone,
  MessageCircle,
  Clock,
  Award,
  Layers,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Epeke Creations, I read about your company and would like to speak with you regarding a project.'
  )}`;

  const pillars = [
    {
      title: 'Quality Workmanship',
      desc: 'We do not take shortcuts. In steel fabrication, joints are fully welded and ground clean. In woodworking, boards are edge-banded properly with durable joinery. In electrical, all circuits are installed with safe connections and proper isolation. Services are subject to applicable regulations and requirements.',
    },
    {
      title: 'Custom Designs',
      desc: 'No two properties or clients are alike. We design and build around your specific spatial limitations, aesthetic preferences, and budget parameters.',
    },
    {
      title: 'Attention to Detail',
      desc: 'From the squareness of a cabinet door to the smooth operation of a security gate hinge and the quiet finish on a casket, subtle details define good craftsmanship.',
    },
    {
      title: 'Reliable Service',
      desc: 'We provide clear communication, honest lead times, and transparent pricing. When we commit to an installation date, we honor it.',
    },
    {
      title: 'Practical Solutions',
      desc: 'Form follows function. We build items that are usable, maintainable, durable, and practical for daily life in South African conditions.',
    },
    {
      title: 'Respect and Care',
      desc: 'Whether working inside your private residence or building a dignified casket for a grieving family, we conduct our work with utmost courtesy, quiet reverence, and discretion.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Consultation & Assessment',
      desc: 'We discuss your project goals, review sketches or photos, take on-site measurements, and clarify functional requirements.',
    },
    {
      step: '02',
      title: 'Design & Specification',
      desc: 'We specify appropriate steel profiles, timber grades, electrical components, or casket styles, providing a clear itemized quote.',
    },
    {
      step: '03',
      title: 'Workshop Crafting',
      desc: 'Our craftsmen cut, weld, join, assemble, and apply high-grade protective finishes in our controlled workshop environment.',
    },
    {
      step: '04',
      title: 'Delivery & Commissioning',
      desc: 'We deliver with care, perform neat on-site installation, and verify that everything functions safely and flawlessly before sign-off.',
    },
  ];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Our Identity & Commitment
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
              ABOUT EPEKE CREATIONS
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed font-sans">
              "Quality Craftsmanship. Practical Solutions. Built With Care."
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Presentation */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story prose */}
            <div className="lg:col-span-7 space-y-5 text-base text-slate-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Practical, Custom-Made Solutions for South African Homes & Businesses
              </h2>

              <p>
                Epeke Creations was founded to offer dependable, high-quality custom fabrication, woodworking, and technical services under one unified roof. We recognize that home and business owners often struggle to find skilled artisans who combine hands-on technical skill with reliable service, clear communication, and fair pricing.
              </p>

              <p>
                Our work spans residential, commercial, and individual needs. In custom steel work, we build robust furniture, security doors, structural frames, and custom architectural elements. In woodworking, we craft custom kitchen cupboards, wardrobes, bespoke desks, and interior storage. Our electrical services provide dependable installations, maintenance, and distribution board rewiring. And in our caskets and coffins division, we manufacture dignified resting vessels with compassion and quiet dignity.
              </p>

              <p>
                We do not claim to be the biggest or make exaggerated promises. Instead, we let our work speak for itself: accurate measurements, clean welds, smooth timber finishes, neat electrical routing, and honest advice when planning your project.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-xs text-slate-600">
                <span className="px-3 py-1.5 bg-slate-100 rounded-md border border-slate-200 font-medium">
                  Custom Steel & Woodwork
                </span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-md border border-slate-200 font-medium">
                  Caskets & Electrical Services
                </span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-md border border-slate-200 font-medium">
                  Keimoes, Northern Cape
                </span>
              </div>
            </div>

            {/* Visual Card with Official Logo */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <EpekeLogo variant="full" />
                </div>

                <div className="border-t border-slate-200 pt-6 text-left space-y-3 text-xs text-slate-600">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Independent South African workshop & fabrication team</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Based in Keimoes, Northern Cape with regional delivery & custom order dispatch</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Durable materials and quality workshop craftsmanship</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Direct personal communication with our artisan team</span>
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-2.5">
                  <button
                    onClick={() => onNavigate('quote')}
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                  >
                    Request a Quote
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Direct WhatsApp Conversation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Craftsmanship Photography Showcase */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Inside Our Workshop
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Where Raw Steel & Timber Become Functional Art
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our workshop is outfitted with precision steel cutting, MIG and TIG welders, specialized woodworking planers, edge-banders, and electrical testing apparatus. We prepare every joint, bevel every timber corner, and test every circuit before it leaves our floor.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700">
                  <p className="font-bold text-white text-sm">Industrial Grade</p>
                  <p className="text-slate-400 mt-0.5">Heavy-gauge mild & stainless steel</p>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700">
                  <p className="font-bold text-white text-sm">Fine Joinery</p>
                  <p className="text-slate-400 mt-0.5">Kiln-dried hardwoods & moisture-resistant boards</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src={ASSET_IMAGES.hero}
                alt="Craftsman welding steel framework at Epeke Creations workshop"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & Pillars */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Principles
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
              What Guides Every Project
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Practical values that ensure durable products and dependable service for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              How We Work
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
              From Concept to Completion
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-blue-600/30">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Action */}
      <section className="py-14 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Work with a dedicated South African fabricator
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Tell us about your requirements and we will prepare a transparent quote.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors"
            >
              Request a Quote
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-colors"
            >
              Browse Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
