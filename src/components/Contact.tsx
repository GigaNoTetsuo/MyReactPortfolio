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
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_hcb9yhq", 
      "template_5xj50by", 
      {
        to_email: "obaidsajjad321@gmail.com", // 👈 where to send
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "SRRFnI6jNBEJl1FdZ"
    );
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  } catch (err) {
    console.error("Failed:", err);
    toast({
      title: "Failed!",
      description: "This services is not working right now. Sorry for inconvenience",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            Let's Work Together
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into intelligent solutions? 
            Let's discuss how AI can drive your business forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                and ways to leverage AI for business growth. Whether you need consultation, 
                development services, or collaboration, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "obaidsajjad321@gmail.com",
                  action: "mailto:obaidsajjad321@gmail.com"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+92 319 2231947",
                  action: "tel:+923192231947"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Rawalpindi, Pakistan",
                  action: null
                },
                {
                  icon: Clock,
                  title: "Availability",
                  value: "Mon - Fri, 12PM - 10PM PKT",
                  action: null
                }
              ].map((item, index) => (
                <Card key={index} className="p-4 hover-lift transition-smooth">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.title}</div>
                      {item.action ? (
                        <a 
                          href={item.action}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect With Me</h4>
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
                    className="w-12 h-12 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-fade-in-right shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">
                  Send Message
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help you..."
                    required
                    rows={5}
                    className="mt-2"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full group shadow-accent"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                I typically respond within 24 hours during business days.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};