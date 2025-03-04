import { AcademicCapIcon, TrophyIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { AnimatedCard } from './client/AnimatedCard';

const certifications = [
  {
    title: "Javascript",
    issuer: "HackerRank",
    date: "2022",
    credentialId: "36380fbea644",
    icon: <AcademicCapIcon className="w-6 h-6" />,
  },
  {
    title: "ReactJS",
    issuer: "HackerRank",
    date: "2022",
    credentialId: "7ba9d8c21598",
    icon: <AcademicCapIcon className="w-6 h-6" />,
  },
  // Add more certifications
];

const achievements = [
  {
    title: "Reduced Page Load Time by 35%",
    description: "Successfully optimized web application performance through code splitting and lazy loading",
    impact: "Improved user experience and SEO rankings",
    icon: <TrophyIcon className="w-6 h-6" />,
  },
  {
    title: "25% Development Time Reduction",
    description: "Developed reusable UI components library that increased team efficiency",
    impact: "Faster feature development and consistent UI",
    icon: <CheckBadgeIcon className="w-6 h-6" />,
  },
];

export default function Achievements() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning and impactful contributions throughout my career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Professional Certifications</h3>
            {certifications.map((cert, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">Issued by {cert.issuer}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">{cert.date}</span>
                      <span className="text-sm text-blue-600">ID: {cert.credentialId}</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 mb-2">{achievement.description}</p>
                    <p className="text-sm text-blue-600 font-medium">Impact: {achievement.impact}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Certifications", value: certifications.length },
            { label: "Happy Clients", value: "30+" },
          ].map((stat, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}