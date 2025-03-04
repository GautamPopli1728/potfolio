'use client';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function Experience() {
  const experiences = [
    {
      company: "Telus International",
      role: "Sr. Application Developer",
      period: "September 2021 - Present",
      achievements: [
        "Developed SPAs using Next.js and React.js for fast and optimized web applications",
        "Implemented dynamic routing and server-side rendering (SSR) to improve performance and scalability",
        "Successfully reduced page load time by 35% through performance optimization techniques",
        "Developed reusable UI components, resulting in a 25% reduction in development time"
      ]
    },
    {
      company: "Q3 Technology",
      role: "Software Engineer",
      period: "March 2021 - September 2021",
      achievements: [
        "Designed and developed interactive web applications using React.js and Redux",
        "Enhanced application performance through component refactoring and lazy loading",
        "Introduced best practices in code structuring, improving maintainability"
      ]
    },
    {
      company: "IOT83, Gurgaon",
      role: "ReactJS Developer",
      period: "Nov 2019 - March 2021",
      achievements: [
        "Developed user-friendly dashboards for real-time data visualization",
        "Collaborated with backend developers for seamless API integration"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            5+ years of expertise in building modern web applications with Next.js and React.js
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <BuildingOfficeIcon className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BriefcaseIcon className="w-5 h-5" />
                  <span>{exp.role}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarIcon className="w-5 h-5" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mt-4">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.1) }}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React.js', 'Redux', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'ExpressJS', 'MongoDB'].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600">Tools & Version Control</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'VS Code', 'Agile'].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 