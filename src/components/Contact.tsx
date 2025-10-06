import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current?.querySelectorAll("input, textarea") || [],
        { opacity: 0, x: -50, filter: "blur(10px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to turn your data into insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl glass-card border border-border focus:border-primary focus:glow-box outline-none transition-all text-foreground"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl glass-card border border-border focus:border-primary focus:glow-box outline-none transition-all text-foreground"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl glass-card border border-border focus:border-primary focus:glow-box outline-none transition-all text-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 glow-box transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-gradient">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:shreyaseedhara@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:glow-box transition-all">
                    <EnvelopeSimple size={24} weight="light" />
                  </div>
                  <span>shreyaseedhara@gmail.com</span>
                </a>

                <a
                  href="tel:+918652723033"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:glow-box transition-all">
                    <Phone size={24} weight="light" />
                  </div>
                  <span>+91 8652723033</span>
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-foreground">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/shreyasee-dhara-58698322b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 glow-box group"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinLogo size={28} weight="fill" />
                </a>
                <a
                  href="https://github.com/shreyaseedhara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 glow-box group"
                  aria-label="GitHub Profile"
                >
                  <GithubLogo size={28} weight="fill" />
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-foreground">Availability</h3>
              <p className="text-muted-foreground">
                Currently open to freelance projects and full-time opportunities in Data Analytics and Business Intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
