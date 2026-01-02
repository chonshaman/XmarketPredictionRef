import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { RiveAnimation } from "../ui/rive-animation";
import { RiveErrorBoundary } from "../ui/RiveErrorBoundary";

export function MarketingCard() {
  const [riveError, setRiveError] = useState(false);

  return (
    <div 
      className="flex flex-col h-full w-full overflow-hidden relative group"
      style={{ 
        background: 'radial-gradient(5% 80% at 100% 100%, #9fd1f980 0%, #268ef747 26%, #155ebf21 48%, #155ebf0d 72%, #155ebf00 92%), radial-gradient(5% 80% at 0% 100%, #a8dafd80 0%, #268ef757 26%, #155ebf21 48%, #155ebf0d 72%, #155ebf00 92%), linear-gradient(180deg, #061b3700 70%, #001a3459 50%, #011f3b70 80%, #0536757d 90%, #0a4eb5a8 93.5%, #196fe1c9 96%, #2380ecbf 96%, #67a6f7c7 97.6%, #76b4ffe0 98.6%, #aadcfee0 100%), radial-gradient(80% 64% at 96% 4%, #3a5fa3 0%, #37599e 4%, #2c438a 24%, #131f3c 72%, #0b1322 100%)',
        borderRadius: 'var(--radius-card)'
      }}
    >
      {/* Content Container - Aligned to bottom */}
      <div className="flex-1 p-6 md:p-6 flex flex-col justify-end relative z-10 w-full pb-12">
        {/* Rive Animation with Error Boundary */}
        <div className="w-[180px] h-[180px] flex items-center justify-center -ml-4 relative -mt-4">
          {!riveError ? (
            <RiveErrorBoundary 
              onError={() => setRiveError(true)}
              fallback={
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                  <div className="text-[100px] leading-none relative z-10 animate-bounce">🎁</div>
                </div>
              }
            >
              <RiveAnimation 
                src="https://cdn.jsdelivr.net/gh/chonshaman/XmarketPredictionRef@d8b17ae1de35fc1d49925e878bf57cc678ec02a5/src/components/hero/giftbox.riv" 
                className="min-h-0"
                onError={() => {
                  console.warn("Rive load failed");
                  setRiveError(true);
                }}
              />
            </RiveErrorBoundary>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
              <div className="text-[100px] leading-none relative z-10 animate-bounce">🎁</div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col" style={{ gap: 'var(--gap--0-25rem)', marginBottom: 'var(--gap--1rem)' }}>
          <h1 style={{ 
            fontSize: 'var(--text-xl)', 
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5',
            letterSpacing: '-0.14px',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif'
          }}>
            BETA IS NOW LIVE!
          </h1>
          <p style={{ 
            fontSize: 'var(--text-s)', 
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: '1.43',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif',
            opacity: 0.8
          }}>
            Only 3,000 slots first come first served. The future has a price. And soon, you&apos;ll set it.
          </p>
        </div>

        <Button variant="outline" className="w-fit">
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