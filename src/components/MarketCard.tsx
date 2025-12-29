import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from '../imports/svg-08dg7pjb6g';
import { useState, useRef, lazy, Suspense } from 'react';
// Lazy load QuickBuyModal since it's only shown on demand
const QuickBuyModal = lazy(() => import('./QuickBuyModal').then(module => ({ default: module.QuickBuyModal })));
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './ui/utils';
import { OutcomeButtons } from './OutcomeButtons';
import type { Market } from '../data/markets';

interface MarketCardProps extends Market {
  onClick?: () => void;
}

export function MarketCard(props: MarketCardProps) {
  const { onClick, ...market } = props;
  
  const [showQuickBuy, setShowQuickBuy] = useState(false);
  const [selectedPrediction, setSelectedPrediction] = useState<'yes' | 'no'>('yes');
  const [selectedOutcomeId, setSelectedOutcomeId] = useState<string>('');
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSuccess = () => {
    setShowSuccessMessage(true);
    // Hide message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const handleYesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
    setSelectedPrediction('yes');
    setShowQuickBuy(true);
  };

  const handleNoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
    setSelectedPrediction('no');
    setShowQuickBuy(true);
  };

  const handleOutcomeClick = (outcomeId: string, prediction: 'yes' | 'no') => {
    // For multi-outcome markets
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
    setSelectedOutcomeId(outcomeId);
    setSelectedPrediction(prediction);
    setShowQuickBuy(true);
  };

  // Extract data from market object
  const avatars = market.recentUsers?.map(u => u.initials) || ["CN", "LA"];
  const avatarColors = market.recentUsers?.map(u => u.color) || ["#8145b5", "#16433c"];
  const comments = market.stats.commentsFormatted ? `${market.stats.commentsFormatted} comments` : "+100 comments";
  const hasMultipleOutcomes = market.outcomes && market.outcomes.length > 0;

  return (
    <>
    <div 
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 ease-out cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.28)] hover:-translate-y-1 group relative flex flex-col"
      style={{ 
        background: isHovered ? 'var(--card-hover)' : 'var(--card-normal)',
        border: '1px solid var(--black-a1)'
      }}
    >
      <div className="p-3 sm:p-[16px] flex flex-col flex-1 justify-between">
        <div>
        {/* Category and Time */}
        <div className="content-stretch flex gap-[8px] sm:gap-[10px] items-center mb-[10px] sm:mb-[12px]">
          <div className="bg-accent content-stretch flex items-center justify-center px-[10px] sm:px-[12px] py-[3px] sm:py-[4px] rounded-[var(--radius-input)] shrink-0">
            <p 
              className="font-sans text-muted-foreground text-nowrap whitespace-pre"
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '16px'
              }}
            >
              {market.category.name}
            </p>
          </div>
          <div className="content-stretch flex gap-[3px] sm:gap-[4px] h-[18px] sm:h-[20px] items-center shrink-0">
            <div className="content-stretch flex items-center justify-center p-px shrink-0 size-[14px] sm:size-[16px]">
              <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.pc012c00} fill="#7A7A7A" stroke="#606060" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 3.5V7L9.33333 8.16667" stroke="#606060" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <p 
              className="font-sans text-muted-foreground text-nowrap whitespace-pre"
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px'
              }}
            >
              {market.date}
            </p>
          </div>
        </div>

        {/* Text and Image */}
        <div className="content-stretch flex items-start justify-between mb-[10px] sm:mb-[12px]">
          <div className="basis-0 content-stretch flex flex-col grow items-start max-h-[80px] min-h-[56px] sm:min-h-[60px] min-w-px">
            <p 
              className="font-sans w-full max-h-[64px] min-h-[56px] sm:min-h-[60px] overflow-ellipsis overflow-hidden transition-all duration-300 ease-out text-[length:var(--text-l)] sm:text-[length:var(--text-base)]"
              style={{
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px',
                color: 'var(--black-a11)',
              }}
            >
              {market.question}
            </p>
          </div>
          <div className="max-w-[77.5385px] relative self-stretch shrink-0 w-[56px] sm:w-[64px]">
            <div className="absolute h-[48px] sm:h-[56px] left-[16px] sm:left-[20px] rounded-[4px] top-0 w-[40px] sm:w-[44px] overflow-hidden">
              <ImageWithFallback 
                src={market.image} 
                alt={market.question}
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Yes/No Buttons or Multi-Outcome Buttons */}
        {hasMultipleOutcomes ? (
          // Multi-outcome market - scrollable with hidden scrollbar
          <div 
            className="mb-[10px] sm:mb-[12px] overflow-y-auto custom-hidden-scrollbar"
            style={{
              maxHeight: 'calc(2.1 * (30px + 8px))', // 2.1 rows max (button height + gap) = 79.8px
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
            }}
          >
            <OutcomeButtons 
              outcomes={market.outcomes!} 
              onOutcomeClick={handleOutcomeClick} 
            />
            {/* Hide scrollbar for webkit browsers */}
            <style>{`
              .custom-hidden-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        ) : (
          // Binary Yes/No market
          <div className="content-stretch flex gap-[6px] sm:gap-[8px] h-[36px] sm:h-[40px] items-center mb-[10px] sm:mb-[12px] w-full">
            {/* Yes Button */}
            <div 
              className="basis-0 grow min-h-px min-w-px relative rounded-[var(--radius-input)] shrink-0 overflow-hidden group/yes cursor-pointer transition-all duration-300" 
              onClick={handleYesClick}
              style={{ 
                border: '1px solid var(--black-a2)',
                background: 'var(--side-bar-outline)',
                boxShadow: 'var(--shadow-4)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px 0 #5bb98b60, 0 4px 8px 0 #5bb98b40';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Animated circle that scales from right to left, clipped by button */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[36px] sm:w-[40px] h-[36px] sm:h-[40px]">
                <div 
                  className="absolute inset-0 rounded-full scale-0 transition-all duration-500 ease-out group-hover/yes:scale-[6] group-hover/yes:-translate-x-1/2"
                  style={{ backgroundColor: 'var(--chart-1-hover)' }}
                />
              </div>
              
              <div className="flex flex-row items-center size-full relative z-10">
                <div className="content-stretch flex items-center justify-between pl-[5px] sm:pl-[6px] pr-[6px] sm:pr-[8px] py-[5px] sm:py-[6px] relative w-full transition-all duration-300">
                  <div className="content-stretch flex gap-[1px] sm:gap-[2px] items-center shrink-0">
                    <div className="content-stretch flex items-center justify-center p-[2px] shrink-0 size-[20px] sm:size-[24px]">
                      <div className="basis-0 grow h-[16px] sm:h-[20px] min-h-px min-w-px relative shrink-0">
                        {/* Yes Green Icon with dark theme gradient */}
                        <div className="absolute inset-[4.17%]">
                          <div className="absolute inset-[4.17%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                              <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_yes_dark)" />
                              <defs>
                                <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_yes_dark" r="1">
                                  <stop offset="0.1358" stopColor="#2F7C57" />
                                  <stop offset="0.7046" stopColor="#3DD68C" />
                                  <stop offset="0.7778" stopColor="#28684A" />
                                  <stop offset="0.8078" stopColor="#33B074" />
                                  <stop offset="0.9109" stopColor="#30A46C" />
                                  <stop offset="0.9623" stopColor="#2F7C57" />
                                  <stop offset="0.9725" stopColor="#28684A" />
                                  <stop offset="1" stopColor="#20573E" />
                                </radialGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                            <path d={svgPaths.p294227c0} fill="#F1F5F9" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p 
                      className="font-sans text-nowrap text-card-foreground whitespace-pre"
                      style={{
                        fontSize: 'var(--text-s)',
                        fontWeight: 'var(--font-weight-medium)',
                        lineHeight: '24px'
                      }}
                    >
                      Yes
                    </p>
                  </div>
                  <p 
                    className="font-sans text-card-foreground text-nowrap whitespace-pre"
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-weight-medium)',
                      lineHeight: '20px'
                    }}
                  >
                    {market.prediction.yesPercentage}%
                  </p>
                </div>
              </div>
            </div>

            {/* No Button */}
            <div 
              className="basis-0 grow min-h-px min-w-px relative rounded-[var(--radius-input)] shrink-0 overflow-hidden group/no cursor-pointer transition-all duration-300" 
              onClick={handleNoClick}
              style={{ 
                border: '1px solid var(--black-a2)',
                background: 'var(--side-bar-outline)',
                boxShadow: 'var(--shadow-4)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px 0 #eb8e9060, 0 4px 8px 0 #eb8e9040';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Animated circle that scales from right to left, clipped by button */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[36px] sm:w-[40px] h-[36px] sm:h-[40px]">
                <div 
                  className="absolute inset-0 rounded-full scale-0 transition-all duration-500 ease-out group-hover/no:scale-[6] group-hover/no:-translate-x-1/2"
                  style={{ backgroundColor: 'var(--chart-2-hover)' }}
                />
              </div>
              
              <div className="flex flex-row items-center size-full relative z-10">
                <div className="content-stretch flex items-center justify-between pl-[5px] sm:pl-[6px] pr-[6px] sm:pr-[8px] py-[5px] sm:py-[6px] relative w-full transition-all duration-300">
                  <div className="content-stretch flex gap-[1px] sm:gap-[2px] items-center shrink-0">
                    <div className="content-stretch flex items-center justify-center p-[2px] shrink-0 size-[20px] sm:size-[24px]">
                      <div className="basis-0 grow h-[16px] sm:h-[20px] min-h-px min-w-px relative shrink-0">
                        {/* No Red Icon with dark theme gradient */}
                        <div className="absolute inset-[4.17%]">
                          <div className="absolute inset-[4.17%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                              <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_no_dark)" />
                              <defs>
                                <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_no_dark" r="1">
                                  <stop offset="0.1358" stopColor="#B54548" />
                                  <stop offset="0.7046" stopColor="#FF9592" />
                                  <stop offset="0.7778" stopColor="#8C333A" />
                                  <stop offset="0.8078" stopColor="#EC5D5E" />
                                  <stop offset="0.9109" stopColor="#E5484D" />
                                  <stop offset="0.9623" stopColor="#B54548" />
                                  <stop offset="0.9725" stopColor="#8C333A" />
                                  <stop offset="1" stopColor="#72232D" />
                                </radialGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[29.17%_31.25%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
                            <path d={svgPaths.p2b92e400} fill="#F1F5F9" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p 
                      className="font-sans text-nowrap text-card-foreground whitespace-pre"
                      style={{
                        fontSize: 'var(--text-s)',
                        fontWeight: 'var(--font-weight-medium)',
                        lineHeight: '24px'
                      }}
                    >
                      No
                    </p>
                  </div>
                  <p 
                    className="font-sans text-card-foreground text-nowrap whitespace-pre"
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-weight-medium)',
                      lineHeight: '20px'
                    }}
                  >
                    {market.prediction.noPercentage}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        </div>

        {/* Footer - Participants and Volume with Avatar Swap */}
        <div className="flex items-center justify-between relative min-h-[20px]">
          {/* Left Side: Participants / Avatars Swap */}
          <div className="grid grid-cols-1 grid-rows-1 items-center overflow-hidden">
            {/* Participants - Default State */}
            <div className="col-start-1 row-start-1 flex items-center transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
               <p 
                 className="font-sans text-muted-foreground text-nowrap whitespace-pre"
                 style={{
                   fontSize: 'var(--text-xs)',
                   fontWeight: 'var(--font-weight-medium)',
                   lineHeight: '20px'
                 }}
               >
                 {market.stats.participantsFormatted} participants
               </p>
            </div>
             
            {/* Avatars - Hover State */}
            <div className="col-start-1 row-start-1 flex items-center gap-1.5 transition-all duration-300 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
               <div className="flex -space-x-1.5">
                  {avatars.map((initial, i) => (
                    <div 
                      key={i}
                      className="w-4 h-4 rounded-full flex items-center justify-center font-semibold text-white ring-1"
                      style={{ 
                        backgroundColor: avatarColors[i],
                        ringColor: 'var(--lum-12)',
                        fontSize: 'var(--text-xxs)'
                      }}
                    >
                      {initial}
                    </div>
                  ))}
               </div>
               <span 
                 className="bg-[var(--secondary)] text-[var(--secondary-foreground)] px-1.5 py-0.5 rounded-full whitespace-nowrap"
                 style={{ fontSize: 'var(--text-xxs)' }}
               >
                 {comments}
               </span>
            </div>
          </div>

          {/* Volume */}
          <p 
            className="font-sans text-muted-foreground text-nowrap whitespace-pre"
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: '20px'
            }}
          >
            {market.stats.volumeFormatted} Vol.
          </p>
          
          {/* Success Message Overlay */}
          <AnimatePresence>
            {showSuccessMessage && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute inset-0 flex items-center justify-center z-20"
                style={{
                  backgroundColor: 'var(--chart-1)',
                  borderRadius: 'var(--radius-input)',
                  padding: '4px 8px'
                }}
              >
                <p 
                  className="font-sans text-nowrap whitespace-pre"
                  style={{ 
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: '20px',
                    color: '#FFFFFF'
                  }}
                >
                  Your position has been placed.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
    <AnimatePresence>
      {showQuickBuy && (
        <Suspense fallback={<div>Loading...</div>}>
          <QuickBuyModal
            isOpen={showQuickBuy}
            onClose={() => setShowQuickBuy(false)}
            market={{ image: market.image, question: market.question, yesPercentage: market.prediction.yesPercentage, noPercentage: market.prediction.noPercentage }}
            prediction={selectedPrediction}
            cardPosition={cardPosition}
            onSuccess={handleSuccess}
          />
        </Suspense>
      )}
    </AnimatePresence>
    </>
  );
}