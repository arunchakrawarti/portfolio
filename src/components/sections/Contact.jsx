"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { CONTACT_INFO } from "@/constants/data";
import SectionHeading from "../atoms/SectionHeading";
import MagneticButton from "../atoms/MagneticButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const response = await fetch("https://formspree.io/f/mykqredn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      label: "Email Me",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      icon: Mail,
      accent: "from-blue-500 to-indigo-600"
    },
    {
      label: "Call Me",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
      icon: Phone,
      accent: "from-green-400 to-emerald-600"
    },
    {
      label: "Location",
      value: CONTACT_INFO.location,
      href: "#",
      icon: MapPin,
      accent: "from-red-400 to-orange-500"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Contact Me"
          subtitle="Get In Touch"
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={idx}
                    href={card.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-2xl bg-card-dark border border-card-border hover:border-accent/20 transition-all duration-300 flex items-center gap-4 cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">
                        {card.label}
                      </span>
                      <span className="text-white font-medium text-sm md:text-base font-sans mt-0.5 break-all">
                        {card.value}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 rounded-3xl overflow-hidden border border-card-border shadow-xl bg-card-dark"
            >
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.27263595561!2d77.206584!3d28.628454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5d34555555%3A0x18f1e390c8855555!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(0.8) contrast(1.2)" }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-card-dark border border-card-border shadow-2xl relative"
          >
            <h3 className="text-xl font-bold text-white mb-6 font-sans">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent p-4 rounded-xl text-white outline-none transition-all duration-300 font-sans peer text-sm placeholder-shown:border-white/10"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-xs font-mono text-gray-500 uppercase tracking-wider transition-all duration-300 pointer-events-none origin-left 
                  peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:translate-y-0
                  peer-focus:text-xs peer-focus:-translate-y-8 peer-focus:text-accent
                  not-placeholder-shown:text-xs not-placeholder-shown:-translate-y-8 not-placeholder-shown:text-accent"
                >
                  Your Name
                </label>
              </div>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent p-4 rounded-xl text-white outline-none transition-all duration-300 font-sans peer text-sm placeholder-shown:border-white/10"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-xs font-mono text-gray-500 uppercase tracking-wider transition-all duration-300 pointer-events-none origin-left
                  peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:translate-y-0
                  peer-focus:text-xs peer-focus:-translate-y-8 peer-focus:text-accent
                  not-placeholder-shown:text-xs not-placeholder-shown:-translate-y-8 not-placeholder-shown:text-accent"
                >
                  Your Email
                </label>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent p-4 rounded-xl text-white outline-none transition-all duration-300 font-sans peer text-sm placeholder-shown:border-white/10"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-4 text-xs font-mono text-gray-500 uppercase tracking-wider transition-all duration-300 pointer-events-none origin-left
                  peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:translate-y-0
                  peer-focus:text-xs peer-focus:-translate-y-8 peer-focus:text-accent
                  not-placeholder-shown:text-xs not-placeholder-shown:-translate-y-8 not-placeholder-shown:text-accent"
                >
                  Subject
                </label>
              </div>
              <div className="relative group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-accent p-4 rounded-xl text-white outline-none transition-all duration-300 font-sans peer text-sm resize-none placeholder-shown:border-white/10"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-xs font-mono text-gray-500 uppercase tracking-wider transition-all duration-300 pointer-events-none origin-left
                  peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:translate-y-0
                  peer-focus:text-xs peer-focus:-translate-y-8 peer-focus:text-accent
                  not-placeholder-shown:text-xs not-placeholder-shown:-translate-y-8 not-placeholder-shown:text-accent"
                >
                  Your Message
                </label>
              </div>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center gap-3 text-accent text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Your message has been successfully received. I will write back soon!</span>
                </motion.div>
              )}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-500 text-sm"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>Failed to send message. Please try again later or contact me directly.</span>
                </motion.div>
              )}
              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white font-bold text-sm shadow-xl shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Send Message
                  </>
                )}
              </MagneticButton>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
