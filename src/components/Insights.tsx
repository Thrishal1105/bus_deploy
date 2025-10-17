import { Lightbulb, Target, Rocket } from "lucide-react";

const Insights = () => {
  const insights = [
    {
      icon: Lightbulb,
      title: "Challenges We Faced",
      items: [
        "Ensuring GPS accuracy in dense urban areas",
        "Managing network latency for real-time updates",
        "Handling connectivity drops in remote locations",
        "Optimizing battery consumption on IoT devices",
      ],
    },
    {
      icon: Target,
      title: "What We Learned",
      items: [
        "IoT hardware selection is crucial for reliability",
        "Real-time APIs need efficient data structures",
        "UI/UX matters significantly in tracking apps",
        "Edge cases require thorough testing and fallbacks",
      ],
    },
    {
      icon: Rocket,
      title: "Future Plans",
      items: [
        "Web-based admin dashboard for fleet management",
        "Push notification system for critical alerts",
        "Route optimization algorithms",
        "Multi-language support for wider adoption",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Insights & Learnings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey building this IoT tracking system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((section, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border"
            >
              <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-6">
                <section.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                {section.title}
              </h3>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
