import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Terminal, Zap, Database, GitBranch, Shield, Cloud, Cpu } from "lucide-react";

const tools = [
  {
    icon: Code2,
    title: "API Development",
    description: "Build robust, scalable APIs with modern tooling and best practices baked in.",
    features: ["RESTful & GraphQL", "Auto-documentation", "Rate limiting", "Versioning"]
  },
  {
    icon: Terminal,
    title: "CLI Tools",
    description: "Command-line interfaces that developers actually want to use.",
    features: ["Intuitive commands", "Shell completion", "Cross-platform", "Plugin system"]
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast applications optimized for speed and efficiency.",
    features: ["Code splitting", "Lazy loading", "Caching strategies", "Bundle optimization"]
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Data architecture that scales from prototype to production.",
    features: ["Schema design", "Migrations", "Query optimization", "Backup solutions"]
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Git workflows and automation that keep your team in sync.",
    features: ["Branch strategies", "CI/CD pipelines", "Code review", "Release automation"]
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security-first development practices and vulnerability scanning.",
    features: ["Auth systems", "Encryption", "Audit logging", "Penetration testing"]
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Deploy anywhere with infrastructure as code.",
    features: ["Multi-cloud", "Auto-scaling", "Load balancing", "Monitoring"]
  },
  {
    icon: Cpu,
    title: "DevOps",
    description: "Streamline your development and operations workflows.",
    features: ["Containerization", "Orchestration", "Observability", "Incident response"]
  }
];

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Developer <span className="text-primary">Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, ship, and scale your applications with confidence.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card 
                key={index} 
                className="group bg-card border-border/50 hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tools;
