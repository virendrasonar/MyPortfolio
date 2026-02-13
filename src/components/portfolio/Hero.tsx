import { useTypingEffect } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

// Floating tech icons with positions
const floatingIcons = [
  { icon: '☕', label: 'Java', delay: '0s', position: 'top-24 right-[8%]' },
  { icon: '🍃', label: 'Spring Boot', delay: '0.5s', position: 'top-36 right-[28%]' },
  { icon: '🅰️', label: 'Angular', delay: '1s', position: 'bottom-36 right-[6%]' },
  { icon: '🐬', label: 'MySQL', delay: '1.5s', position: 'top-16 right-[18%]' },
  { icon: '🔗', label: 'REST API', delay: '0.3s', position: 'bottom-28 right-[24%]' },
  { icon: '⚡', label: 'JavaScript', delay: '0.8s', position: 'bottom-48 right-[14%]' },
];
export function Hero() {
  const typedText = useTypingEffect("Hi, I'm Virendra Sonar", 80, 300);
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient" />
      
      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-slow" />

      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => <div key={index} className={`absolute ${item.position} hidden lg:flex flex-col items-center gap-1 animate-float`} style={{
      animationDelay: item.delay
    }}>
          <span className="text-3xl">{item.icon}</span>
          <span className="text-xs text-muted-foreground">{item.label}</span>
        </div>)}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6 mx-[80px]">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground animate-fade-in text-justify">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                <span className="typing-cursor text-justify">{typedText}</span>
              </h1>
              <p className="text-xl md:text-2xl gradient-text font-medium animate-fade-in text-left" style={{
              animationDelay: '0.3s'
            }}>
                Java Full Stack Developer
              </p>
              <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in text-justify" style={{
              animationDelay: '0.5s'
            }}>I’m a Java Full Stack Developer with strong backend fundamentals in Java and Spring Boot. I build full-stack web applications using Angular and MySQL, focusing on clean code, structured API design, and practical problem-solving. </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex-col gap-4 justify-center animate-fade-in sm:flex-row flex items-center lg:justify-start" style={{
            animationDelay: '0.7s'
          }}>
              <Button size="lg" onClick={scrollToProjects} className="gradient-bg text-primary-foreground hover:opacity-90 glow-primary transition-all duration-300">
                View My Work
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact} className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300">
                Get in Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="gap-4 justify-center animate-fade-in flex-row flex items-center lg:justify-start" style={{
            animationDelay: '0.9s'
          }}>
              <a href="https://github.com/virendrasonar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/virendra-sonar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-secondary/20 hover:text-secondary transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Avatar/Illustration side - Desktop only */}
          <div className="flex-1 hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full gradient-bg opacity-20 blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              {/* Hexagonal tech avatar */}
              <div className="relative w-72 h-72">
                <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <clipPath id="hexClip">
                      <polygon points="150,10 280,80 280,220 150,290 20,220 20,80" />
                    </clipPath>
                    <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="hexStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" />
                    </linearGradient>
                  </defs>
                  {/* Outer glow hex */}
                  <polygon points="150,10 280,80 280,220 150,290 20,220 20,80"
                    fill="url(#hexGrad)" stroke="url(#hexStroke)" strokeWidth="2" />
                  {/* Inner content */}
                  <foreignObject x="20" y="10" width="260" height="280" clipPath="url(#hexClip)">
                    <div className="w-full h-full flex items-center justify-center bg-background/60 backdrop-blur-sm">
                      <div className="text-center">
                        <span className="text-6xl block mb-2">{'</>'}</span>
                        <span className="text-xs font-mono text-primary tracking-widest uppercase">Full Stack Dev</span>
                      </div>
                    </div>
                  </foreignObject>
                </svg>
                {/* Orbiting dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary animate-bounce-gentle" />
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-secondary animate-float" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent animate-float-delayed" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>;
}