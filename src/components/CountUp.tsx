import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  className?: string;
}

const CountUp = ({ to, className = "" }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1200, bounce: 0 });

  useEffect(() => {
    if (isInView) count.set(to);
  }, [isInView, to, count]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
};

export default CountUp;
