import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight, Bot, ShieldCheck, CreditCard, Mic, Cpu } from "lucide-react";

import medicalBotImage from "@/assets/project-medical-bot.jpg";
import voiceAssistantImage from "@/assets/project-voice-assistant.jpg";
import translationImage from "@/assets/project-translation.jpg";
import attendanceImage from "@/assets/project-attendance.jpg";

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "INSPECTRA AI",
      description: "AI automated code testing tool built on LangGraph & CrewAI providing static/dynamic testing, SQL optimization, and bug report generation.",
      image: null,
      category: "AI Agents & QA",
      tags: ["LangGraph", "CrewAI", "AI Agents", "Python"],
      link: "https://github.com/GigaNoTetsuo"
    },
    {
      title: "OpenTendr",
      description: "Non-custodial USDC payment platform enabling direct wallet-to-wallet checkout, instant API integration, and signed webhooks on Base.",
      image: null,
      category: "Fintech & Web3",
      tags: ["Fintech", "USDC Payments", "Web3", "Base"],
      link: "https://opentendr.com"
    },
    {
      title: "Ergoport",
      description: "Privacy-first digital identity credential platform with self-sovereign, on-device storage and zero server tracking.",
      image: null,
      category: "Fintech & Web3",
      tags: ["Digital Identity", "Privacy", "Security"],
      link: "https://ergoport.com"
    },
    {
      title: "Voice Medical Chatbot",
      description: "AI medical assistant with voice interaction for instant health consultations and nearby hospital map integration.",
      image: medicalBotImage,
      category: "Voice & NLP",
      tags: ["LangChain", "NLP", "Voice AI", "Healthcare"],
      link: "https://github.com/SigDevs/Medical-Assistant-Frontend"
    },
    {
      title: "Email Voice Assistant for Blind",
      description: "Accessibility voice assistant enabling visually impaired users to manage emails through speech recognition and TTS.",
      image: voiceAssistantImage,
      category: "Voice & NLP",
      tags: ["Accessibility", "Voice Recognition", "TTS", "React Native"],
      link: "https://github.com/GigaNoTetsuo"
    },
    {
      title: "Agentic Chatbot QA System",
      description: "Intelligent testing framework for chatbot QA using autonomous AI agents to validate responses and detect hallucinations.",
      image: null,
      category: "AI Agents & QA",
      tags: ["AI Agents", "QA Testing", "LangGraph"],
      link: "https://github.com/GigaNoTetsuo"
    },
    {
      title: "Multilingual TTS & Translation",
      description: "Text-to-speech and translation system supporting real-time language conversion and natural voice synthesis.",
      image: translationImage,
      category: "Voice & NLP",
      tags: ["Multilingual", "TTS", "Translation"],
      link: "https://github.com/GigaNoTetsuo"
    },
    {
      title: "Facial Recognition Attendance",
      description: "Automated attendance tracking system using real-time computer vision detection deployed on ESP32-CAM hardware.",
      image: attendanceImage,
      category: "Automation",
      tags: ["Computer Vision", "Automation", "Security"],
      link: "https://github.com/GigaNoTetsuo"
    },
    {
      title: "LinkedIn Automation Suite",
      description: "Automated LinkedIn networking tools with intelligent connection management, messaging, and content scheduling.",
      image: null,
      category: "Automation",
      tags: ["Automation", "Python", "Web Scraping"],
      link: "https://github.com/GigaNoTetsuo"
    },
    {
      title: "Ask Deen: Islamic Q&A App",
      description: "Knowledge base application providing religious guidance through RAG-based vector search of Quranic ayahs.",
      image: null,
      category: "Voice & NLP",
      tags: ["RAG", "Q&A System", "Mobile App"],
      link: "https://github.com/GigaNoTetsuo"
    }
  ];

  const categories = ["All", "AI Agents & QA", "Fintech & Web3", "Voice & NLP", "Automation"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Agents & QA": return Bot;
      case "Fintech & Web3": return CreditCard;
      case "Voice & NLP": return Mic;
      case "Automation": return Cpu;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Case Studies & Delivered Solutions
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A portfolio of custom AI systems, web3 payment checkouts, and full-stack software products built for real-world impact.
          </p>
        </div>

        {/* Tab Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeCategory === category
                  ? "bg-accent text-accent-foreground shadow-md scale-105"
                  : "bg-background/80 text-muted-foreground hover:bg-accent/10 hover:text-accent border border-border/60"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Compact Fitting Projects Grid - Centered for Incomplete Rows */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const isExternalLive = project.link && project.link.startsWith("https://") && !project.link.includes("github.com");

            return (
              <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md flex">
                <Card
                  className="w-full p-5 hover-lift shadow-elegant transition-smooth group flex flex-col justify-between border border-border/60 hover:border-accent/50 bg-card"
                >
                  <div>
                    {/* Category Header Bar */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center text-[11px] font-semibold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {project.category}
                      </span>
                      {isExternalLive && (
                        <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 rounded">
                          Live Website
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-[10px] px-2 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action (Only shown for Live Websites) */}
                  {isExternalLive && (
                    <div className="pt-3 border-t border-border/40 flex items-center justify-between">
                      <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-accent hover:text-accent/80 text-xs font-semibold">
                        <a href={project.link!} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="w-3.5 h-3.5 mr-1" />
                          Visit Website
                        </a>
                      </Button>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  )}
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center items-center">
          <Button asChild size="lg" className="group shadow-accent">
            <a
              href="https://github.com/GigaNoTetsuo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Explore All Repositories on GitHub
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
