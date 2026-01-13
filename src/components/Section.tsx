import { ReactNode, forwardRef } from "react";

export type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, children, ariaLabel }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        aria-label={ariaLabel}
        className={`w-full px-4 sm:px-6 lg:px-24 ${className ?? ""}`}
      >
        <div className="mx-auto max-w-[1340px]">{children}</div>
      </section>
    );
  }
);

Section.displayName = "Section";
