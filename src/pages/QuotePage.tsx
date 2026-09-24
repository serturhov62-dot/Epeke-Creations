import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  MessageCircle,
  Upload,
  CheckCircle,
  Clock,
  Shield,
  FileText,
  AlertCircle,
  X,
  Send,
  Phone,
} from 'lucide-react';

interface QuotePageProps {
  initialService?: string;
}

export const QuotePage: React.FC<QuotePageProps> = ({ initialService = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState(initialService || 'Steel Work');
  const [projectDescription, setProjectDescription] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState<'WhatsApp' | 'Phone' | 'Email'>('WhatsApp');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string; preview?: string }[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialService) {
      setServiceRequired(initialService);
    }
  }, [initialService]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => {
        const sizeKb = (file.size / 1024).toFixed(0);
        const isImage = file.type.startsWith('image/');
        const previewUrl = isImage ? URL.createObjectURL(file) : undefined;
        return {
          name: file.name,
          size: `${sizeKb} KB`,
          preview: previewUrl,
        };
      });
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please provide your full name.');
      return;
    }
    if (!phoneNumber.trim() && !email.trim()) {
      setErrorMsg('Please provide at least a phone number or email address.');
      return;
    }
    if (!projectDescription.trim()) {
      setErrorMsg('Please briefly describe your project.');
      return;
    }

    setErrorMsg('');
    const randomCode = `EPK-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(randomCode);

    // Save to local quote history for client review
    const quoteRecord = {
      code: randomCode,
      date: new Date().toLocaleDateString('en-ZA'),
      name: fullName,
      phone: phoneNumber,
      email: email,
      service: serviceRequired,
      description: projectDescription,
      contactMethod: preferredContactMethod,
      additionalInfo,
      filesCount: uploadedFiles.length,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('epeke_quotes') || '[]');
      existing.unshift(quoteRecord);
      localStorage.setItem('epeke_quotes', JSON.stringify(existing.slice(0, 10)));
    } catch {
      // safe fallback
    }

    setSubmitted(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Pre-filled WhatsApp direct link as requested
  const directWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappDefaultMessage
  )}`;

  // Tailored WhatsApp message containing this specific quote's details
  const quoteWhatsAppMessage = `Hello Epeke Creations, I have submitted a Quote Request (Ref: ${referenceCode || 'NEW'}).\n\n` +
    `Name: ${fullName}\n` +
    `Phone: ${phoneNumber}\n` +
    `Email: ${email}\n` +
    `Service: ${serviceRequired}\n` +
    `Details: ${projectDescription}\n` +
    `Preferred Contact: ${preferredContactMethod}\n` +
    (additionalInfo ? `Additional Info: ${additionalInfo}\n` : '') +
    (uploadedFiles.length > 0 ? `(I have ${uploadedFiles.length} photos/drawings to share)\n` : '');

  const quoteWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    quoteWhatsAppMessage
  )}`;

  const quoteMailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `Quote Request: ${serviceRequired} (Ref: ${referenceCode || 'NEW'})`
  )}&body=${encodeURIComponent(quoteWhatsAppMessage)}`;

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Clear Pricing & Prompt Estimates
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
              REQUEST A QUOTE
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Tell us about your project dimensions, desired materials, or service requirements. We provide itemized, transparent quotations for residential, commercial, and custom manufacturing orders.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Column */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded">
                      Reference: {referenceCode}
                    </span>
                    <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                      Quote Request Received!
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Thank you, <strong className="text-slate-800">{fullName}</strong>. Our workshop team has logged your enquiry for <strong className="text-slate-800">{serviceRequired}</strong>. We will review your specifications and contact you via your preferred method ({preferredContactMethod}).
                    </p>
                  </div>

                  {/* WhatsApp Quick Dispatch Button */}
                  <div className="p-5 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-3">
                    <h4 className="font-bold text-sm text-emerald-950 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      Speed up your quote on WhatsApp?
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      You can instantly send this exact quote summary and attach your project photos directly to our workshop WhatsApp.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <a
                        href={quoteWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Details to WhatsApp</span>
                      </a>

                      <a
                        href={quoteMailtoUrl}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-sm transition-colors"
                      >
                        <span>Send via Email Client</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setProjectDescription('');
                        setUploadedFiles([]);
                      }}
                      className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="px-4 py-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call our office: {COMPANY_INFO.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Project Specification Form
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Complete the fields below to receive an accurate, written quotation.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-3 text-xs text-rose-700">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sipho Ndlovu"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 072 841 9192"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.co.za"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      />
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Required <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      >
                        <option value="Steel Work">Steel Work</option>
                        <option value="Wood Work">Wood Work</option>
                        <option value="Caskets & Coffins">Caskets & Coffins</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Description <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe what you would like built or repaired (e.g., custom 8-seater steel and oak dining table, 2.4m x 1m, matte black powder-coated legs, or distribution board replacement)..."
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['WhatsApp', 'Phone', 'Email'] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setPreferredContactMethod(method)}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-colors ${
                            preferredContactMethod === method
                              ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm'
                              : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Upload Project Images */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Upload Project Images / Reference Drawings (Optional)
                    </label>

                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/40 rounded-xl p-6 text-center cursor-pointer transition-colors"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*,.pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        Click to select images or sketches from your device
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        PNG, JPG, PDF up to 10MB per file
                      </p>
                    </div>

                    {/* Attached files preview */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {uploadedFiles.map((file, idx) => (
                          <div
                            key={idx}
                            className="relative group p-2 bg-slate-100 rounded-lg border border-slate-200 flex flex-col items-center text-center"
                          >
                            {file.preview ? (
                              <img
                                src={file.preview}
                                alt={file.name}
                                className="w-full h-16 object-cover rounded mb-1.5"
                              />
                            ) : (
                              <FileText className="w-8 h-8 text-blue-600 mb-1.5" />
                            )}
                            <span className="text-[11px] font-medium text-slate-800 truncate w-full">
                              {file.name}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">{file.size}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              className="absolute -top-1.5 -right-1.5 p-1 bg-slate-800 text-white rounded-full hover:bg-rose-600 transition-colors"
                              aria-label="Remove file"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Additional Information
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific delivery location (e.g. Pretoria East, Sandton), timeline urgency, or access considerations..."
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-md hover:shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT QUOTE REQUEST</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar / WhatsApp Preference Notice */}
            <div className="lg:col-span-4 space-y-6">
              {/* WhatsApp Callout as specifically requested */}
              <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Contact us directly. Send photos, voice notes, and job locations immediately to our workshop manager.
                  </p>
                </div>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

              {/* Guarantees Box */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3.5 text-xs text-slate-600">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                  Our Quotation Guarantee
                </h4>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Itemized breakdown for materials and labor</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Turnaround estimate within 24 hours on standard jobs</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>No obligation consultation or hidden fee markups</span>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400">
                  Direct Line
                </span>
                <p className="font-bold text-lg">Speak to our craftsman</p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
