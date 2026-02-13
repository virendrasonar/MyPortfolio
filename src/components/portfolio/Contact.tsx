import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Copy, Check, MapPin, Send, Phone } from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/virendrasonar',
    color: 'hover:bg-foreground hover:text-background',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/virendra-sonar',
    color: 'hover:bg-[#0077B5] hover:text-white',
  },
];

export function Contact() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const [copied, setCopied] = useState(false);
  const email = 'virendrasonar187@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy email');
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Content */}
        <div
          className={cn(
            'max-w-2xl mx-auto transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {/* Email Card */}
          <div className="glass rounded-2xl p-8 mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-6">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">Reach out via email or phone</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={copyEmail}
                className="group border-primary/50 hover:bg-primary/10 hover:border-primary min-w-64"
              >
                <Mail className="mr-2 h-4 w-4" />
                <span className="font-mono text-sm">{email}</span>
                {copied ? (
                  <Check className="ml-2 h-4 w-4 text-primary" />
                ) : (
                  <Copy className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
              </Button>

              <a href="tel:+919325390860">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 hover:border-primary min-w-48"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  <span className="font-mono text-sm">+91-9325390860</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Location */}
          <div
            className={cn(
              'text-center mb-8 transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Available for remote work worldwide</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Actively looking for new opportunities
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={cn(
              'flex justify-center gap-4 transition-all duration-700 delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-4 rounded-full glass transition-all duration-300 hover:scale-110 hover:-translate-y-1',
                  social.color
                )}
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div
            className={cn(
              'text-center mt-12 transition-all duration-700 delay-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <a href={`mailto:${email}`}>
              <Button
                size="lg"
                className="gradient-bg text-primary-foreground hover:opacity-90 glow-primary"
              >
                <Send className="mr-2 h-4 w-4" />
                Send me a message
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={cn(
          'mt-20 pt-8 border-t border-border/50 text-center transition-all duration-700 delay-600',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
      >
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">&lt;Dev /&gt;</span>. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </section>
  );
}
