import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 60, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );

      // Floating particles
      const particles = footerRef.current?.querySelectorAll(".particle") || [];
      particles.forEach((particle) => {
        gsap.to(particle, {
          y: -15,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="relative py-12 border-t border-border overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle absolute top-10 left-20 w-2 h-2 rounded-full bg-primary/30 blur-sm" />
        <div className="particle absolute top-16 right-32 w-3 h-3 rounded-full bg-secondary/30 blur-sm" />
        <div className="particle absolute bottom-20 left-1/3 w-2 h-2 rounded-full bg-accent/30 blur-sm" />
        <div className="particle absolute bottom-16 right-1/4 w-3 h-3 rounded-full bg-primary/30 blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Shreyasee Dhara</h3>
            <p className="text-sm text-muted-foreground">
              Data Analyst specializing in Power BI, Machine Learning, and Advanced Analytics
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["hero", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left capitalize"
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/shreyasee-dhara-58698322b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 glow-box"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="fill" />
              </a>
              <a
                href="https://github.com/shreyaseedhara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 glow-box"
                aria-label="GitHub"
              >
                <GithubLogo size={20} weight="fill" />
              </a>
              <a
                href="mailto:shreyaseedhara@gmail.com"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 glow-box"
                aria-label="Email"
              >
                <EnvelopeSimple size={20} weight="fill" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shreyasee Dhara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
