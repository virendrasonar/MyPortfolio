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
      'A platform for managing students, courses, enquiries, and enrollments through a user-friendly web interface.',
    image: '/ims.png',
    tags: ['Java', 'Spring Boot', 'Hibernate/JPA', 'REST APIs', 'Angular', 'PostgreSQL'
    ],
    highlights: [
      'Manage students, courses, and enrollments efficiently',
      'Track enquiries through an integrated admin dashboard',
      'Responsive interface with RESTful API integration'
    ],
    liveUrl: 'https://lovely-art-production.up.railway.app',
    githubUrl:
      'https://github.com/virendrasonar/Institute-Management-System.git',
  },

  {
    id: 2,
    title: 'JWT Authentication System',
    description:
      'Secure authentication and authorization system using Spring Security and JWT tokens.',
    image: 'jwts.png',
    tags: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript'

    ],
    highlights: [
      'Implemented JWT-based authentication for secure user access',
      'Integrated BCrypt password encryption for credential security',
      'Developed protected REST APIs using Spring Security'
    ],
    liveUrl: 'https://jwt-authentication-system-production.up.railway.app',
    githubUrl: 'https://github.com/virendrasonar/jwt-authentication-system.git',

  },

  {
    id: 3,
    title: 'Bus Ticket Booking System',
    description:
      'Web-based ticket booking platform supporting bus search, ticket booking, cancellation, and database integration.',
    image: '/bus.png',
    tags: ['Java', 'Spring Boot', 'Hibernate/JPA', 'MySQL', 'Thymeleaf'],
    highlights: [
      'Built complete ticket booking and cancellation workflows',
      'Developed server-side rendered UI using Thymeleaf',
      'Integrated MySQL database and RESTful APIs'
    ],
    liveUrl: 'https://bus-ticket-booking-application-6hwb.onrender.com',
    githubUrl:
      'https://github.com/virendrasonar/Bus-Ticket-Booking-Application.git',
  },

  {
    id: 4,
    title: 'TrendEttic E-Commerce',
    description:
      'Responsive e-commerce website featuring product listings, modern UI design, and seamless navigation.',
    image: 't.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    highlights: [
      'Built responsive e-commerce website layouts',
      'Created product showcase and navigation features',
      'Implemented modern UI using HTML, CSS, and JavaScript'
    ],
    liveUrl: 'https://trend-ettic.netlify.app',
    githubUrl:
      'https://github.com/virendrasonar/TrendEttic-Ecommerce.git',
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
      className="relative overflow-hidden bg-[hsl(var(--section-3))] py-16 sm:py-20 lg:py-28"    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div
          className={cn(
            'text-center mb-14 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured Projects
          </h2>
          <p className="mt-4 text-[17px] md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            My recent projects that demonstrate my backend architecture, frontend integration, and full-stack capabilities.
          </p>
        </div>

        {/* Equal Grid Layout */}
        <div className="space-y-8 lg:space-y-14">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "w-full min-h-[320px] group flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-primary/20 bg-background/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_80px_rgba(99,102,241,0.15)]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >

              <div className="w-full lg:w-[50%] flex">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-72 lg:h-full object-cover" />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-[55%] p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-primary">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full text-xs sm:text-sm px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6 text-sm sm:text-base">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-auto">                  <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>

                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-green-500 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />

                      Live Demo
                    </a>
                  )}
                </div>

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
    </section >
  );
}
