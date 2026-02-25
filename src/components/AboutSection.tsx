import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-2">01.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-5 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            I'm a passionate and disciplined Computer Science professional with
            hands-on experience in full-stack web development, authentication
            systems, and cloud services. I specialize in building production-ready
            applications that solve real business problems.
          </p>
          <p>
            My core expertise lies in{" "}
            <span className="text-foreground font-medium">Laravel</span>,{" "}
            <span className="text-foreground font-medium">React</span>, and{" "}
            <span className="text-foreground font-medium">
              secure authentication architectures
            </span>{" "}
            including OAuth 2.0 and JWT. I've delivered production systems for
            real businesses — from e-commerce platforms to centralized
            authentication services.
          </p>
          <p>
            I bring a strong problem-solving mindset, excellent client
            communication skills, and a commitment to writing clean, maintainable
            code that scales.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
