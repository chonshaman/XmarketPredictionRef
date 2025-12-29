import { useMemo } from 'react';
import { MarketCard } from './MarketCard';
import { HomeMatchCard } from './sports/HomeMatchCard';
import type { Market } from '../data/markets';
import type { Match } from '../data/matches';

interface MixedMarketGridProps {
  markets: Market[];
  matches: Match[];
  onMarketClick?: (market: Market) => void;
  onMatchClick?: (match: Match, oddsType: 'team1' | 'draw' | 'team2') => void;
}

type GridItem = 
  | { type: 'market'; data: Market }
  | { type: 'match'; data: Match };

export function MixedMarketGrid({ 
  markets, 
  matches, 
  onMarketClick,
  onMatchClick 
}: MixedMarketGridProps) {
  // Mix markets and matches randomly
  const mixedItems = useMemo(() => {
    const items: GridItem[] = [
      ...markets.map(m => ({ type: 'market' as const, data: m })),
      ...matches.map(m => ({ type: 'match' as const, data: m }))
    ];
    
    // Shuffle the items
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    
    return items;
  }, [markets, matches]);

  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      style={{
        gap: 'var(--gap--1rem)',
      }}
    >
      {mixedItems.map((item, index) => {
        if (item.type === 'market') {
          return (
            <MarketCard
              key={`market-${item.data.id}`}
              {...item.data}
              onClick={() => onMarketClick?.(item.data)}
            />
          );
        } else {
          return (
            <HomeMatchCard
              key={`match-${item.data.id}`}
              match={item.data}
              onOddsClick={(match, type) => onMatchClick?.(match, type)}
            />
          );
        }
      })}
    </div>
  );
}
