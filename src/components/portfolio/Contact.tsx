import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';
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
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/919325390860',
    color: 'hover:bg-[#25D366] hover:text-white',
  },
];

export function Contact() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'virendrasonar187@gmail.com';
  const phoneRaw = '+919325390860';
  const phoneDisplay = '+91-9325390860';

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);

      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
        toast.success('Email copied!');
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
        toast.success('Phone copied!');
      }
    } catch {
      toast.error('Failed to copy');
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 lg:py-36 bg-muted/30 relative overflow-hidden bg-[hsl(var(--section-5))] py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        <div
          className={cn(
            'max-w-4xl mx-auto transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >

          <div
            className="
    glass
    !border
    !border-black/20
    dark:!border-white/10
    rounded-3xl
    p-10 lg:p-14
    text-center
    mb-12
  "
          >


            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <h3 className="text-xl font-display font-semibold mb-2">
              Contact Information
            </h3>

            <p className="text-muted-foreground mb-8">
              Reach out via email or phone — I’m always happy to connect.
            </p>

            {/* Email + Phone */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

              {/* Email */}
              <div className="relative w-full md:w-[350px]">

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => copyToClipboard(email, 'email')}
                  className="border-primary/50 hover:bg-primary/10 hover:border-primary w-full pr-12 h-14"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span className="font-mono text-sm truncate">
                    {email}
                  </span>
                </Button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(email, 'email');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-primary/10 transition"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground hover:text-primary transition" />
                  )}
                </button>

              </div>

              {/* Phone */}
              <div className="relative w-full md:w-[350px]">

                <a href={`tel:${phoneRaw}`} className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 hover:border-primary w-full pr-12 h-14"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    <span className="font-mono text-sm">
                      {phoneDisplay}
                    </span>
                  </Button>
                </a>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    copyToClipboard(phoneDisplay, 'phone');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-primary/10 transition"
                >
                  {copiedPhone ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground hover:text-primary transition" />
                  )}
                </button>

              </div>

            </div>

          </div>

          {/* Location + Relocation */}
          <div className="text-center mb-10">

            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>Currently based in Pune, India</span>
            </div>

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 ml-0.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Relocation • Remote & On-Site Opportunities
            </span>

          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
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
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="
  text-center
  text-sm
  text-muted-foreground
  border-t border-border/50
  pt-6 mt-12
">
            © {new Date().getFullYear()}
            <span className="font-medium text-foreground ml-1">
              Virendra Sonar
            </span>. All rights reserved.
          </div>

        </div>
      </div>
    </section>
  );
}
