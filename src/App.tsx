import { useState, useEffect, useCallback, lazy, Suspense, useMemo, useRef } from 'react';
import './error-suppression'; // Import error suppression for Rive WebGL bugs
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
// Lazy load page components for optimal code splitting
const HomePage = lazy(() => import('./components/home/HomePage').then(module => ({ default: module.HomePage })));
const MarketDetails = lazy(() => import('./components/MarketDetails').then(module => ({ default: module.MarketDetails })));
const Sports = lazy(() => import('./components/Sports').then(module => ({ default: module.Sports })));
const Watchlist = lazy(() => import('./components/Watchlist').then(module => ({ default: module.Watchlist })));
const DesignSystemPage = lazy(() => import('./components/design-system').then(module => ({ default: module.DesignSystemPage })));

import { BalanceProvider } from './contexts/BalanceContext';
import { SavedMarketsProvider } from './context/SavedMarketsContext';
import { featuredMarkets, endingSoonMarkets, heroCarouselMarkets, multiOutcomeMarkets } from './data/markets';
import type { Market } from './data/markets';

export default function App() {
  // State management
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [manuallyExpanded, setManuallyExpanded] = useState(false);
  
  // Ref to track the main scroll container
  const mainScrollRef = useRef<HTMLDivElement>(null);

  // Combine all markets for search - memoized to prevent recreation on every render
  const allMarkets = useMemo(
    () => [...heroCarouselMarkets, ...featuredMarkets, ...endingSoonMarkets, ...multiOutcomeMarkets],
    []
  );

  // Handle sidebar collapse state based on window size and page
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isDetailPage = currentPage === 'market';
      
      // On desktop (>= 768px)
      if (width >= 768) {
        if (manuallyExpanded) {
          setIsSidebarCollapsed(false);
        } else if (isDetailPage) {
          setIsSidebarCollapsed(true);
        } else {
          setIsSidebarCollapsed(width < 1366);
        }
      } else {
        // Mobile: never collapsed (uses overlay instead)
        setIsSidebarCollapsed(false);
        setManuallyExpanded(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, manuallyExpanded]);

  // Scroll to top when navigating to detail page
  useEffect(() => {
    if (currentPage === 'market' && mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, selectedMarket]);

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Memoized callbacks for better performance
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const toggleSidebar = useCallback(() => {
    // On mobile, toggle the sidebar overlay
    if (window.innerWidth < 768) {
      setIsSidebarOpen(prev => !prev);
    } else {
      // On desktop, toggle the collapsed state
      setIsSidebarCollapsed(prev => !prev);
      setManuallyExpanded(prev => !prev);
    }
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const handleMarketSelect = useCallback((market: Market) => {
    setSelectedMarket(market);
    setCurrentPage('market');
  }, []);

  const handleBackToHome = useCallback(() => {
    setSelectedMarket(null);
    setCurrentPage('home');
  }, []);

  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page);
    setSelectedMarket(null);
  }, []);
  
  const handleLogoClick = useCallback(() => {
    setCurrentPage('home');
    setSelectedMarket(null);
  }, []);

  return (
    <BalanceProvider>
      <SavedMarketsProvider>
        <div 
          className="flex flex-col h-screen" 
          style={{ 
            background: 'radial-gradient(80% 48% at 0 6%, var(--blue-2) 0, var(--white-a1) 100%), linear-gradient(180deg, var(--lum-03) -.44%, var(--lum-02) 56.31%), var(--lum-01)'
          }}
        >
          {/* Header - Full Width */}
          <Header 
            onToggleSidebar={toggleSidebar} 
            markets={allMarkets}
            onMarketSelect={handleMarketSelect}
            onLogoClick={handleLogoClick}
          />

          {/* Content Area with Sidebar */}
          <div className="flex-1 flex min-h-0">
            {/* Sidebar - Desktop: always visible, Mobile: overlay */}
            <Sidebar 
              onToggleTheme={toggleTheme} 
              isDarkMode={isDarkMode} 
              isOpen={isSidebarOpen}
              onClose={closeSidebar}
              onNavigate={handleNavigate}
              currentPage={currentPage}
              isDetailPage={currentPage === 'market'}
              isCollapsed={isSidebarCollapsed}
            />

            {/* Main Content Area */}
            <div 
              className="flex-1 flex flex-col min-w-0 content-area-scroll md:mt-[var(--gap--0-75rem)] md:mx-[var(--gap--0-5rem)] md:mb-[var(--gap--0-5rem)] md:border md:border-[var(--black-a1)] md:rounded-[var(--border-radius--1rem)] md:shadow-[var(--shadow-1)] border-0 rounded-0 shadow-none"
              style={{
                background: 'radial-gradient(240% 160% at 180% 100%,hsl(from var(--lum-02) h s l) 0,hsl(from var(--sage-2) h s l) 56.68%,hsl(from var(--lum-02) h s l) 100%),hsl(from var(--mauve-1) h s l)',
              }}
            >
              {/* Scrollable Content Container with Suspense for all lazy loaded components */}
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <p style={{ 
                    fontSize: 'var(--text-sm)', 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--muted-foreground)'
                  }}>
                    Loading...
                  </p>
                </div>
              }>
                {currentPage === 'design-system' ? (
                  <DesignSystemPage />
                ) : currentPage === 'sports' ? (
                  <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <Sports />
                  </main>
                ) : currentPage === 'watchlist' ? (
                  <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="w-full max-w-[1280px] mx-auto px-[var(--gap--1rem)] sm:px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: 'var(--gap--0-5rem)' }}>
                      <Watchlist onMarketSelect={handleMarketSelect} />
                    </div>
                  </main>
                ) : (
                  <main 
                    ref={mainScrollRef}
                    className="flex-1 overflow-y-auto overflow-x-hidden"
                    style={{
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  >
                    <div className="w-full max-w-[1280px] mx-auto px-[var(--gap--1rem)] sm:px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: 'var(--gap--0-5rem)' }}>
                      {currentPage === 'market' && selectedMarket ? (
                        <MarketDetails 
                          market={selectedMarket} 
                          onBack={handleBackToHome} 
                        />
                      ) : (
                        <HomePage onMarketSelect={handleMarketSelect} />
                      )}
                    </div>
                  </main>
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </SavedMarketsProvider>
    </BalanceProvider>
  );
}
