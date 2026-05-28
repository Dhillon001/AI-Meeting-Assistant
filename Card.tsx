import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Card({ title, children, className = "", icon }: CardProps) {
  return (
    <section
      className={`rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 backdrop-blur-xl ${className}`}
    >
      <div className="mb-4 flex items-center gap-2">
        {icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
            {icon}
          </span>
        )}
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}
