import React from "react";
import { motion } from 'framer-motion';
import { freelanceData } from '../../lib/freelanceData';

export default function ServicesSection() {
  const { services } = freelanceData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Services I Offer</span>
          </h2>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            From concept to deployment, I provide end-to-end development services tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-xl bg-portfolio-secondary/30 backdrop-blur-sm border border-gray-700 hover:border-portfolio-accent/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-portfolio-accent to-portfolio-accent-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-portfolio-text-light">
                {service.title}
              </h3>
              
              <p className="text-portfolio-text-muted mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-portfolio-accent/10 text-portfolio-accent"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
