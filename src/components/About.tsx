import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Download, Code2, Brain, Zap, CheckCircle, ShieldCheck } from "lucide-react";
import resume from "@/assets/obaid-sajjad.pdf";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 accent-gradient rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am an AI & Digital Solutions Engineer with 2 years of experience designing, fine-tuning,
                and deploying production-grade AI systems, multi-agent frameworks, and full-stack software applications.
              </p>

              <p>
                My work focuses on helping businesses, startups, and founders convert technical complexity
                into streamlined digital products — spanning custom LLM fine-tuning, enterprise RAG search engines,
                autonomous AI agent QA frameworks, and cross-platform mobile and web applications.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" className="group">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Capability Deck
                </a>
              </Button>

              <Button asChild variant="outline" className="group">
                <a href="https://www.github.com/GigaNoTetsuo" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub Codebase
                </a>
              </Button>

              <Button asChild variant="outline" className="group">
                <a href="https://www.linkedin.com/in/obaid-sajjad" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 hover-lift card-gradient">
                <div className="text-center space-y-2">
                  <Code2 className="w-8 h-8 text-accent mx-auto" />
                  <div className="text-2xl font-bold text-foreground">2+ Years</div>
                  <div className="text-sm text-muted-foreground">Production AI Experience</div>
                </div>
              </Card>

              <Card className="p-6 hover-lift card-gradient">
                <div className="text-center space-y-2">
                  <ShieldCheck className="w-8 h-8 text-accent mx-auto" />
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Production Execution</div>
                </div>
              </Card>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Core Technical Pillars</h3>

              <div className="space-y-3">
                {[
                  { icon: Brain, title: "Large Language Models & Fine-Tuning", desc: "Unsloth, Axolotl, PEFT/LoRA/QLoRA, RAG Systems, Multi-Agent Systems" },
                  { icon: Code2, title: "Full-Stack Software Engineering", desc: "React Native, React, Node.js, FastAPI, RESTful APIs & Webhooks" },
                  { icon: Zap, title: "Cloud Architecture & Security", desc: "AWS Bedrock, SageMaker, ECS/EC2, Docker, CI/CD, LLM Guardrails" }
                ].map((item, index) => (
                  <Card key={index} className="p-4 hover-lift transition-smooth">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};