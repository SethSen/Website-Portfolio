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
        "Database Management Systems": [
          "MySQL", 
          "MongoDB", 
          "MSSQL", 
          "PostgreSQL"
        ],
        "Frameworks and Libraries": [
          "React.js", 
          "JUnit", 
          "Jest", 
          "Pytest", 
          "Flask"
        ],
        "Programming Language": [
          "Python", 
          "JavaScript", 
          "Bash"
        ],
        "Analysis & Visualization": [
          "Tableau", 
          "Microsoft Excel", 
          "Visio"
        ],
        "Cloud Computing": [
          "AWS", 
          "Google Cloud", 
          "Azure", 
          "Kubernetes", 
          "Teraform", 
          "Ansible"
        ],
        "Networking": [
          "Network Types",
          "IP Addressing",
          "Subnetting",
          "Network Services",
          "Protocols"
        ],
        "Systems": [
          "Linux",
          "Windows",
          "MacOS",
          "Virtual Machine"
        ],
        "Tools": [
          "Docker",
          "Git",
          "Nginx",
          "Apache",
          "Wireshark",
          "Node.js",
          "VMware",
          "VirtualBox"
        ]
      }
    },
    {
      institution: "BCIT",
      degree: "BTech Digital Forensics/Cyber Security",
      period: "2024-Present",
      details: {
        "Cyber Security": [
          "Security Architecture",
          "Network Exploits",
          "Threat Analysis"
        ],
        "Digital Forensics": [
          "Evidence Collection and Preservation",
          "Mobile/Hard Disk Imaging",
          "Technical Report Writing",
          "Mobile and Cloud Analysis",
          "Data Recovery"
        ],
        "Cloud Forensics": [
          "Data Collection",
          "Incident Response",
          "Cryptocurrency"
        ],
        "Legal Procedures": [
          "Criminal Law",
          "Legal Evidence",
          "Report Writing & Documentation"
        ],
        "Tools": [
          "Cellebrite",
          "Wireshark",
          "Forensic Tool Kit (FTK)",
          "Magnet Axiom",
          "Xways",
          "WinHex"
        ]
      }
    }
  ];

  const experienceData = [
    {
      company: "BCIT Learning & Teaching Centre",
      position: "Web Developer",
      period: "Jan - May 2023",
      details: {
        "Purpose": [
          "Developing a preceptor scheduling app for nursing students",
          "Contributed to both front-end and back-end of an app that tracked nursing student locations, time and days of their preceptorship"
        ],
        "Tech Stack": ["SQL", "NodeJS", "React", "Docker", "GitLab", "JavaScript"]
      }
    },
    {
      company: "ZipTech",
      position: "Continuous Integration & Continuous Delivery (CI/CD)",
      period: "Sept - Dec 2023",
      details: {
        "Purpose": [
          "Writing test scrtipts using Cypress.io",
          "Allow developers to easily find erros in their code by using the pipeline and runing all the test scripts before a new commit"
        ],
        "Tech Stack": ["Cypress.io", "CI/CD", "Github"]
      }
    }
  ];

  const TimelineConnector = () => (
    <div className="hidden md:block absolute left-[11px] top-8 bottom-0 w-0.5 bg-accent-600/30" />
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:px-12 pt-20 mb-32">
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
            {activeTab === 'education' ? (
              <div className="relative space-y-6">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative pl-4 md:pl-8 ${index === educationData.length - 1 ? 'mb-12' : ''}`}
                  >
                    {index < educationData.length - 1 && <TimelineConnector />}
                    <div className="absolute left-0 top-3 w-6 h-6 hidden md:block">
                      <Circle className="w-6 h-6 text-accent-600 fill-primary-800" />
                    </div>
                    <div className="bg-primary-700/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-700/20 card-glow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                        <div>
                          <h3 className="text-purple-300 text-xl font-extrabold">
                            {item.institution}
                          </h3>
                          <h4 className="text-base font-semibold text-secondary-900">
                            {item.degree}
                          </h4>
                        </div>
                        <span className="text-sm text-secondary-200 bg-primary-700/20 px-2 py-1 rounded-full self-start">
                          {item.period}
                        </span>
                      </div>
                      {/* Details rendered as a grid with 2 columns by default and 3 columns on larger screens */}
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(item.details).map(([category, items]) => (
                          <div key={category} className="space-y-2">
                            <h5 className="text-accent-400 text-base font-semibold border-b border-accent-600/20 pb-1 transition-all duration-300 hover:[text-shadow:0_0_10px_rgba(168,85,247,1)]">
                              {category}
                            </h5>
                            <ul className="space-y-2">
                              {items.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-secondary-200">
                                  <ChevronRight className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{detail}</span>
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
            ) : (
              <div className="relative space-y-6">
                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-4 md:pl-8"
                  >
                    {index < experienceData.length - 1 && <TimelineConnector />}
                    <div className="absolute left-0 top-3 w-6 h-6 hidden md:block">
                      <Circle className="w-6 h-6 text-accent-600 fill-primary-800" />
                    </div>
                    <div className="bg-primary-700/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-700/20 card-glow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                        <div>
                          <h3 className="text-purple-300 text-xl font-extrabold">
                            {item.company}
                          </h3>
                          <h4 className="text-base font-semibold text-secondary-900">
                            {item.position}
                          </h4>
                        </div>
                        <span className="text-sm text-secondary-200 bg-primary-700/20 px-2 py-1 rounded-full self-start">
                          {item.period}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {Object.entries(item.details).map(([category, items]) => (
                          <div key={category} className="space-y-2">
                            <h5 className="text-accent-400 text-base font-semibold border-b border-accent-600/20 pb-1 transition-all duration-300 hover:[text-shadow:0_0_10px_rgba(168,85,247,1)]">
                              {category}
                            </h5>
                            <ul className="space-y-2">
                              {items.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-secondary-200">
                                  <ChevronRight className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{detail}</span>
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
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resume;
