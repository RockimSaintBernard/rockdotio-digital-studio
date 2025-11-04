import { Code2, Search, Workflow, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Custom websites built with modern technologies. Fast, responsive, and optimized for conversions.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher. Data-driven strategies that deliver measurable results.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Streamline operations and save time. Intelligent automation solutions tailored to your workflow.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Powerful applications that scale. From concept to deployment, we build solutions that work.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your business
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
