import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

import medicalBotImage from "@/assets/project-medical-bot.jpg";
import voiceAssistantImage from "@/assets/project-voice-assistant.jpg";
import translationImage from "@/assets/project-translation.jpg";
import attendanceImage from "@/assets/project-attendance.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Voice-Integrated Medical Chatbot",
      description: "AI-powered medical assistant with voice interaction capabilities, providing instant health consultations and medical guidance through natural language processing.",
      image: medicalBotImage,
      tags: ["LangChain", "NLP", "Voice AI", "Healthcare"],
      featured: true,
      link:"https://github.com/SigDevs/Medical-Assistant-Frontend"
    },
    {
      title: "Email Voice Assistant for Blind",
      description: "Accessibility-focused voice assistant enabling visually impaired users to manage emails through speech recognition and text-to-speech technology.",
      image: voiceAssistantImage,
      tags: ["Accessibility", "Voice Recognition", "TTS", "React Native"],
      featured: true,
      link:"https://github.com/GigaNoTetsuo"
    },
    {
      title: "Multilingual TTS & Translation",
      description: "Advanced text-to-speech and translation system supporting multiple languages with real-time translation and voice synthesis capabilities.",
      image: translationImage,
      tags: ["Multilingual", "TTS", "Translation", "API Integration"],
      featured: false
    },
    {
      title: "Attendance System with Facial Recognition",
      description: "Automated attendance tracking system using facial recognition technology with real-time detection and reporting capabilities.",
      image: attendanceImage,
      tags: ["Computer Vision", "Facial Recognition", "Automation", "Security"],
      featured: false
    },
    {
      title: "Agentic Chatbot QA Testing",
      description: "Intelligent testing framework for chatbot quality assurance using AI agents to automate conversation testing and validation.",
      image: null,
      tags: ["AI Agents", "QA Testing", "Automation", "LangGraph"],
      featured: false
    },
    {
      title: "LinkedIn Automation Suite",
      description: "Automated LinkedIn engagement and networking tools with intelligent connection management and content scheduling.",
      image: null,
      tags: ["Automation", "Social Media", "Python", "Web Scraping"],
      featured: false
    },
    {
      title: "Ask Deen Islamic Q&A App",
      description: "Islamic knowledge base application providing accurate religious guidance through AI-powered question-answering system.",
      image: null,
      tags: ["Knowledge Base", "Q&A System", "Mobile App", "NLP"],
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative AI solutions that solve real-world problems 
            and enhance human capabilities through intelligent technology.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-lift shadow-elegant transition-smooth group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  {/* <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button> */}
                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift transition-smooth group"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
       <div className="flex justify-center items-center ">
  <Button asChild size="lg" className="group shadow-accent">
    <a
      href="https://github.com/GigaNoTetsuo"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
      View More on GitHub
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </a>
  </Button>
</div>

      </div>
    </section>
  );
};
