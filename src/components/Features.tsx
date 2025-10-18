import { MapPin, Clock, Bell, DollarSign, Users, Wifi } from "lucide-react";
import ScrollCard from "./ui/scroll-card";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time Location",
      description: "Live GPS tracking shows exact bus position on interactive maps with real-time updates",
      color: "linear-gradient(135deg, hsl(211 100% 50%), hsl(211 100% 40%))",
      rotation: "rotate-3",
    },
    {
      icon: Clock,
      title: "Accurate ETA",
      description: "Estimated arrival times based on current location and traffic conditions for precise planning",
      color: "linear-gradient(135deg, hsl(25 100% 50%), hsl(25 100% 40%))",
      rotation: "rotate-0",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Instant alerts for delays, stops, and arrival updates to keep you informed at all times",
      color: "linear-gradient(135deg, hsl(211 90% 60%), hsl(211 80% 50%))",
      rotation: "-rotate-2",
    },
    {
      icon: DollarSign,
      title: "Low-Cost Solution",
      description: "Affordable IoT hardware and minimal infrastructure requirements make it accessible for everyone",
      color: "linear-gradient(135deg, hsl(25 90% 60%), hsl(25 80% 50%))",
      rotation: "rotate-2",
    },
    {
      icon: Users,
      title: "Built for Institutions",
      description: "Perfect for colleges, schools, and small fleet operators with scalable solutions",
      color: "linear-gradient(135deg, hsl(211 100% 55%), hsl(211 100% 45%))",
      rotation: "rotate-0",
    },
    {
      icon: Wifi,
      title: "Efficient Network",
      description: "Optimized data usage with fallback connectivity logic ensures reliable tracking",
      color: "linear-gradient(135deg, hsl(25 100% 55%), hsl(211 90% 40%))",
      rotation: "-rotate-3",
    },
  ];

  return (
    <ScrollCard 
      cardsData={features}
      headerTitle="Features & Highlights"
      headerSubtitle="Everything you need for efficient bus tracking"
    />
  );
};

export default Features;
