import { motion } from 'motion/react';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { useState } from 'react';

export function Certifications() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      organization: 'Amazon Web Services (AWS)',
      issueDate: 'January 2026',
      credentialUrl: 'https://www.credly.com/badges/1eef81b7-ed8b-4134-b3c2-6cd6e7b94baa',
      skills: ['AWS Cloud', 'Cloud Computing', 'Cloud Architecture', 'AWS Services'],
      logo: '/assets/icons8-aws-logo-480.png',
    },
    {
      name: 'Problem Solving (Intermediate)',
      organization: 'HackerRank',
      issueDate: 'April 2025',
      credentialUrl: 'https://www.linkedin.com/posts/keshavsrini1525_problemsolving-hackerrank-certification-activity-7319289376973148160-W-l0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZJkPcBp0oGu2MM9_HGCdPNKm3C1TR00rA',
      skills: ['Problem Solving', 'Logical Thinking', 'DSA'],
      logo: '/assets/HackerRank_Icon-1000px.png',
    },
    {
      name: 'Problem Solving (Basic)',
      organization: 'HackerRank',
      issueDate: 'December 2024',
      credentialUrl: 'https://www.linkedin.com/posts/keshavsrini1525_problemsolving-certification-algorithm-activity-7269736087407722497-b0rN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZJkPcBp0oGu2MM9_HGCdPNKm3C1TR00rA',
      skills: ['Logical Thinking', 'Problem Solving'],
      logo: '/assets/HackerRank_Icon-1000px.png',
    },
    {
      name: 'Google Cloud Computing Foundations',
      organization: 'NPTEL',
      issueDate: 'November 2024',
      credentialUrl: 'https://www.linkedin.com/posts/keshavsrini1525_googlecloud-iitkharagpur-cloudcomputing-activity-7265753004530630656-NYC-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZJkPcBp0oGu2MM9_HGCdPNKm3C1TR00rA',
      skills: ['Cloud Computing', 'Google Cloud Platform (GCP)', 'Cloud Architecture'],
      logo: '/assets/NPTEL.jpg',
    },
    {
      name: 'Oracle Certified AI Foundations Associate',
      organization: 'Oracle',
      issueDate: 'October 2024',
      credentialUrl: 'https://www.linkedin.com/posts/keshavsrini1525_aicertification-oraclecertified-associate-activity-7247056165564506112-N4F1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZJkPcBp0oGu2MM9_HGCdPNKm3C1TR00rA',
      skills: ['Deep Learning', 'Artificial Intelligence (AI)', 'Machine Learning', 'Generative AI'],
      logo: '/assets/Oracle-Symbol.png',
    },
    {
      name: 'AWS Cloud Quest: Cloud Practitioner',
      organization: 'Amazon Web Services (AWS)',
      issueDate: 'July 2024',
      credentialUrl: 'https://skillsprofile.skillbuilder.aws/user/keshav-srini/certification-badges',
      skills: ['Amazon EC2', 'Amazon DynamoDB', 'AWS Cloud Services', 'Cloud Computing'],
      logo: '/assets/icons8-aws-logo-480.png',
    },
    {
      name: 'Python for Data Science',
      organization: 'NPTEL',
      issueDate: 'April 2024',
      credentialUrl: 'https://www.linkedin.com/posts/keshavsrini1525_i-feel-delightful-to-share-my-nptel-online-activity-7183844241842843650-irFw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZJkPcBp0oGu2MM9_HGCdPNKm3C1TR00rA',
      badge: 'ELITE Certificate',
      skills: ['Data Visualization', 'Python Programming', 'Data Science', 'Data Analysis'],
      logo: '/assets/NPTEL.jpg',
    },
  ];

  return (
    <section id="certifications" className="relative py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">Certifications</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">Professional Credentials & Certifications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-80 cursor-pointer perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <motion.div
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 backface-hidden bg-zinc-900 border border-zinc-800 p-6 flex flex-col"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    {'logo' in cert && cert.logo ? (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img 
                          src={cert.logo} 
                          alt={cert.organization}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-3 bg-[#E50914] bg-opacity-10 border border-[#E50914]">
                        <Award className="text-[#E50914]" size={32} />
                      </div>
                    )}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(229, 9, 20, 0.3)',
                          '0 0 20px rgba(229, 9, 20, 0.6)',
                          '0 0 10px rgba(229, 9, 20, 0.3)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-3 py-1 bg-[#E50914] text-xs"
                    >
                      {('badge' in cert && cert.badge) ? cert.badge : 'CERTIFIED'}
                    </motion.div>
                  </div>

                  <h3 className="text-xl mb-3 flex-grow">{cert.name}</h3>

                  <div className="space-y-2">
                    <p className="text-zinc-400">{cert.organization}</p>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar size={14} />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500 text-center">
                      Hover to see skills →
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#E50914] to-[#8B0000] border border-[#E50914] p-6 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div>
                    <h4 className="text-xl mb-4 text-white">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white text-sm border border-gray-300 font-medium"
                          style={{ color: '#000000' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#E50914] hover:bg-opacity-90 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    View Credential
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
