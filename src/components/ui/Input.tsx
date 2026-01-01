import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="text-primary-700 mb-2 block text-sm font-medium"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "border-primary-200 focus:border-accent-500 border-1.5 w-full rounded-lg px-4 py-3 text-base transition-colors",
            "placeholder:text-primary-400",
            "focus:ring-accent-500/20 focus:ring-2 focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error focus:border-error focus:ring-error/20",
            className
          )}
          {...props}
        />
        {error && <p className="text-error mt-1.5 text-sm">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
