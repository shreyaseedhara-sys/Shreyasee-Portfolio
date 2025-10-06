import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "@phosphor-icons/react";

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      )
      .fromTo(
        splineRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
        "-=1.2"
      );

    // Floating orbs animation
    gsap.to(".floating-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Model Background */}
      <div
        ref={splineRef}
        className="absolute inset-0 z-0"
      >
        <iframe
          src="https://my.spline.design/orb-G9hqWgbodVaVXUlqUVDtPKpv/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Orb Animation"
          className="w-full h-full"
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="floating-orb absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl glow-box" />
        <div className="floating-orb absolute top-40 right-20 w-40 h-40 rounded-full bg-secondary/20 blur-3xl glow-box-secondary" />
        <div className="floating-orb absolute bottom-32 left-1/3 w-36 h-36 rounded-full bg-accent/20 blur-3xl glow-box-accent" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      {/* Content - Centered */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient glow-text">
              Shreyasee Dhara
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Data Analyst transforming raw data into actionable insights with Power BI, Machine Learning & Python
          </p>

          {/* <div className="flex justify-center">
            <button
              ref={ctaRef}
              onClick={scrollToContact}
              className="group px-8 py-4 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground glow-box transition-all hover:scale-105 inline-flex items-center gap-2 text-lg font-semibold"
            >
              Hire Me
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div> */}
         <div className="flex justify-center gap-4">
            {/* Hire Me Button */}
            <button
              ref={ctaRef}
              onClick={scrollToContact}
              className="group px-8 py-4 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground glow-box transition-all hover:scale-105 inline-flex items-center gap-2 text-lg font-semibold"
            >
              Hire Me
              <ArrowRight
                size={20}
                weight="bold"
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
