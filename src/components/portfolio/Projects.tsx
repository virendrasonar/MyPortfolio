import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Institute Management System',
    description: 'Full-stack web application for managing courses, student enquiries, and enrollments with RESTful APIs and responsive Angular frontend.',
    image: '🎓',
    tags: ['Spring Boot', 'Hibernate', 'JPA', 'H2 DB', 'Angular'],
    liveUrl: '#',
    githubUrl: 'https://github.com/virendrasonar',
    color: 'from-primary/20 to-secondary/20',
  },
  {
    id: 2,
    title: 'Bus Ticket Booking App',
    description: 'Web-based ticket system supporting booking, search, and cancellation features with MySQL database integration.',
    image: '🚌',
    tags: ['Spring Boot', 'Hibernate', 'MySQL', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/virendrasonar',
    color: 'from-secondary/20 to-accent/20',
  },
  {
    id: 3,
    title: 'Login System',
    description: 'Secure user authentication system with credential validation, error handling, and MySQL integration deployed on Apache Tomcat.',
    image: '🔐',
    tags: ['Java', 'Servlets', 'JDBC', 'MySQL', 'Apache Tomcat'],
    liveUrl: '#',
    githubUrl: 'https://github.com/virendrasonar',
    color: 'from-primary/20 to-accent/20',
  },
  {
    id: 4,
    title: 'TrendEttic - E-Commerce',
    description: 'Responsive e-commerce website showcasing product listings with modern UI and smooth navigation.',
    image: '🛒',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/virendrasonar',
    color: 'from-accent/20 to-primary/20',
  },
];

export function Projects() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
            My Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for building great products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'group glass rounded-2xl overflow-hidden hover-lift transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className={cn('relative h-48 bg-gradient-to-br flex items-center justify-center', project.color)}>
                <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-muted hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={cn(
            'text-center mt-12 transition-all duration-700 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <Github className="mr-2 h-4 w-4" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
