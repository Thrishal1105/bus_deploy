import { Card } from "@/components/ui/card";

const Screenshots = () => {
  // Placeholder for app screenshots
  const screenshots = [
    {
      title: "Live Map View",
      description: "Real-time bus tracking on interactive map",
      alt: "Map view showing bus location",
    },
    {
      title: "Bus Details",
      description: "Route information and ETA display",
      alt: "Bus detail screen",
    },
    {
      title: "Notifications",
      description: "Arrival alerts and delay updates",
      alt: "Notification screen",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            App Screenshots
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into the user experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder graphic */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{screenshot.alt}</p>
                </div>
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-bold text-card-foreground mb-1">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {screenshot.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Screenshots are representative. Actual app interface may vary.
        </p>
      </div>
    </section>
  );
};

export default Screenshots;
