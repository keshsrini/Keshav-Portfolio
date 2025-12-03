import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

export function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      company: 'Prudent AI',
      title: 'Backend Developer - Intern',
      duration: 'Dec 2025 - Present',
      location: 'Chennai, Tamil Nadu, India · On-site',
      type: 'Stipend-based',
      skills: ['Backend Development', 'API Development', 'Postman'],
      responsibilities: [
        'Developing and maintaining backend services and APIs for AI-powered applications',
        'Collaborating with cross-functional teams to implement scalable solutions',
        'Working with modern backend technologies and cloud infrastructure',
      ],
    },
    {
      company: 'Celebal Technologies',
      title: 'Data Engineer - Intern',
      duration: 'May 2025 - Jul 2025 · 3 mos',
      location: 'Jaipur, Rajasthan, India · Remote',
      type: 'Internship',
      skills: ['Data Manipulation', 'ETL', 'Azure Data Factory'],
      responsibilities: [
        'Designed and executed ETL pipeline solutions using Azure Data Factory for efficient data processing',
        'Engineered scalable Python-based ETL pipelines, processing over 500K records daily',
        'Contributed to data-driven solutions at a forward-thinking company',
      ],
    },
    {
      company: 'Dexwox Innovations Private Limited',
      title: 'Backend Developer - Intern',
      duration: 'Mar 2025 - Jun 2025 · 4 mos',
      location: 'Chennai, Tamil Nadu, India · Remote',
      type: 'Internship',
      skills: ['Back-End Web Development', 'Postman API', 'RESTful APIs'],
      responsibilities: [
        'Managed the complete API development lifecycle, enhancing quality and performance',
        'Improved application reliability through database optimizations and system architecture enhancements',
        'Gained hands-on experience with RESTful design principles and industry best practices',
      ],
    },
    {
      company: 'Edunet Foundation (AICTE)',
      title: 'AI Intern',
      duration: 'Nov 2024 - Dec 2024 · 2 mos',
      location: 'Bengaluru, Karnataka, India · Remote',
      type: 'Internship',
      skills: ['Computer Vision', 'Artificial Intelligence (AI)', 'Machine Learning'],
      responsibilities: [
        'Gained hands-on experience with advanced AI technologies and machine learning frameworks',
        'Developed practical skills in data-driven problem solving and AI applications',
        'Enhanced understanding of AI implementation in real-world business scenarios and digital transformation',
      ],
    },
    {
      company: 'CodeClause',
      title: 'Web Development Intern',
      duration: 'Jul 2024 - Aug 2024 · 2 mos',
      location: 'Pune, Maharashtra, India · Remote',
      type: 'Internship',
      skills: ['Web Development'],
      responsibilities: [
        'Developed responsive web applications using modern frontend technologies',
        'Collaborated with team members on various web development projects',
        'Gained practical experience in full-stack web development workflows',
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const visibleExperiences = [
    experiences[currentIndex],
    experiences[(currentIndex + 1) % experiences.length],
    experiences[(currentIndex + 2) % experiences.length],
  ];

  return (
    <section id="experience" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">Experience</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">My Professional Journey</p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#E50914] hover:bg-[#b8070f] p-3 transition-all duration-300 hover:scale-110 hidden md:block"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#E50914] hover:bg-[#b8070f] p-3 transition-all duration-300 hover:scale-110 hidden md:block"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleExperiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-zinc-900 p-6 border border-zinc-800 hover:border-[#E50914] transition-all duration-300 group cursor-pointer"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl group-hover:text-[#E50914] transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-[#E50914]/20 text-[#E50914] rounded">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-lg text-zinc-300 mb-3">{exp.title}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                      <Calendar size={16} className="text-[#E50914]" />
                      {exp.duration}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin size={16} className="text-[#E50914]" />
                      {exp.location}
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-4 mt-4">
                    <h4 className="text-sm mb-3 text-zinc-400">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-zinc-300 flex gap-2">
                          <span className="text-[#E50914] mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {'skills' in exp && exp.skills && (
                    <div className="mt-4 pt-4 border-t border-zinc-800">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-zinc-800 text-zinc-300 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-full h-1 bg-zinc-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-[#E50914]"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#E50914] w-8' : 'bg-zinc-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
