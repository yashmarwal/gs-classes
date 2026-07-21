interface LogoProps {
  className?: string;
}

const Logo = ({ className = "w-10 h-10 rounded-xl" }: LogoProps) => (
  <img src="/logo.png" alt="GS Classes" className={`shadow-md shrink-0 object-cover ${className}`} />
);

export default Logo;
