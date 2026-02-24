import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'backdrop-blur-xl bg-background/70 border-b border-border/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between">

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl font-extrabold tracking-tight transition-all duration-300 hover:opacity-80"
          >
            <span className="
    bg-gradient-to-r from-blue-900 to-indigo-600
    dark:from-blue-500 dark:to-indigo-300
    bg-clip-text text-transparent
  ">
              V
            </span>
            <span className="
    bg-gradient-to-r from-blue-900 to-indigo-500
    dark:from-blue-300 dark:to-indigo-100
    bg-clip-text text-transparent
  ">
              S
            </span>
          </a>




          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground"
              >
                {item.name}
              </a>
            ))}

            {/* FIXED RESUME BUTTON (Outline Style) */}
            <a
              href="/virendra-sonar-java-full-stack-developer-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="outline"
                className="ml-2 border-primary/60 hover:border-primary hover:bg-primary/10 rounded-[7px]"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-1 hover:bg-primary/10"
            >
              {isDark ? (
                <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
              )}
            </Button>

          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">

            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="backdrop-blur-xl bg-background/80 border border-border rounded-xl p-4 space-y-4 shadow-lg">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-center text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Resume Button */}
            <Button
              asChild
              variant="outline"
              className="w-full border-primary/60 hover:border-primary hover:bg-primary/10 rounded-[8px]"
            >
              <a
                href="/Virendra_Sonar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>

          </div>
        </div>

      </div>
    </nav>
  );
}
