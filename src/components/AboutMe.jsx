import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const AboutMe = () => {
  const tools = {
    "Security Tools": [
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Burp Suite",
      "IDA Pro"
    ],
    "Development": [
      "Visual Studio Code",
      "Git",
      "Docker",
      "Jenkins",
      "Kubernetes"
    ],
    "Forensics": [
      "Autopsy",
      "EnCase",
      "FTK Imager",
      "Volatility",
      "Cellebrite"
    ]
  };

  const skills = {
    "Cybersecurity": [
      "Network Security",
      "Penetration Testing",
      "Incident Response",
      "Threat Analysis",
      "Security Architecture"
    ],
    "Development": [
      "Full Stack Development",
      "API Security",
      "Cloud Security",
      "CI/CD Implementation",
      "Secure Coding Practices"
    ],
    "Digital Forensics": [
      "Memory Analysis",
      "Disk Forensics",
      "Network Forensics",
      "Mobile Device Analysis",
      "Malware Analysis"
    ]
  };

  return (
    <div className="min-h-screen flex items-center px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo and Tools */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Tools Section */}
            <div className="space-y-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10">
              <h3 className="text-2xl font-bold text-purple-300">Tools & Technologies</h3>
              {Object.entries(tools).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-lg font-semibold text-purple-200">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-900/30 rounded-full text-sm text-purple-200
                          border border-purple-500/10 hover:bg-purple-900/50 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-purple-300">About Me</h2>
              <div className="space-y-4 text-lg text-purple-100/90">
                <p>
                  <strong className="text-purple-300">Hello! I'm Seth Sen</strong>, a cybersecurity expert and digital forensics specialist based in Vancouver, BC. With over 5 years of experience in the field, I specialize in protecting digital assets and investigating cyber incidents.
                </p>
                <p>
                  My journey in cybersecurity began with a fascination for understanding how systems work and how to protect them. Today, I combine my technical expertise with a proactive approach to security, helping organizations stay ahead of emerging threats.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            {/* Key Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Key Achievements</h3>
              <ul className="space-y-3">
                {[
                  "Led cybersecurity initiatives reducing security incidents by 40%",
                  "Developed and implemented enterprise-wide security protocols",
                  "Published research on advanced persistent threats",
                  "Speaker at major security conferences"
                ].map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
                    <span className="text-purple-100/80">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Skills Section */}
            <div className="space-y-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10">
              <h3 className="text-2xl font-bold text-purple-300">Skills</h3>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-lg font-semibold text-purple-200">{category}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {items.map((skill, index) => (
                      <li key={index} className="flex items-center gap-2 text-purple-100/80">
                        <ChevronRight className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;