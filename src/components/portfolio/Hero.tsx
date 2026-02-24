import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Download, MessageCircle } from 'lucide-react';

export function Hero() {

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(var(--section-1))] py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 items-center gap-24">

          {/* LEFT SECTION */}
          <div className="space-y-6 text-left">

            <p
              className="text-base text-muted-foreground opacity-0 animate-[simpleFade_0.6s_ease-out_forwards]"
              style={{ animationDelay: '0.2s' }}
            >
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-snug overflow-hidden mt-2">

              {"Hi, I am ".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-[letterSlideIn_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}

              {"Virendra Sonar".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block text-primary opacity-0 animate-[letterSlideIn_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${1.1 + index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}

            </h1>

            <h2 className="mt-3 text-xl md:text-2xl font-medium text-primary/80 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: '2.0s' }}>
              Java Full Stack Developer
            </h2>

            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: '2.3s' }}>
              I build scalable full-stack web applications with a strong backend logic and clean, intuitive design.
            </p>

            {/* BUTTONS */}
            <div
              className="flex flex-wrap gap-4 pt-4 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: '2.6s' }}
            >

              {/* 1️⃣ View Projects — Primary */}
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="
      bg-primary hover:bg-primary/90
      text-primary-foreground
      rounded-[8px]
      transition-all duration-300
      shadow-sm hover:shadow-md
    "
              >
                View Projects
              </Button>

              {/* 2️⃣ Resume — Strong Outline */}
              <a
                href="/virendra-sonar-java-full-stack-developer-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="
        border-primary text-primary
        hover:bg-primary hover:text-primary-foreground
        rounded-[8px]
        transition-all duration-300
      "
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </a>

              {/* 3️⃣ Contact — Same Outline Style */}
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="
      border-primary text-primary
      hover:bg-primary hover:text-primary-foreground
      rounded-[8px]
      transition-all duration-300
    "
              >
                Contact Me
              </Button>

            </div>

            {/* SOCIAL ICONS */}
            <div
              className="flex gap-5 pt-6 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: '2.9s' }}
            >

              {/* GitHub */}
              <a
                href="https://github.com/virendrasonar"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full border border-black/20 dark:border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="h-5 w-5 text-black dark:text-white group-hover:text-black transition" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/virendra-sonar"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full border border-black/20 dark:border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:bg-[#0077B5] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5 text-black dark:text-white group-hover:text-white transition" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919325390860"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full border border-black/20 dark:border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:bg-[#25D366] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5 text-black dark:text-white group-hover:text-white transition" />
              </a>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex justify-end">

            <div
              className="relative opacity-0 animate-[photoReveal_0.8s_ease-out_forwards]"
              style={{ animationDelay: '1.8s' }}
            >
              <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

              <img
                src="/profile.jpg"
                alt="Virendra Sonar"
                className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-primary shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

    </section >
  );
}
