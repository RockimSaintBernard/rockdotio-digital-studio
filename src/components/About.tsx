const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold">
                Built by Developers,
                <span className="block text-primary">For Developers</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ROCK.IO, we're obsessed with clean code, elegant architecture, and developer experience. We build tools and services that we'd want to use ourselves.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From startups shipping MVPs to enterprise teams scaling products, we provide the technical foundation you need to move fast without breaking things.
              </p>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary">10k+</div>
                  <div className="text-xl text-foreground">Commits Shipped</div>
                  <div className="h-px w-16 bg-primary/50 mx-auto my-4" />
                  <div className="text-4xl font-bold text-primary">99.9%</div>
                  <div className="text-lg text-foreground">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
