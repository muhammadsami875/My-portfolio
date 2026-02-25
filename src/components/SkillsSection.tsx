import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Shield,
  Cloud,
  Database,
  Wrench,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "ShadCN UI"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Laravel", "PHP", "Python", "REST APIs", "JWT", "OAuth 2.0"],
  },
  {
    icon: Shield,
    title: "Auth & Security",
    skills: ["OAuth 2.0", "JWT Auth", "Centralized Auth", "Secure API Design"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS SES", "Server Deployment", "Env Configuration"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "SQLite"],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "Vercel", "Postman"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Client Communication", "Requirement Analysis", "Business-focused Dev", "Problem Solving"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <cat.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
