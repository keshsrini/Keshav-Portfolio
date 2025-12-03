import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('cloud');

  const skillCategories = [
    {
      id: 'cloud',
      name: 'AWS Cloud Expertise',
      skills: ['IAM', 'S3', 'DynamoDB', 'RDS', 'Lambda', 'EC2', 'Bedrock', 'VPC', 'CloudWatch', 'API Gateway'],
    },
    {
      id: 'languages',
      name: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'HTML', 'CSS', 'SQL'],
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      skills: ['Node.js', 'Express.js', 'Flask'],
    },
    {
      id: 'databases',
      name: 'Databases',
      skills: ['MongoDB', 'MySQL', 'DynamoDB', 'RDS'],
    },
    {
      id: 'tools',
      name: 'Tools',
      skills: ['Git', 'GitHub Actions', 'VS Code'],
    },
    {
      id: 'core',
      name: 'Core Computer Science',
      skills: ['Object Oriented Programming (OOPs)', 'DBMS', 'System Design (Foundational)'],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="skills" className="relative py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">Technical Skills</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">My Technical Arsenal</p>
        </motion.div>

        <div className="space-y-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-800 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-[#E50914]">
                    {expandedCategory === category.id ? '▼' : '►'}
                  </span>
                  <h3 className="text-2xl group-hover:text-[#E50914] transition-colors">
                    {category.name}
                  </h3>
                </div>
                {expandedCategory === category.id ? (
                  <ChevronUp className="text-[#E50914]" />
                ) : (
                  <ChevronDown className="text-zinc-400" />
                )}
              </button>

              {/* Skills Grid */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedCategory === category.id ? 'auto' : 0,
                  opacity: expandedCategory === category.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: expandedCategory === category.id ? 1 : 0,
                        scale: expandedCategory === category.id ? 1 : 0.8,
                      }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-4 py-2 bg-zinc-800 border border-zinc-700 hover:border-[#E50914] transition-all duration-300 group cursor-pointer"
                    >
                      <span className="text-zinc-300 group-hover:text-[#E50914] transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skill Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl text-center mb-8 text-zinc-300">
            Featured Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'AWS', logo: '/assets/icons8-aws-logo-480.png' },
              { name: 'C++', logo: '/assets/icons8-c-480.png' },
              { name: 'Node.js', logo: '/assets/icons8-node-js-48.png' },
              { name: 'MongoDB', logo: '/assets/mongodb.svg' },
              { name: 'MySQL', logo: '/assets/icons8-my-sql-48.png' },
              { name: 'Git', logo: '/assets/icons8-git-480.png' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-zinc-900 p-6 border border-zinc-800 hover:border-[#E50914] transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform object-contain"
                />
                <div className="text-sm text-zinc-400 group-hover:text-[#E50914] transition-colors">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}