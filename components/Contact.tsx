'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:gautam.popli2926@gmail.com"
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <EnvelopeIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>gautam.popli2926@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+919717270262"
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <PhoneIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+91 9717270262</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 text-gray-600 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <MapPinIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p>Noida, Uttar Pradesh, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {/* {['github', 'linkedin'].map((social) => ( */}
                  <motion.a
                    key={"github"}
                    href={`https://github.com/GautamPopli1728`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group"
                    whileHover={{ y: -5 }}
                  >
                    <Image
                      src="/github-icon.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="w-6 h-6 text-blue-600 group-hover:text-white"
                    />
                  </motion.a>

                  <motion.a
                    key={"linkedin"}
                    href={`https://www.linkedin.com/in/gautam-popli-548690180/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group"
                    whileHover={{ y: -5 }}
                  >
                    <Image
                      src="/linkedin-icon.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="w-6 h-6 text-blue-600 group-hover:text-white"
                    />
                  </motion.a>
                {/* ))} */}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="group"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="group"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 