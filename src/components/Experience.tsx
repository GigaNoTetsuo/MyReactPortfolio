import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer & Research Assistant",
      company: "National University of Sciences & Technology (NUST)",
      location: "Islamabad, Pakistan",
      period: "May 2025 - Present",
      type: "Full-time",
      description: [
        "Leading AI research initiatives in Natural Language Processing and Large Language Models",
        "Developing multilingual AI systems and intelligent automation solutions",
        "Collaborating on cutting-edge research projects with international impact",
        "Publishing research findings in peer-reviewed journals and conferences"
      ],
      skills: ["LLMs", "NLP", "Research", "Python", "LangChain", "AI Agents"]
    },
    {
      title: "AI Engineer",
      company: "ITsolera Pvt Ltd",
      location: "Islamabad, Pakistan", 
      period: "Jun 2024 - Sep 2024",
      type: "Internship",
      description: [
        "Designed and implemented AI-powered business solutions for enterprise clients",
        "Built end-to-end machine learning pipelines and intelligent automation systems",
        "Led cross-functional teams in delivering complex AI projects on time and within budget",
        "Mentored junior developers and established AI development best practices"
      ],
      skills: ["Machine Learning", "Python", "React Native", "APIs", "Project Management"]
    },
    {
      title: "Mobile Application Developer",
      company: "Big Data Business Intelligence Pvt Ltd (UK)",
      location: "London, UK",
      period: "Feb 2023 - May 2023", 
      type: "Internship",
      description: [
        "Developed cross-platform mobile applications using React Native for diverse domains including ecommerce, business management, and record-keeping",
        "Built robust backends in JavaScript and Node.js, integrating databases such as SQLite, Firebase, and MongoDB.",
        "Delivered responsive, highperformance apps with seamless frontend-backend integration and optimized user experience across Android and iOS platforms.",
        "Optimized database performance and established data governance frameworks"
      ],
      skills: ["React Native", "Node js", "SQLite", "Mongodb", "API Development & Integration"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building AI solutions and driving innovation across diverse industries 
            with a track record of successful project delivery and research excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-16 bg-border hidden md:block" />
              )}
              
              <Card className="hover-lift shadow-elegant transition-smooth">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="space-y-2 mb-4 md:mb-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <div className="text-lg font-semibold text-accent">
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground ml-15">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};