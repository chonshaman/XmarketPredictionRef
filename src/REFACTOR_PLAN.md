# Comprehensive Codebase Refactor Plan

## Executive Summary
Complete refactoring to eliminate hardcoded values, optimize performance, reduce bundle size, and enforce TypeScript best practices while maintaining design system consistency.

---

## Phase 1: Constants & Configuration ✅

### 1.1 CSS Variable Constants
**File: `/constants/design-tokens.ts`**
- Export all CSS variables as TypeScript constants
- Type-safe access to design tokens
- Prevent hardcoded values in components

### 1.2 Application Constants
**File: `/constants/app.ts`**
- Market categories
- Navigation items
- Outcome types (YES/NO)
- Order types (MARKET/LIMIT)
- Tab configurations

### 1.3 Configuration Consolidation
**File: `/config/app-config.ts`** (Update)
- Centralize all app-level configuration
- Environment-specific settings
- Feature flags

---

## Phase 2: Type System Improvements ✅

### 2.1 Shared Types
**File: `/types/index.ts`** (Enhance)
- Strict type definitions for all data models
- Union types for state variants
- Generic utility types

### 2.2 Component Props Types
- Extract common prop patterns
- Create reusable prop type utilities
- Enforce consistent prop naming

---

## Phase 3: Utility Functions ✅

### 3.1 Format Utilities
**File: `/utils/format.ts`** (Enhance)
- Currency formatting
- Number formatting
- Date/time formatting
- Percentage formatting

### 3.2 CSS Variable Utilities
**File: `/utils/css-vars.ts`** (Create)
- Type-safe CSS variable access
- Runtime variable manipulation
- Theme helpers

### 3.3 Performance Utilities
**File: `/utils/performance.ts`** (Enhance)
- Memoization helpers
- Debounce/throttle
- Lazy loading utilities

---

## Phase 4: Component Architecture Refactor

### 4.1 Atomic Design Structure
```
/components
  /atoms          # Smallest building blocks
    /Button
    /Input
    /Badge
  /molecules      # Simple combinations
    /SearchBox
    /OutcomeButton
    /MoneyDisplay
  /organisms      # Complex components
    /Header
    /Sidebar
    /BuySellBlock
  /templates      # Page layouts
    /HomePage
    /MarketDetails
  /pages          # Full pages
```

### 4.2 Component Optimization
- Remove inline styles → CSS variables
- Extract repeated JSX → sub-components
- Implement React.memo where beneficial
- Add useCallback/useMemo for expensive operations

### 4.3 Prop Drilling Elimination
- Use composition over prop drilling
- Context for global state (already has BalanceContext)
- Consider additional contexts if needed

---

## Phase 5: Performance Optimization

### 5.1 Code Splitting
- Lazy load design system page
- Lazy load market details
- Dynamic imports for heavy components

### 5.2 Memoization Strategy
- Memoize expensive calculations
- Memoize callback functions
- Memoize derived data

### 5.3 Bundle Size Reduction
- Remove unused dependencies
- Optimize imports (named imports only)
- Tree-shaking friendly code

---

## Phase 6: Asset Optimization

### 6.1 SVG Management
- Consolidate SVG imports
- Create SVG component library
- Optimize SVG code

### 6.2 Image Optimization
- Use optimized image formats
- Implement lazy loading
- Responsive images

---

## Phase 7: Style System Enforcement

### 7.1 Remove All Hardcoded Values
- Search and replace hardcoded colors → CSS variables
- Replace magic numbers → named constants
- Standardize spacing using design tokens

### 7.2 Typography Consistency
- Use only Inter/Kanit fonts
- Apply font sizes via CSS variables
- Consistent font weight application

---

## Phase 8: Testing & Quality

### 8.1 TypeScript Strictness
- Enable strict mode
- Fix all type errors
- Add missing type annotations

### 8.2 Code Quality
- ESLint configuration
- Consistent naming conventions
- Remove unused code

---

## Implementation Priority

### High Priority (Week 1)
1. ✅ Constants extraction
2. ✅ CSS variable utilities
3. ✅ Remove hardcoded values
4. Component optimization

### Medium Priority (Week 2)
1. Component restructuring
2. Performance optimization
3. Code splitting

### Low Priority (Week 3)
1. Advanced memoization
2. Asset optimization
3. Documentation

---

## Success Metrics

### Performance
- Initial bundle size: TBD → Target: <200KB (gzipped)
- Time to interactive: TBD → Target: <2s
- Lighthouse score: TBD → Target: 95+

### Code Quality
- TypeScript errors: 0
- Unused exports: 0
- Duplicate code: <2%
- Test coverage: >80%

### Maintainability
- All colors from CSS variables: 100%
- All spacing from design tokens: 100%
- Component reusability: >70%
- Documentation coverage: 100%

---

## Next Steps
1. Create constants files
2. Build utility functions
3. Refactor components one by one
4. Add performance monitoring
5. Document patterns
