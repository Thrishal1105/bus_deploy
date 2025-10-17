import { AlertCircle, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why We Built This
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solving the uncertainty of waiting for buses with real-time tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-hover transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-destructive/10">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">The Problem</h3>
                <p className="text-muted-foreground">
                  Students and staff waste time waiting for buses with no visibility into arrival times or delays. 
                  Traditional systems rely on static schedules and manual announcements, leading to frustration and inefficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-hover border border-primary/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-accent/20">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">Our Solution</h3>
                <p className="text-primary-foreground/90">
                  A complete IoT-powered tracking system that provides live GPS updates through an intuitive mobile app. 
                  Users get real-time location, ETA estimates, and instant notifications—all at a fraction of traditional costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
