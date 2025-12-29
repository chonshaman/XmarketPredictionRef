import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold text-sm transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default: "text-primary-foreground hover:opacity-80",
        primary: "text-primary-button-fg hover:opacity-80",
        destructive:
          "text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:opacity-80",
        outline:
          "border text-foreground hover:bg-accent/50 hover:text-accent-foreground dark:border-input dark:hover:bg-input/50",
        secondary:
          "text-secondary-foreground hover:opacity-80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-7 gap-1 px-2 has-[>svg]:px-1.5",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        lg: "h-12 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, style, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  // Apply CSS variable backgrounds based on variant
  const variantStyles = React.useMemo(() => {
    if (variant === "primary") {
      return {
        background: "var(--primary-button-bg)",
        borderRadius: "var(--radius-button)",
        ...style,
      };
    }
    if (variant === "default") {
      return {
        background: "var(--primary)",
        borderRadius: "var(--radius-button)",
        ...style,
      };
    }
    if (variant === "destructive") {
      return {
        background: "var(--destructive)",
        borderRadius: "var(--radius-button)",
        ...style,
      };
    }
    if (variant === "secondary") {
      return {
        background: "var(--secondary)",
        borderRadius: "var(--radius-button)",
        ...style,
      };
    }
    if (variant === "outline") {
      return {
        background: "var(--lum-01)",
        borderRadius: "var(--radius-button)",
        borderColor: "var(--border)",
        ...style,
      };
    }
    return {
      borderRadius: "var(--radius-button)",
      ...style,
    };
  }, [variant, style]);

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={variantStyles}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };