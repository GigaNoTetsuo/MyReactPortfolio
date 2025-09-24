import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Smartphone, 
  BarChart3, 
  Bot, 
  Database, 
  Globe,
  MessageSquare,
  Cpu,
  TrendingUp
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Custom AI development including LLM fine-tuning, RAG systems, and intelligent AI agents for business automation.",
      features: [
        "LLM Fine-Tuning & Optimization",
        "RAG Systems Implementation", 
        "AI Agent Development",
        "Custom Model Training"
      ],
      gradient: "from-accent to-accent-hover"
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description: "Full-stack development of mobile apps, web applications, and APIs with modern frameworks and AI integration.",
      features: [
        "React Native Mobile Apps",
        "Web Application Development",
        "RESTful API Design",
        "Real-time System Integration"
      ],
      gradient: "from-primary to-primary-hover"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Comprehensive data solutions including interactive dashboards, NLP pipelines, and intelligent automation systems.",
      features: [
        "Power BI & Tableau Dashboards",
        "NLP Pipeline Development",
        "Process Automation",
        "Data Visualization & Insights"
      ],
      gradient: "from-success to-success/80"
    }
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into intelligent solutions with cutting-edge AI technology 
            and modern development practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift shadow-elegant transition-smooth group"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center animate-slide-up">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {[
              { icon: Brain, name: "LangChain", color: "text-accent" },
              { icon: Bot, name: "Transformers", color: "text-primary" },
              { icon: Database, name: "Vector DBs", color: "text-success" },
              { icon: Globe, name: "React Native", color: "text-accent" },
              { icon: Cpu, name: "Node.js", color: "text-primary" },
              { icon: TrendingUp, name: "Power BI", color: "text-success" }
            ].map((tech, index) => (
              <Card key={index} className="p-4 hover-scale transition-smooth text-center">
                <tech.icon className={`w-8 h-8 ${tech.color} mx-auto mb-2`} />
                <div className="text-sm font-medium text-foreground">{tech.name}</div>
              </Card>
            ))}
          </div>

          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="group shadow-accent"
          >
            <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};