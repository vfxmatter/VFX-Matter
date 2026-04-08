import { motion, useMotionValue, useSpring } from 'motion/react';
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero({ onStart }: { onStart: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Generate random "messy" positions
  const [elements] = useState(() => 
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      messyX: Math.random() * 80 + 10,
      messyY: Math.random() * 80 + 10,
      messyRotate: Math.random() * 40 - 20,
      gridX: (i % 4) * 25 + 5,
      gridY: Math.floor(i / 4) * 30 + 10,
      color: [
        'bg-accent/20', 
        'bg-primary/10', 
        'bg-primary/30', 
        'bg-primary/20',
        'border-accent/40 border-2'
      ][Math.floor(Math.random() * 5)]
    }))
  );

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Interactive Learning
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter mb-8">
            Master the <br />
            <span className="text-accent">Language</span> <br />
            of the Eye.
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
            A structured guide to the fundamental pillars of visual communication. 
            Learn how to see, think, and build like a master designer.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg group" onClick={onStart}>
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg">
              Explore Gallery
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] group cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          ref={containerRef}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 border-2 border-dashed border-border/50 rounded-3xl overflow-hidden bg-muted/30">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            />
            
            {/* Interactive Elements */}
            {elements.map((el) => (
              <motion.div
                key={el.id}
                className={`absolute rounded-xl ${el.color} backdrop-blur-sm transition-colors duration-500`}
                animate={{
                  left: isHovered ? `${el.gridX}%` : `${el.messyX}%`,
                  top: isHovered ? `${el.gridY}%` : `${el.messyY}%`,
                  rotate: isHovered ? 0 : el.messyRotate,
                  width: isHovered ? '20%' : `${el.width}px`,
                  height: isHovered ? '25%' : `${el.height}px`,
                }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: el.id * 0.02
                }}
              />
            ))}

            {/* Hover Indicator */}
            <motion.div
              className="absolute w-24 h-24 border-2 border-primary rounded-full pointer-events-none z-10 flex items-center justify-center"
              style={{
                left: smoothX,
                top: smoothY,
                x: '-50%',
                y: '-50%',
                opacity: isHovered ? 1 : 0
              }}
            >
              <div className="w-1 h-1 bg-primary rounded-full" />
              <div className="absolute -top-8 text-[10px] font-mono uppercase tracking-widest bg-primary text-primary-foreground px-2 py-0.5 rounded">
                Aligning
              </div>
            </motion.div>

            {/* Status Text */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="font-mono text-[10px] uppercase tracking-tighter opacity-50">
                System: {isHovered ? 'GRID_ACTIVE' : 'ENTROPY_DETECTED'} <br />
                Status: {isHovered ? 'OPTIMIZED' : 'CHAOTIC'}
              </div>
              <div className="text-sm font-display font-medium italic">
                {isHovered ? "Order is the foundation of beauty." : "Hover to find the structure."}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
