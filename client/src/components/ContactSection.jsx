import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';
import { useToast } from '../hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../lib/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { toast } = useToast();
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);

  useScrollAnimation([formRef, contactInfoRef]);

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 gradient-text">Get In Touch</h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="opacity-0 transform translate-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-secondary border border-gray-600 rounded-lg focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none transition-colors text-portfolio-text-light"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-secondary border border-gray-600 rounded-lg focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none transition-colors text-portfolio-text-light"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-secondary border border-gray-600 rounded-lg focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none transition-colors resize-none text-portfolio-text-light"
                  placeholder="Tell me about your project or say hello!"
                />
              </div>
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-purple px-8 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={contactInfoRef} className="opacity-0 transform translate-y-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-space font-semibold mb-6">Let's Connect</h3>
                <p className="text-portfolio-text-muted mb-6">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
                </p>
              </div>

              <div className="space-y-4">
                {portfolioData.contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                      <i className={`${info.icon} text-portfolio-accent text-xl`}></i>
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-portfolio-text-muted">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {portfolioData.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-portfolio-accent/20 rounded-lg flex items-center justify-center hover:bg-portfolio-accent hover:text-white transition-colors"
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
