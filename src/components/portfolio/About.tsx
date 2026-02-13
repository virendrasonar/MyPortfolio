import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
const funFacts = [{
  front: '☕',
  back: 'Java Lover',
  description: 'Core & Advanced Java'
}, {
  front: '🚀',
  back: 'Spring Boot',
  description: 'Backend Expert'
}, {
  front: '🎨',
  back: 'Angular',
  description: 'Frontend Skills'
}, {
  front: '🎓',
  back: 'B.Tech CSE',
  description: 'CGPA: 8.8/10'
}];
export function About() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.2
  });
  return <section ref={sectionRef} id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image/Avatar side */}
          <div className={cn('flex-1 flex justify-center transition-all duration-700', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10')}>
            <div className="relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 gradient-bg rounded-2xl blur-md opacity-50" />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl glass overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Your Photo Here</p>
                  <p className="text-xs text-muted-foreground/60">Upload via chat to replace</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-lg" />
            </div>
          </div>

          {/* Text content */}
          <div className={cn('flex-1 space-y-6 text-center lg:text-left transition-all duration-700 delay-200', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10')}>
            <div className="space-y-2">
              <p className="text-sm text-primary font-medium uppercase tracking-wider">
                About Me
              </p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold">Java Full Stack Developer & Problem Solver</h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>I am a Java Full Stack Developer with a strong foundation in backend development using Java and Spring Boot, along with hands-on experience in frontend technologies such as Angular. I build full-stack web applications with a focus on structured RESTful API design, efficient database management, and clean, maintainable architecture.</p>
              <p>I have developed multiple projects using Java, Spring Boot, Angular, and MySQL, applying logical problem-solving and practical design principles to real-world development tasks. I value clear communication and collaborative teamwork while continuously improving my technical skills.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">2023</div>
                <div className="text-sm text-muted-foreground">B.Tech Graduate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className={cn('mt-16 lg:mt-24 transition-all duration-700 delay-300', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <h3 className="text-xl font-display font-semibold text-center mb-8">
            Fun Facts About Me
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {funFacts.map((fact, index) => <div key={index} className="group perspective-1000">
                <div className="relative h-32 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 glass rounded-xl flex flex-col items-center justify-center backface-hidden">
                    <span className="text-4xl mb-2">{fact.front}</span>
                    <span className="text-sm text-muted-foreground">{fact.back}</span>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 glass rounded-xl flex flex-col items-center justify-center backface-hidden rotate-y-180 gradient-bg">
                    <span className="text-sm font-medium text-primary-foreground">{fact.description}</span>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}