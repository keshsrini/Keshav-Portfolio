import { motion, useScroll, useTransform } from 'motion/react';
import { Trophy } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Achievements() {
  const achievements = [
    {
      title: 'Academic Excellence Award - CGPA 9.26',
      description: 'Achieved CGPA above 9.00 till 4th semester at St. Joseph\'s College of Engineering, recognized as a topper and awarded Rs.20,000 for outstanding academic performance.',
      image: '/assets/1760179517590.jpg',
      link: 'https://www.linkedin.com/posts/keshavsrini1525_academicexcellence-artificialintelligence-activity-7382728000053846016-JXMO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZJkPcBp0oGu2MM9_HGCdPNKm3C1TR00rA',
    },
    {
      title: 'HackIndia - Top 25 Finalists in Zonal Round',
      description: 'Achieved Top 25 position in the HackIndia Zonal Round, competing against talented teams from across the region with innovative solutions.',
      image: '/assets/Hackathon/1754896475.jpg',
      link: 'https://www.linkedin.com/posts/keshavsrini1525_hackindia-ai-web3-activity-7301651331495145473-mMNT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZJkPcBp0oGu2MM9_HGCdPNKm3C1TR00rA',
    },
    {
      title: 'ICPC Participant - 2024, 2025',
      description: 'Participated in the prestigious International Collegiate Programming Contest (ICPC) in 2024 and 2025, achieving Rank 2379 and gaining valuable competitive programming experience.',
      image: '/assets/icpc-logo.png',
    },
  ];

  return (
    <section id="achievements" className="relative py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">Achievements</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">Milestones & Recognition</p>
        </motion.div>

        <div className="space-y-16">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementCard({
  achievement,
  index,
}: {
  achievement: { title: string; description: string; image: string; link?: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
        index % 2 === 0 ? '' : 'lg:grid-flow-dense'
      }`}
    >
      {/* Image */}
      <motion.div
        style={{ y }}
        className={`relative group ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}
      >
        <div className={`relative overflow-hidden aspect-video ${achievement.title.includes('ICPC') ? 'bg-white flex items-center justify-center p-8' : ''}`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={achievement.image}
              alt={achievement.title}
              className={`w-full h-full ${achievement.title.includes('ICPC') ? 'object-contain' : 'object-cover'}`}
            />
          </motion.div>
          {!achievement.title.includes('ICPC') && (
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          )}
          
          {/* Trophy Icon Overlay */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-4 right-4 p-4 bg-[#E50914] bg-opacity-90"
          >
            <Trophy size={32} />
          </motion.div>
        </div>

        {/* Glow Border Effect */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(229, 9, 20, 0.3)',
              '0 0 40px rgba(229, 9, 20, 0.6)',
              '0 0 20px rgba(229, 9, 20, 0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 pointer-events-none"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}
      >
        <div className="bg-zinc-900 p-8 border-l-4 border-[#E50914] hover:border-l-8 transition-all duration-300">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#E50914] mb-6"
          />

          <h3 className="text-3xl mb-4 text-[#E50914]">
            {achievement.title}
          </h3>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            {achievement.description}
          </p>

          {achievement.link && (
            <motion.a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 text-[#E50914] cursor-pointer group"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
