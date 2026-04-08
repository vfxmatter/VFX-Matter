import { motion } from 'motion/react';
import { ArrowUpRight, Layers, Zap, Palette, Type } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  bgChar: string;
}

const pillars: Pillar[] = [
  {
    id: 'elements',
    title: 'Elements',
    description: 'The fundamental building blocks: Line, Shape, Space, and Texture.',
    icon: Layers,
    color: 'bg-primary',
    bgChar: 'E'
  },
  {
    id: 'principles',
    title: 'Principles',
    description: 'The cardinal rules of arrangement: Balance, Contrast, and Rhythm.',
    icon: Zap,
    color: 'bg-accent',
    bgChar: 'P'
  },
  {
    id: 'color',
    title: 'Color',
    description: 'The psychology and theory of hues, values, and emotional impact.',
    icon: Palette,
    color: 'bg-primary',
    bgChar: 'C'
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'The anatomy and personality of letterforms and font theory.',
    icon: Type,
    color: 'bg-accent',
    bgChar: 'T'
  }
];

export function CorePillars({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
              The Four Pillars of <br /> Visual Communication
            </h2>
            <p className="text-lg text-muted-foreground">
              Every masterpiece starts with these fundamentals. Explore each pillar to build your design vocabulary.
            </p>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest opacity-50">
            Curriculum v1.0 // 2026
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card 
                className="group relative h-[400px] overflow-hidden border-2 hover:border-primary transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                onClick={() => onSelect(pillar.id)}
              >
                {/* Background Character */}
                <div className="absolute top-0 right-0 text-[240px] font-display font-black leading-none opacity-5 group-hover:opacity-10 transition-opacity -mr-12 -mt-12 select-none">
                  {pillar.bgChar}
                </div>

                {/* Icon & Content */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/10`}>
                    <pillar.icon className={cn(
                      "w-6 h-6",
                      pillar.color === 'bg-primary' ? "text-primary-foreground" : "text-accent-foreground"
                    )} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 flex items-center gap-2">
                    {pillar.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Progress Bar (Decorative) */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
