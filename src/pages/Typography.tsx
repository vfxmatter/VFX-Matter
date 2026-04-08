import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Type, Search, Sparkles, Briefcase, Candy } from 'lucide-react';

const moods = [
  { id: 'corporate', name: 'Law Firm', icon: Briefcase, vibe: 'Trustworthy, Traditional, Serious', fonts: ['Merriweather', 'Montserrat'] },
  { id: 'playful', name: 'Candy Shop', icon: Candy, vibe: 'Energetic, Friendly, Fun', fonts: ['Outfit', 'Inter'] },
  { id: 'modern', name: 'Tech Startup', icon: Sparkles, vibe: 'Clean, Innovative, Minimal', fonts: ['JetBrains Mono', 'Inter'] },
];

export function Typography() {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const anatomyParts = [
    { id: 'ascender', name: 'Ascender', description: 'The part of a lowercase letter that rises above the x-height.', pos: 'top-0 left-1/4' },
    { id: 'descender', name: 'Descender', description: 'The part of a letter that extends below the baseline.', pos: 'bottom-0 left-1/2' },
    { id: 'serif', name: 'Serif', description: 'A small decorative line at the end of a character stroke.', pos: 'bottom-1/4 right-1/4' },
    { id: 'kerning', name: 'Kerning', description: 'The adjustment of space between two individual characters.', pos: 'top-1/2 right-1/2' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                Pillar 04
              </div>
              <h1 className="text-5xl font-display font-bold mb-6">Typography</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The art and practice of styling text. Typography determines how information is perceived before a single word is read.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/50 border flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Type className="text-primary-foreground w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">The Anatomy</h4>
                    <p className="text-xs text-muted-foreground">Understand the personality of letterforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {/* Anatomy Diagram */}
            <Card className="p-8 border-2 overflow-hidden relative">
              <h3 className="text-xl font-bold mb-12 flex items-center gap-2">
                <Search className="w-5 h-5 text-accent" />
                Anatomy of Type
              </h3>

              <div className="relative h-80 flex items-center justify-center bg-muted/20 rounded-2xl border-2 border-dashed border-border/50">
                {/* Large Word for Anatomy */}
                <div className="text-[12rem] font-display font-black leading-none select-none relative">
                  <span className="opacity-10 dark:opacity-20">Typography</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-primary">Gg</span>
                  </div>
                  
                  {/* Interactive Hotspots */}
                  {anatomyParts.map((part) => (
                    <motion.div
                      key={part.id}
                      onMouseEnter={() => setHoveredPart(part.id)}
                      onMouseLeave={() => setHoveredPart(null)}
                      className={cn(
                        "absolute w-6 h-6 rounded-full border-2 border-accent cursor-help flex items-center justify-center transition-all",
                        hoveredPart === part.id ? "bg-accent scale-125" : "bg-background"
                      )}
                      style={{ 
                        top: part.id === 'ascender' ? '10%' : part.id === 'descender' ? '80%' : part.id === 'serif' ? '70%' : '45%',
                        left: part.id === 'ascender' ? '45%' : part.id === 'descender' ? '55%' : part.id === 'serif' ? '62%' : '50%',
                      }}
                    >
                      <div className={cn("w-1.5 h-1.5 rounded-full", hoveredPart === part.id ? "bg-accent-foreground" : "bg-accent")} />
                    </motion.div>
                  ))}
                </div>

                {/* Info Box */}
                <motion.div 
                  animate={{ opacity: hoveredPart ? 1 : 0, y: hoveredPart ? 0 : 10 }}
                  className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border-accent/30"
                >
                  {hoveredPart && (
                    <>
                      <h4 className="font-bold text-accent uppercase text-xs tracking-widest mb-1">
                        {anatomyParts.find(p => p.id === hoveredPart)?.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {anatomyParts.find(p => p.id === hoveredPart)?.description}
                      </p>
                    </>
                  )}
                </motion.div>
              </div>
            </Card>

            {/* Mood Picker */}
            <Card className="p-8 border-2">
              <h3 className="text-xl font-bold mb-8">The Mood Picker</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                {moods.map((mood) => (
                  <Button
                    key={mood.id}
                    variant={selectedMood.id === mood.id ? "default" : "outline"}
                    className="h-auto py-6 flex flex-col gap-3 rounded-2xl"
                    onClick={() => setSelectedMood(mood)}
                  >
                    <mood.icon className="w-6 h-6" />
                    <div className="text-center">
                      <div className="font-bold">{mood.name}</div>
                      <div className="text-[10px] opacity-60 uppercase tracking-tighter">Vibe: {mood.id}</div>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="p-12 rounded-3xl bg-muted/30 border-2 border-dashed border-border/50 text-center">
                <div className="mb-8">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Vibe Check</h5>
                  <p className="text-sm text-muted-foreground">{selectedMood.vibe}</p>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="text-xs font-mono opacity-50">Heading: {selectedMood.fonts[0]}</div>
                    <div className="text-5xl font-bold tracking-tight" style={{ fontFamily: selectedMood.fonts[0] }}>
                      The Quick Brown Fox
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-mono opacity-50">Body: {selectedMood.fonts[1]}</div>
                    <div className="text-lg leading-relaxed max-w-md mx-auto" style={{ fontFamily: selectedMood.fonts[1] }}>
                      Jumps over the lazy dog. Typography is the voice of your brand. Choose it wisely to match your message.
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
