import React from 'react';

export type OrderType = 'Market' | 'Limit';

interface OrderTypeSelectorProps {
  orderType: OrderType;
  onOrderTypeChange: (type: OrderType) => void;
}

export const OrderTypeSelector = React.memo<OrderTypeSelectorProps>(({ orderType, onOrderTypeChange }) => {
  const handleToggle = () => {
    const newType = orderType === 'Market' ? 'Limit' : 'Market';
    onOrderTypeChange(newType);
  };

  return (
    <div 
      onClick={handleToggle}
      className="box-border content-stretch flex gap-[7.99px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-white/5 transition-colors"
    >
      <p 
        className="font-sans leading-[20px] not-italic relative shrink-0 text-nowrap text-muted-foreground whitespace-pre"
        style={{
          fontSize: 'var(--text-s)',
          fontWeight: 'var(--font-weight-medium)'
        }}
      >
        {orderType}
      </p>
      <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
        <path d="M4 6L8 10L12 6" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
});

OrderTypeSelector.displayName = 'OrderTypeSelector';