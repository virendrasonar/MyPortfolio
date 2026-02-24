import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 90, icon: '☕' },
      { name: 'Spring Boot', level: 85, icon: '🍃' },
      { name: 'Hibernate / JPA', level: 80, icon: '🗄️' },
      { name: 'JDBC', level: 80, icon: '🔌' },
      { name: 'RESTful APIs', level: 88, icon: '🔗' },
      { name: 'Maven', level: 75, icon: '📦' },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Angular', level: 85, icon: '🅰️' },
      { name: 'HTML5', level: 95, icon: '📄' },
      { name: 'CSS3', level: 90, icon: '🎨' },
      { name: 'TypeScript', level: 85, icon: '⚡' },
      { name: 'JavaScript', level: 80, icon: '📜' },
    ],
  },
  {
    title: 'Database & Tools',
    icon: '🛠️',
    skills: [
      { name: 'MySQL', level: 85, icon: '🐬' },
      { name: 'Git & GitHub', level: 80, icon: '🔧' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Eclipse', level: 85, icon: '🌙' },
      { name: 'MySQL Workbench', level: 90, icon: '🗃️' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: '🧠',
    skills: [
      { name: 'OOP', level: 90, icon: '🏗️' },
      { name: 'MVC Architecture', level: 85, icon: '📐' },
      { name: 'Web App Development', level: 85, icon: '🌐' },
      { name: 'Clean Code Practices', level: 85, icon: '✨' },
    ],
  },
];

const experiences = [
  {
    year: '2025',
    title: 'Diploma in Full Stack Java Development (6 Mon)',
    company: 'Mindscripts Tech, Pune',
    description:
      'Completed an advanced full-stack program focused on building end-to-end web applications. Designed backend logic, developed interactive UI, implemented RESTful APIs, integrated frontend components with database, and applied MVC architecture in project-based implementations, achieving Grade A.',
  },
  {
    year: '2023',
    title: 'Web Developer Intern',
    company: 'Oasis Infobyte, New Delhi (1 month Remote)',
    description:
      'Built interactive front-end projects including a To-Do List application, Tribute Page, and Calculator using HTML5, CSS3, and JavaScript. Published and managed project repositories using GitHub for version control and collaboration.',
  },
  {
    year: '2019 - 2023',
    title: 'B.Tech in Computer Science and Engineering',
    company:
      'CSMSS, Chh. Shahu College of Engineering, Chhatrapati Sambhajinagar',
    description:
      'Graduated with CGPA 8.8/10, strengthening programming fundamentals and core computer science concepts including Data Structures, DBMS, Operating Systems, and Computer Networks.',
  },
];

export function Skills() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-28 relative overflow-hidden bg-[hsl(var(--section-4))]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div
          className={cn(
            "transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wider">
              My Skills & Journey
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Technical Skill Set
            </h2>
          </div>

          {/* ================= SKILLS ================= */}
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-24 mb-28">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={cn(
                  "bg-background/80 backdrop-blur-md  border border-black/30 dark:border-border/30  rounded-2xl p-12 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${categoryIndex * 120}ms` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <span>{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="relative w-full h-2.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 80}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border/50 my-24"></div>

          {/* ================= JOURNEY ================= */}
          <div>
            <h3 className="text-3xl font-semibold text-center mb-16">
              My Journey
            </h3>

            <div className="relative max-w-6xl mx-auto">

              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-black/20 dark:bg-border" />

              <div className="space-y-20">
                {experiences.map((exp, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div key={index} className="relative flex items-center group">

                      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.8)]" />

                      <div
                        className={cn(
                          "w-full md:w-[46%] bg-background/95  border border-black/30 dark:border-border/30  rounded-[26px] p-10 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]",
                          isLeft ? "mr-auto" : "ml-auto"
                        )}
                      >
                        <span className="text-primary font-semibold text-sm tracking-wide">
                          {exp.year}
                        </span>

                        <h4 className="text-lg font-semibold mt-3">
                          {exp.title}
                        </h4>

                        <p className="text-sm text-secondary mt-2">
                          {exp.company}
                        </p>

                        <p className="text-sm text-muted-foreground leading-relaxed mt-4 text-justify">
                          {exp.description}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
