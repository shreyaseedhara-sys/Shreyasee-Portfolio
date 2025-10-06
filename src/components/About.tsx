import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FilePy,
  Database,
  ChartLineUp,
  Brain,
  FileCss,
  FileHtml,
  ChartBar,
  Code,
} from "@phosphor-icons/react";
import profileImage from "@/assets/profile.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Python", icon: FilePy, color: "text-primary" },
    { name: "SQL", icon: Database, color: "text-secondary" },
    { name: "Power BI", icon: ChartBar, color: "text-accent" },
    { name: "Machine Learning", icon: Brain, color: "text-primary" },
    { name: "Pandas", icon: Code, color: "text-secondary" },
    { name: "NumPy", icon: Code, color: "text-accent" },
    { name: "Excel", icon: ChartLineUp, color: "text-primary" },
    { name: "Data Viz", icon: ChartBar, color: "text-secondary" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, filter: "blur(10px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        iconsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: iconsRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gradient">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative group">
            <div className="relative overflow-hidden rounded-2xl glass-card p-2 glow-box hover:glow-box-secondary transition-all duration-500">
              <img
                src={profileImage}
                alt="Shreyasee Dhara - Data Analyst"
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-primary/20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-500" />
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Highly motivated data enthusiast with a strong foundation in{" "}
                <span className="text-primary font-semibold">Power BI</span>,{" "}
                <span className="text-secondary font-semibold">Machine Learning</span>,{" "}
                <span className="text-accent font-semibold">Python</span>, and{" "}
                <span className="text-primary font-semibold">SQL</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Worked as a <span className="text-primary font-semibold">Power BI Intern at Adani Petrochemicals</span>, 
                where I develop comprehensive dashboards for Finance, Sales, Environment, and Telecom operations, 
                enabling data-driven decision-making across the organization.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about extracting insights from data and applying analytical skills to solve 
                real-world problems. I specialize in transforming complex datasets into actionable 
                intelligence that drives business growth.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Technical Skills</h3>
              <div
                ref={iconsRef}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="glass-card p-4 rounded-xl hover:glow-box transition-all duration-300 hover:scale-105 group"
                  >
                    <skill.icon
                      size={32}
                      weight="light"
                      className={`${skill.color} mb-2 group-hover:scale-110 transition-transform`}
                    />
                    <p className="text-sm font-semibold text-foreground">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gradient">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Analytical Thinking", "Problem-Solving", "Communication", "Team Collaboration", "Attention to Detail"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
