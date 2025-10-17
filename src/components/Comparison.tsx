import { X, Check } from "lucide-react";

const Comparison = () => {
  const oldWay = [
    "Static bus schedules only",
    "No real-time tracking",
    "Manual announcements required",
    "Uncertain wait times",
    "Limited flexibility",
  ];

  const newWay = [
    "Live map tracking",
    "Real-time GPS updates",
    "Automated notifications",
    "Accurate ETA predictions",
    "Instant delay alerts",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Old Way vs New Way
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the difference our system makes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-destructive/10">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">Old Way</h3>
            </div>
            
            <ul className="space-y-4">
              {oldWay.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New Way */}
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-hover border-2 border-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 rounded-lg bg-accent/20">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground">New Way</h3>
            </div>
            
            <ul className="space-y-4 relative z-10">
              {newWay.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
