import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarMenuItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  onClick?: () => void;
  shouldBlink?: boolean;
}

export const SidebarMenuItem = React.memo<SidebarMenuItemProps>((({
  icon: Icon,
  label,
  isActive = false,
  isCollapsed = false,
  onClick,
  shouldBlink = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 rounded-[var(--radius-button)] transition-all duration-300 ease-out ${!isActive ? 'group' : ''} ${shouldBlink ? 'menu-item-blink' : ''}`}
      style={{
        height: '32px',
        background: isActive ? 'var(--card-normal)' : 'transparent',
        border: isActive ? '1px solid var(--black-a1)' : '1px solid transparent',
        color: isActive ? 'var(--iris-10)' : 'var(--card-foreground)',
        fontWeight: isActive ? 'var(--font-weight-semi-bold)' : 'var(--font-weight-medium)',
        fontSize: 'var(--text-sm)',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        boxShadow: isActive ? 'var(--shadow-1)' : 'none',
        cursor: isActive ? 'default' : 'pointer',
      }}
      title={isCollapsed ? label : undefined}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = 'var(--side-bar-accent)';
          e.currentTarget.style.color = 'var(--primary)';
          const icon = e.currentTarget.querySelector('svg');
          if (icon) {
            (icon as HTMLElement).style.color = 'var(--primary)';
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--card-foreground)';
          const icon = e.currentTarget.querySelector('svg');
          if (icon) (icon as HTMLElement).style.color = 'var(--card-foreground)';
        }
      }}
    >
      <Icon className="w-4 h-4 shrink-0" />
      {!isCollapsed && (
        <span className={`transition-transform duration-300 ease-out ${!isActive ? 'group-hover:translate-x-1' : ''}`}>
          {label}
        </span>
      )}
      
      {/* Blinking indicator styles */}
      <style>{`
        @keyframes soft-blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        .menu-item-blink {
          animation: soft-blink 2.5s ease-in-out infinite;
        }
        
        /* Pause animation on hover or when active */
        .menu-item-blink:hover,
        .menu-item-blink[style*="var(--iris-10)"] {
          animation: none;
        }
      `}</style>
    </button>
  );
}));

SidebarMenuItem.displayName = 'SidebarMenuItem';