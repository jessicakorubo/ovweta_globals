import clsx from "clsx";
import Link from "next/link";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("max-w-7xl mx-auto px-6 lg:px-10", className)}>{children}</div>;
}

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({ children, href, variant = "primary", size = "md", className, onClick, type = "button", disabled }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-body font-bold tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-amber-500 text-steel-950 hover:bg-amber-400",
    outline: "border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-steel-950",
    ghost: "text-steel-300 hover:text-white hover:bg-steel-800",
  };
  const sizes = { sm: "text-xs px-4 py-2", md: "text-sm px-6 py-3", lg: "text-base px-8 py-4" };
  const cls = clsx(base, variants[variant], sizes[size], className);

  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} className={cls} onClick={onClick} disabled={disabled}>{children}</button>;
}

export function SectionHeader({ label, title, subtitle, center = false, light = false }: {
  label: string; title: string; subtitle?: string; center?: boolean; light?: boolean;
}) {
  return (
    <div className={clsx("mb-14", center && "text-center")}>
      <span className="text-amber-500 text-[10px] font-mono tracking-[0.25em] uppercase mb-3 block">{label}</span>
      <span className={clsx("amber-rule", center && "mx-auto")} />
      <h2 className={clsx("font-display text-5xl md:text-6xl tracking-wider leading-none", light ? "text-white" : "text-white")}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx("mt-4 text-base leading-relaxed max-w-xl text-steel-400", center && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
