import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, Database, Award, CheckCircle2, Bot, Cloud, Cpu, Layers } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Bot,
      heading: "AI Agents & Autonomous Systems",
      subheading: "Frameworks for building multi-agent workflows, QA automation, and conversational AI",
      skills: ["LangGraph", "CrewAI", "LangChain", "Multi-Agent Systems", "VAPI Voice AI", "Make / n8n Automation", "Agentic QA Frameworks"],
      gradient: "from-accent to-accent-hover"
    },
    {
      icon: Brain,
      heading: "LLMs, Custom Fine-Tuning & RAG",
      subheading: "Deep model optimization, vector retrieval systems, and security guardrails",
      skills: ["Unsloth", "Axolotl", "PEFT / LoRA / QLoRA", "RAG Architecture", "Pinecone / ChromaDB", "OpenAI Guardrails", "Embedding Models", "Urdu/Arabic Transliteration"],
      gradient: "from-primary to-primary-hover"
    },
    {
      icon: Code2,
      heading: "Full-Stack App Engineering",
      subheading: "Production web, mobile, and API development with modern frameworks",
      skills: ["React Native", "React.js", "TypeScript / JS", "Node.js", "FastAPI", "Flask", "Streamlit", "RESTful APIs & Webhooks"],
      gradient: "from-success to-success/80"
    },
    {
      icon: Cloud,
      heading: "Cloud Infrastructure & DevOps",
      subheading: "Scalable hosting, model deployment, containerization, and automated pipelines",
      skills: ["AWS Bedrock", "AWS SageMaker", "AWS ECS / EC2", "Docker", "CI/CD Pipelines", "Git Version Control"],
      gradient: "from-accent-hover to-primary"
    },
    {
      icon: Database,
      heading: "Databases, Data Extraction & Analytics",
      subheading: "Enterprise data pipelines, web scraping, and business intelligence dashboards",
      skills: ["SQL / PostgreSQL", "MongoDB", "Web Scraping", "Data Wrangling", "Power BI", "Tableau", "Statistical Analysis"],
      gradient: "from-primary-hover to-success"
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Practitioner Essentials",
      provider: "AWS",
      domain: "Cloud Computing",
      icon: Cloud,
      gradient: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30"
    },
    {
      title: "Machine Learning Specialization",
      provider: "DeepLearning.AI",
      domain: "Machine Learning",
      icon: Brain,
      gradient: "from-cyan-500/20 to-teal-500/10 text-cyan-400 border-cyan-500/30"
    },
    {
      title: "Post-Training of LLMs",
      provider: "DeepLearning.AI",
      domain: "Generative AI & LLMs",
      icon: Cpu,
      gradient: "from-purple-500/20 to-indigo-500/10 text-purple-400 border-purple-500/30"
    },
    {
      title: "LangGraph Essentials",
      provider: "LangGraph",
      domain: "AI Agents",
      icon: Bot,
      gradient: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30"
    },
    {
      title: "MCP: Rich Context AI Apps",
      provider: "DeepLearning.AI",
      domain: "Agent Architecture",
      icon: Layers,
      gradient: "from-blue-500/20 to-cyan-500/10 text-blue-400 border-blue-500/30"
    },
    {
      title: "Data Science Specialization",
      provider: "iNeuron.ai",
      domain: "Data Engineering",
      icon: Database,
      gradient: "from-indigo-500/20 to-purple-500/10 text-indigo-400 border-indigo-500/30"
    },
    {
      title: "Data Analytics Engineering",
      provider: "DigiSkills.pk",
      domain: "Data Analytics",
      icon: CheckCircle2,
      gradient: "from-teal-500/20 to-emerald-500/10 text-teal-400 border-teal-500/30"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Stack & Certifications
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Categorized technical capabilities, AI frameworks, cloud infrastructure,
            and certified specializations.
          </p>
        </div>

        {/* Categorized Skills Grid - Centered for Incomplete Rows */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-md flex">
              <Card className="w-full p-7 hover-lift shadow-elegant transition-smooth flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cat.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                      <cat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg leading-snug">{cat.heading}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                    {cat.subheading}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <Badge
                        key={sIdx}
                        variant="secondary"
                        className="text-xs py-1 px-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Modern Certification Showcase Section */}
        <div className="bg-card/40 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-border/60">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-foreground">
                  Courses & Certifications
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Industry-accredited courses from DeepLearning.AI, AWS, and LangGraph
                </p>
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 bg-accent/10 px-3.5 py-1.5 rounded-full text-accent text-xs font-bold border border-accent/20 self-start md:self-auto">
              <CheckCircle2 className="w-4 h-4" />
              <span>7 Verified Badges</span>
            </div>
          </div>

          {/* Infinite Horizontal Marquee Carousel (Hover to Pause) */}
          <div className="relative overflow-hidden w-full py-4">
            {/* Left & Right Masking Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card via-card/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card via-card/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex gap-6">
              {[...certifications, ...certifications].map((cert, idx) => {
                const CertIcon = cert.icon;
                return (
                  <div
                    key={idx}
                    className="w-80 flex-shrink-0"
                  >
                    <Card className="w-full p-5 hover-lift transition-all duration-300 group relative overflow-hidden border border-border/80 hover:border-accent/60 bg-gradient-to-br from-card via-secondary/50 to-card flex flex-col justify-between h-44">
                      {/* Top Glow Beam */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div>
                        {/* Top Header Row */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border bg-gradient-to-r ${cert.gradient}`}>
                            {cert.provider}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CertIcon className="w-4 h-4 text-accent" />
                          </div>
                        </div>

                        {/* Certification Title */}
                        <h4 className="font-bold text-foreground text-sm leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {cert.title}
                        </h4>
                      </div>

                      {/* Footer Domain Badge */}
                      <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground font-medium">
                        <span>{cert.domain}</span>
                        <span className="text-[10px] text-accent font-semibold flex items-center">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                        </span>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};