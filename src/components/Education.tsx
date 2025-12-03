import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      institution: "St. Joseph's College Of Engineering",
      degree: 'Bachelor Of Technology',
      major: 'Artificial Intelligence and Data Science',
      duration: '2023 - 2027',
      cgpa: '9.26 / 10',
      location: 'Chennai, India',
      logo: '/assets/sjce-logo.png',
      coursework: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Deep Learning',
        'Database Management',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Web Development',
        'Cloud Computing',
        'Artificial Intelligence',
      ],
    },
    {
      institution: 'Jawahar Higher Secondary School',
      degree: 'Senior Secondary (CBSE)',
      major: 'Science',
      duration: '2023',
      cgpa: '92.2%',
      location: 'Neyveli, India',
      logo: '/assets/jawahar-logo.png',
      coursework: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Biology',
        'English',
      ],
    },
    {
      institution: 'Jawahar Higher Secondary School',
      degree: 'Secondary (CBSE)',
      major: 'General',
      duration: '2021',
      cgpa: '92.4%',
      location: 'Neyveli, India',
      logo: '/assets/jawahar-logo.png',
      coursework: [
        'Mathematics',
        'Science',
        'Social Science',
        'English',
      ],
    },
  ];

  return (
    <section id="education" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">Education</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">Academic Journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E50914] -translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="md:w-5/12 bg-zinc-900 p-6 border border-zinc-800 hover:border-[#E50914] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {'logo' in edu && edu.logo ? (
                      <div className="p-2 bg-white rounded">
                        <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain" />
                      </div>
                    ) : (
                      <div className="p-3 bg-[#E50914] bg-opacity-10 border border-[#E50914]">
                        <GraduationCap className="text-[#E50914]" size={32} />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2 group-hover:text-[#E50914] transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-zinc-300 mb-1">{edu.degree}</p>
                      <p className="text-zinc-400">{edu.major}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Calendar size={16} className="text-[#E50914]" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <MapPin size={16} className="text-[#E50914]" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Award size={16} className="text-[#E50914]" />
                      <span>{edu.cgpa}</span>
                    </div>
                  </div>

                  {'coursework' in edu && edu.coursework && (
                    <div className="border-t border-zinc-800 pt-4">
                      <h4 className="text-sm mb-2 text-zinc-400">
                        {edu.degree.includes('Bachelor') ? 'Relevant Coursework:' : 'Subjects:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-zinc-800 text-zinc-300 rounded hover:bg-[#E50914] hover:text-white transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Progress Bar */}
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

                {/* Timeline Dot */}
                <div className="hidden md:block relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-6 h-6 bg-[#E50914] rounded-full border-4 border-black"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(229, 9, 20, 0.7)',
                          '0 0 0 10px rgba(229, 9, 20, 0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-full h-full rounded-full"
                    />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
