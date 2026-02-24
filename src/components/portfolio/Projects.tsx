import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Institute Management System',
    description:
      'Full-stack web application for managing courses, student enquiries, and enrollments with RESTful APIs and responsive Angular frontend.',
    image: '🏫',
    tags: ['Spring Boot', 'Hibernate', 'JPA', 'PostgreSQL', 'Angular'],
    liveUrl: 'https://institute-management-system-frontend.onrender.com',
    githubUrl: 'https://github.com/virendrasonar/Institute-Management-System.git',
  },
  {
    id: 2,
    title: 'Bus Ticket Booking App',
    description:
      'Web-based ticket system supporting booking, search, and cancellation features with MySQL database integration.',
    image: '🚌',
    tags: ['Spring Boot', 'Hibernate', 'MySQL', 'HTML/CSS'],
    liveUrl: 'https://bus-ticket-booking-app-k5lv.onrender.com',
    githubUrl: 'https://github.com/virendrasonar/Bus-Ticket-Booking-Website.git',
  },
  {
    id: 3,
    title: 'TrendEttic - E-Commerce',
    description:
      'Responsive e-commerce website showcasing product listings with modern UI and smooth navigation.',
    image: '🛍️',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://trend-ettic.netlify.app',
    githubUrl: 'https://github.com/virendrasonar/TrendEttic-Ecommerce.git',
  },
  {
    id: 4,
    title: 'Login System',
    description:
      'Secure user authentication system with credential validation and MySQL integration deployed on Apache Tomcat.',
    image: '🔐',
    tags: ['Java', 'Servlets', 'JDBC', 'MySQL', 'Apache Tomcat'],
    liveUrl: 'Under Maintainance -- Coming Soon',
    githubUrl: 'https://github.com/virendrasonar',
  },
];

export function Projects() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 relative overflow-hidden bg-[hsl(var(--section-3))] py-28"
    >
      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-14 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
            My Work
          </p>
          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="mt-4 text-[17px] md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            My recent projects that demonstrate my backend architecture, frontend integration, and full-stack capabilities.
          </p>
        </div>

        {/* Equal Grid Layout */}
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative rounded-3xl border border-black/ dark:border-white/25  bg-background/70 backdrop-blur-xl p-8 shadow-[0_15px_50px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(99,102,241,0.15)] hover:border-primary/40",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >

              {/* Icon */}
              <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-110">
                {project.image}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
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

              {/* Links */}
              <div className="flex items-center gap-6 text-sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-20">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary rounded-[8px]"
            onClick={() => {
              window.open("https://github.com/virendrasonar", "_blank", "noopener,noreferrer");
            }}
          >
            <Github className="mr-2 h-4 w-4" />
            View More on GitHub
          </Button>
        </div>

      </div>
    </section>
  );
}
