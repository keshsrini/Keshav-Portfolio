import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

export function Badges() {
  const [selectedBadge, setSelectedBadge] = useState<number | null>(null);

  // AWS Educate Badges
  const badges = [
    { 
      id: 1, 
      name: 'AWS Certified Cloud Practitioner', 
      description: 'Foundational AWS certification validating overall understanding of the AWS Cloud', 
      image: '/assets/AWS Certified Cloud Practitioner.png',
      issuedDate: '01/2026',
      credentialId: '1eef81b7-ed8b-4134-b3c2-6cd6e7b94baa',
      credentialUrl: 'https://www.credly.com/badges/1eef81b7-ed8b-4134-b3c2-6cd6e7b94baa'
    },
    { 
      id: 2, 
      name: 'Introduction to Cloud 101', 
      description: 'Completed the Cloud Computing 101 course covering fundamental cloud concepts', 
      image: '/assets/edu1.png',
      issuedDate: '11/18/2024',
      credentialId: '7d7f7a91-b400-458c-8aa1-2d261a1c70d4'
    },
    { 
      id: 3, 
      name: 'Getting Started with Storage', 
      description: 'Completed the Getting Started with Storage course', 
      image: '/assets/edu2.png',
      issuedDate: '11/19/2024',
      credentialId: 'b17a7436-a70b-458c-96db-9bc755f6067e'
    },
    { 
      id: 4, 
      name: 'Getting Started with Compute', 
      description: 'Completed the Getting Started with Compute course', 
      image: '/assets/edu3.png',
      issuedDate: '12/02/2024',
      credentialId: '47c5abc5-dacb-4763-9638-eba1d1c1445b'
    },
    { 
      id: 5, 
      name: 'Getting Started with Databases', 
      description: 'Completed the Getting Started with Databases course', 
      image: '/assets/edu4.png',
      issuedDate: '12/09/2024',
      credentialId: '2e57d080-2305-43e8-9b5a-ca135f14a4e1'
    },
    { 
      id: 6, 
      name: 'Getting Started with Networking', 
      description: 'Completed the Getting Started with Networking course', 
      image: '/assets/edu5.png',
      issuedDate: '12/13/2024',
      credentialId: 'c6a7c313-bd4f-4f57-99d0-140368b2d464'
    },
    { 
      id: 7, 
      name: 'Getting Started with Security', 
      description: 'Completed the Getting Started with Security course', 
      image: '/assets/edu6.png',
      issuedDate: '12/24/2024',
      credentialId: 'fc1736dd-dcf3-49bd-972b-27ad74147eeb'
    },
    { 
      id: 8, 
      name: 'Getting Started with Serverless', 
      description: 'Completed the Getting Started with Serverless course', 
      image: '/assets/edu7.png',
      issuedDate: '12/13/2024',
      credentialId: '7a3134c9-8bd8-4b41-919d-c92682dd2630'
    },
    { 
      id: 9, 
      name: 'Getting Started with Cloud Ops', 
      description: 'Completed the Getting Started with Cloud Ops course', 
      image: '/assets/edu8.png',
      issuedDate: '12/13/2024',
      credentialId: '7f58cd92-3c4f-46ba-810a-1c8565ddfd87'
    },
    { 
      id: 10, 
      name: 'Introduction to Generative AI', 
      description: 'Completed the Introduction to Generative AI course', 
      image: '/assets/edu9.png',
      issuedDate: '11/20/2024',
      credentialId: '1b66c684-02fa-4a63-9ceb-aa3deca30b87'
    },
    { 
      id: 11, 
      name: 'Machine Learning Foundations', 
      description: 'Completed the Machine Learning Foundations course', 
      image: '/assets/edu10.png',
      issuedDate: '12/24/2024',
      credentialId: 'd11fe7e2-172d-4a4c-bacf-b8f9ec0b17d8'
    },
    { 
      id: 12, 
      name: 'Introduction to Cloud Semester 1', 
      description: 'AWS Academy Graduate - Introduction to Cloud Semester 1', 
      image: '/assets/edu11.png',
      issuedDate: '09/16/2024',
      credentialId: '253dd8ff-f26b-40ed-b21e-3e696e196719'
    },
    { 
      id: 13, 
      name: 'Introduction to Cloud Semester 2', 
      description: 'AWS Academy Graduate - Introduction to Cloud Semester 2', 
      image: '/assets/edu12.png',
      issuedDate: '09/20/2024',
      credentialId: 'fd15ebe3-9d4c-497c-b83a-321fa113e089'
    },
    { 
      id: 14, 
      name: 'Cloud Essentials', 
      description: 'Developed knowledge of AWS Cloud Essentials', 
      image: '/assets/edu13.png',
      issuedDate: '06/26/2025',
      credentialId: '86443fb5-ad3d-4022-982d-b1860a1a31b2'
    },
    { 
      id: 15, 
      name: 'Cloud Quest Cloud Practitioner', 
      description: 'AWS Cloud Quest: Cloud Practitioner - Training Badge', 
      image: '/assets/edu14.png',
      issuedDate: '07/24/2024',
      credentialId: 'e7102bb5-8474-4557-b305-40747fad368f'
    },
  ];

  return (
    <section id="badges" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">
            AWS Achievement Badges
          </h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">15 Specialized AWS Learning Achievements</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -10 }}
              onClick={() => setSelectedBadge(index)}
              className="bg-zinc-900 p-6 border border-zinc-800 hover:border-[#E50914] transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-[#E50914] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(229, 9, 20, 0)',
                    '0 0 40px rgba(229, 9, 20, 0.3)',
                    '0 0 20px rgba(229, 9, 20, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Badge Icon */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={badge.image} alt={badge.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-center text-sm mb-2 group-hover:text-[#E50914] transition-colors">
                  {badge.name}
                </h3>
                <div className="text-xs text-zinc-500 text-center">
                  Click for details
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge Modal */}
        {selectedBadge !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedBadge(null)}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border-2 border-[#E50914] p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedBadge(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-[#E50914] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-32 h-32 mx-auto mb-6 flex items-center justify-center"
                >
                  <img 
                    src={badges[selectedBadge].image} 
                    alt={badges[selectedBadge].name} 
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <h3 className="text-3xl mb-4 text-[#E50914]">
                  {badges[selectedBadge].name}
                </h3>
                <p className="text-zinc-300 mb-6">
                  {badges[selectedBadge].description}
                </p>

                <div className="border-t border-zinc-800 pt-6 space-y-2 text-sm text-zinc-400 text-left mb-8">
                  <p><strong>Issuing Organization:</strong> Amazon Web Services Training and Certification</p>
                  <p><strong>Issued Date:</strong> {badges[selectedBadge].issuedDate}</p>
                  <p><strong>Expiration Date:</strong> This credential does not expire</p>
                  <p><strong>Credential ID:</strong> {badges[selectedBadge].credentialId}</p>
                </div>

                <motion.a
                  href={badges[selectedBadge].credentialUrl || "https://skillsprofile.skillbuilder.aws/user/keshav-srini/certification-badges"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#E50914] hover:bg-[#b8070f] transition-colors w-full block text-center"
                >
                  {badges[selectedBadge].credentialUrl ? 'View on Credly' : 'View on AWS Skill Builder'}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
