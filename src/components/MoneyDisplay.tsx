import React, { ReactNode } from 'react';

interface MoneyDisplayProps {
  amount: number;
  currency?: string;
  icon?: ReactNode;
  showCurrency?: boolean;
  className?: string;
}

/**
 * MoneyDisplay Component
 * 
 * A reusable component for displaying monetary values with consistent formatting:
 * - Hides .00 decimals (e.g., 3600 instead of 3600.00)
 * - Shows max 2 decimals for non-zero decimal values
 * - Uses tabular-nums for proper alignment
 * - Optionally displays currency or icon
 * 
 * @example
 * <MoneyDisplay amount={3600} currency="USDT" />
 * // Output: 3600 USDT
 * 
 * @example
 * <MoneyDisplay amount={3600.50} currency="USDT" />
 * // Output: 3600.50 USDT
 * 
 * @example
 * <MoneyDisplay amount={3600} icon={<DollarSign />} showCurrency={false} />
 * // Output: (icon) 3600
 */
export function MoneyDisplay({ 
  amount, 
  currency = 'USDT', 
  icon, 
  showCurrency = true,
  className = ''
}: MoneyDisplayProps) {
  // Format the number: hide .00, show max 2 decimals
  const formatAmount = (num: number): string => {
    // Check if the number has meaningful decimals
    const hasDecimals = num % 1 !== 0;
    
    if (hasDecimals) {
      // Show up to 2 decimal places, but remove trailing zeros
      return num.toFixed(2).replace(/\.?0+$/, '');
    }
    
    // No decimals, show as integer
    return num.toFixed(0);
  };

  return (
    <span 
      className={className}
      style={{ 
        fontVariantNumeric: 'tabular-nums',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--gap--0-5rem)'
      }}
    >
      {icon && (
        <span 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center',
            justifyContent: 'center',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--chart-1)'
          }}
        >
          {icon}
        </span>
      )}
      <span>{formatAmount(amount)}</span>
      {showCurrency && currency && <span>{currency}</span>}
    </span>
  );
}