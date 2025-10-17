import { MapPin, Clock, Bell, DollarSign, Users, Wifi } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time Location",
      description: "Live GPS tracking shows exact bus position on interactive maps",
    },
    {
      icon: Clock,
      title: "Accurate ETA",
      description: "Estimated arrival times based on current location and traffic",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Instant alerts for delays, stops, and arrival updates",
    },
    {
      icon: DollarSign,
      title: "Low-Cost Solution",
      description: "Affordable IoT hardware and minimal infrastructure requirements",
    },
    {
      icon: Users,
      title: "Built for Institutions",
      description: "Perfect for colleges, schools, and small fleet operators",
    },
    {
      icon: Wifi,
      title: "Efficient Network",
      description: "Optimized data usage with fallback connectivity logic",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Features & Highlights
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Everything you need for efficient bus tracking
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-xl bg-accent inline-flex mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-primary-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
