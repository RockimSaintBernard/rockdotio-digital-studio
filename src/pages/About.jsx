import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Developer First",
    description: "Every decision we make starts with the developer experience. If it's not intuitive, we rebuild it."
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    description: "We believe in rapid iteration. Get your ideas to production quickly without sacrificing quality."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our best features come from our users. We listen, learn, and build what developers actually need."
  },
  {
    icon: Heart,
    title: "Open Source",
    description: "We contribute back to the community. Many of our tools are open source and free to use."
  }
];

const stats = [
  { value: "10k+", label: "Commits Shipped" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Countries" },
  { value: "24/7", label: "Support" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">ROCK.IO</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by developers, for developers. We're on a mission to make building software a joy.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ROCK.IO started in a small garage with a simple idea: what if building software could be as enjoyable as using it?
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We were tired of clunky tools, confusing documentation, and the endless friction that slows developers down. So we built something better.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we help thousands of developers ship faster, with tools that just work. No configuration nightmares. No vendor lock-in. Just clean, elegant solutions.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4">
                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
