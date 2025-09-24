import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, Database, BarChart3 } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced expertise in artificial intelligence and machine learning technologies",
      skills: [
        { name: "Python", level: 95 },
        { name: "LangChain", level: 90 },
        { name: "Natural Language Processing", level: 95 },
        { name: "Large Language Models", level: 90 },
        { name: "LangGraph", level: 85 },
        { name: "Transformers", level: 88 },
        { name: "Vector Databases", level: 85 }
      ],
      gradient: "from-accent to-accent-hover"
    },
    {
      icon: Code2,
      title: "Development",
      description: "Full-stack development with modern frameworks and technologies",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 90 },
        { name: "RESTful APIs", level: 87 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "React", level: 80 }
      ],
      gradient: "from-primary to-primary-hover"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Comprehensive data management and analytics solutions",
      skills: [
        { name: "Power BI", level: 92 },
        { name: "Tableau", level: 88 },
        { name: "SQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Data Visualization", level: 90 },
        { name: "ETL Processes", level: 73 },
        { name: "Statistical Analysis", level: 80 }
      ],
      gradient: "from-success to-success/80"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across artificial intelligence, software development, 
            and data analytics with proven track record in enterprise solutions.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="animate-fade-in-left"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <Card className="p-8 shadow-elegant hover-lift transition-smooth">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 animate-slide-up">
          <Card className="p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Additional Competencies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Machine Learning", "Deep Learning", "Computer Vision", "Speech Recognition",
                "Automation", "API Development", "Cloud Services", "Agile Methodologies",
                "Project Management", "Team Leadership", "Research"
              ].map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};