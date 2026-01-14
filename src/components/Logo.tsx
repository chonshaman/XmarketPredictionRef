import { memo } from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  responsive?: boolean;
}

/**
 * Logo component for Xmarket.
 * Uses the official SVG symbol from jsDelivr CDN to ensure consistency across environments.
 */
export const Logo = memo(function Logo({ 
  className = '', 
  width, 
  height, 
  responsive = true 
}: LogoProps) {
  // Default responsive sizing for mobile, tablet, desktop
  // Matching the design system's logo proportions
  const responsiveClass = responsive 
    ? 'w-[120px] h-[30px] sm:w-[150px] sm:h-[36px] md:w-[190px] md:h-[48px]' 
    : '';
  
  // Use explicit dimensions if provided and not responsive
  const logoStyle = !responsive && width && height 
    ? { width: `${width}px`, height: `${height}px` } 
    : {};

  const logoUrl = "https://cdn.jsdelivr.net/gh/chonshaman/riv_store@a3795b4227aaf6cb0c8335caa8c4dfec672835c2/haluuimg/public/xmarket_symbol.svg";

  return (
    <div 
      className={`flex items-center gap-3 ${className}`} 
      style={logoStyle}
    >
      {/* Icon portion from CDN */}
      <img 
        src={logoUrl} 
        alt="Xmarket Icon" 
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
        onError={(e) => {
          // Fallback if CDN fails
          console.error("Logo failed to load from CDN");
        }}
      />
      
      {/* Text portion - Stylized using Design System Typography */}
      <span 
        className="hidden xs:block"
        style={{ 
          fontFamily: 'Kanit, sans-serif',
          fontSize: 'var(--text-2xl)',
          fontWeight: 'var(--font-weight-extra-bold)',
          color: 'var(--foreground)',
          letterSpacing: '-0.02em',
          lineHeight: 1
        }}
      >
        XMARKET
      </span>
    </div>
  );
});
