import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";

export const Publications = () => {
  const publications = [
    {
      title: "Testing Chatbot systems using Agentic AI Approach",
      journal: "International Journal of Information Systems & Technology (IJIST)",
      year: "2025",
      type: "Research Paper",
      description: "Proposed an Agentic AI-based framework for chatbot testing, where AI agents simulate diverse user interactions to evaluate accuracy, coherence, and hallucination. The approach enables scalable, automated, and reliable assessment of chatbot performance.",
      tags: ["NLP", "Agentic AI", "AI Behaviour"],
      status: "Published",
      url:"https://www.researchgate.net/publication/395490918_Testing_Chatbot_Systems_using_Agentic_AI_Approach"
    },
    {
      title: "Do LLMs really learn from our queries?",
      platform: "Medium",
      year: "2025",
      type: "Technical Article",
      description: "Explored whether Large Language Models truly learn from user queries, clarifying the difference between short-term context adaptation and long-term parameter updates. The article highlights common misconceptions about LLM learning and memory.",
      tags: ["AI Chatbots", "LLMs", "Learning"],
      status: "Published",
      url:"https://medium.com/@hilmand.atk/do-chatbots-really-learn-from-your-queries-in-real-time-5e5ef83614fc"
    }
  ];

  return (
    <section id="publications" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Publications & Writings
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge and insights through research publications, technical articles, 
            and thought leadership in artificial intelligence and machine learning.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift shadow-elegant transition-smooth group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={pub.status === "Published" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {pub.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {pub.type}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{pub.year}</span>
                    </div>
                    <div className="font-medium">
                      {pub.journal || pub.platform}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                    <a href={pub.url}>
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Read Publication
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
          <Card className="p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-accent mb-2">2+</div>
            <div className="text-muted-foreground">Publications</div>
          </Card>
          
          <Card className="p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-accent mb-2">1</div>
            <div className="text-muted-foreground">Research Papers</div>
          </Card>
          
          <Card className="p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Article Reads</div>
          </Card>
        </div>
      </div>
    </section>
  );
};