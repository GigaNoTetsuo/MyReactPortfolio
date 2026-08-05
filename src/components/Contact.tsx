import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageSquare,
  Clock,
  Globe
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    service: "AI Agents & Automation",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct FormSubmit.co AJAX Endpoint to obaidsajjad321@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/obaidsajjad321@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New AI Project Inquiry: ${formData.service} from ${formData.name}`,
          _template: "table",
          "Client Name": formData.name,
          "Client Email": formData.email,
          "Solution Required": formData.service,
          "Project Details": formData.message,
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        toast({
          title: "Inquiry Sent to obaidsajjad321@gmail.com!",
          description: "Thank you for reaching out. Your message has been delivered to Obaid Sajjad. You will receive a response within 24 hours.",
        });
        setFormData({ name: "", email: "", service: "AI Agents & Autonomous Workflows", message: "" });
      } else {
        throw new Error(data.message || "Email API delivery failed");
      }
    } catch (err) {
      console.error("FormSubmit delivery error:", err);
      
      toast({
        variant: "destructive",
        title: "Delivery Error",
        description: "Could not deliver email automatically. Please send directly to obaidsajjad321@gmail.com or WhatsApp +92 319 2231947.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start a Project / Consultation
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build, fine-tune, or scale an AI solution for your business? 
            Let's discuss your technical requirements and business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Discuss Your Business Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need a custom multi-agent system, an enterprise RAG knowledge base, 
                LLM fine-tuning, or a full-stack mobile/web product, I am available for 
                contract work, consulting, and end-to-end technical execution.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Direct Email",
                  value: "obaidsajjad321@gmail.com",
                  action: "mailto:obaidsajjad321@gmail.com"
                },
                {
                  icon: Phone,
                  title: "Phone / WhatsApp",
                  value: "+92 319 2231947",
                  action: "tel:+923192231947"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Rawalpindi / Islamabad, Pakistan (Remote Worldwide)",
                  action: null
                },
                {
                  icon: Clock,
                  title: "Client Consulting Hours",
                  value: "Mon - Fri, 12:00 PM - 10:00 PM PKT (Flexible for Global Clients)",
                  action: null
                }
              ].map((item, index) => (
                <Card key={index} className="p-4 hover-lift transition-smooth">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{item.title}</div>
                      {item.action ? (
                        <a 
                          href={item.action}
                          className="text-sm text-muted-foreground hover:text-accent transition-colors font-semibold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-xs text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-2">
              <h4 className="font-semibold text-foreground text-sm">Professional Profiles</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/GigaNoTetsuo", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/obaid-sajjad", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:obaidsajjad321@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Business Inquiry Form */}
          <Card className="p-8 animate-fade-in-right shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">
                  Send Project Inquiry
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name / Business Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith / TechStart Inc."
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Business Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Required Solution Type</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full mt-1.5 px-3 py-2 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="AI Agents & Autonomous Workflows">AI Agents & Autonomous Workflows</option>
                    <option value="Enterprise RAG & Knowledge Base">Enterprise RAG & Knowledge Base</option>
                    <option value="Custom LLM Fine-Tuning">Custom LLM Fine-Tuning (PEFT/LoRA)</option>
                    <option value="Full-Stack Mobile & Web App">Full-Stack Mobile & Web App (React Native/React)</option>
                    <option value="Cloud Computing & AWS Infrastructure">Cloud Computing & AWS Infrastructure</option>
                    <option value="AI Strategy & Advisory">AI Strategy & Advisory Consultation</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Project Overview & Requirements</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your business problem, target audience, timeline, or key feature requirements..."
                    required
                    rows={4}
                    className="mt-1.5"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full group shadow-accent font-semibold"
              >
                {isSubmitting ? (
                  "Sending Inquiry..."
                ) : (
                  <>
                    Submit Project Inquiry
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Strict NDA & Privacy respected. Direct response guaranteed within 24 hours.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};