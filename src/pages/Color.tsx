import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Palette, Heart, Shield, Zap, Star, Coffee } from 'lucide-react';

const colors = [
  { name: 'Red', hex: '#ef4444', complementary: '#22c55e', analogous: ['#f97316', '#ec4899'], triadic: ['#3b82f6', '#eab308'] },
  { name: 'Blue', hex: '#3b82f6', complementary: '#f97316', analogous: ['#06b6d4', '#6366f1'], triadic: ['#ef4444', '#22c55e'] },
  { name: 'Yellow', hex: '#eab308', complementary: '#a855f7', analogous: ['#facc15', '#f97316'], triadic: ['#ef4444', '#3b82f6'] },
  { name: 'Green', hex: '#22c55e', complementary: '#ef4444', analogous: ['#84cc16', '#10b981'], triadic: ['#3b82f6', '#f97316'] },
  { name: 'Purple', hex: '#a855f7', complementary: '#eab308', analogous: ['#6366f1', '#ec4899'], triadic: ['#f97316', '#22c55e'] },
  { name: 'Orange', hex: '#f97316', complementary: '#3b82f6', analogous: ['#ef4444', '#eab308'], triadic: ['#a855f7', '#10b981'] },
];

const psychology = [
  { emotion: 'Trust', color: 'Blue', icon: Shield, description: 'Wisdom, loyalty, and stability. Used by banks and tech giants.' },
  { emotion: 'Passion', color: 'Red', icon: Heart, description: 'Excitement, energy, and urgency. Stimulates appetite and heart rate.' },
  { emotion: 'Luxury', color: 'Purple', icon: Star, description: 'Royalty, mystery, and sophistication. Associated with premium quality.' },
  { emotion: 'Energy', color: 'Orange', icon: Zap, description: 'Friendliness, cheerfulness, and confidence. Great for calls to action.' },
  { emotion: 'Comfort', color: 'Yellow', icon: Coffee, description: 'Optimism, clarity, and warmth. The happiest hue in the spectrum.' },
];

export function Color() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [activeEmotion, setActiveEmotion] = useState<string | null>(null);

  return (
    <div className="pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                Pillar 03
              </div>
              <h1 className="text-5xl font-display font-bold mb-6">Color Theory</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The science and art of using color. Understand how hues interact and how they influence human behavior.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/50 border flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Palette className="text-primary-foreground w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">The Palette</h4>
                    <p className="text-xs text-muted-foreground">Master the psychology of the spectrum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {/* Interactive Color Wheel */}
            <Card className="p-8 border-2 overflow-hidden">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Palette className="w-5 h-5 text-accent" />
                Interactive Harmony Wheel
              </h3>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square flex items-center justify-center">
                  {/* The Wheel */}
                  <div className="absolute inset-0 rounded-full border-8 border-muted/30" />
                  {colors.map((c, i) => (
                    <motion.button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={cn(
                        "absolute w-12 h-12 rounded-full border-4 transition-all z-10",
                        selectedColor.name === c.name ? "border-foreground scale-125 shadow-xl" : "border-white dark:border-slate-900"
                      )}
                      style={{
                        backgroundColor: c.hex,
                        left: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                        top: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ))}
                  
                  {/* Center Display */}
                  <motion.div 
                    key={selectedColor.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-display font-black uppercase tracking-tighter" style={{ color: selectedColor.hex }}>
                      {selectedColor.name}
                    </div>
                    <div className="text-[10px] font-mono opacity-50">{selectedColor.hex}</div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Complementary</h5>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: selectedColor.complementary }} />
                      <span className="text-sm font-medium">Opposite on the wheel</span>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Analogous</h5>
                    <div className="flex gap-2">
                      {selectedColor.analogous.map((hex) => (
                        <div key={hex} className="w-10 h-10 rounded-lg" style={{ backgroundColor: hex }} />
                      ))}
                      <span className="text-sm font-medium flex items-center ml-2 text-muted-foreground">Neighbors</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Triadic</h5>
                    <div className="flex gap-2">
                      {selectedColor.triadic.map((hex) => (
                        <div key={hex} className="w-10 h-10 rounded-lg" style={{ backgroundColor: hex }} />
                      ))}
                      <span className="text-sm font-medium flex items-center ml-2 text-muted-foreground">Equidistant</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Psychology Matrix */}
            <Card className="p-8 border-2">
              <h3 className="text-xl font-bold mb-8">Psychology Matrix</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {psychology.map((item) => (
                  <motion.div
                    key={item.emotion}
                    onMouseEnter={() => setActiveEmotion(item.emotion)}
                    onMouseLeave={() => setActiveEmotion(null)}
                    className={cn(
                      "p-6 rounded-2xl border-2 transition-all cursor-pointer group",
                      activeEmotion === item.emotion ? "border-accent bg-accent/5" : "border-transparent bg-muted/30"
                    )}
                  >
                    <item.icon className={cn("w-6 h-6 mb-4 transition-colors", activeEmotion === item.emotion ? "text-accent" : "text-muted-foreground")} />
                    <h4 className="text-lg font-bold mb-1">{item.emotion}</h4>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">{item.color}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
