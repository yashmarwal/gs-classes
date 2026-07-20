import { motion } from "framer-motion";

const symbols = [
  { char: "√", top: "12%", left: "8%", size: "text-4xl", duration: 7 },
  { char: "π", top: "22%", left: "88%", size: "text-5xl", duration: 8.5 },
  { char: "∑", top: "70%", left: "5%", size: "text-4xl", duration: 6.5 },
  { char: "÷", top: "80%", left: "90%", size: "text-3xl", duration: 7.5 },
  { char: "×", top: "15%", left: "50%", size: "text-2xl", duration: 6 },
  { char: "∞", top: "60%", left: "78%", size: "text-3xl", duration: 9 },
];

const FloatingMathSymbols = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {symbols.map((s, i) => (
      <motion.span
        key={i}
        className={`absolute font-display font-bold text-white/[0.06] ${s.size}`}
        style={{ top: s.top, left: s.left }}
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
      >
        {s.char}
      </motion.span>
    ))}
  </div>
);

export default FloatingMathSymbols;
