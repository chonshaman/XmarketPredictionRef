import { Bookmark } from 'lucide-react';
import { MarketCard } from './MarketCard';
import { HomeMatchCard } from './sports/HomeMatchCard';
import { featuredMarkets, multiOutcomeMarkets } from '../data/markets';
import { allMatches } from '../data/matches';
import { memo, useMemo } from 'react';
import type { Market } from '../data/markets';
import type { Match } from '../data/matches';

interface WatchlistProps {
  onMarketSelect?: (market: Market) => void;
}

type WatchlistItem = 
  | { type: 'market'; data: Market }
  | { type: 'match'; data: Match };

export const Watchlist = memo(function Watchlist({ onMarketSelect }: WatchlistProps) {
  // Select 4 general markets, 2 multi-outcome markets, and 3 sport matches
  const generalMarkets = featuredMarkets.slice(0, 4);
  const multiMarkets = multiOutcomeMarkets.slice(0, 2);
  const sportMatches = allMatches.slice(0, 3); // First 3 sport matches

  // Mix all items randomly
  const mixedItems = useMemo(() => {
    const items: WatchlistItem[] = [
      ...generalMarkets.map(m => ({ type: 'market' as const, data: m })),
      ...multiMarkets.map(m => ({ type: 'market' as const, data: m })),
      ...sportMatches.map(m => ({ type: 'match' as const, data: m }))
    ];
    
    // Shuffle the items
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    
    return items;
  }, [generalMarkets, multiMarkets, sportMatches]);

  return (
    <div className="flex flex-col w-full max-w-[1296px] mx-auto">
      {/* Header Section */}
      <div 
        className="flex items-end justify-between w-full pb-0"
        style={{
          paddingTop: 'var(--gap--2rem)',
          paddingBottom: 'var(--gap--2rem)'
        }}
      >
        <div className="flex flex-col gap-[10px]">
          {/* Title with Bookmark Icon */}
          <div className="flex gap-[10px] items-center">
            <div 
              className="flex items-center justify-center shrink-0"
              style={{
                width: '24px',
                height: '24px'
              }}
            >
              <Bookmark 
                className="w-5 h-5" 
                style={{ 
                  stroke: 'var(--card-foreground)',
                  fill: 'none',
                  strokeWidth: '1.4'
                }} 
              />
            </div>
            <h1 
              className="font-sans"
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-semi-bold)',
                lineHeight: '40px',
                letterSpacing: '-0.225px',
                color: 'var(--card-foreground)'
              }}
            >
              Watchlist
            </h1>
          </div>
          
          {/* Subtitle */}
          <p 
            className="font-sans"
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: '24px',
              color: 'var(--muted-foreground)'
            }}
          >
            Engage. Predict. Earn: Your Data-Driven Lens into live markets
          </p>
        </div>
      </div>

      {/* Market Cards Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div 
        className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          gap: 'var(--gap--1-5rem)',
          paddingBottom: 'var(--gap--2rem)'
        }}
      >
        {mixedItems.map((item, index) => {
          if (item.type === 'market') {
            return (
              <MarketCard
                key={`market-${item.data.id}`}
                {...item.data}
                onClick={() => onMarketSelect && onMarketSelect(item.data)}
              />
            );
          } else {
            return (
              <HomeMatchCard
                key={`match-${item.data.id}`}
                match={item.data}
                onOddsClick={(selectedMatch, type) => {
                  // Handle odds click
                  console.log('Odds clicked:', selectedMatch, type);
                }}
              />
            );
          }
        })}
      </div>
    </div>
  );
});