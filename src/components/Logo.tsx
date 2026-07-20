interface LogoProps {
  className?: string;
  textClassName?: string;
}

const Logo = ({ className = "w-10 h-10 rounded-xl", textClassName = "text-sm" }: LogoProps) => (
  <div className={`bg-primary flex items-center justify-center shadow-md shrink-0 ${className}`}>
    <span className={`font-display font-bold text-primary-foreground leading-none ${textClassName}`}>GS</span>
  </div>
);

export default Logo;
