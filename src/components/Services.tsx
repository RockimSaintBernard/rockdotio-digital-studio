import { Code2, Terminal, Zap, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "React, Node.js, TypeScript. Modern stack with clean architecture. Fast, maintainable, production-ready code.",
  },
  {
    icon: Terminal,
    title: "API Development",
    description: "RESTful and GraphQL APIs. Scalable microservices. Comprehensive documentation and testing included.",
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    description: "CI/CD pipelines, containerization, cloud infrastructure. Automate deployments and scale with confidence.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "PostgreSQL, MongoDB, Redis. Optimized queries, indexing strategies, and data modeling for performance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Developer Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade development services with a focus on code quality and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
