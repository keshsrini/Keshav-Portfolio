import { motion } from 'motion/react';
import { Calendar, Briefcase } from 'lucide-react';

export function PositionsOfResponsibility() {
  const positions = [
    {
      title: 'AWS Community Builder',
      organization: 'Amazon Web Services (AWS)',
      issueDate: 'January 2026',
      description: 'Selected as an AWS Community Builder, contributing to the AWS community through content creation, knowledge sharing, and helping others learn about cloud technologies.',
      badge: '/assets/icons8-aws-logo-480.png',
    },
    {
      title: 'AWS Educate Learner Program Advocate',
      organization: 'AWS Training & Certification',
      issueDate: 'July 2025',
      description: 'Focused on personal branding and advocating for AWS Educate programs to help learners advance their cloud computing skills and career development.',
      badge: '/assets/aws-educate-advocate-badge.png',
    },
    {
      title: 'Member of AWS Emerging Talent Community',
      organization: 'AWS Educate',
      issueDate: 'March 2025',
      description: 'Active member of the AWS Emerging Talent community, contributing to knowledge sharing and supporting fellow learners in their cloud computing journey.',
      badge: '/assets/aws-emerging-talent-badge.jpeg',
    },
  ];

  return (
    <section id="positions" className="relative py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">
            Positions of Responsibility
          </h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">Leadership & Community Contributions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-900 p-6 border border-zinc-800 hover:border-[#E50914] transition-all duration-300 group"
            >
              {/* AWS Logo */}
              <div className="mb-4 flex justify-center">
                <img 
                  src="/assets/icons8-aws-logo-480.png" 
                  alt="AWS Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl mb-2 group-hover:text-[#E50914] transition-colors">
                  {position.title}
                </h3>
                <p className="text-lg text-zinc-300 mb-3">{position.organization}</p>

                <div className="flex items-center justify-center gap-2 text-sm text-zinc-400 mb-4">
                  <Calendar size={14} className="text-[#E50914]" />
                  <span>Issued: {position.issueDate}</span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {position.description}
                </p>

                {/* Badge Image */}
                {'badge' in position && position.badge && (
                  <div className="flex justify-center mb-4">
                    <img 
                      src={position.badge} 
                      alt={position.title}
                      className={position.title.includes('Emerging Talent') ? 'w-64 h-64 object-contain' : 'w-64 h-auto object-contain'}
                    />
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 pt-4 border-t border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-1 bg-zinc-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-[#E50914]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
