import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  base: "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    primary:
      "bg-accent-500 text-white hover:bg-accent-600 shadow-sm hover:shadow-md",
    secondary:
      "border border-primary-300 bg-transparent text-primary-700 hover:border-accent-500 hover:text-accent-600",
    ghost: "text-primary-600 hover:bg-primary-100 hover:text-primary-900",
  },
  sizes: {
    sm: "h-9 px-4 text-sm rounded-md",
    md: "h-11 px-6 text-base rounded-lg",
    lg: "h-13 px-8 text-lg rounded-lg",
  },
};

export function getButtonClasses(
  variant: keyof typeof buttonVariants.variants = "primary",
  size: keyof typeof buttonVariants.sizes = "md",
  className?: string
) {
  return cn(
    buttonVariants.base,
    buttonVariants.variants[variant],
    buttonVariants.sizes[size],
    className
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variants;
  size?: keyof typeof buttonVariants.sizes;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={getButtonClasses(variant, size, className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
