import { ASSET_IMAGES } from './images';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'steel' | 'wood' | 'caskets' | 'electrical';
  shortDesc: string;
  detailedDesc: string;
  features: string[];
  materials?: string;
  turnaround?: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'steel' | 'wood' | 'caskets' | 'electrical';
  categoryLabel: string;
  badge?: string;
  description: string;
  specs: string;
  image: string;
  aspect: string;
  featured?: boolean;
}

// ============================================================================
// EPEKE CREATIONS - BUSINESS CONFIGURATION
// To update your contact numbers, email, or form service, edit the values below.
// ============================================================================
export const COMPANY_INFO = {
  name: 'Epeke Creations',
  shortName: 'Epeke Creations',
  tagline: 'Quality Craftsmanship. Practical Solutions. Built With Care.',
  heroDescription:
    'Epeke Creations provides custom steel work, woodworking, caskets and coffins, and electrical services. We focus on quality workmanship, practical designs and dependable service.',
  // Official Business Registration / Tax numbers (set when verified):
  regNumber: '',
  taxNumber: '',

  // Business Phone & WhatsApp (South Africa international format)
  // For WhatsApp URL, digits only: '27728419192'
  phone: '+27 72 841 9192',
  phoneDisplay: '+27 72 841 9192',
  whatsappNumber: '27728419192',

  // Business Email
  email: 'info@epekecreations.co.za',
  altEmail: 'epekecreations@gmail.com',

  // Form Submission Endpoint:
  // Preconfigured with FormSubmit (https://formsubmit.co/ajax/) to route enquiries directly
  // to your email (info@epekecreations.co.za) with full file upload attachment support.
  // If you prefer Formspree, replace this single value with your Formspree endpoint (e.g. 'https://formspree.io/f/YOUR_ID').
  formEndpoint: 'https://formsubmit.co/ajax/info@epekecreations.co.za',

  address: 'Gauteng, South Africa',
  serviceAreas: 'Gauteng (Johannesburg, Pretoria, Ekurhuleni) & nationwide dispatch for bespoke orders',
  hours: [
    { days: 'Monday – Friday', hours: '07:30 – 17:00' },
    { days: 'Saturday', hours: '08:00 – 13:00' },
    { days: 'Sunday & Public Holidays', hours: 'Emergency Casket & Electrical on-call' },
  ],
  whatsappDefaultMessage: 'Hello Epeke Creations, I would like to enquire about your services.',
};

export const SERVICES_DATA: {
  id: 'steel' | 'wood' | 'caskets' | 'electrical';
  name: string;
  shortDescription: string;
  heroImage: string;
  overview: string;
  offerings: string[];
  materialsUsed: string[];
  processSteps: string[];
}[] = [
  {
    id: 'steel',
    name: 'Steel Work & Metal Fabrication',
    shortDescription: 'Custom steel furniture, gates, frames, structures and precision fabrication.',
    heroImage: ASSET_IMAGES.steelWork,
    overview:
      'We design, cut, weld, and assemble custom metalwork tailored to your specific architectural and functional requirements. From industrial steel furniture to robust residential security doors, our steel craftsmanship delivers structural strength and aesthetic refinement.',
    offerings: [
      'Custom steel furniture (dining tables, coffee tables, consoles)',
      'Steel tables and durable industrial desks',
      'Steel chairs, barstools and patio seating',
      'Steel beds (modern canopy frames, platform beds, double bunks)',
      'Steel frames and architectural interior partitions',
      'Security doors and decorative laser-cut entry security',
      'Security gates (sliding driveway gates, pedestrian gates, swing gates)',
      'Custom steel brackets, heavy-duty mountings and supports',
      'Shelving units, industrial retail displays and storage racks',
      'MIG and TIG welding and precision metal assembly',
      'General steel fabrication and metal repair work',
      'Custom metal structures, pergolas and carports',
    ],
    materialsUsed: [
      'Square & rectangular mild steel tubing',
      'Cold-rolled & hot-rolled solid steel plate',
      'Stainless steel (Grade 304 / 316 for exterior longevity)',
      'Durable powder coating (matte black, charcoal, bronze, custom RAL colors)',
      'Anti-rust primer, galvanized finishes & polyurethane coatings',
    ],
    processSteps: [
      'Initial concept consultation & site measurement',
      'Technical drafting & material specification',
      'Precision cutting, bending, and TIG/MIG welding',
      'Surface preparation, anti-corrosion priming & powder coating',
      'Careful on-site delivery and professional installation',
    ],
  },
  {
    id: 'wood',
    name: 'Custom Woodwork & Carpentry',
    shortDescription: 'Custom cabinets, furniture, cupboards and woodworking projects built with fine joinery.',
    heroImage: ASSET_IMAGES.woodWork,
    overview:
      'Our woodworking division crafts custom cabinetry, tailored storage, and bespoke furniture built to last. We blend traditional woodworking joinery with contemporary finishes, maximizing storage efficiency and bringing natural warmth to residential and commercial interiors.',
    offerings: [
      'Custom cabinets and built-in storage solutions',
      'Kitchen cabinets and full kitchen cabinetry renovations',
      'Wardrobes, walk-in closets and bedroom cupboards',
      'Bathroom vanity cupboards and linen storage',
      'Floating shelving and architectural wall panelling',
      'Custom TV units, entertainment consoles and media walls',
      'Solid wood dining tables, boardroom tables and conference desks',
      'Study desks, work-from-home setups and executive workstations',
      'Bespoke freestanding furniture pieces',
      'Wood-and-steel industrial furniture combinations',
      'General carpentry, door hanging and architectural timber repairs',
    ],
    materialsUsed: [
      'Solid hardwoods (African Mahogany, Kiaat, Solid Oak, Teak, Pine)',
      'Premium engineered boards (Moisture-resistant MDF, high-grade Birch plywood)',
      'Textured melamine & super-matte soft-touch finishes',
      'Heavy-duty concealed European soft-close hinges and drawer runners',
      'Natural food-safe oil, polyurethane varnishes and eco-friendly stains',
    ],
    processSteps: [
      'Space assessment & spatial workflow planning',
      '3D layout review, timber selection & hardware choice',
      'Workshop manufacturing with precision joinery and edge-banding',
      'Multi-coat protective finishing and hand-sanding',
      'Clean, dust-controlled on-site installation',
    ],
  },
  {
    id: 'caskets',
    name: 'Caskets & Coffins',
    shortDescription: 'Quality caskets and coffins with respectful, carefully crafted designs and dignified finishes.',
    heroImage: ASSET_IMAGES.caskets,
    overview:
      'We manufacture and supply high-quality, respectful caskets and coffins crafted with dignity, reverence, and care. Serving funeral directors, undertakers, bereavement societies, and grieving families directly, we deliver prompt, compassionate service and uncompromised structural integrity at fair, transparent pricing.',
    offerings: [
      'Handcrafted traditional six-sided coffins',
      'Full-couch and half-couch rectangular caskets',
      'Different lid designs (flat lid, single raised tiered lid, dome cathedral lid)',
      'Multiple timber finishes (rich mahogany, dark cherry, warm walnut, golden oak, pure white)',
      'Custom bespoke options to honor personal and family wishes',
      'Interior lining options (plush ruched ivory satin, quilted velvet, white lace trim)',
      'Handles and hardware (solid brass, polished chrome, swing bars, antique bronze)',
      'Custom sizing (standard, extra-width, extra-length / oversize requirements)',
      'Direct, discreet delivery to funeral homes or residential addresses',
    ],
    materialsUsed: [
      'Solid plantation timber and high-density composite timber cores',
      'Natural wood veneers with hand-rubbed satin or mirror-gloss lacquers',
      'Reinforced load-tested base boards and secure corner fastenings',
      'Breathable, premium ruched satin and tailored matching pillow sets',
      'Heavy-duty cast metal swing-bar handles with secure weight-bearing bolts',
    ],
    processSteps: [
      'Compassionate, quiet consultation on model and finish requirements',
      'Careful hand-crafting or prompt dispatch from our prepared reserves',
      'Rigorous structural and interior upholstery quality inspection',
      'Protective padded wrapping and secure transport packaging',
      'Discreet, on-time delivery across Gauteng and surrounding regions',
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical Services & Installations',
    shortDescription: 'Professional electrical installation, maintenance, repairs and certified compliance.',
    heroImage: ASSET_IMAGES.electrical,
    overview:
      'Our electrical division delivers safe, reliable, and neat electrical solutions for homes, workshops, and commercial offices. All electrical installations and repairs are carried out with careful planning, neat routing, and proper safety precautions. Services are subject to applicable regulations and requirements.',
    offerings: [
      'Complete electrical installations for new builds and renovations',
      'Electrical repairs and circuit restorations',
      'Lighting installation (energy-efficient LED downlights, floodlights, pendants)',
      'Plug, socket and modern wall switch installations (including USB-C outlets)',
      'Fault finding, earth leakage tripping diagnosis and circuit tracing',
      'Electrical maintenance and preventative system inspections',
      'Electrical upgrades (distribution board rewiring, surge arrestors, breaker upgrades)',
      'Inverter, battery backup and generator manual changeover switch installations',
      'Residential electrical work (kitchen appliances, geyser timers, pool pumps)',
      'Commercial electrical work (workshop power points, 3-phase machinery wiring)',
    ],
    materialsUsed: [
      'High-grade copper cabling (flat twin & earth, surfix, armored cable)',
      'Tier-1 circuit breakers, isolators & earth leakage relays (Schneider, CBI, Hager)',
      'High-grade fire-retardant distribution enclosures',
      'Long-life energy-efficient LED modules with high CRI color rendering',
      'Heavy-duty industrial IP65 weatherproof exterior switches & junction boxes',
    ],
    processSteps: [
      'Thorough on-site electrical inspection & load calculations',
      'Clear, itemized quotation with transparent parts & labor',
      'Clean, neatly routed cable installation and secure connections',
      'System testing (insulation resistance, loop impedance, earth continuity)',
      'Client demonstration and operational handover',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Custom Minimalist Steel Dining Table & Benches',
    category: 'steel',
    categoryLabel: 'Steel Work',
    badge: 'Custom Design Example',
    description: 'Bespoke 8-seater dining table with heavy-gauge rectangular hollow steel frame, matte black industrial powder-coat, and solid Kiaat hardwood timber top.',
    specs: '2400mm × 1000mm × 760mm · 50x50mm Steel Tube · Matte Charcoal Finish',
    image: ASSET_IMAGES.steelWork,
    aspect: '4:3',
    featured: true,
  },
  {
    id: 'gal-2',
    title: 'Contemporary Oak Kitchen Cupboard Installation',
    category: 'wood',
    categoryLabel: 'Wood Work',
    badge: 'Custom Design Example',
    description: 'Floor-to-ceiling custom kitchen cabinetry with natural warm oak timber grain, integrated handle profiles, and recessed under-cabinet warm LED lighting.',
    specs: 'Custom L-Shape Configuration · Soft-Close European Hardware · Natural Satin Seal',
    image: ASSET_IMAGES.woodWork,
    aspect: '4:3',
    featured: true,
  },
  {
    id: 'gal-3',
    title: 'Handcrafted Solid Mahogany Heritage Casket',
    category: 'caskets',
    categoryLabel: 'Caskets & Coffins',
    badge: 'Custom Design Example',
    description: 'Dignified handcrafted solid mahogany casket with deep satin luster, polished solid brass swing-bar handles, and ruched ivory satin pleated interior.',
    specs: 'Standard Adult 2050mm × 650mm · Solid Timber · Ivory Satin Lining',
    image: ASSET_IMAGES.caskets,
    aspect: '4:3',
    featured: true,
  },
  {
    id: 'gal-4',
    title: 'Residential & Commercial DB Board Modernization',
    category: 'electrical',
    categoryLabel: 'Electrical',
    badge: 'Custom Design Example',
    description: 'Clean distribution board installation with certified surge protection, dual earth leakage separation, and neat color-coded circuit routing for load safety.',
    specs: '36-Way Flush Board · Surge Protection · Circuit Distribution',
    image: ASSET_IMAGES.electrical,
    aspect: '4:3',
    featured: true,
  },
  {
    id: 'gal-5',
    title: 'Bespoke Steel Bed Frame & Architectural Security Door',
    category: 'steel',
    categoryLabel: 'Steel Work',
    badge: 'Custom Design Example',
    description: 'Custom welded steel platform bed frame with rigid support slats, complemented by an ornamental steel security entry door featuring modern geometric bars.',
    specs: 'Queen-Size 1520mm × 1880mm · 40mm Box Section · Tamper-Resistant Hinges',
    image: ASSET_IMAGES.steelBedGate,
    aspect: '4:3',
    featured: true,
  },
  {
    id: 'gal-6',
    title: 'Modern Two-Tone Kitchen Storage & Floating Island',
    category: 'wood',
    categoryLabel: 'Wood Work',
    badge: 'Custom Design Example',
    description: 'Custom kitchen with matte graphite cabinetry, contrasting natural timber accents, floating display shelves, and heavy-duty deep pot drawers.',
    specs: 'Full Kitchen Installation · Blum Soft-Close Runners · Quartz Worktop Integration',
    image: ASSET_IMAGES.kitchenCupboards,
    aspect: '4:3',
    featured: true,
  },
  {
    id: 'gal-7',
    title: 'Classic Six-Sided Cherrywood Traditional Coffin',
    category: 'caskets',
    categoryLabel: 'Caskets & Coffins',
    badge: 'Custom Design Example',
    description: 'Traditional contour six-sided coffin with warm cherry stain, tiered raised lid, polished chrome handles, and soft white padded interior lining.',
    specs: '1980mm Length · High-Tensile Base Rating · Polished Chrome Trim',
    image: ASSET_IMAGES.traditionalCoffin,
    aspect: '4:3',
    featured: true,
  },
  {
    id: 'gal-8',
    title: 'Architectural Suspended Lighting & Commercial Wiring',
    category: 'electrical',
    categoryLabel: 'Electrical',
    badge: 'Custom Design Example',
    description: 'High-ceiling industrial office lighting fitout with suspended matte black track lighting, conduit trunking, and zoned digital dimmer circuits.',
    specs: 'Commercial Low-Glare LED · Precision Surface Conduit · Zoned Switching',
    image: ASSET_IMAGES.commercialElectrical,
    aspect: '4:3',
    featured: true,
  },
  {
    id: 'gal-9',
    title: 'Artisan Workshop Steel Fabrication & TIG Welding',
    category: 'steel',
    categoryLabel: 'Steel Work',
    badge: 'Custom Design Example',
    description: 'Precision welding and structural fabrication of custom architectural steel frameworks for residential gates and commercial partitions.',
    specs: 'Structural Mild Steel · Argon Purged TIG Welds · Anti-Rust Etch Primer',
    image: ASSET_IMAGES.hero,
    aspect: '16:9',
    featured: false,
  },
];

// Testimonials: In accordance with professional integrity requirements,
// no fabricated reviews or fake customer identities are included.
export const TESTIMONIALS: { quote: string; author: string; role: string; location: string; service: string; }[] = [];
