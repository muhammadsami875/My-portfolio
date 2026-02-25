import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock, Dumbbell } from "lucide-react";

const projects = [
  {
    title: "Green Life Nurseries",
    url: "https://greenlifenurseries.com/",
    description:
      "A fully responsive plant nursery website built for real customers, focusing on performance, SEO, and clean UI for plant lovers and businesses.",
    tags: ["Laravel", "Responsive", "SEO", "Production"],
  },
  {
    title: "Alpha Junk Removing",
    url: "https://alphajunkremoving.com/",
    description:
      "A professional junk removal business website designed to convert visitors into customers with strong branding and clear call-to-actions.",
    tags: ["Business Website", "Conversion-focused", "UI/UX"],
  },
  {
    title: "Take Your Junk UAE",
    url: "https://www.takeyourjunkuae.com/",
    description:
      "Service-based business website built for the UAE market with clean layout, fast loading, and customer-friendly navigation.",
    tags: ["International", "Performance", "UAE Market"],
  },
  {
    title: "Bhatti Plants Mart",
    url: "https://bhatti-plants-mart.vercel.app/",
    description:
      "A modern React-based plant store interface deployed on Vercel, optimized for performance and smooth user experience.",
    tags: ["React", "Vercel", "E-commerce UI"],
  },
  {
    title: "Centralized Auth Service",
    description:
      "A secure Laravel-based authentication system supporting multiple applications with OAuth 2.0, JWT tokens, RSA key pairs per client, and scalable architecture.",
    tags: ["OAuth 2.0", "JWT", "RSA", "Laravel", "Security"],
    icon: Lock,
  },
  {
    title: "Gym Management System",
    description:
      "A complete management system including member registration, subscriptions, attendance tracking, and admin dashboard.",
    tags: ["Full-Stack", "Dashboard", "Management"],
    icon: Dumbbell,
  },
  {
    title: "Key Logger",
    description:
      "A Python project that logs keystrokes for learning purposes.",
    tags: ["Python", "Security", "Desktop"],
    icon: Lock,
  },
  {
    title: "Plantifair – AI Plant Care Agent",
    url: "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/22/17/20251222173207-AZSD9BGN.json",
    description:
      "A Botpress-powered AI chatbot trained to help users grow and care for plants — offering personalized advice on watering, sunlight, soil, and troubleshooting plant health issues.",
    tags: ["Botpress", "AI Agent", "Python", "NLP"],
  },
  {
    title: "Project 3",
    description:
      "Description of another project.",
    tags: ["Python"],
    icon: Lock,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group bg-card rounded-xl p-6 border border-border card-hover flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-3"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                ) : project.icon ? (
                  <project.icon size={18} className="text-muted-foreground shrink-0 ml-3" />
                ) : null}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                  >
                    {tag}
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

export default ProjectsSection;
