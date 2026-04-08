import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Palette, Type as TypeIcon } from 'lucide-react';

export function Footer() {
  const [footerFont, setFooterFont] = useState('font-sans');
  const [footerColor, setFooterColor] = useState('bg-primary');
  const [footerRadius, setFooterRadius] = useState(12);

  const fonts = [
    { name: 'Sans', class: 'font-sans' },
    { name: 'Display', class: 'font-display' },
    { name: 'Mono', class: 'font-mono' },
  ];

  const colors = [
    { name: 'Dark', class: 'bg-primary' },
    { name: 'Blue', class: 'bg-blue-600' },
    { name: 'Orange', class: 'bg-orange-600' },
    { name: 'Emerald', class: 'bg-emerald-600' },
  ];

  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-muted/50 rounded-[2rem] p-8 md:p-12 border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Design Playground</h3>
              <p className="text-muted-foreground mb-8">
                Practice what you've learned. Experiment with the styles of this footer to see how small changes impact the overall feel.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest mb-3 block opacity-50">Typography</label>
                  <div className="flex flex-wrap gap-2">
                    {fonts.map((f) => (
                      <Button
                        key={f.class}
                        variant={footerFont === f.class ? 'default' : 'outline'}
                        size="sm"
                        className="rounded-full"
                        onClick={() => setFooterFont(f.class)}
                      >
                        {f.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-widest mb-3 block opacity-50">Color Palette</label>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((c) => (
                      <button
                        key={c.class}
                        className={`w-8 h-8 rounded-full ${c.class} border-2 ${footerColor === c.class ? 'border-foreground scale-110' : 'border-transparent'} transition-all`}
                        onClick={() => setFooterColor(c.class)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-widest mb-3 block opacity-50">Corner Radius: {footerRadius}px</label>
                  <Slider 
                    value={[footerRadius]} 
                    onValueChange={(v) => setFooterRadius(v[0])} 
                    max={40} 
                    step={1} 
                    className="max-w-xs"
                  />
                </div>
              </div>
            </div>

            <div 
              className={`p-12 transition-all duration-500 ${footerColor} ${footerFont} text-primary-foreground`}
              style={{ borderRadius: `${footerRadius}px` }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 border-2 border-current rotate-45" />
                <span className="font-bold tracking-tighter">VISUAL LAB</span>
              </div>
              <p className="text-lg mb-8 opacity-90">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <div className="flex justify-between items-end">
                <div className="text-[10px] uppercase tracking-widest opacity-60">
                  © 2026 VISUAL LAB <br />
                  BUILT FOR THE CURIOUS
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <TypeIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
