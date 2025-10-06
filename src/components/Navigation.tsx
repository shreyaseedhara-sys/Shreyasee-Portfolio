import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import gsap from "gsap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-card py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-gradient hover:scale-105 transition-transform"
          >
            SD
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full glow-box" />
              </button>
            ))}
            <a
              href="src\assets\Shreyasee_Dhara_Resume-2.pdf"  // path to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 glow-box transition-all hover:scale-105"
              >
              Resume
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden glass-card backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-2xl text-foreground hover:text-primary transition-colors"
              style={{
                animation: `fade-in-up 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 glow-box transition-all text-lg"
            style={{
              animation: "fade-in-up 0.5s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            Hire Me
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
