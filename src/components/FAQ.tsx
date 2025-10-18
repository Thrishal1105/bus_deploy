import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How accurate is the GPS tracking?",
      answer: "Our system provides highly accurate real-time GPS tracking with precision up to 5-10 meters under optimal conditions. The IoT hardware uses advanced GPS modules that continuously update location data, ensuring you always know exactly where your bus is located."
    },
    {
      question: "What happens if the internet connection is lost?",
      answer: "The system includes intelligent fallback connectivity logic. If the primary internet connection is lost, the device stores location data locally and automatically syncs once connectivity is restored. This ensures no tracking data is lost, even in areas with poor network coverage."
    },
    {
      question: "How much does the hardware cost per bus?",
      answer: "Our IoT hardware solution is designed to be affordable, with costs ranging from $50-$150 per bus depending on the configuration and features selected. This low-cost approach makes it accessible for educational institutions and small fleet operators with budget constraints."
    },
    {
      question: "Can the system handle multiple bus routes?",
      answer: "Yes, absolutely! The system is built to scale and can handle unlimited bus routes. Whether you have 5 buses or 50, our platform efficiently manages all routes simultaneously, providing real-time tracking and notifications for each vehicle independently."
    },
    {
      question: "Is the mobile app available for iOS?",
      answer: "Currently, our mobile application is available for Android devices. We are actively developing the iOS version, which is scheduled for release in the coming months. Both versions will offer the same comprehensive features for tracking and notifications."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
