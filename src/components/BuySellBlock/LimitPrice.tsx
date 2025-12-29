import React from 'react';
import { motion } from 'motion/react';
import { ANIMATION_CONFIG } from './constants';

interface LimitPriceProps {
  price: number;
  onPriceChange: (price: number) => void;
  selectedOutcome: 'YES' | 'NO';
}

export const LimitPrice = React.memo<LimitPriceProps>(({ price, onPriceChange, selectedOutcome }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(price.toString());
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setInputValue(price.toString());
  }, [price]);

  const handleIncrement = () => {
    const newPrice = Math.min(99, price + 1);
    onPriceChange(newPrice);
  };

  const handleDecrement = () => {
    const newPrice = Math.max(1, price - 1);
    onPriceChange(newPrice);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty string or numbers only
    if (value === '' || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    setIsFocused(false);
    const numValue = parseInt(inputValue);
    if (!isNaN(numValue)) {
      const clampedValue = Math.max(1, Math.min(99, numValue));
      onPriceChange(clampedValue);
      setInputValue(clampedValue.toString());
    } else {
      setInputValue(price.toString());
    }
  };

  const handleInputFocus = () => {
    setIsEditing(true);
    setIsFocused(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full flex flex-col gap-[4px] items-start py-[4px] relative shrink-0">
      <motion.div 
        className="box-border content-stretch flex items-center justify-between relative shrink-0 w-full gap-[16px] pb-[4px] pt-[4px] rounded-[12px] border border-transparent cursor-text"
        onClick={handleContainerClick}
        animate={isFocused ? "focused" : "default"}
        whileHover={!isFocused ? "hover" : undefined}
        variants={{
          default: {
            paddingLeft: "4px",
            paddingRight: "4px",
            borderColor: "rgba(255,255,255,0)",
            backgroundColor: "rgba(0,0,0,0)",
            boxShadow: "0px 0px 0px rgba(0,0,0,0)"
          },
          hover: {
            paddingLeft: "12px",
            paddingRight: "12px",
            borderColor: "rgba(255,255,255,0.1)",
            backgroundColor: "rgba(0,0,0,0.1)",
            boxShadow: "0px 0px 0px rgba(0,0,0,0)"
          },
          focused: {
            paddingLeft: "16px",
            paddingRight: "16px",
            borderColor: "#6952fe",
            backgroundColor: "rgba(0,0,0,0.1)",
            boxShadow: "0 0 0 1px #6952fe, 0 0 40px rgba(105, 82, 254, 0.35)"
          }
        }}
        transition={{ duration: ANIMATION_CONFIG.duration.normal, ease: "easeOut" }}
      >
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
          <p 
            className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-nowrap text-card-foreground whitespace-pre"
            style={{ fontSize: 'var(--text-base)' }}
          >
            Limit Price
          </p>
        </div>
        
        <div className="flex gap-[6px] items-center relative shrink-0">
          {/* Minus Button */}
          <div 
            onClick={(e) => {
              e.stopPropagation();
              handleDecrement();
            }}
            className="flex items-center justify-center relative shrink-0 w-[32px] h-[32px] cursor-pointer hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="block size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d="M5.83333 14H22.1667" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            </svg>
          </div>

          {/* Price Input with Scale Effect */}
          <motion.div 
            className="flex items-center justify-center h-[40px]"
            animate={{ scale: isFocused ? 1.1 : 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration.slow, type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative h-full flex items-center justify-center w-[80px]">
              <span className="invisible font-sans font-semibold text-[24px] leading-[40px] tracking-[-0.144px] whitespace-pre tabular-nums">
                {isEditing ? inputValue : `${price}¢`}
              </span>
              
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                value={isEditing ? inputValue : `${price}¢`}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 w-full h-full bg-transparent text-center focus:outline-none font-sans font-semibold text-[24px] leading-[40px] tracking-[-0.144px] text-card-foreground tabular-nums border-none p-0 m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none flex items-center justify-center"
              />
            </div>
          </motion.div>

          {/* Plus Button */}
          <div 
            onClick={(e) => {
              e.stopPropagation();
              handleIncrement();
            }}
            className="flex items-center justify-center relative shrink-0 w-[32px] h-[32px] cursor-pointer hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="block size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d="M5.83333 14H22.1667" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              <path d="M14 5.83333V22.1667" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

LimitPrice.displayName = 'LimitPrice';