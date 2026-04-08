import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function WhyItMatters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const colorX = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
  const typeX = useTransform(scrollYProgress, [0.2, 0.6], [100, 0]);
  const layoutY = useTransform(scrollYProgress, [0.4, 0.8], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-display font-bold mb-6">Why it Matters</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Design isn't just decoration. It's the alchemy of elements that transforms a message into a movement.
          </p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Color Layer */}
          <motion.div 
            style={{ x: colorX }}
            className="absolute z-10 w-64 h-64 rounded-full bg-accent/80 backdrop-blur-xl flex items-center justify-center -ml-40 -mt-20 border-4 border-white dark:border-slate-900 shadow-2xl"
          >
            <span className="text-accent-foreground font-display font-bold text-2xl">COLOR</span>
          </motion.div>

          {/* Typography Layer */}
          <motion.div 
            style={{ x: typeX }}
            className="absolute z-20 w-64 h-64 rounded-full bg-primary/80 backdrop-blur-xl flex items-center justify-center ml-40 mt-20 border-4 border-white dark:border-slate-900 shadow-2xl"
          >
            <span className="text-primary-foreground font-display font-bold text-2xl">TYPE</span>
          </motion.div>

          {/* Layout Layer */}
          <motion.div 
            style={{ y: layoutY }}
            className="absolute z-30 w-64 h-64 rounded-full bg-primary/80 backdrop-blur-xl flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-2xl"
          >
            <span className="text-primary-foreground font-display font-bold text-2xl">LAYOUT</span>
          </motion.div>

          {/* Result Layer */}
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm"
          >
            <div className="w-full max-w-3xl p-12 border-4 border-primary rounded-[3rem] text-center">
              <div className="text-[10vw] font-display font-black leading-none mb-4 tracking-tighter">
                BRAND
              </div>
              <p className="text-2xl font-medium text-muted-foreground">
                The sum of intentional choices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
