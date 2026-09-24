import React from 'react';

interface EpekeLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon' | 'badge';
  inverted?: boolean;
}

export const EpekeLogo: React.FC<EpekeLogoProps> = ({
  className = '',
  variant = 'compact',
  inverted = false,
}) => {
  // SVG Graphic of the dynamic orbital globe emblem from the official logo
  const Emblem = (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Epeke Creations Emblem"
    >
      <defs>
        <linearGradient id="epekeBlueGrad" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="40%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="epekeOrbitGrad" x1="10" y1="60" x2="150" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>

      {/* Outer base crescent arc (bottom left) */}
      <path
        d="M 58 138 C 98 138 134 116 142 84 C 130 114 94 132 58 132 C 42 132 28 126 18 116 C 26 130 40 138 58 138 Z"
        fill="url(#epekeBlueGrad)"
      />

      {/* Lower Orbital Arm (with prominent node) */}
      <path
        d="M 18 88 C 22 110 52 122 92 120 C 104 119 110 114 110 108 C 110 102 104 98 94 99 C 60 101 34 91 30 76 C 28 69 32 63 38 58 C 30 66 22 76 18 88 Z"
        fill="url(#epekeOrbitGrad)"
      />
      {/* Node on lower track */}
      <circle cx="106" cy="106" r="10" fill="url(#epekeBlueGrad)" />
      <circle cx="106" cy="106" r="5" fill="#FFFFFF" />

      {/* Middle Orbital Arm */}
      <path
        d="M 28 54 C 36 34 68 26 100 32 C 106 33 112 30 112 25 C 112 20 106 17 96 15 C 60 10 24 22 14 46 C 20 48 24 51 28 54 Z"
        fill="url(#epekeBlueGrad)"
      />
      {/* Middle Track sweeping through */}
      <path
        d="M 24 68 C 32 88 64 96 102 92 C 110 91 114 86 114 80 C 114 74 108 70 98 71 C 66 74 40 68 34 56 C 28 59 25 64 24 68 Z"
        fill="url(#epekeOrbitGrad)"
      />
      {/* Node on middle track */}
      <circle cx="102" cy="78" r="9" fill="url(#epekeBlueGrad)" />
      <circle cx="102" cy="78" r="4.5" fill="#FFFFFF" />

      {/* Upper Orbital Arm & Node */}
      <path
        d="M 46 32 C 54 20 74 16 98 22 C 104 23 108 20 108 16 C 108 12 102 9 92 8 C 66 5 44 12 34 24 C 38 26 42 29 46 32 Z"
        fill="url(#epekeBlueGrad)"
      />
      {/* Upper sweeping line with top node */}
      <path
        d="M 44 42 C 54 58 76 62 98 58 C 102 57 106 54 106 50 C 106 46 102 43 96 44 C 78 47 60 44 54 36 C 49 38 46 40 44 42 Z"
        fill="url(#epekeOrbitGrad)"
      />
      <circle cx="94" cy="50" r="8" fill="url(#epekeBlueGrad)" />
      <circle cx="94" cy="50" r="4" fill="#FFFFFF" />

      {/* Left-side orbital loop back curve */}
      <path
        d="M 24 46 C 16 62 14 84 28 106 C 22 96 20 80 26 66 C 30 58 36 52 42 46 C 35 45 29 45 24 46 Z"
        fill="#2563EB"
      />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <div className="w-10 h-10 shrink-0">
          {Emblem}
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-3 p-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200/80 ${className}`}>
        <div className="w-12 h-12 shrink-0">
          {Emblem}
        </div>
        <div className="flex flex-col">
          <span className="font-['Caveat'] text-2xl font-bold leading-none tracking-tight text-slate-900">
            Epeke Creations
          </span>
          <span className="text-[10px] text-slate-500 tracking-wider mt-0.5 uppercase font-medium">
            Quality Craftsmanship
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="w-24 h-24 mb-2 drop-shadow-sm">
          {Emblem}
        </div>
        <div className="flex flex-col items-center">
          <h2
            className={`font-['Caveat'] text-3xl md:text-4xl font-bold tracking-tight ${
              inverted ? 'text-white' : 'text-slate-900'
            }`}
          >
            Epeke Creations
          </h2>
          <div className="mt-1 flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-slate-500 font-semibold">
            <span>Steel Work</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Wood Work</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Caskets</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Electrical</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Compact Navbar variant
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 transition-transform duration-200 hover:scale-105">
        {Emblem}
      </div>
      <div className="flex flex-col">
        <span
          className={`font-['Caveat'] text-2xl sm:text-[26px] font-bold leading-tight ${
            inverted ? 'text-white' : 'text-slate-900'
          }`}
        >
          Epeke Creations
        </span>
        <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium -mt-1 hidden sm:inline-block">
          Craftsmanship & Solutions
        </span>
      </div>
    </div>
  );
};
