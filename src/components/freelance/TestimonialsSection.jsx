import React from "react";
import { motion } from 'framer-motion';
import { freelanceData } from '../../lib/freelanceData';

export default function TestimonialsSection() {
  const { testimonials } = freelanceData;

  return (
    <section id="testimonials" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What Clients Say</span>
          </h2>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-portfolio-secondary/30 backdrop-blur-sm border border-gray-700 relative"
            >
              <div className="absolute -top-3 left-6 text-4xl text-portfolio-accent opacity-50">
                <i className="fas fa-quote-left"></i>
              </div>
              
              <p className="text-portfolio-text-muted mb-6 pt-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-portfolio-accent to-portfolio-accent-purple flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-text-light">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-portfolio-accent">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
