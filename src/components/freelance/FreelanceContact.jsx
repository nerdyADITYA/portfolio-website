import React from "react";
import { motion } from 'framer-motion';
import { freelanceData } from '../../lib/freelanceData';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '../../hooks/use-toast.js';
import { Button } from '../ui/button.jsx';
import { Input } from '../ui/input.jsx';
import { Textarea } from '../ui/textarea.jsx';
import emailService from '../../services/emailService.js';
import { portfolioData } from '../../lib/portfolioData.js';

export default function FreelanceContact() {
  const { contactCTA } = freelanceData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      // Use EmailJS instead of API
      return await emailService.sendContactEmail(data);
    },
    onSuccess: (result) => {
      const title = result.demo
        ? "Demo mode: Message logged!"
        : "Message sent successfully!";

      const description = result.demo
        ? "Configure EmailJS to enable real email sending. Check the console for setup instructions."
        : "Thank you for reaching out. I'll get back to you soon.";

      toast({
        title,
        description,
        variant: result.demo ? "default" : "default"
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
    <section id="freelance-contact" className="py-20 relative z-10 hidden-scrollbar">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent-purple/10 border border-portfolio-accent/30"
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">{contactCTA.headline}</span>
            </h2>

            <p className="text-portfolio-text-muted mb-6 max-w-xl mx-auto">
              {contactCTA.description}
            </p>

            <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">
              <i className="fas fa-calendar-check mr-2"></i>
              {contactCTA.availability}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Contact Form */}
            <div>
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
                    className="w-full px-4 py-3 bg-portfolio-secondary border border-gray-600 rounded-lg focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none transition-colors text-portfolio-text-light placeholder:text-gray-400"
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
                    className="w-full px-4 py-3 bg-portfolio-secondary border border-gray-600 rounded-lg focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none transition-colors text-portfolio-text-light placeholder:text-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-portfolio-secondary border border-gray-600 rounded-lg focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent outline-none transition-colors resize-none text-portfolio-text-light placeholder:text-gray-400"
                    placeholder="Tell me about your project..."
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
            <div className="flex flex-col justify-center space-y-8 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-portfolio-accent/20 pt-8 md:pt-0">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-portfolio-text-light">Contact Details</h3>
                {portfolioData.contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-portfolio-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${info.icon} text-portfolio-accent text-lg`}></i>
                    </div>
                    <div className="overflow-hidden">
                      <p className="font-medium text-sm text-portfolio-text-muted">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-portfolio-text-light hover:text-portfolio-accent transition-colors truncate block">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-portfolio-text-light truncate">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-portfolio-text-light">Follow Me</h4>
                <div className="flex space-x-4">
                  {portfolioData.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-portfolio-accent/20 rounded-lg flex items-center justify-center hover:bg-portfolio-accent hover:text-white transition-colors"
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-portfolio-text-muted text-sm mt-4">
                <i className="fas fa-clock mr-2"></i>
                Typically respond within 24 hours
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
