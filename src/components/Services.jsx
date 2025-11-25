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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-2 border-border bg-card backdrop-blur-sm animate-scale-in hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
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
