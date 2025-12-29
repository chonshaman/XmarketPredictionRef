import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function MarketingCard() {
  return (
    <div 
      className="flex flex-col h-full w-full overflow-hidden relative group"
      style={{ 
        background: 'radial-gradient(120% 120% at 0% 0%, var(--iris-7) 0%, var(--iris-9) 100%)',
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--black-a1)'
      }}
    >
      {/* Content Container - Aligned to bottom */}
      <div className="flex-1 p-6 md:p-6 flex flex-col justify-end relative z-10 w-full pb-12" style={{ gap: 'var(--gap--1-5rem)' }}>
        {/* Emoji at top */}
        <div className="text-5xl mb-2">🚀</div>
        
        <div className="flex flex-col" style={{ gap: 'var(--gap--0-75rem)' }}>
          <h1 style={{ 
            fontSize: 'var(--text-xl)', 
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5',
            letterSpacing: '-0.14px',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif'
          }}>
            BETA IS NOW LIVE!
            <br />
            Only 3,000 slots first come first served.
          </h1>
          <p style={{ 
            fontSize: 'var(--text-base)', 
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: '1.43',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif',
            opacity: 0.9
          }}>
            The future has a price.
            <br />
            And soon, you&apos;ll set it.
          </p>
        </div>

        <Button variant="secondary" className="w-fit">
          <span className="flex items-center gap-2">
            Get Ready
            <ChevronRight className="w-5 h-5" />
          </span>
        </Button>
      </div>

      {/* Progress Bar - Countdown Indicator */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[2px] z-20 progress-bar-container transition-opacity duration-300"
        style={{
          backgroundColor: 'var(--black-a2)',
        }}
      >
        <div 
          className="h-full progress-bar-animation"
          style={{
            backgroundColor: 'var(--muted-foreground)',
            opacity: 0.3,
            width: '0%',
          }}
        />
      </div>
    </div>
  );
}