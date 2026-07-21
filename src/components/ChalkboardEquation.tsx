import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Each frame of the little "proof" the chalkboard writes out, one line revealed
// at a time before the whole board gets erased and the loop restarts.
const lines = ["x² + 5x + 6 = 0", "(x + 2)(x + 3) = 0", "x = −2, −3"];

const STEP_MS = 1500;
const HOLD_MS = 1600;
const ERASE_MS = 900;

const ChalkboardEquation = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [erasing, setErasing] = useState(false);
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(fn, delay);
      timeouts.current.push(id);
    };

    const runCycle = () => {
      setErasing(false);
      setVisibleLines(0);
      lines.forEach((_, i) => {
        schedule(() => setVisibleLines(i + 1), (i + 1) * STEP_MS);
      });
      schedule(() => setErasing(true), lines.length * STEP_MS + HOLD_MS);
      schedule(runCycle, lines.length * STEP_MS + HOLD_MS + ERASE_MS + 400);
    };

    runCycle();
    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  return (
    <div className="relative select-none" aria-hidden="true">
      {/* Wooden frame */}
      <div className="rounded-2xl border-[10px] border-[#6b4a34] shadow-2xl overflow-hidden">
        {/* Board surface */}
        <div
          className="relative bg-[#233829] p-7 md:p-9 min-h-[280px] flex flex-col justify-center"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)",
          }}
        >
          {/* Chalk dust glow */}
          <div className="absolute top-4 left-6 w-24 h-24 bg-white/[0.04] rounded-full blur-2xl" />

          <div
            className={`space-y-5 transition-opacity duration-700 ${erasing ? "opacity-0" : "opacity-100"}`}
          >
            <AnimatePresence mode="popLayout">
              {lines.slice(0, visibleLines).map((line, i) => (
                <div key={i}>
                  {i > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 0.5, y: 0 }}
                      className="text-white/50 text-xl mb-2"
                    >
                      ↓
                    </motion.div>
                  )}
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`font-hand text-2xl md:text-3xl text-white/90 ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                  >
                    {line}
                    {i === lines.length - 1 && visibleLines === lines.length && (
                      <span className="text-warm ml-2">✓</span>
                    )}
                  </motion.p>
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Eraser sweep */}
          {erasing && (
            <motion.div
              initial={{ x: "-110%" }}
              animate={{ x: "110%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 w-2/3 bg-white/[0.06] blur-sm"
            />
          )}
        </div>

        {/* Chalk tray */}
        <div className="bg-[#5a3d29] h-4 flex items-center gap-2 px-4">
          <span className="w-6 h-1.5 rounded-full bg-white/70" />
          <span className="w-4 h-1.5 rounded-full bg-white/40" />
          <span className="ml-auto w-5 h-2.5 rounded-sm bg-white/20" />
        </div>
      </div>
    </div>
  );
};

export default ChalkboardEquation;
