/**
 * Tab Preview Components
 * 
 * Preview components for Master Tab and Child Tab components
 */

import React, { useState } from 'react';
import { MasterTab } from '@/components/market-details/MasterTab';
import { ChildTab } from '@/components/market-details/ChildTab';
import { CategoryTab } from '@/components/navigation/CategoryTab';
import { LayoutGrid, Bitcoin, TrendingUp, DollarSign } from 'lucide-react';

/**
 * Master Tab - Default State (Orderbook selected)
 */
export function MasterTabOrderbookDefault() {
  const [activeTab, setActiveTab] = useState<'orderbook' | 'chart'>('orderbook');
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <MasterTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Master Tab - Chart Selected
 */
export function MasterTabChartSelected() {
  const [activeTab, setActiveTab] = useState<'orderbook' | 'chart'>('chart');
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <MasterTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Child Tab - Yes Selected
 */
export function ChildTabYesDefault() {
  const [activeTab, setActiveTab] = useState<'yes' | 'no'>('yes');
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <ChildTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Child Tab - No Selected
 */
export function ChildTabNoSelected() {
  const [activeTab, setActiveTab] = useState<'yes' | 'no'>('no');
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <ChildTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Category Tab - Default State (Grid selected)
 */
export function CategoryTabGridDefault() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const items = [
    { id: 'all', name: 'All', icon: LayoutGrid },
    { id: 'crypto', name: 'Crypto', icon: Bitcoin },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'economy', name: 'Economy', icon: DollarSign },
  ];
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <CategoryTab items={items} activeId={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Category Tab - Bitcoin Selected
 */
export function CategoryTabBitcoinSelected() {
  const [activeTab, setActiveTab] = useState<string>('crypto');
  const items = [
    { id: 'all', name: 'All', icon: LayoutGrid },
    { id: 'crypto', name: 'Crypto', icon: Bitcoin },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'economy', name: 'Economy', icon: DollarSign },
  ];
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <CategoryTab items={items} activeId={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Category Tab - Trending Selected
 */
export function CategoryTabTrendingSelected() {
  const [activeTab, setActiveTab] = useState<string>('trending');
  const items = [
    { id: 'all', name: 'All', icon: LayoutGrid },
    { id: 'crypto', name: 'Crypto', icon: Bitcoin },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'economy', name: 'Economy', icon: DollarSign },
  ];
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <CategoryTab items={items} activeId={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Category Tab - Dollar Selected
 */
export function CategoryTabDollarSelected() {
  const [activeTab, setActiveTab] = useState<string>('economy');
  const items = [
    { id: 'all', name: 'All', icon: LayoutGrid },
    { id: 'crypto', name: 'Crypto', icon: Bitcoin },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'economy', name: 'Economy', icon: DollarSign },
  ];
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <CategoryTab items={items} activeId={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Category Tab - Default State
 */
export function CategoryTabDefault() {
  const items = [
    { id: 'crypto', name: 'Crypto', icon: Bitcoin },
  ];
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)', display: 'flex', alignItems: 'center', gap: '16px' }}>
      <CategoryTab items={items} activeId="" onTabChange={() => {}} />
    </div>
  );
}

/**
 * Category Tab - Hover State
 */
export function CategoryTabHover() {
  const items = [
    { id: 'crypto', name: 'Crypto', icon: Bitcoin },
  ];
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)', display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div 
        className="flex flex-col items-center justify-center shrink-0 rounded-lg"
        style={{
          gap: 'var(--gap--0-5rem)',
          minWidth: '72px',
          padding: 'var(--gap--0-5rem)',
          backgroundColor: 'var(--black-a1)',
          border: '1px solid transparent',
        }}
      >
        <div 
          className="flex items-center justify-center"
          style={{
            width: '40px',
            height: '40px',
          }}
        >
          <Bitcoin 
            style={{
              width: '24px',
              height: '24px',
              color: 'var(--primary)',
              strokeWidth: 2,
              transform: 'scale(1.1)',
            }}
          />
        </div>
        <span 
          className="font-sans text-nowrap"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.2',
            color: 'var(--primary)',
          }}
        >
          Crypto
        </span>
      </div>
    </div>
  );
}

/**
 * Category Tab - Selected State
 */
export function CategoryTabSelected() {
  const items = [
    { id: 'crypto', name: 'Crypto', icon: Bitcoin },
  ];
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)', display: 'flex', alignItems: 'center', gap: '16px' }}>
      <CategoryTab items={items} activeId="crypto" onTabChange={() => {}} />
    </div>
  );
}

/**
 * Category Tab - Disabled State
 */
export function CategoryTabDisabled() {
  const items = [
    { id: 'crypto', name: 'Crypto', icon: Bitcoin, disabled: true },
  ];
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)', display: 'flex', alignItems: 'center', gap: '16px' }}>
      <CategoryTab items={items} activeId="" onTabChange={() => {}} />
    </div>
  );
}