import { Globe } from "@/components/ui/globe";
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Globe background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30">
        <Globe className="top-[-10%] md:top-[-20%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Live GPS Tracking Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Real-Time IoT Bus<br />Tracking System
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Live bus tracking at low cost — perfect for schools, colleges & small fleets
          </p>
          
          <div className="flex justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download APK
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
