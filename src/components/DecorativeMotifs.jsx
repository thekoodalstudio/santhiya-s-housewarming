import React from "react";

export function CrossOrnament({ size = 36, color = "#D4AF37", className = "" }) {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size * 1.3}
        viewBox="0 0 40 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.35)]"
      >
        {/* Soft Radiance Glow */}
        <circle cx="20" cy="18" r="14" fill="url(#radiance)" opacity="0.6" />
        
        {/* Cross Vertical Beam */}
        <path
          d="M17 4C17 2.89543 17.8954 2 19 2H21C22.1046 2 23 2.89543 23 4V48C23 49.1046 22.1046 50 21 50H19C17.8954 50 17 49.1046 17 48V4Z"
          fill="url(#goldGradient)"
        />
        {/* Cross Horizontal Beam */}
        <path
          d="M7 16C5.89543 16 5 16.8954 5 18V20C5 21.1046 5.89543 22 7 22H33C34.1046 22 35 21.1046 35 20V18C35 16.8954 34.1046 16 33 16H7Z"
          fill="url(#goldGradient)"
        />

        {/* Center Diamond Jewel */}
        <polygon points="20,14 24,19 20,24 16,19" fill="#FFFDF8" opacity="0.9" />

        {/* Small Floral Sprigs at Cross Base */}
        <path
          d="M12 46C14 43 17 43 19 46C17 48 14 48 12 46Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />
        <path
          d="M28 46C26 43 23 43 21 46C23 48 26 48 28 46Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />

        <defs>
          <radialGradient id="radiance" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="goldGradient" x1="5" y1="2" x2="35" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EAD38A" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#F9E8B2" />
            <stop offset="100%" stopColor="#AA7C11" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function GoldDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C59A45] to-[#AA7C11]" />
      <div className="flex items-center gap-1.5 text-[#C59A45]">
        <span className="text-[10px]">♦</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#C59A45]">
          <path
            d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-[10px]">♦</span>
      </div>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C59A45] to-[#AA7C11]" />
    </div>
  );
}

export function FloralScrollMotif({ className = "" }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
        <path
          d="M60 12C50 6 35 4 20 8C12 10 5 16 2 22M60 12C70 6 85 4 100 8C108 10 115 16 118 22"
          stroke="#C59A45"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="60" cy="12" r="3" fill="#8B263E" stroke="#C59A45" strokeWidth="1.5" />
        <circle cx="45" cy="9" r="2" fill="#C59A45" />
        <circle cx="75" cy="9" r="2" fill="#C59A45" />
        <circle cx="28" cy="8" r="1.5" fill="#C59A45" />
        <circle cx="92" cy="8" r="1.5" fill="#C59A45" />
      </svg>
    </div>
  );
}

export function DoveMotif({ size = 28, className = "" }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C59A45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10c0-4-3-7-7-7-2 0-3.8.8-5 2.1L3 8l3 1-1 3 3.5 1.5c1 .5 2.2.5 3.2 0l3.8-2c1.5-.8 2.5-2.2 2.5-3.5z" />
        <path d="M12 5l-2 5" />
        <path d="M14 7l2 4" />
      </svg>
    </div>
  );
}

export function HouseFaithBadge({ text, className = "" }) {
  return (
    <div className={`flex flex-col items-center p-3 text-center ${className}`}>
      <div className="relative mb-2">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          {/* House outline */}
          <path
            d="M22 6L8 18V38H36V18L22 6Z"
            stroke="#C59A45"
            strokeWidth="1.5"
            fill="#FFFBF5"
          />
          {/* Cross inside house */}
          <path
            d="M22 14V30M16 20H28"
            stroke="#8B263E"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Small heart */}
          <path
            d="M22 31C22 31 19 29 19 27C19 25.8 20 25 21 26L22 27L23 26C24 25 25 25.8 25 27C25 29 22 31 22 31Z"
            fill="#C59A45"
          />
          {/* Floral laurel sprigs on sides */}
          <path
            d="M4 22C4 28 8 36 12 38"
            stroke="#C59A45"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M40 22C40 28 36 36 32 38"
            stroke="#C59A45"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {text && (
        <p className="font-tamil text-xs sm:text-sm text-[#4A0E1C] max-w-[180px] leading-relaxed font-medium">
          {text}
        </p>
      )}
    </div>
  );
}

export function BurgundyRibbonBanner({ title, subTitle, className = "" }) {
  return (
    <div className={`relative flex flex-col items-center justify-center my-4 ${className}`}>
      <div className="relative bg-gradient-to-r from-[#4A0E1C] via-[#7B1D33] to-[#4A0E1C] text-[#FFF9E6] px-6 sm:px-10 py-3 rounded-full border border-[#D4AF37] shadow-[0_6px_20px_rgba(74,14,28,0.35)] flex items-center justify-center gap-2">
        <span className="text-[#F5D77F] text-xs">♥</span>
        <h3 className="font-tamil text-lg sm:text-xl font-bold tracking-wide text-center">
          {title}
        </h3>
        <span className="text-[#F5D77F] text-xs">♥</span>
      </div>
      {subTitle && (
        <span className="text-xs uppercase tracking-widest text-[#8B263E] mt-1.5 font-semibold">
          {subTitle}
        </span>
      )}
    </div>
  );
}
