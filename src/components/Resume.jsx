import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, ChevronRight, Circle } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const educationData = [
    {
      institution: "BCIT",
      degree: "Diploma in CIT",
      period: "2022-2023",
      details: {
        "Development": [
          "Python, JavaScript, SQL",
          "React.js, Flask, Node.js",
          "Docker, Git, CI/CD"
        ],
        "Infrastructure": [
          "AWS, Azure, GCP",
          "Linux, Windows, MacOS",
          "Network Services & Security"
        ]
      }
    },
    {
      institution: "BCIT",
      degree: "BTech Digital Forensics/Cyber Security",
      period: "2024-Present",
      details: {
        "Core Skills": [
          "Packet Analysis & Security Monitoring",
          "Incident Response & Recovery",
          "Malware Analysis & Cryptography",
          "Digital Evidence & Device Imaging",
          "Mobile & Cloud Forensics"
        ],
        "Legal & Tools": [
          "Criminal Law & Documentation",
          "Celebrite, Wireshark, FTK",
          "Magnet Axiom, Autopsy",
          "NirSoft, WinHex"
        ]
      }
    }
  ];

  const experienceData = [
    {
      company: "BCIT LTC",
      position: "Web Developer",
      period: "Jan - May 2023",
      details: {
        "Achievements": [
          "Built full-stack preceptor scheduling system",
          "Improved student placement efficiency by 60%"
        ],
        "Tech Stack": ["React", "Node.js", "SQL", "Docker", "GitLab"]
      }
    },
    {
      company: "ZipTech",
      position: "CI/CD Engineer",
      period: "Sept - Dec 2023",
      details: {
        "Achievements": [
          "Implemented automated testing pipeline with Cypress.io",
          "Reduced deployment errors by 40%"
        ],
        "Tech Stack": ["Cypress.io", "CI/CD", "Github"]
      }
    }
  ];

  const TimelineConnector = () => (
    <div className="hidden md:block absolute left-[11px] top-8 bottom-0 w-0.5 bg-accent-600/30" />
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:px-12 pt-20 mb-16">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 w-full sm:w-auto">
        {[
          { id: 'education', Icon: GraduationCap, label: 'EDUCATION' },
          { id: 'experience', Icon: Briefcase, label: 'EXPERIENCE' }
        ].map(({ id, Icon, label }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(id)}
            className={`
              text-lg sm:text-xl font-bold flex items-center justify-center gap-2 
              p-3 rounded-lg transition-all duration-300
              ${activeTab === id 
                ? 'bg-accent-600/10 text-accent-600' 
                : 'text-secondary-200 hover:bg-primary-700/10'
              }
            `}
          >
            <Icon className="w-5 h-5" />
            {label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {mounted && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl"
          >
            <div className="relative space-y-6">
              {(activeTab === 'education' ? educationData : experienceData).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-4 md:pl-8"
                >
                  {index < (activeTab === 'education' ? educationData : experienceData).length - 1 && <TimelineConnector />}
                  <div className="absolute left-0 top-3 w-6 h-6 hidden md:block">
                    <Circle className="w-6 h-6 text-accent-600 fill-primary-800" />
                  </div>
                  <div className="bg-primary-700/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-700/20 card-glow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-accent-600 text-lg font-bold">
                          {activeTab === 'education' ? item.institution : item.company}
                        </h3>
                        <h4 className="text-base font-semibold text-secondary-900">
                          {activeTab === 'education' ? item.degree : item.position}
                        </h4>
                      </div>
                      <span className="text-sm text-secondary-200 bg-primary-700/20 px-2 py-1 rounded-full self-start">
                        {item.period}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {Object.entries(item.details).map(([category, items]) => (
                        <div key={category} className="space-y-2">
                          <h5 className="text-accent-400 text-sm font-semibold border-b border-accent-600/20 pb-1">
                            {category}
                          </h5>
                          <ul className="space-y-2">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-secondary-200">
                                <ChevronRight className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resume;