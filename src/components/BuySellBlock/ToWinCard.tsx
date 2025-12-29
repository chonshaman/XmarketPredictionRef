import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BananaIcon } from '../figma/BananaIcon';
import { AnimatedNumber } from './AnimatedNumber';
import { ToWinCardProps } from './types';
import { AVG_PRICES } from './constants';

// Animation configuration for grid-based collapse/expand
const CARD_ANIMATION = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as const,
};

export const ToWinCard = React.memo<ToWinCardProps & { show: boolean }>(({ 
  show, 
  selectedOutcome, 
  toWinAmount 
}) => {
  const avgPrice = useMemo(() => 
    selectedOutcome === 'YES' ? AVG_PRICES.YES : AVG_PRICES.NO,
    [selectedOutcome]
  );

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div 
          initial={{ opacity: 0, gridTemplateRows: '0fr' }}
          animate={{ opacity: 1, gridTemplateRows: '1fr' }}
          exit={{ opacity: 0, gridTemplateRows: '0fr' }}
          transition={CARD_ANIMATION}
          className="grid w-full"
        >
          <div className="overflow-hidden">
            <div 
              className="relative rounded-[8px] shrink-0 w-full"
              style={{
                background: 'var(--green-4)'
              }}
            >
              <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[6px] relative w-full">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                  <BananaIcon />
                  <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-nowrap">
                    <div 
                      className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-card-foreground"
                      style={{ fontSize: 'var(--text-s)' }}
                    >
                      <p className="leading-[24px] text-nowrap whitespace-pre">To Win Est.</p>
                    </div>
                    <div 
                      className="flex flex-col font-sans justify-center relative shrink-0 text-right text-muted-foreground"
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-weight-medium)'
                      }}
                    >
                      <p className="leading-[20px] text-nowrap whitespace-pre">
                        Avg. Price: {avgPrice}<span className="font-sans font-medium not-italic">¢</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div 
                    className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-card-foreground tabular-nums"
                    style={{ fontSize: 'var(--text-xl)' }}
                  >
                    <p className="leading-[28px] whitespace-pre">
                      $<AnimatedNumber value={toWinAmount} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

ToWinCard.displayName = 'ToWinCard';