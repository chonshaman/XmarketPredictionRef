import { TrendingUp, DollarSign, Star, Briefcase, Gamepad2, Users, Cpu, Flame, Moon, Sun, X, Palette } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SidebarMenuItem } from './SidebarMenuItem';

interface SidebarProps {
  activeCategory?: string;
  onToggleTheme?: () => void;
  isDarkMode?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  onNavigate?: (page: string) => void;
  currentPage?: string;
  isDetailPage?: boolean;
}

export function Sidebar({ activeCategory, onToggleTheme, isDarkMode, isOpen = false, onClose, onNavigate, currentPage, isDetailPage = false }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Handle responsive behavior for collapsed state
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // On desktop (>= 768px):
      // - If on detail page, always collapse to icons
      // - If on homepage and width < 1366, collapse to icons
      // - If on homepage and width >= 1366, expand
      if (width >= 768) {
        if (isDetailPage) {
          setIsCollapsed(true);
        } else {
          setIsCollapsed(width < 1366);
        }
      } else {
        // Mobile: never collapsed (uses overlay instead)
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDetailPage]);

  const platformLinks = [
    { icon: TrendingUp, label: 'Live Markets', active: true, page: 'home', shouldBlink: true },
    { icon: Star, label: 'My Positions', active: false, page: 'positions', shouldBlink: false },
    { icon: Star, label: 'Watchlist', active: false, page: 'watchlist', shouldBlink: false },
    { icon: Users, label: 'Referrals', active: false, page: 'referrals', shouldBlink: false },
    { icon: DollarSign, label: 'Buy XEF', active: false, page: 'buy-xef', shouldBlink: false },
  ];

  const categories = [
    { icon: DollarSign, label: 'Crypto', page: null, shouldBlink: false },
    { icon: Briefcase, label: 'Economy', page: null, shouldBlink: false },
    { icon: Star, label: 'Entertainment', page: null, shouldBlink: false },
    { icon: Gamepad2, label: 'E-Sports', page: null, shouldBlink: false },
    { icon: Briefcase, label: 'Politics', page: null, shouldBlink: false },
    { icon: Gamepad2, label: 'Sports', page: 'sports', shouldBlink: true },
    { icon: Cpu, label: 'Tech', page: null, shouldBlink: false },
    { icon: Flame, label: 'Trending', page: null, shouldBlink: false },
  ];

  return (
    <>
      {/* Mobile Overlay - only show below md (768px) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`
          fixed md:static inset-y-0 left-0 z-50
          h-full overflow-y-auto flex flex-col
          transition-all duration-300 ease-in-out
          sidebar-mobile-bg
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{
          width: isCollapsed ? '72px' : '224px',
        }}
      >
        {/* Mobile Close Button - only show below md (768px) */}
        <div className="md:hidden flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-[var(--radius-button)] transition-colors"
            style={{ color: 'var(--card-foreground)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--side-bar-accent)';
              e.currentTarget.style.color = 'var(--side-bar-accent-foreground)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--card-foreground)';
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 flex-1">
          {/* Platform Section */}
          <div className="mb-6">
            {!isCollapsed && (
              <label 
                className="mb-3 block" 
                style={{ 
                  color: 'var(--muted-foreground)', 
                  fontSize: 'var(--text-xs)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                Platform
              </label>
            )}
            <div className="space-y-0.5">
              {platformLinks.map((link, index) => (
                <SidebarMenuItem
                  key={index}
                  icon={link.icon}
                  label={link.label}
                  isActive={link.page === currentPage}
                  isCollapsed={isCollapsed}
                  shouldBlink={link.shouldBlink}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate(link.page);
                      if (onClose) onClose();
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Market Categories Section */}
          <div>
            {!isCollapsed && (
              <label 
                className="mb-3 block" 
                style={{ 
                  color: 'var(--muted-foreground)', 
                  fontSize: 'var(--text-xs)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                Market Categories
              </label>
            )}
            <div className="space-y-0.5">
              {categories.map((category, index) => (
                <SidebarMenuItem
                  key={index}
                  icon={category.icon}
                  label={category.label}
                  isActive={category.page === currentPage}
                  isCollapsed={isCollapsed}
                  shouldBlink={category.shouldBlink}
                  onClick={() => {
                    if (category.page && onNavigate) {
                      onNavigate(category.page);
                      if (onClose) onClose();
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Theme Toggle at Bottom */}
        <div className="p-4">
          <SidebarMenuItem
            icon={Palette}
            label="Design System"
            isActive={currentPage === 'design-system'}
            isCollapsed={isCollapsed}
            onClick={() => {
              if (onNavigate) {
                onNavigate('design-system');
                if (onClose) onClose();
              }
            }}
          />

          <div className="mt-1">
            <SidebarMenuItem
              icon={isDarkMode ? Sun : Moon}
              label={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              isActive={false}
              isCollapsed={isCollapsed}
              onClick={onToggleTheme}
            />
          </div>
        </div>

        <style>{`
          /* Mobile sidebar background */
          .sidebar-mobile-bg {
            background: var(--card-normal);
          }

          /* Desktop sidebar transparent background */
          @media (min-width: 768px) {
            .sidebar-mobile-bg {
              background: transparent;
            }
          }
        `}</style>
      </div>
    </>
  );
}