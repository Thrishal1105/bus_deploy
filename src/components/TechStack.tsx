import { Badge } from "@/components/ui/badge";
import { Cpu, Server, Database, Smartphone, Map, Globe as GlobeIcon } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "ESP32 S3/ iMotive A7670E", icon: Cpu, category: "IoT Hardware" },
    { name: "Node.js + Express", icon: Server, category: "Backend" },
    { name: "MySQL", icon: Database, category: "Database" },
    { name: "Flutter (Dart)", icon: Smartphone, category: "Mobile App" },
    { name: "OpenStreetMap", icon: Map, category: "Maps" },
    { name: "Cloud Hosting", icon: GlobeIcon, category: "Infrastructure" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with modern, reliable technologies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-hover hover:scale-105 transition-all duration-300 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-hero group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {tech.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-card-foreground">
                    {tech.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
