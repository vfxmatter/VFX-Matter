import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Users, Target, Award } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold mb-6">About Visual Lab</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are a collective of designers and educators dedicated to making the fundamental principles of visual communication accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Users, title: "Our Community", desc: "A global network of learners sharing their design journey." },
            { icon: Target, title: "Our Mission", desc: "To bridge the gap between intuition and intentional design." },
            { icon: Award, title: "Our Standard", desc: "Excellence in visual education and interactive learning." }
          ].map((item, i) => (
            <Card key={i} className="p-8 border-2 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>

        <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] mb-24">
          <img 
            src="https://picsum.photos/seed/studio/1600/700" 
            alt="Our Studio" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-4xl font-display font-bold mb-2">Design is a Journey</h2>
              <p className="opacity-80">Join us in exploring the infinite possibilities of the eye.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
