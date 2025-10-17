import { Radio, Cloud, Smartphone, MapPin } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Radio,
      title: "Collect GPS Data",
      description: "IoT GPS module installed on buses transmits real-time location data",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Cloud,
      title: "Push to Server",
      description: "Data securely transmitted to cloud backend via API endpoints",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Smartphone,
      title: "Fetch & Display",
      description: "Flutter app retrieves live data and renders interactive maps",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Users see real-time bus location, ETA, and receive notifications",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, efficient system architecture for reliable tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent opacity-30"></div>
              )}
              
              <div className={`inline-flex p-4 rounded-xl ${step.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>

              {/* Step number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
