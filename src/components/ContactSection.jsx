import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../hooks/use-toast.js";
import { portfolioData } from "../lib/portfolioData.js";
import emailService from "../services/emailService.js";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data) => emailService.sendContactEmail(data),
    onSuccess: (result) => {
      toast({
        title: result.demo ? "Demo mode: Message logged!" : "Message sent successfully!",
        description: result.demo
          ? "Configure EmailJS to enable real email sending. Check the console for setup instructions."
          : "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pt-24 pb-20 scroll-mt-20">
      <Reveal>
        <div className="bk-box bk-static p-6 md:p-10" style={{ background: "var(--bk-pink)" }}>
          <SectionTitle className="mb-3">Let's work together!</SectionTitle>
          <p className="text-xl mb-8">Open to roles, collaborations and Master's programme conversations — drop me a line.</p>

          <div className="grid md:grid-cols-2 gap-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mono text-sm font-bold block mb-1">Name</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="bk-input" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mono text-sm font-bold block mb-1">Email</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bk-input" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="mono text-sm font-bold block mb-1">Message</label>
                <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange} className="bk-input resize-none" placeholder="Say hello!" />
              </div>
              <button type="submit" disabled={contactMutation.isPending} className="bk-btn">
                {contactMutation.isPending ? "Sending..." : "Send message →"}
              </button>
            </form>

            <div className="space-y-4">
              {portfolioData.contactInfo.map((info) => (
                <div key={info.label} className="bk-box bk-static p-4 bg-white">
                  <span className="mono text-xs block">{info.label}</span>
                  {info.link ? (
                    <a href={info.link} className="font-bold underline underline-offset-4 break-all">{info.value}</a>
                  ) : (
                    <b>{info.value}</b>
                  )}
                </div>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                {portfolioData.socialLinks.map((s) => (
                  <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" className="bk-btn white">{s.platform} ↗</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
