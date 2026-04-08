import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Globe, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-display font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have questions about our curriculum or want to collaborate? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@visuallab.design" },
                { icon: MessageSquare, label: "Support", value: "chat.visuallab.design" },
                { icon: Globe, label: "Office", value: "Design District, Creative City" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 border-2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input className="w-full h-12 px-4 rounded-xl bg-muted border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input className="w-full h-12 px-4 rounded-xl bg-muted border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input className="w-full h-12 px-4 rounded-xl bg-muted border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="w-full h-32 p-4 rounded-xl bg-muted border focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell us what's on your mind..." />
              </div>
              <Button className="w-full h-14 rounded-xl text-lg group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
