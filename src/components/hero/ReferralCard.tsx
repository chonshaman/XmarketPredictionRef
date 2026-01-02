import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function ReferralCard() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://xmarket.app/ref/USER123ABC";

  const handleCopy = () => {
    // Fallback copy method for when Clipboard API is blocked
    const copyToClipboard = (text: string) => {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          },
          () => {
            // Fallback to execCommand if Clipboard API fails
            fallbackCopy(text);
          }
        );
      } else {
        // Use fallback method
        fallbackCopy(text);
      }
    };

    const fallbackCopy = (text: string) => {
      // Create a temporary textarea element
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-999999px';
      textarea.style.top = '-999999px';
      document.body.appendChild(textarea);
      
      // Select and copy the text
      textarea.focus();
      textarea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        // Fallback: Could not copy text silently
      }
      
      document.body.removeChild(textarea);
    };

    copyToClipboard(referralLink);
  };

  return (
    <div 
      className="flex flex-col h-full w-full overflow-hidden relative group"
      style={{ 
        background: 'radial-gradient(120% 120% at 0% 0%, var(--teal-7) 0%, var(--teal-9) 100%)',
        borderRadius: 'var(--radius-card)'
      }}
    >
      {/* Content Container - Aligned to bottom */}
      <div className="flex-1 p-6 md:p-6 flex flex-col justify-end relative z-10 w-full" style={{ gap: 'var(--gap--1-5rem)' }}>
        {/* Emoji at top */}
        <div className="text-5xl mb-2">🎁</div>
        
        <div className="flex flex-col" style={{ gap: 'var(--gap--0-75rem)' }}>
          <h1 style={{ 
            fontSize: 'var(--text-xl)', 
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5',
            letterSpacing: '-0.14px',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif'
          }}>
            Invite friends
          </h1>
          <p style={{ 
            fontSize: 'var(--text-base)', 
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: '1.43',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif',
            opacity: 0.9
          }}>
            Get $25 for every friend who joins
          </p>
        </div>

        {/* Share your referral link */}
        <div className="flex flex-col" style={{ gap: 'var(--gap--0-5rem)' }}>
          <p style={{ 
            fontSize: 'var(--text-s)', 
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif',
            opacity: 0.85
          }}>
            Share your referral link
          </p>
          
          {/* Copy Link Input */}
          <div 
            className="flex items-center justify-between overflow-hidden transition-all duration-200 hover:shadow-md"
            style={{ 
              backgroundColor: 'var(--lum-01)',
              border: '1px solid var(--black-a3)',
              borderRadius: 'var(--radius-input)',
              padding: 'var(--padding--0-75rem) var(--padding--1rem)',
            }}
          >
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-transparent outline-none select-all cursor-pointer text-xs px-2"
              style={{ 
                color: 'var(--foreground)',
                fontFamily: 'var(--font-mono, monospace)',
              }}
            />
            
            <button
              onClick={handleCopy}
              className="flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ml-2 shrink-0"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: copied ? 'var(--chart-1)' : 'var(--accent)',
                borderRadius: 'var(--radius-input)',
                border: '1px solid var(--black-a2)',
              }}
              aria-label={copied ? "Copied!" : "Copy link"}
            >
              {copied ? (
                <Check className="w-4 h-4" style={{ color: 'var(--primary)' }} />
              ) : (
                <Copy className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
              )}
            </button>
          </div>
        </div>
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