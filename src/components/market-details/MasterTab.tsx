import React from 'react';

interface MasterTabProps {
  activeTab: 'orderbook' | 'chart';
  onTabChange: (tab: 'orderbook' | 'chart') => void;
}

export function MasterTab({ activeTab, onTabChange }: MasterTabProps) {
  return (
    <div 
      className="flex gap-1 items-start p-1 relative w-fit"
      style={{
        background: 'var(--black-a1)',
        border: '1.4px solid var(--black-a2)',
        borderRadius: 'var(--border-radius--0-5rem)'
      }}
    >
      <button
        onClick={() => onTabChange('orderbook')}
        className="flex gap-1 items-center px-3 py-2 relative shrink-0 transition-all"
        style={{
          background: activeTab === 'orderbook' ? 'var(--lum-05)' : 'var(--white-a1)',
          borderRadius: 'var(--border-radius--0-375rem)',
          boxShadow: '0px 3px 4px 0px rgba(0,0,0,0.04)',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: activeTab === 'orderbook' ? 'var(--primary)' : 'var(--muted-foreground)',
          lineHeight: '28px'
        }}
        onMouseEnter={(e) => {
          if (activeTab !== 'orderbook') {
            e.currentTarget.style.background = 'var(--black-a1)';
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== 'orderbook') {
            e.currentTarget.style.background = 'var(--white-a1)';
          }
        }}
      >
        Orderbook
      </button>
      <button
        onClick={() => onTabChange('chart')}
        className="flex gap-1 items-center px-3 py-2 relative shrink-0 transition-all"
        style={{
          background: activeTab === 'chart' ? 'var(--lum-05)' : 'transparent',
          borderRadius: 'var(--border-radius--0-375rem)',
          boxShadow: activeTab === 'chart' ? '0px 3px 4px 0px rgba(0,0,0,0.04)' : 'none',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: activeTab === 'chart' ? 'var(--primary)' : 'var(--muted-foreground)',
          lineHeight: '28px'
        }}
        onMouseEnter={(e) => {
          if (activeTab !== 'chart') {
            e.currentTarget.style.background = 'var(--black-a1)';
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== 'chart') {
            e.currentTarget.style.background = 'transparent';
          }
        }}
      >
        Chart
      </button>
    </div>
  );
}