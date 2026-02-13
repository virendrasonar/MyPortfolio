import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 90, icon: '☕' },
      { name: 'Spring Boot', level: 85, icon: '🍃' },
      { name: 'Hibernate/JPA', level: 80, icon: '🗄️' },
      { name: 'JSP & Servlets', level: 78, icon: '📡' },
      { name: 'RESTful APIs', level: 88, icon: '🔗' },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Angular', level: 75, icon: '🅰️' },
      { name: 'HTML5', level: 90, icon: '📄' },
      { name: 'CSS3', level: 85, icon: '🎨' },
      { name: 'JavaScript', level: 80, icon: '⚡' },
      { name: 'TypeScript', level: 72, icon: '📘' },
    ],
  },
  {
    title: 'Database & Tools',
    icon: '🛠️',
    skills: [
      { name: 'MySQL', level: 85, icon: '🐬' },
      { name: 'H2 Database', level: 75, icon: '🗃️' },
      { name: 'Git & GitHub', level: 80, icon: '📝' },
      { name: 'Eclipse', level: 85, icon: '🌙' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'MySQL Workbench', level: 80, icon: '🔨' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: '🧠',
    skills: [
      { name: 'OOP', level: 90, icon: '🏗️' },
      { name: 'Web App Dev', level: 85, icon: '🌐' },
      { name: 'JDBC', level: 80, icon: '🔌' },
    ],
  },
];

const experiences = [
  {
    year: '2025',
    title: 'Full Stack Java Development',
    company: 'Mindscripts',
    description: 'Gained hands-on training in Core and Advanced Java, Spring Boot, Hibernate, and MySQL with practical full-stack development.',
  },
  {
    year: '2023',
    title: 'Web Developer Intern',
    company: 'Oasis Infobyte (Remote)',
    description: 'Developed front-end projects including To-Do List, Tribute Page, and Calculator using HTML5, CSS3, and JavaScript.',
  },
  {
    year: '2023',
    title: 'B.Tech in Computer Science',
    company: 'CSMSS Chh. Shahu College of Engineering',
    description: 'Graduated with CGPA 8.8/10. Completed Front-End Development Training at Suven Consultants.',
  },
];

export function Skills() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
            My Expertise
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold">
            Skills & <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                'glass rounded-2xl p-6 hover-lift transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-display font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <div className="group cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                'text-lg transition-transform duration-300',
                                isVisible && 'animate-bounce-gentle'
                              )}
                              style={{ animationDelay: `${skillIndex * 100}ms` }}
                            >
                              {skill.icon}
                            </span>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.level}% proficiency in {skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div
          className={cn(
            'transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <h3 className="text-2xl font-display font-semibold text-center mb-12">
            My Journey
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {experiences.map((exp, index) => (
              <div
                key={exp.year}
                className={cn(
                  'relative flex flex-col lg:flex-row items-start gap-4 mb-12 last:mb-0',
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 -ml-2 lg:-ml-2 rounded-full gradient-bg glow-primary z-10" />

                {/* Content */}
                <div
                  className={cn(
                    'flex-1 ml-16 lg:ml-0',
                    index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'
                  )}
                >
                  <div className="glass rounded-xl p-6 hover-lift">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary font-bold">{exp.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-sm text-secondary mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
