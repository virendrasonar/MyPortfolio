import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

export function About() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-13 relative overflow-hidden scroll-mt-0 bg-[hsl(var(--section-2))] py-28"
    >
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-8xl mx-auto px-12 lg:px-24">

        <div
          className={cn(
            "transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >

          {/* Heading */}
          <div className="text-center space-y-3 mb-8">
            <p className="text-sm text-primary font-medium uppercase tracking-wider">
              About Me
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold">
              Who I Am
            </h2>


          </div>

          {/* Premium Content Card */}
          <div
            className={cn(
              "relative bg-background/80 backdrop-blur-md border border-black/20 dark:border-border rounded-2xl p-10 lg:p-14 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(99,102,241,0.10)] hover:border-primary/40",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
              <p>
                I am a Java Full Stack Developer with strong expertise in backend development using Java and Spring Boot, complemented by hands-on experience in Angular. I design RESTful APIs, implement structured business logic, and integrate relational databases with efficiency and precision.
              </p>

              <p>
                I began my journey in web development, which sparked a deep curiosity about how frontend and backend systems work together to create reliable, high-performing applications. As I explored further, I developed a strong interest in backend architecture and full-stack engineering.
              </p>

              <p>
                I emphasize clean, modular code and robust application architecture to deliver maintainable and production-ready solutions. My objective is to build impactful, performance-driven software while continuously advancing my technical expertise.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-12 pt-10 text-center">

            <div className="group transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.9)]">
                2023
              </div>
              <div className="text-sm text-muted-foreground mt-2 transition-all duration-300 group-hover:text-primary">
                B.Tech Graduate
              </div>
            </div>

            <div className="group transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.9)]">
                7+
              </div>
              <div className="text-sm text-muted-foreground mt-2 transition-all duration-300 group-hover:text-primary">
                Hands-On Projects Built
              </div>
            </div>

            <div className="group transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.9)]">
                6 Months
              </div>
              <div className="text-sm text-muted-foreground mt-2 transition-all duration-300 group-hover:text-primary">
                Full Stack Training
              </div>
            </div>

          </div>

        </div>
      </div>
    </section >
  );
}
