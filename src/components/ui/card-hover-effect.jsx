import { cn } from "../../lib/utils.js";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-20 text-center sm:mt-90 md:mt-200 lg:mt-20">
      {/* Section Heading */}
      <h1 className="text-white headFont text-2xl sm:text-4xl md:text-5xl font-bold mb-10 leading-tight">
        We provide effective design and <br className="sm:block" />{" "}
        marketing solutions.
      </h1>

      {/* Grid Section */}
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item?.link || idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-700/60 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.1 },
                  }}
                />
              )}
            </AnimatePresence>

            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 sm:p-8 overflow-hidden bg-black border border-transparent dark:border-white/[0.1] group-hover:border-slate-600 transition-all duration-300 relative z-20 flex flex-col  items-center",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-semibold text-lg sm:text-xl tracking-wide mt-4 group-hover:text-white transition-colors duration-200",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 sm:mt-6 text-zinc-400 tracking-wide leading-relaxed text-sm  sm:text-base w-90 ",
        className
      )}
    >
      {children}
    </p>
  );
};
