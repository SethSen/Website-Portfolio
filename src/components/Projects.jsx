import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Network Intrusion Detection System",
      description: "Developed an AI-powered network intrusion detection system using machine learning algorithms to identify and prevent potential security threats in real-time.",
      skills: ["Wireshark", "Python", "Machine Learning", "Network Security"],
      tools: ["Snort", "Tensorflow", "Packet Analysis", "Linux"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Blockchain Security Audit Tool",
      description: "Created a comprehensive security audit tool for smart contracts and blockchain applications, identifying vulnerabilities and suggesting improvements.",
      skills: ["Solidity", "Smart Contracts", "Blockchain", "Security Testing"],
      tools: ["Truffle", "Ganache", "Web3.js", "MetaMask"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Digital Forensics Framework",
      description: "Built a digital forensics framework for investigating cybercrime, featuring automated evidence collection and analysis capabilities.",
      skills: ["Digital Forensics", "Evidence Collection", "Data Analysis", "Chain of Custody"],
      tools: ["Autopsy", "EnCase", "FTK", "Volatility"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Zero Trust Architecture Implementation",
      description: "Designed and implemented a zero trust security architecture for enterprise systems, enhancing security through strict access controls.",
      skills: ["Network Architecture", "Identity Management", "Access Control", "Security Policies"],
      tools: ["Cisco ISE", "Okta", "Palo Alto Networks", "Azure AD"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Threat Intelligence Platform",
      description: "Developed a threat intelligence platform that aggregates and analyzes security data from multiple sources to provide actionable insights.",
      skills: ["Threat Analysis", "Data Integration", "API Development", "Risk Assessment"],
      tools: ["Node.js", "ElasticSearch", "MISP", "OpenCTI"],
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Security Awareness Training Platform",
      description: "Created an interactive training platform for employees to learn about cybersecurity best practices through simulated scenarios and assessments.",
      skills: ["E-Learning", "Gamification", "Content Development", "User Experience"],
      tools: ["React", "Node.js", "MongoDB", "AWS"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 text-white"
      >
        My Projects
      </motion.h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="w-full max-w-sm bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 flex flex-col hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/5">
                <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
                <p className="text-white mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-6 space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full bg-purple-400/20 text-purple-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full bg-purple-400/20 text-purple-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-500 mt-auto group font-medium"
                  whileHover={{ x: 5 }}
                >
                  View Project <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;