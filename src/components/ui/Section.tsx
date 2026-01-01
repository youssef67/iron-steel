import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
  variant?: "default" | "alternate" | "accent";
  size?: "sm" | "md" | "lg";
}

function Section({
  as: Component = "section",
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: SectionProps) {
  const variants = {
    default: "bg-white",
    alternate: "bg-surface",
    accent: "bg-accent-50",
  };

  const sizes = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  };

  return (
    <Component
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    >
      <div className="container-custom">{children}</div>
    </Component>
  );
}

function SectionHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto mb-12 max-w-2xl text-center", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-primary-900 text-3xl font-semibold md:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

function SectionDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-primary-500 mt-4 text-lg", className)} {...props}>
      {children}
    </p>
  );
}

export { Section, SectionHeader, SectionTitle, SectionDescription };
