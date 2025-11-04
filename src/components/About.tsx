const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold">
                Building the Future,
                <span className="block text-primary">One Project at a Time</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ROCK.IO, we believe in the power of innovation and creativity. Our team combines technical expertise with creative vision to deliver solutions that don't just meet expectations—they exceed them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a startup looking to make your mark or an established business ready to evolve, we're here to turn your ideas into reality.
              </p>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary">500+</div>
                  <div className="text-xl text-foreground">Projects Delivered</div>
                  <div className="h-px w-16 bg-primary/50 mx-auto my-4" />
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-lg text-foreground">Client Satisfaction</div>
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
