# 🚀 Refactor Quick Reference

**Last Updated:** December 2024

---

## 📦 Imports

```typescript
// Design Tokens (Colors, Spacing, Typography, etc.)
import { COLORS, SPACING, RADIUS, TYPOGRAPHY } from '@/constants/design-tokens';

// App Constants (Outcome Types, Button Variants, etc.)
import { OUTCOME_TYPE, BUTTON_SIZE, BUTTON_VARIANT } from '@/constants/app';

// CSS Utilities
import { getCSSVariable, setCSSVariable } from '@/utils/css-vars';

// Performance Utilities
import { useDebounce, useIntersectionObserver } from '@/utils/performance';

// Format Utilities
import { formatCurrency, formatPercentage } from '@/utils/format';
```

---

## 🎨 Colors

```typescript
// ❌ Never do this
backgroundColor: '#5b5bd6'
color: '#ffffff'

// ✅ Always do this
backgroundColor: COLORS.iris9
color: COLORS.primaryForeground

// Common Colors
COLORS.lum01              // White background
COLORS.lum02              // Off-white background
COLORS.cardNormal         // Card background
COLORS.cardHover          // Card hover state
COLORS.primaryButtonBg    // Primary button
COLORS.iris9              // Primary purple
COLORS.red9               // Destructive red
COLORS.green9             // Success green
COLORS.blackA1            // Subtle border
COLORS.blackA2            // Visible border
```

---

## 📏 Spacing

```typescript
// ❌ Never do this
padding: '16px'
gap: '12px'
margin: '24px'

// ✅ Always do this
padding: SPACING.gap1rem
gap: SPACING.gap075rem
margin: SPACING.gap15rem

// Common Spacing
SPACING.gap025rem   // 4px
SPACING.gap05rem    // 8px
SPACING.gap075rem   // 12px
SPACING.gap1rem     // 16px
SPACING.gap15rem    // 24px
SPACING.gap2rem     // 32px
```

---

## 🔤 Typography

```typescript
// ❌ Never do this
fontSize: '16px'
fontWeight: 600
fontFamily: 'Inter'

// ✅ Always do this
fontSize: TYPOGRAPHY.fontSize.base
fontWeight: TYPOGRAPHY.fontWeight.semiBold
fontFamily: TYPOGRAPHY.fontFamily.inter

// Font Sizes
TYPOGRAPHY.fontSize.xxs   // 10px
TYPOGRAPHY.fontSize.xs    // 12px
TYPOGRAPHY.fontSize.s     // 14px
TYPOGRAPHY.fontSize.base  // 16px
TYPOGRAPHY.fontSize.xl    // 20px

// Font Weights
TYPOGRAPHY.fontWeight.normal      // 400
TYPOGRAPHY.fontWeight.medium      // 500
TYPOGRAPHY.fontWeight.semiBold    // 600
TYPOGRAPHY.fontWeight.extraBold   // 800
```

---

## ⭕ Border Radius

```typescript
// ❌ Never do this
borderRadius: '8px'

// ✅ Always do this
borderRadius: RADIUS.lg

// Common Radius
RADIUS.sm       // 2px
RADIUS.base     // 4px
RADIUS.md       // 6px
RADIUS.lg       // 8px
RADIUS.xl       // 12px
RADIUS.full     // 9999px (circle)

// Semantic Radius
RADIUS.button   // Button border radius
RADIUS.card     // Card border radius
RADIUS.input    // Input border radius
```

---

## 🎯 Common Patterns

### Button Styles

```typescript
// Primary Button
style={{
  backgroundColor: COLORS.primaryButtonBg,
  color: COLORS.primaryForeground,
  padding: `${SPACING.gap05rem} ${SPACING.gap1rem}`,
  borderRadius: RADIUS.button,
  fontSize: TYPOGRAPHY.fontSize.s,
  fontWeight: TYPOGRAPHY.fontWeight.semiBold,
}}

// Secondary Button
style={{
  backgroundColor: COLORS.lum02,
  color: COLORS.cardForeground,
  padding: `${SPACING.gap05rem} ${SPACING.gap1rem}`,
  borderRadius: RADIUS.button,
}}
```

### Card Styles

```typescript
style={{
  backgroundColor: COLORS.cardNormal,
  borderRadius: RADIUS.card,
  border: `1px solid ${COLORS.blackA2}`,
  padding: SPACING.gap15rem,
}}

// Hover State
'&:hover': {
  backgroundColor: COLORS.cardHover,
  transform: 'translateY(-2px)',
}
```

### Input Styles

```typescript
style={{
  backgroundColor: COLORS.lum01,
  border: `1px solid ${COLORS.blackA2}`,
  borderRadius: RADIUS.input,
  padding: `${SPACING.gap05rem} ${SPACING.gap075rem}`,
  fontSize: TYPOGRAPHY.fontSize.s,
  color: COLORS.cardForeground,
}}
```

---

## 🔧 Constants

### Outcome Types

```typescript
// ❌ Never do this
if (outcome === 'YES') { }

// ✅ Always do this
if (outcome === OUTCOME_TYPE.YES) { }

// Available
OUTCOME_TYPE.YES
OUTCOME_TYPE.NO
```

### Button Sizes

```typescript
// ❌ Never do this
size === 'sm'

// ✅ Always do this
size === BUTTON_SIZE.SM

// Available
BUTTON_SIZE.XS   // 28px height
BUTTON_SIZE.SM   // 32px height
BUTTON_SIZE.MD   // 40px height
BUTTON_SIZE.LG   // 48px height
```

### Button Variants

```typescript
variant === BUTTON_VARIANT.PRIMARY
variant === BUTTON_VARIANT.DESTRUCTIVE
variant === BUTTON_VARIANT.OUTLINE
variant === BUTTON_VARIANT.GHOST
```

---

## ⚡ Performance

### Memoization

```typescript
// Memoize component
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// Memoize expensive calculation
const sorted = useMemo(() => {
  return data.sort(complexSort);
}, [data]);

// Memoize callback
const handleClick = useCallback(() => {
  onClick(id);
}, [onClick, id]);
```

### Debouncing

```typescript
import { useDebounce } from '@/utils/performance';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);
};
```

### Lazy Loading

```typescript
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

---

## 🎨 CSS Variables (Runtime)

### Get Variable

```typescript
import { getCSSVariable } from '@/utils/css-vars';

const primaryColor = getCSSVariable('iris-9');
```

### Set Variable (Theme Switching)

```typescript
import { setCSSVariable } from '@/utils/css-vars';

// Switch to dark mode
setCSSVariable('lum-01', '#000000');
setCSSVariable('lum-02', '#0f0f0f');
```

---

## 📝 TypeScript

### Component Props

```typescript
import type { OutcomeType, ButtonSize } from '@/constants/app';

interface MyComponentProps {
  outcome: OutcomeType;
  size: ButtonSize;
  onClick: () => void;
  children: React.ReactNode;
}

const MyComponent: React.FC<MyComponentProps> = ({
  outcome,
  size,
  onClick,
  children,
}) => {
  // ...
};
```

### Type-Safe Styles

```typescript
import type { ColorToken, SpacingToken } from '@/constants/design-tokens';

interface StyleConfig {
  backgroundColor: ColorToken;
  padding: SpacingToken;
}

const config: StyleConfig = {
  backgroundColor: COLORS.cardNormal,
  padding: SPACING.gap1rem,
};
```

---

## 🔍 Finding Hardcoded Values

```bash
# Run detection script
node scripts/find-hardcoded-values.js

# Shows:
# - Files with hardcoded colors
# - Files with hardcoded spacing
# - Priority order for refactoring
```

---

## ✅ Checklist

Before committing code:

- [ ] No hex colors (use `COLORS.*`)
- [ ] No pixel values (use `SPACING.*` or `RADIUS.*`)
- [ ] No hardcoded font weights (use `TYPOGRAPHY.fontWeight.*`)
- [ ] No string literals for constants (use `OUTCOME_TYPE.*`, etc.)
- [ ] Proper TypeScript types
- [ ] Memoization where appropriate
- [ ] Component exported with `displayName`

---

## 🚨 Common Mistakes

### ❌ Using Tailwind classes for spacing/colors

```typescript
// ❌ Bad - Bypasses design system
className="text-purple-600 p-4"

// ✅ Good - Uses design tokens
style={{
  color: COLORS.iris9,
  padding: SPACING.gap1rem,
}}
```

### ❌ Hardcoding magic numbers

```typescript
// ❌ Bad
const MAGIC_NUMBER = 42;

// ✅ Good
const API_MAX_RETRIES = 42; // API spec v2.1 requires exactly 42
```

### ❌ Not memoizing expensive operations

```typescript
// ❌ Bad - Sorts on every render
const sorted = data.sort(complexSort);

// ✅ Good - Only sorts when data changes
const sorted = useMemo(() => data.sort(complexSort), [data]);
```

---

## 📖 Full Documentation

- **REFACTOR_PLAN.md** - Strategy and planning
- **REFACTOR_IMPLEMENTATION_GUIDE.md** - Detailed migration guide
- **REFACTOR_COMPLETE.md** - Complete summary
- **Guidelines.md** - Design system guidelines

---

## 💡 Pro Tips

1. **Use autocomplete**: TypeScript will suggest available constants
2. **Search before creating**: Check if constant already exists
3. **Name semantically**: `COLORS.cardBackground` > `COLORS.lum01`
4. **Memoize sparingly**: Only for expensive operations
5. **Test in both themes**: Ensure dark mode works

---

**Questions?** See `/REFACTOR_IMPLEMENTATION_GUIDE.md` for detailed examples
