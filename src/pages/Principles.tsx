import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Zap, Columns, Target, Move } from 'lucide-react';

export function Principles() {
  const [isAligned, setIsAligned] = useState(false);
  const [showRuleOfThirds, setShowRuleOfThirds] = useState(false);

  return (
    <div className="pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                Pillar 02
              </div>
              <h1 className="text-5xl font-display font-bold mb-6">Principles of Design</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The strategy of arrangement. Principles are the rules that govern how elements interact to create meaning.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/50 border flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Zap className="text-primary-foreground w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">The Strategy</h4>
                    <p className="text-xs text-muted-foreground">Master the art of visual organization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {/* Alignment Comparison */}
            <Card className="p-8 border-2 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <Columns className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold">Alignment: Poor vs. Clean</h3>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setIsAligned(!isAligned)}
                  className="rounded-full"
                >
                  {isAligned ? "Reset to Chaos" : "Apply Alignment"}
                </Button>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8 min-h-[300px] relative flex flex-col justify-center">
                <div className={cn(
                  "grid gap-4 transition-all duration-700 ease-in-out",
                  isAligned ? "grid-cols-3" : "grid-cols-1"
                )}>
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      layout
                      className={cn(
                        "p-6 rounded-xl border-2 bg-background transition-all",
                        isAligned ? "text-center" : i === 2 ? "ml-12" : i === 3 ? "ml-24" : ""
                      )}
                    >
                      <div className={cn("w-8 h-8 rounded bg-accent/20 mb-4", isAligned ? "mx-auto" : "")} />
                      <h4 className="font-bold mb-2">Module {i}</h4>
                      <p className="text-xs text-muted-foreground">
                        {isAligned ? "Perfectly aligned for clarity." : "Misaligned elements cause eye fatigue."}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                {isAligned && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-x-0 top-1/2 h-px bg-accent/20 -translate-y-1/2 pointer-events-none"
                  />
                )}
              </div>
            </Card>

            {/* Rule of Thirds Tool */}
            <Card className="p-8 border-2 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold">The Rule of Thirds</h3>
                </div>
                <Button 
                  variant={showRuleOfThirds ? "default" : "outline"} 
                  onClick={() => setShowRuleOfThirds(!showRuleOfThirds)}
                  className="rounded-full"
                >
                  {showRuleOfThirds ? "Hide Overlay" : "Show Overlay"}
                </Button>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden group">
                <img 
                  src="https://picsum.photos/seed/composition/1200/800" 
                  alt="Composition Example" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Rule of Thirds Grid */}
                <motion.div 
                  animate={{ opacity: showRuleOfThirds ? 1 : 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="border border-white/30 relative">
                        {[0, 2, 6, 8].includes(i) && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50 animate-pulse" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="absolute bottom-4 left-4 right-4 p-4 glass rounded-xl">
                  <p className="text-xs font-medium">
                    <span className="text-accent font-bold uppercase mr-2">Concept:</span>
                    Place key elements at the intersections to create balance and interest.
                  </p>
                </div>
              </div>
            </Card>

            {/* Emphasis Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-12 rounded-[2rem] bg-primary text-primary-foreground flex flex-col items-center text-center cursor-pointer group"
            >
              <Move className="w-12 h-12 mb-6 group-hover:rotate-12 transition-transform text-accent" />
              <h3 className="text-3xl font-display font-bold mb-4">Emphasis & Movement</h3>
              <p className="max-w-md opacity-90">
                Notice how this card grows slightly on hover? That's <strong>Emphasis</strong>. It directs your attention to the most important content.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
