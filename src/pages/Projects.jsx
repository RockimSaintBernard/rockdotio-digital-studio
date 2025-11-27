import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CloudSync Pro",
    description: "Real-time file synchronization across multiple cloud providers with end-to-end encryption.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "AWS", "WebSockets"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "DevMetrics Dashboard",
    description: "Analytics platform for tracking developer productivity and code quality metrics.",
    image: "/placeholder.svg",
    tags: ["Next.js", "PostgreSQL", "GraphQL", "D3.js"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "APIForge",
    description: "Visual API builder with automatic documentation and mock server generation.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "Express", "OpenAPI", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "CodeReview AI",
    description: "AI-powered code review tool that catches bugs and suggests improvements.",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "GitHub API", "FastAPI"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "DeployBot",
    description: "Automated deployment pipeline with rollback capabilities and health monitoring.",
    image: "/placeholder.svg",
    tags: ["Go", "Kubernetes", "Terraform", "Prometheus"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "SecureVault",
    description: "Team password and secrets manager with role-based access control.",
    image: "/placeholder.svg",
    tags: ["Rust", "React", "SQLite", "Encryption"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of tools and applications we've built for developers around the world.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-card border-border/50 overflow-hidden hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:border-primary/30"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Github className="w-4 h-4" />
                      Source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-card border-border/50 hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="gap-1 text-xs h-8">
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-1 text-xs h-8">
                      <Github className="w-3 h-3" />
                      Code
                    </Button>
                  </div>
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

export default Projects;
