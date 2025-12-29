# Design System Guidelines

## Critical Color Rules
**ALWAYS use lum color variables instead of slate color variables**
- ❌ DO NOT use: `var(--background)`, `var(--slate-*)`, or any slate-based colors
- ✅ ALWAYS use: `var(--lum-01)`, `var(--lum-02)`, `var(--lum-03)` for backgrounds and neutral colors
- Preview backgrounds, card backgrounds, and any neutral surfaces must use lum variables
- This ensures consistency with the design system and proper theming

## Color System Variables
All components must use CSS variables defined in `/styles/globals.css`:
- **Backgrounds**: `var(--lum-01)`, `var(--lum-02)`, `var(--lum-03)`
- **Cards**: `var(--card-normal)`, `var(--card-hover)`
- **Borders**: `var(--black-a1)`, `var(--black-a2)`, `var(--black-a3)`
- **Text**: `var(--card-foreground)`, `var(--muted-foreground)`
- **Primary**: `var(--primary-button-bg)`, `var(--primary-button-bg-hover)`
- **Accent colors**: `var(--iris-9)`, `var(--iris-10)`, `var(--iris-11)`, etc.
- **Alpha colors**: `var(--black-a1)` through `var(--black-a12)` for transparency
- **Semantic colors**: `var(--red-9)` (destructive), `var(--green-9)` (success), `var(--amber-9)` (warning)

## Spacing & Layout
- Use CSS variable spacing: `var(--gap--0-5rem)`, `var(--gap--1rem)`, `var(--gap--2rem)`, etc.
- Available spacing: `0px`, `2px`, `4px`, `6px`, `8px`, `10px`, `12px`, `14px`, `16px`, `20px`, `24px`, `28px`, `32px`, `36px`, `40px`, `44px`, `48px`, `56px`, `64px`, `80px`, `96px`, `112px`, `128px`, etc.
- Maximum content width: `1280px`
- Use flexbox and grid for layouts (avoid absolute positioning unless necessary)
- Padding/margin should use gap variables for consistency

## Border Radius
- Use CSS variable radius: 
  - `var(--border-radius--0-125rem)` = 2px
  - `var(--border-radius--0-25rem)` = 4px
  - `var(--border-radius--0-375rem)` = 6px
  - `var(--border-radius--0-5rem)` = 8px
  - `var(--border-radius--0-75rem)` = 12px
  - `var(--border-radius--1rem)` = 16px
  - `var(--border-radius--1-5rem)` = 24px
  - `var(--border-radius--9999px)` = full rounded
- Semantic radius variables:
  - `var(--radius-button)` = 8px
  - `var(--radius-card)` = 8px
  - `var(--radius-input)` = 6px

## Typography
- **ONLY** use font faces defined in `/styles/globals.css`
- **Font families**: 
  - Inter (primary) - use for all body text, UI elements, and general content
  - Kanit (marketing) - use ONLY for marketing cards and hero sections
- **Font sizes**:
  - `var(--text-xxs)` = 10px (labels, captions)
  - `var(--text-xs)` = 12px (small labels, metadata)
  - `var(--text-s)` = 14px (secondary text)
  - `var(--text-base)` = 16px (body text)
  - `var(--text-l)` = 18px (large body)
  - `var(--text-xl)` = 20px (h4)
  - `var(--text-2xl)` = 24px (h3)
  - `var(--text-3xl)` = 30px (h2)
  - `var(--text-4xl)` = 48px (h1)
  - `var(--text-5xl)` = 60px (hero h1)
- **Font weights**:
  - `var(--font-weight-normal)` = 400
  - `var(--font-weight-medium)` = 500
  - `var(--font-weight-semi-bold)` = 600
  - `var(--font-weight-extra-bold)` = 800
- ❌ **DO NOT** use Tailwind typography classes like `text-2xl`, `font-bold`, `leading-none` unless specifically requested
- Always apply `font-family: 'Inter', sans-serif` or use `className="font-sans"`

## Component Styling Rules

### Buttons
- **Primary Button**:
  - Background: `var(--primary-button-bg)` (iris-9)
  - Hover: `var(--primary-button-bg-hover)` (iris-10)
  - Text: `var(--primary-button-fg)` (white)
  - Border radius: `var(--radius-button)`
- **Default Button**:
  - Background: `var(--primary)` (slate-900)
  - Border: `1px solid var(--black-a2)`
  - Hover background: `var(--card-hover)`
- **Destructive Button**:
  - Background: `var(--red-9)`
  - Hover: `var(--red-10)`
- **Ghost Button**:
  - Background: `transparent`
  - Hover: `var(--card-hover)`

### Cards
- Background: `var(--card-normal)` (gradient from lum-01 to lum-02)
- Hover background: `var(--card-hover)`
- Border: `1px solid var(--black-a1)`
- Border radius: `var(--radius-card)`
- Shadow: `var(--shadow-1)` or `var(--shadow-2)`
- Padding: `var(--gap--1rem)` or `var(--gap--1-5rem)`

### Form Inputs
- Background: `var(--card-normal)`
- Border: `1px solid var(--black-a2)`
- Focus border: `1px solid var(--primary-button-bg)`
- Border radius: `var(--radius-input)`
- Padding: `var(--gap--0-5rem) var(--gap--0-75rem)`
- Font size: `var(--text-base)`
- Font weight: `var(--font-weight-medium)`
- Placeholder color: `var(--muted-foreground)`

### Market Cards
- **General Market Card**:
  - Title: `var(--font-weight-medium)`, `var(--text-base)`, `var(--black-a11)`
  - Category badge: small, rounded, colored by category
  - Volume/Liquidity: `var(--text-xs)`, `var(--muted-foreground)`
- **Ending Soon Card**:
  - Title: `var(--font-weight-medium)`, `var(--text-base)`, `var(--black-a11)`
  - Time badge: prominent, with clock icon
- **Featured Card**:
  - Title: `var(--font-weight-medium)`, `var(--text-base)`, `var(--black-a11)`
  - Larger size, more prominent layout

### Sidebar
- Background: `transparent` on desktop, `var(--card-normal)` on mobile
- Menu items:
  - Height: `32px`
  - Gap: `var(--gap--0-5rem)` between items
  - Active: `var(--card-normal)` background, `var(--iris-10)` text
  - Hover: `var(--side-bar-accent)` background, `var(--primary)` text
  - No hover on active items
  - Text transform on hover: `translateX(4px)` (non-active only)
- Collapsed width: `72px`, expanded: `224px`
- Transition: `300ms ease-out`

### Navigation
- Header height: `64px`
- Search box width: `320px`
- Mobile breakpoint: `768px`
- Desktop breakpoint: `1024px`

## Animation & Transitions

### Timing Functions
- Standard transitions: `300ms ease-out`
- Quick transitions: `200ms ease-out`
- Smooth easing: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design)
- Use `animation-fill-mode: forwards` to prevent flash on exit

### Common Transitions
- Hover effects: `transition-all duration-300 ease-out`
- Transform effects: `transition-transform duration-300 ease-out`
- Color changes: `transition-colors duration-200`
- Backdrop blur: `backdrop-filter: blur(var(--backdrop-filter--blur-8px-))`

### Modal/Overlay Animations
- Fade in: `250ms cubic-bezier(0.4, 0, 0.2, 1)`
- Fade out: `300ms cubic-bezier(0.4, 0, 0.2, 1)`
- Slide up: `350ms cubic-bezier(0.4, 0, 0.2, 1)`
- Slide down: `350ms cubic-bezier(0.4, 0, 0.2, 1)`

## Responsive Design

### HeroCarousel Requirements
- Show 4 cards at max width (1280px)
- Reduce to 3 cards at 1024px
- Reduce to 2 cards at 768px
- Show 1 card on mobile

### Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`
- Max content width: `1280px`

### Sidebar Behavior
- Mobile (< 768px): Overlay with backdrop
- Tablet (768px - 1366px): Collapsed icon-only
- Desktop (> 1366px): Full width expanded

## Shadow System
- `var(--shadow-1)`: `0px 2px 4px 0px rgba(0, 0, 0, 0.05)` - subtle shadow
- `var(--shadow-2)`: `0px 4px 6px 0px rgba(0, 0, 0, 0.1)` - medium shadow
- `var(--shadow-3)`: `0px 8px 16px 0px rgba(0, 0, 0, 0.12)` - strong shadow
- `var(--shadow-4)`: `0 3px 4px 0 rgba(0, 0, 0, 0.04)` - very subtle

## Backdrop Filters
- Available blur values:
  - `var(--backdrop-filter--blur-0-)` = 0px
  - `var(--backdrop-filter--blur-4px-)` = 4px
  - `var(--backdrop-filter--blur-8px-)` = 8px
  - `var(--backdrop-filter--blur-12px-)` = 12px
  - `var(--backdrop-filter--blur-16px-)` = 16px
  - `var(--backdrop-filter--blur-24px-)` = 24px
  - `var(--backdrop-filter--blur-40px-)` = 40px
  - `var(--backdrop-filter--blur-64px-)` = 64px

## Performance Optimization
- Use `React.memo` for components
- Use `useCallback` for event handlers
- Memoize expensive calculations with `useMemo`
- Keep component file sizes small
- Lazy load heavy components when possible
- Optimize images (use WebP when possible)

## Code Style Guidelines

### Component Structure
```tsx
// 1. Imports
import React, { useState, useCallback } from 'react';

// 2. Types/Interfaces
interface ComponentProps {
  label: string;
  onClick?: () => void;
}

// 3. Component with memo
export const Component = React.memo<ComponentProps>(({ label, onClick }) => {
  // 4. State
  const [isActive, setIsActive] = useState(false);
  
  // 5. Callbacks
  const handleClick = useCallback(() => {
    setIsActive(!isActive);
    onClick?.();
  }, [isActive, onClick]);
  
  // 6. Render
  return (
    <button
      onClick={handleClick}
      style={{
        background: isActive ? 'var(--primary-button-bg)' : 'var(--card-normal)',
        color: 'var(--card-foreground)',
        padding: 'var(--gap--0-75rem) var(--gap--1rem)',
        borderRadius: 'var(--radius-button)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)',
        fontFamily: 'Inter, sans-serif',
        border: '1px solid var(--black-a2)',
        transition: 'all 300ms ease-out',
      }}
    >
      {label}
    </button>
  );
});

Component.displayName = 'Component';
```

### Inline Styles (Preferred)
- Use inline styles with CSS variables for dynamic theming
- Allows runtime CSS variable updates
- Better for design system consistency
- Example:
```tsx
<div style={{
  background: 'var(--card-normal)',
  padding: 'var(--gap--1rem)',
  borderRadius: 'var(--radius-card)',
}}>
```

### Class Names (When Needed)
- Use for Tailwind utility classes (layout, responsive)
- Use for complex hover states (`group`, `group-hover`)
- Example:
```tsx
<div className="flex items-center gap-2 md:gap-4 lg:gap-6">
```

## Accessibility

### Interactive Elements
- All buttons must have accessible labels
- Use `aria-label` for icon-only buttons
- Keyboard navigation support (Tab, Enter, Escape)
- Focus visible states with `outline` or `ring`

### Color Contrast
- Text on backgrounds must meet WCAG AA (4.5:1)
- Use `var(--card-foreground)` for primary text
- Use `var(--muted-foreground)` for secondary text (still accessible)

### Semantic HTML
- Use proper heading hierarchy (h1, h2, h3)
- Use `<button>` for actions, `<a>` for navigation
- Use `<label>` for form inputs
- Use `<nav>` for navigation sections

## Dark Mode Support
- All CSS variables automatically switch in dark mode
- No need for dark: prefixes when using CSS variables
- Test components in both light and dark modes
- Ensure contrast ratios are maintained

## File Organization
```
/components
  /design-system       # Design system documentation
    /components        # Design system UI components
    /data             # Component variants data
    /previews         # Component preview examples
    /types            # TypeScript types
    /utils            # Utility functions
  /home               # Home page components
  /hero               # Hero section components
  Button.tsx          # Shared button component
  Card.tsx            # Shared card component
/styles
  globals.css         # CSS variables & design tokens
/data
  markets.ts          # Market data
```

## Component Guidelines

### Some base components may have default styling (e.g., gap/typography) baked in. 
**Always explicitly set any styling from these guidelines in the generated React to override defaults.**

### Import Paths
- Use relative imports: `import { Button } from './Button'`
- Design system: `import { DesignSystemPage } from './design-system'`
- Shared components: `import { MarketCard } from './MarketCard'`

### Naming Conventions
- Components: PascalCase (`MarketCard`, `PrimaryButton`)
- Files: PascalCase for components (`MarketCard.tsx`)
- CSS variables: kebab-case (`--card-normal`, `--gap--1rem`)
- Functions: camelCase (`handleClick`, `fetchMarkets`)

## Testing Checklist

Before shipping a component, verify:
- ✅ Uses design system CSS variables (no hardcoded colors/sizes)
- ✅ Responsive across mobile, tablet, desktop
- ✅ Works in both light and dark modes
- ✅ Accessible (keyboard nav, screen readers, color contrast)
- ✅ Smooth transitions and animations
- ✅ Performance optimized (memo, callbacks)
- ✅ Follows typography guidelines (no Tailwind text classes)
- ✅ Uses lum colors instead of slate
- ✅ Proper spacing with gap variables
- ✅ Consistent border radius
- ✅ No hover effects on active states

## Common Mistakes to Avoid

❌ **Don't:**
- Use `var(--background)` or `var(--slate-*)` colors
- Use Tailwind typography classes (`text-2xl`, `font-bold`)
- Hardcode colors, sizes, or spacing values
- Mix inline styles and CSS variables inconsistently
- Use absolute positioning for layouts
- Add hover effects to active states
- Forget `animation-fill-mode: forwards` on exit animations

✅ **Do:**
- Use `var(--lum-01)`, `var(--lum-02)`, `var(--lum-03)` for backgrounds
- Use CSS variable font sizes (`var(--text-base)`)
- Use CSS variable spacing (`var(--gap--1rem)`)
- Use flexbox/grid for layouts
- Disable hover on active states
- Add smooth transitions with proper timing

## Quick Reference

### Most Common Variables
```css
/* Backgrounds */
--lum-01, --lum-02, --lum-03
--card-normal, --card-hover

/* Text */
--card-foreground, --muted-foreground
--text-base, --text-sm, --text-xs
--font-weight-medium, --font-weight-semi-bold

/* Spacing */
--gap--0-5rem (8px), --gap--1rem (16px), --gap--1-5rem (24px)

/* Borders */
--black-a1, --black-a2, --black-a3
--radius-button, --radius-card, --radius-input

/* Colors */
--primary-button-bg (iris-9), --primary-button-bg-hover (iris-10)
--red-9 (destructive), --green-9 (success), --amber-9 (warning)
```

---

**Remember: The design system is built on CSS variables for global theming control. Always use these variables instead of hardcoded values!**
