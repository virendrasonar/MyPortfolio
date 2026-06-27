import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import {
  SiSpringboot,
  SiAngular,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiCss,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";

const skills = [
  { name: "Java", icon: FaJava, color: "text-orange-500" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
  { name: "Spring Security", icon: BsShieldLockFill, color: "text-green-400" },
  { name: "Angular", icon: SiAngular, color: "text-red-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
  { name: "CSS3", icon: SiCss, color: "text-blue-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Hibernate/JPA", icon: FaDatabase, color: "text-cyan-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-foreground" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
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


          {/* ================= SKILLS ================= */}
          <div className="mb-28">

            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                My Skills & Journey
              </p>


              <h3 className="text-3xl font-bold">
                Technical Stack & Expertise
              </h3>
              <p className="mt-3 text-muted-foreground">
                Technologies and tools I use to build modern, scalable full-stack applications.
              </p>
            </div>

            <div
              className="
      max-w-[2000px] mx-auto
      rounded-[32px]
      border border-white/10
      bg-background/40
      backdrop-blur-2xl
      p-8 lg:p-12
      shadow-[0_20px_80px_rgba(0,0,0,0.1)]
    "
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                {skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
              group
              rounded-2xl
              border border-white/10
              bg-background/40
              backdrop-blur-md
              p-6
              flex flex-col items-center
              justify-center
              transition-all duration-300
              hover:-translate-y-2
              hover:border-primary/30
              hover:bg-primary/5
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]
            "
                    >
                      <Icon
                        className={`
                text-5xl mb-4
                ${skill.color}
                transition-all duration-300
                group-hover:scale-110
              `}
                      />

                      <span className="text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>

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
