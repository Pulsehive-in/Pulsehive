"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words = "",
  className = "",
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = String(words).split(" ");

  useEffect(() => {
    if (!scope) return;
    // animate only when scope is ready
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 0.5,
        delay: stagger(0.08),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="dark:text-white text-black opacity-0 inline-block mr-2 leading-tight"
          style={{ filter: filter ? "blur(10px)" : "none" }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-base sm:text-lg md:text-xl xl:text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
