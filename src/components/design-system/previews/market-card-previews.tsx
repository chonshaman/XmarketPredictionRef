/**
 * Market Card Preview Components
 */
import React from 'react';
import { MarketCard } from '../../MarketCard';
import { EndingSoonMarketCard } from '../../EndingSoonMarketCard';
import { FeaturedMarketCard } from '../../hero/FeaturedMarketCard';
import { HomeMatchCard } from '../../sports/HomeMatchCard';
import { OutcomeButton } from '../../BuySellBlock/OutcomeButton';
import { AmountInput } from '../../BuySellBlock/AmountInput';
import { featuredMarkets } from '../../../data/markets';
import { allMatches } from '../../../data/matches';

// ==================== Market Cards ====================
export function MarketCardDefault() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '400px',
      minWidth: '280px',
    }}>
      <MarketCard {...featuredMarkets[0]} />
    </div>
  );
}

export function EndingSoonCardDefault() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '400px',
      minWidth: '280px',
    }}>
      <EndingSoonMarketCard {...featuredMarkets[1]} />
    </div>
  );
}

export function FeaturedCardDefault() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '400px',
      minWidth: '280px',
      aspectRatio: '1 / 1.2',
    }}>
      <FeaturedMarketCard {...featuredMarkets[0]} />
    </div>
  );
}

export function HomeMatchCardDefault() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '400px',
      minWidth: '280px',
    }}>
      <HomeMatchCard match={allMatches[0]} />
    </div>
  );
}

// ==================== Buy/Sell Components ====================
export function OutcomeButtonYesDefault() {
  return (
    <div style={{ width: '200px' }}>
      <OutcomeButton 
        outcome="yes" 
        percentage={67} 
        onClick={() => {}} 
      />
    </div>
  );
}

export function OutcomeButtonNoDefault() {
  return (
    <div style={{ width: '200px' }}>
      <OutcomeButton 
        outcome="no" 
        percentage={33} 
        onClick={() => {}} 
      />
    </div>
  );
}

export function AmountInputDefault() {
  return (
    <div style={{ width: '300px' }}>
      <AmountInput 
        value="100"
        onChange={() => {}}
        onBlur={() => {}}
        onFocus={() => {}}
      />
    </div>
  );
}