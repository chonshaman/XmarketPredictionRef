import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedInteger, AnimatedDecimal } from './AnimatedNumber';
import { InfoCardProps } from './types';
import { ANIMATION_CONFIG, SHARE_PRICES } from './constants';

// Animation configuration for grid-based collapse/expand
const CARD_ANIMATION = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as const,
};

export const InfoCard = React.memo<InfoCardProps & { show: boolean; limitPrice?: number }>(({ 
  show,
  selectedOutcome, 
  shares, 
  inputAmount, 
  fee, 
  feePercent, 
  netPurchase,
  activeTab,
  isLimitOrder,
  amountValue,
  limitPrice
}) => {
  const isSell = activeTab === 'Sell';
  
  // Get the price for display - use limit price if available, otherwise market price
  const displayPrice = isLimitOrder && limitPrice ? limitPrice : Math.round(SHARE_PRICES[selectedOutcome] * 100);
  
  const outcomeConfig = useMemo(() => ({
    colorClass: selectedOutcome === 'YES' ? 'bg-[#30A46C]' : 'bg-[#E5484D]',
    label: selectedOutcome === 'YES' ? 'Y' : 'N',
    backgroundColor: selectedOutcome === 'YES' ? '#30A46C' : '#E5484D',
    exitDirection: selectedOutcome === 'YES' ? 15 : -15,
    enterDirection: selectedOutcome === 'YES' ? -15 : 15,
  }), [selectedOutcome]);

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
                background: 'var(--card-normal, linear-gradient(180deg, var(--lum-02, #FFFEFC) 0%, var(--lum-02, #FFFEFC) 106.49%))',
                border: '1px solid var(--black-a1)'
              }}
            >
              <div className="box-border content-stretch flex flex-col px-[16px] py-[12px] relative w-full gap-[8px]">
                {/* Shares Row - Updated text format */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-[8px]">
                    <div 
                      className="flex items-center gap-[4px] font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-muted-foreground tabular-nums"
                      style={{ fontSize: 'var(--text-s)' }}
                    >
                      <p className="leading-[20px]">
                        {isSell ? 'Sell' : 'Buy'}
                      </p>
                      <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center relative overflow-hidden">
                        <motion.div
                          className={`absolute inset-0 rounded-full ${outcomeConfig.colorClass}`}
                          animate={{ 
                            backgroundColor: outcomeConfig.backgroundColor
                          }}
                          transition={{ 
                            duration: ANIMATION_CONFIG.duration.smooth, 
                            ease: ANIMATION_CONFIG.easing.smooth 
                          }}
                        />
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span 
                            key={selectedOutcome}
                            className="font-semibold text-white relative z-10"
                            style={{ fontSize: 'var(--text-xxs)' }}
                            initial={{ x: outcomeConfig.enterDirection, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: outcomeConfig.exitDirection, opacity: 0 }}
                            transition={{ 
                              duration: ANIMATION_CONFIG.duration.smooth, 
                              ease: ANIMATION_CONFIG.easing.smooth 
                            }}
                          >
                            {outcomeConfig.label}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      <p className="leading-[20px]">
                        <span style={{ color: 'var(--var---primary-)' }}>
                          {isSell ? (
                            <><AnimatedInteger value={shares} /> Shares </>
                          ) : (
                            <><AnimatedDecimal value={shares} /> Shares </>
                          )}
                        </span>
                        at <span style={{ color: 'var(--var---primary-)' }}>{displayPrice}¢</span>
                      </p>
                    </div>
                  </div>
                  <div 
                    className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-card-foreground tabular-nums"
                    style={{
                      fontSize: 'var(--text-s)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}
                  >
                    <p className="leading-[20px]">$<AnimatedInteger value={amountValue} /></p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px" style={{ background: 'var(--black-a1)' }} />

                {/* Fee Row */}
                <div className="flex items-center justify-between w-full">
                  <div 
                    className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-muted-foreground"
                    style={{ fontSize: 'var(--text-s)' }}
                  >
                    <p className="leading-[20px]">Fee ({feePercent}%)</p>
                  </div>
                  <div 
                    className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-card-foreground tabular-nums"
                    style={{
                      fontSize: 'var(--text-s)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}
                  >
                    <p className="leading-[20px]">$<AnimatedInteger value={fee} /></p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px" style={{ background: 'var(--black-a1)' }} />

                {/* Net Purchase/Sale Row */}
                <div className="flex items-center justify-between w-full">
                  <div 
                    className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-muted-foreground"
                    style={{ fontSize: 'var(--text-s)' }}
                  >
                    <p className="leading-[20px]">{isSell ? 'Net Sale' : 'Net Purchase'}</p>
                  </div>
                  <div 
                    className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-card-foreground tabular-nums"
                    style={{
                      fontSize: 'var(--text-s)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}
                  >
                    <p className="leading-[20px]">$<AnimatedInteger value={netPurchase} /></p>
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

InfoCard.displayName = 'InfoCard';