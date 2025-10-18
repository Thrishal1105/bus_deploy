import { Mail, Github, Globe as GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[200px] group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Email Us
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[200px] group"
            >
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              GitHub Repo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
