import { motion } from 'motion/react';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/src/hooks/use-theme';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export function Navbar({ activePage, setActivePage }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const learnLinks = [
    { name: 'Elements', id: 'elements' },
    { name: 'Principles', id: 'principles' },
    { name: 'Color', id: 'color' },
    { name: 'Typography', id: 'typography' },
  ];

  const mainLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const isLearnActive = learnLinks.some(link => link.id === activePage);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setActivePage('home')}
          >
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <div className="w-4 h-4 border-2 border-primary-foreground rotate-45" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter">VISUAL<span className="text-muted-foreground font-light">LAB</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActivePage('home')}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-2",
                activePage === 'home' ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
              {activePage === 'home' && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 relative py-2 outline-none",
                    isLearnActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  Learn
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isLearnActive && "rotate-180")} />
                  {isLearnActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {learnLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.id}
                    onClick={() => setActivePage(link.id)}
                    className={cn(
                      "cursor-pointer",
                      activePage === link.id && "bg-accent text-accent-foreground"
                    )}
                  >
                    {link.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {mainLinks.filter(l => l.id !== 'home').map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  activePage === link.id ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                {activePage === link.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button 
              className="hidden sm:flex rounded-full px-6"
              onClick={() => setActivePage('elements')}
            >
              Start Learning
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b px-4 py-6 flex flex-col gap-2"
        >
          <button
            onClick={() => { setActivePage('home'); setIsMenuOpen(false); }}
            className={cn(
              "text-lg font-medium text-left px-4 py-2 rounded-lg",
              activePage === 'home' ? "bg-secondary text-primary" : "text-muted-foreground"
            )}
          >
            Home
          </button>

          <div className="px-4 py-2">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Learn</div>
            <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-muted">
              {learnLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "text-base font-medium text-left px-4 py-2 rounded-lg",
                    activePage === link.id ? "bg-secondary text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {mainLinks.filter(l => l.id !== 'home').map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActivePage(link.id);
                setIsMenuOpen(false);
              }}
              className={cn(
                "text-lg font-medium text-left px-4 py-2 rounded-lg",
                activePage === link.id ? "bg-secondary text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="w-full mt-4"
            onClick={() => {
              setActivePage('elements');
              setIsMenuOpen(false);
            }}
          >
            Start Learning
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
