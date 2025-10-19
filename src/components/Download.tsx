import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, PlayCircle, Github } from "lucide-react";

const Download = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <DownloadIcon className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Download the App
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Try our IoT bus tracking system today. Download the APK, check out the source code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-glow transition-all duration-300 hover:scale-105 min-w-[200px]"
              asChild
            >
              <a href="/app-release.apk" download="BusTracker.apk">
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download APK
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 min-w-[200px]"
              asChild
            >
              <a href="https://github.com/Thrishal1105/Bus_Tracker.git" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View Source
              </a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-primary-foreground/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99%</div>
            <div className="text-sm text-primary-foreground/70">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">&lt;2s</div>
            <div className="text-sm text-primary-foreground/70">Update Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-primary-foreground/70">Live Tracking</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
