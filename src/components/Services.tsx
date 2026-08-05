import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Smartphone, 
  Bot, 
  Database, 
  MessageSquare, 
  ShieldCheck, 
  Layers, 
  Rocket, 
  Search, 
  Cpu, 
  CreditCard, 
  Cloud,
  Workflow 
} from "lucide-react";

export const Services = () => {
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      icon: Bot,
      title: "AI Agents & Autonomous Workflows",
      description: "Custom multi-agent systems built with LangGraph & CrewAI to automate complex business workflows, QA testing, customer support, and data pipelines.",
      features: [
        "Autonomous Agent Architecture",
        "Automated QA & Conversation Testing",
        "LangChain & LangGraph Workflows",
        "Make / n8n & VAPI Voice Integration"
      ],
      gradient: "from-accent to-accent-hover"
    },
    {
      icon: Database,
      title: "Enterprise RAG & Knowledge Bases",
      description: "Secure, context-aware RAG systems allowing teams and clients to search and query proprietary documents with high precision and guardrails.",
      features: [
        "Vector DB Integration (Pinecone/Chroma)",
        "OpenAI & Custom Guardrails",
        "Multi-Format Document Ingestion",
        "Contextual Citation & Anti-Hallucination"
      ],
      gradient: "from-primary to-primary-hover"
    },
    {
      icon: Brain,
      title: "Custom LLM Fine-Tuning & Models",
      description: "Tailored model fine-tuning (PEFT, LoRA, QLoRA via Unsloth & Axolotl) for task-specific, domain-specific, and low-resource multilingual needs.",
      features: [
        "Unsloth & Axolotl Fine-Tuning",
        "PEFT / LoRA / QLoRA Optimization",
        "Multilingual & Transliteration Models",
        "Custom Embedding & Evaluation Pipelines"
      ],
      gradient: "from-success to-success/80"
    },
    {
      icon: Smartphone,
      title: "AI-Native Mobile & Web Apps",
      description: "End-to-end full-stack web and mobile application engineering built with React Native, React, Node.js, and FastAPI.",
      features: [
        "Cross-Platform React Native Apps",
        "Modern Web Apps & Interfaces",
        "FastAPI & Node.js Microservices",
        "Real-Time Websockets & API Design"
      ],
      gradient: "from-accent-hover to-primary"
    },
    {
      icon: Cloud,
      title: "Cloud Computing & AWS Infrastructure",
      description: "Architecting, deploying, and scaling secure cloud environments on AWS (Bedrock, SageMaker, ECS, EC2) with Docker containerization and automated CI/CD pipelines.",
      features: [
        "AWS Bedrock & SageMaker Setup",
        "Docker Containerization & ECS/EC2",
        "Automated CI/CD Deployment Pipelines",
        "Serverless Microservices & Cloud Security"
      ],
      gradient: "from-primary-hover to-success"
    },
    {
      icon: ShieldCheck,
      title: "AI Strategy & Technical Advisory",
      description: "Strategic consulting for founders, startups, and enterprises to identify high-ROI AI opportunities, security protocols, and cloud infrastructure.",
      features: [
        "AI Feasibility & ROI Auditing",
        "AWS Bedrock & SageMaker Setup",
        "Docker & CI/CD Deployment",
        "Data Governance & Security Guardrails"
      ],
      gradient: "from-success/90 to-accent"
    }
  ];

  const processSteps = [
    {
      step: "01",
      label: "DISCOVER",
      icon: Search,
      title: "Discover & Scope",
      subtitle: "Technical Consultation & Feasibility Audit",
      desc: "Analyzing your business challenges, data assets, and defining high-ROI AI roadmap & architecture specifications.",
      deliverables: ["AI Feasibility Audit", "Architecture Roadmap", "Tech Stack Specs", "NDA & SLA Terms"],
      metric1: { value: "1–3 Days", label: "Scoping Turnaround" },
      metric2: { value: "100%", label: "Requirements Alignment" }
    },
    {
      step: "02",
      label: "ARCHITECT",
      icon: Layers,
      title: "Architect & Prototype",
      subtitle: "Multi-Agent System Design & Interactive POC",
      desc: "Designing tailored multi-agent workflows, vector database schemas, custom fine-tuning specs, and interactive UI prototypes.",
      deliverables: ["LangGraph Agent Schemas", "Vector DB Specs", "API Specifications", "Interactive UI Mockups"],
      metric1: { value: "Rapid POC", label: "Validation Speed" },
      metric2: { value: "Zero Risk", label: "Architecture Gate" }
    },
    {
      step: "03",
      label: "BUILD",
      icon: Cpu,
      title: "Build & Fine-Tune",
      subtitle: "Production Code & Model Fine-Tuning",
      desc: "Developing production-grade FastAPI/Node code, fine-tuning LLMs via Unsloth/Axolotl, and implementing guardrails.",
      deliverables: ["PEFT/LoRA Model Weights", "FastAPI/Node Services", "OpenAI Guardrails", "Automated Test Suites"],
      metric1: { value: "Clean Code", label: "Production Standard" },
      metric2: { value: "PEFT / LoRA", label: "Model Optimization" }
    },
    {
      step: "04",
      label: "DEPLOY",
      icon: Rocket,
      title: "Deploy & Scale",
      subtitle: "Cloud Infrastructure, CI/CD & SLA Monitoring",
      desc: "Containerizing services with Docker, deploying to AWS Bedrock/ECS/EC2 with automated CI/CD and latency monitoring.",
      deliverables: ["AWS ECS / EC2 Deployment", "Docker Containers", "CI/CD Pipelines", "24/7 Health Monitoring"],
      metric1: { value: "99.9%", label: "Uptime SLA" },
      metric2: { value: "AWS / Cloud", label: "Production Hosting" }
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
            Solutions & Services
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering businesses, startups, and founders with production-ready AI systems, 
            custom LLM fine-tuning, and scalable digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift shadow-elegant transition-smooth group flex flex-col justify-between"
            >
              <div>
                {/* Icon with Gradient Background */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-muted-foreground font-medium">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={scrollToContact} 
                  className="p-0 text-accent hover:text-accent/80 hover:bg-transparent text-xs font-semibold"
                >
                  Request Solution →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Circular Orbit Workflow Section */}
        <div className="bg-card/40 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-3.5 py-1.5 rounded-full text-accent text-xs font-semibold mb-3 border border-accent/20">
              <Workflow className="w-3.5 h-3.5" />
              <span>Engagement Process</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3 tracking-tight">
              How I Work With Clients
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Hover or click each phase in the orbit to explore my technical delivery pipeline.
            </p>
          </div>

          {/* Grid Layout: Left Orbit Graphic | Right Step Details */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Interactive Orbit Wheel (Scales Responsively on Mobile) */}
            <div className="lg:col-span-5 flex justify-center py-4 sm:py-6">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                
                {/* Outer Orbit Track */}
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-accent/30 animate-spin" style={{ animationDuration: '45s' }} />
                
                {/* Inner Orbit Glow Line */}
                <div className="absolute inset-8 rounded-full border border-border/80 shadow-[0_0_30px_hsl(var(--accent)/0.1)]" />

                {/* Center Hub Node (Icon Core instead of Name) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-card via-secondary to-card border-2 border-accent/60 shadow-[0_0_35px_hsl(var(--accent)/0.35)] flex items-center justify-center text-center p-2 z-10 relative group">
                  <div className="absolute inset-0 rounded-full bg-accent/10 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: '3s' }} />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent via-accent-hover to-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Orbit Nodes (Positioned around circle) */}
                {processSteps.map((step, idx) => {
                  const isSelected = activeStep === idx;
                  const StepIcon = step.icon;

                  // Positional CSS styles for 4 cardinal points (Top, Right, Bottom, Left)
                  const positionClasses = [
                    "top-1 left-1/2 -translate-x-1/2",           // 01. DISCOVER (Top)
                    "top-1/2 right-1 -translate-y-1/2",          // 02. ARCHITECT (Right)
                    "bottom-1 left-1/2 -translate-x-1/2",        // 03. BUILD (Bottom)
                    "top-1/2 left-1 -translate-y-1/2",           // 04. DEPLOY (Left)
                  ];

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      className={`absolute ${positionClasses[idx]} cursor-pointer z-20 group flex flex-col items-center`}
                    >
                      <div
                        style={{
                          boxShadow: isSelected ? `0 0 25px ${step.glowColor}` : undefined
                        }}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? `bg-gradient-to-br ${step.gradient} text-white scale-125 ring-4 ring-background`
                            : `bg-secondary/90 text-foreground border-2 border-border/80 group-hover:border-accent/60 group-hover:scale-110`
                        }`}
                      >
                        <StepIcon className={`w-6 h-6 ${!isSelected ? 'text-foreground group-hover:text-accent' : 'text-white'}`} />
                      </div>
                      
                      <span
                        className={`mt-2 text-[10px] font-bold tracking-widest uppercase transition-colors px-2 py-0.5 rounded-full ${
                          isSelected ? "text-accent bg-accent/10 border border-accent/30" : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Right Column: Dynamic Step Details Card */}
            <div className="lg:col-span-7">
              <div className="bg-background/50 p-8 rounded-2xl min-h-[340px] flex flex-col justify-between transition-all duration-300">
                <div>
                  {/* Step Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-xs font-black tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-md border border-accent/20">
                      {processSteps[activeStep].step} • {processSteps[activeStep].label}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {processSteps[activeStep].title}
                  </h4>
                  <p className="text-xs font-semibold text-accent mb-4">
                    {processSteps[activeStep].subtitle}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {processSteps[activeStep].desc}
                  </p>

                  {/* Deliverables / Feature Chips */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold text-foreground uppercase tracking-wider block mb-2.5">
                      Key Deliverables & Specs:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {processSteps[activeStep].deliverables.map((item, dIdx) => (
                        <span 
                          key={dIdx} 
                          className="text-xs font-medium bg-secondary text-foreground px-3 py-1 rounded-md border border-border/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Footer */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex space-x-8">
                    <div>
                      <div className="text-lg font-extrabold text-foreground">
                        {processSteps[activeStep].metric1.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-medium">
                        {processSteps[activeStep].metric1.label}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-foreground">
                        {processSteps[activeStep].metric2.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-medium">
                        {processSteps[activeStep].metric2.label}
                      </div>
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    onClick={scrollToContact}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs font-semibold shadow-sm"
                  >
                    Start Project →
                  </Button>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="group shadow-accent"
          >
            <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Discuss Your Business Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};