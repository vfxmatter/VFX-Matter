import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Info, Maximize2, MousePointer2, Layers } from 'lucide-react';

const elements = [
  {
    name: "Line",
    description: "The path of a moving point. Lines define boundaries, create movement, and direct the eye.",
    example: "Horizontal lines suggest calm, while diagonal lines create energy."
  },
  {
    name: "Shape",
    description: "A two-dimensional area defined by an outline. Shapes communicate tone instantly.",
    example: "Geometric shapes feel structured; organic shapes feel natural."
  },
  {
    name: "Texture",
    description: "The surface quality of a design. It adds visual interest and a heightened sensory experience.",
    example: "Visual texture can make a flat screen feel tactile and deep."
  },
  {
    name: "Value",
    description: "The lightness or darkness of a color. Value creates depth and mass.",
    example: "High contrast values create drama; subtle values create elegance."
  }
];

export function Elements() {
  const [activeGlossary, setActiveGlossary] = useState<string | null>(null);
  const [showNegativeSpace, setShowNegativeSpace] = useState(false);

  return (
    <div className="pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                Pillar 01
              </div>
              <h1 className="text-5xl font-display font-bold mb-6">Elements of Design</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The fundamental building blocks of visual art. Before you can arrange, you must understand the raw materials.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/50 border flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Layers className="text-primary-foreground w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">The Laboratory</h4>
                    <p className="text-xs text-muted-foreground">Experiment with raw visual components below.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {/* Interactive Glossary */}
            <Card className="p-8 border-2 overflow-hidden relative">
              <div className="flex items-center gap-2 mb-8">
                <Info className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold">Interactive Glossary</h3>
              </div>
              
              <div className={cn(
                "grid sm:grid-cols-2 gap-4 transition-all duration-500",
                activeGlossary === 'Texture' && "grainy"
              )}>
                {elements.map((el) => (
                  <motion.div
                    key={el.name}
                    onMouseEnter={() => setActiveGlossary(el.name)}
                    onMouseLeave={() => setActiveGlossary(null)}
                    className={cn(
                      "p-6 rounded-2xl border-2 transition-all cursor-default group",
                      activeGlossary === el.name ? "border-accent bg-accent/5" : "border-transparent bg-muted/30"
                    )}
                  >
                    <h4 className="text-lg font-bold mb-2 flex items-center justify-between">
                      {el.name}
                      <MousePointer2 className={cn("w-4 h-4 transition-opacity", activeGlossary === el.name ? "opacity-100" : "opacity-0")} />
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {el.description}
                    </p>
                    <div className={cn(
                      "text-xs font-medium p-3 rounded-lg bg-background border transition-all",
                      activeGlossary === el.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    )}>
                      <span className="text-accent font-bold uppercase mr-2">Example:</span>
                      {el.example}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {activeGlossary === 'Texture' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none border-4 border-accent/20 rounded-xl"
                />
              )}
            </Card>

            {/* Space Module */}
            <Card className="p-8 border-2 bg-primary text-primary-foreground overflow-hidden relative">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">The Space Module</h3>
                  <p className="text-primary-foreground/60 text-sm max-w-md">
                    Space is the breath of design. Toggle between positive and negative space to see how the "empty" areas define the form.
                  </p>
                </div>
                <Button 
                  variant={showNegativeSpace ? "secondary" : "outline"} 
                  onClick={() => setShowNegativeSpace(!showNegativeSpace)}
                  className="rounded-full"
                >
                  {showNegativeSpace ? "Show Positive" : "Show Negative"}
                </Button>
              </div>

              <div className="relative h-64 flex items-center justify-center">
                {/* FedEx Style Logo Concept */}
                <div className="flex items-center font-display font-black text-8xl tracking-tighter select-none">
                  <span className={cn("transition-opacity duration-500", showNegativeSpace ? "opacity-20" : "opacity-100")}>Ex</span>
                  <div className="relative">
                    <span className={cn("transition-opacity duration-500", showNegativeSpace ? "opacity-20" : "opacity-100")}>p</span>
                    {/* The Negative Space Arrow */}
                    <motion.div 
                      animate={{ 
                        opacity: showNegativeSpace ? 1 : 0,
                        scale: showNegativeSpace ? 1.1 : 1,
                        x: showNegativeSpace ? 10 : 0
                      }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-12 h-12 bg-accent rounded-sm rotate-45 translate-x-12" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-accent px-3 py-1 rounded text-[10px] font-mono uppercase text-accent-foreground">
                        Negative Arrow
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-8 border-t border-primary-foreground/20 pt-8">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Positive Space</h5>
                  <p className="text-xs text-primary-foreground/60">The area occupied by the subject matter (the letters 'Ex').</p>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Negative Space</h5>
                  <p className="text-xs text-primary-foreground/60">The empty space between elements that creates hidden forms.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
