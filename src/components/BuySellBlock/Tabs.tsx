import React, { useCallback } from 'react';
import { motion } from 'motion/react';
import { Tab } from './types';
import { OrderTypeSelector, OrderType } from './OrderTypeSelector';

interface TabsProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  orderType: OrderType;
  onOrderTypeChange: (type: OrderType) => void;
}

const TabButton = React.memo<{ 
  tab: Tab; 
  isActive: boolean; 
  onClick: () => void;
}>(({ tab, isActive, onClick }) => (
  <motion.div 
    onClick={onClick}
    className={`box-border content-stretch flex gap-[16px] items-center justify-center px-[20px] py-[11px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[96px] cursor-pointer group ${
      isActive ? 'z-10' : 'z-0'
    }`}
    style={{
      background: isActive ? 'var(--card-normal, linear-gradient(180deg, var(--lum-02, #FFFEFC) 0%, var(--lum-02, #FFFEFC) 106.49%))' : 'transparent',
      borderTop: isActive ? '1px solid var(--black-a1)' : 'none',
      borderLeft: isActive ? '1px solid var(--black-a1)' : 'none',
      borderRight: isActive ? '1px solid var(--black-a1)' : 'none',
      borderBottom: 'none'
    }}
    animate={{
      paddingBottom: isActive ? "11px" : "11px",
      marginBottom: isActive ? "0px" : "0px"
    }}
    whileHover={!isActive ? { 
      paddingBottom: "13px", 
      marginBottom: "-2px",
      backgroundColor: 'var(--side-bar-outline)'
    } : {}}
    transition={{ duration: 0.2, ease: "easeOut" }}
  >
    <motion.div
      className="absolute bottom-[-2px] left-0 right-0 h-[4px] z-20"
      style={{ background: 'var(--card-normal, linear-gradient(180deg, var(--lum-02, #FFFEFC) 0%, var(--lum-02, #FFFEFC) 106.49%))' }}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scaleY: isActive ? 1 : 0
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
    <p 
      className={`font-sans leading-[24px] not-italic relative shrink-0 text-nowrap whitespace-pre transition-colors duration-200 ${isActive ? 'text-card-foreground' : 'text-muted-foreground group-hover:text-card-foreground'}`}
      style={{
        fontSize: 'var(--text-s)',
        fontWeight: 'var(--font-weight-medium)'
      }}
    >
      {tab}
    </p>
  </motion.div>
));

TabButton.displayName = 'TabButton';

export const Tabs = React.memo<TabsProps>(({ activeTab, setActiveTab, orderType, onOrderTypeChange }) => {
  const handleBuyClick = useCallback(() => setActiveTab('Buy'), [setActiveTab]);
  const handleSellClick = useCallback(() => setActiveTab('Sell'), [setActiveTab]);

  return (
    <div className="content-stretch flex h-[40px] isolate items-start justify-between relative shrink-0 w-full z-[2]">
      <div className="content-stretch flex h-full items-end relative shrink-0 z-[2]">
        <TabButton tab="Buy" isActive={activeTab === 'Buy'} onClick={handleBuyClick} />
        <TabButton tab="Sell" isActive={activeTab === 'Sell'} onClick={handleSellClick} />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]">
        <OrderTypeSelector orderType={orderType} onOrderTypeChange={onOrderTypeChange} />
      </div>
    </div>
  );
});

Tabs.displayName = 'Tabs';