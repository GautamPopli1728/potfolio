'use client';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <CodeBracketIcon className="w-6 h-6" />,
    skills: [
      { name: "Next.js", level: 90, color: "#0070f3" },
      { name: "React.js", level: 95, color: "#61dafb" },
      { name: "Redux", level: 85, color: "#764abc" },
      { name: "JavaScript", level: 90, color: "#f7df1e" },
      { name: "TypeScript", level: 85, color: "#3178c6" },
      { name: "HTML5/CSS3", level: 90, color: "#e34f26" },
      { name: "Bootstrap", level: 85, color: "#7952b3" },
    ],
    bgColor: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Backend Development",
    icon: <CommandLineIcon className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 80, color: "#339933" },
      { name: "Express.js", level: 75, color: "#000000" },
      { name: "MongoDB", level: 75, color: "#47A248" },
      { name: "RESTful APIs", level: 85, color: "#FF6C37" },
    ],
    bgColor: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "Tools & Expertise",
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    skills: [
      { name: "Git", level: 90, color: "#F05032" },
      { name: "VS Code", level: 85, color: "#007ACC" },
      { name: "Agile/Scrum", level: 80, color: "#0052CC" },
      { name: "Performance Optimization", level: 85, color: "#FF4F64" },
    ],
    bgColor: "from-purple-500/10 to-pink-500/10"
  }
];

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With 5+ years of experience in web development, I&apos;ve mastered various technologies and tools
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${category.bgColor} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white rounded-lg shadow-md">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <span className="text-sm font-medium" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "UI/UX Best Practices",
              "Web Performance",
              "SEO Optimization",
              "Cross-Browser Compatibility",
              "Code Review",
              "Team Leadership",
              "Problem Solving"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="px-4 py-2 bg-white rounded-full shadow-md text-sm cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 