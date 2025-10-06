import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ChartBar, Database, Brain } from "@phosphor-icons/react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Finance & Sales Dashboard",
      description: "Real-time sales tracking dashboard with SAP integration, enabling YTD analysis and product-level insights for strategic decision-making.",
      image: project1,
      tags: ["Power BI", "SAP", "DAX", "Sales Analytics"],
      icon: ChartBar,
    },
    {
      title: "Debtors Analysis Dashboard",
      description: "Automated aging calculations dashboard categorizing outstanding payments with product and customer-level tracking for receivables management.",
      image: project2,
      tags: ["Power BI", "DAX", "Financial Analytics"],
      icon: Database,
    },
    {
      title: "Admin Budget Dashboard",
      description: "Dynamic budget performance tracking with Budget vs Actual comparisons, vendor analysis, and SAP ERP integration for financial transparency.",
      image: project3,
      tags: ["Power BI", "SAP MM", "Budget Analysis"],
      icon: ChartBar,
    },
    {
      title: "Environment Dashboard",
      description: "Environmental compliance monitoring system tracking air quality, noise levels, and emissions data to support sustainability initiatives.",
      image: project4,
      tags: ["Power BI", "Environmental Data", "Compliance"],
      icon: ChartBar,
    },
    {
      title: "Telecom Dashboard",
      description: "Comprehensive telecom expense optimization dashboard consolidating usage trends, cost analysis, and resource planning insights.",
      image: project5,
      tags: ["Power BI", "Usage Analytics", "Cost Optimization"],
      icon: Database,
    },
    {
      title: "Book Recommendation System",
      description: "ML-powered recommendation engine using collaborative filtering across 271K+ entries with 3 similarity measures for personalized suggestions.",
      image: project6,
      tags: ["Machine Learning", "Python", "Collaborative Filtering"],
      icon: Brain,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children || [];
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming complex data into actionable insights through advanced analytics and visualization
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover:glow-box transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute top-4 right-4 p-2 rounded-full glass-card">
                  <project.icon size={24} weight="light" className="text-primary" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <button className="w-full mt-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2 group-hover:scale-105">
                  View Details
                  <ArrowUpRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
