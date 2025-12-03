import { motion } from 'motion/react';
import { LinkedinIcon, GithubIcon, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/keshavsrini1525/',
      color: '#0A66C2',
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
      url: 'https://github.com/keshsrini',
      color: '#ffffff',
    },
    {
      name: 'AWS Skill Builder',
      iconImage: '/assets/icons8-aws-logo-480.png',
      url: 'https://skillsprofile.skillbuilder.aws/user/keshav-srini/certification-badges',
    },
    {
      name: 'AWS Builder',
      iconImage: '/assets/icons8-aws-logo-480.png',
      url: 'https://builder.aws.com/community/@keshav15',
    },
    {
      name: 'LeetCode',
      iconImage: '/assets/icons8-leetcode-96 (2).png',
      url: 'https://leetcode.com/u/keshavsrini/',
    },
    {
      name: 'HackerRank',
      iconImage: '/assets/HackerRank_Icon-1000px.png',
      url: 'https://www.hackerrank.com/profile/keshavsrinivasm',
    },
    {
      name: 'CodeForces',
      iconImage: '/assets/icons8-codeforces-96.png',
      url: 'https://codeforces.com/profile/keshavsrini',
    },
    {
      name: 'AtCoder',
      iconImage: '/assets/atcoder.png',
      url: 'https://atcoder.jp/users/keshavsrini',
    },
    {
      name: 'Credly',
      iconImage: '/assets/icons8-credly-480.png',
      url: 'https://www.credly.com/users/keshav-srinivas-m',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">About Me</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative mb-6 group"
            >
              <div className="absolute inset-0 bg-[#E50914] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <ImageWithFallback
                src="/assets/profile.jpg"
                alt="Keshav Srinivas M"
                className="w-64 h-64 rounded-full object-cover border-4 border-[#E50914] relative z-10"
              />
            </motion.div>

            <h3 className="text-3xl mb-2 text-center">Keshav Srinivas M</h3>
            <p className="text-lg text-[#E50914] mb-2 text-center">AWS Educate Learner Program Advocate</p>
            <p className="text-sm text-zinc-400 mb-6 text-center">Oracle Certified 🏆 | 2X HackerRank Certified⭐ | Cloud Enthusiast☁️ | Programming fanatic</p>

            <motion.a
              href="https://drive.google.com/file/d/1wCczFWIStOaf-PGZY3MM2kFUCAwjGX20/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#E50914] hover:bg-[#b8070f] transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] mb-8"
            >
              <Download size={20} />
              Download Resume
            </motion.a>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 group"
                  title={social.name}
                >
                  {'iconImage' in social ? (
                    <img
                      src={social.iconImage}
                      alt={social.name}
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <social.icon
                      size={24}
                      style={{ color: social.color }}
                      className="group-hover:scale-110 transition-transform"
                    />
                  )}
                  <span className="text-xs text-zinc-400 group-hover:text-white transition-colors text-center">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-zinc-900 p-8 border-l-4 border-[#E50914] hover:border-l-8 transition-all duration-300">
              <h4 className="text-2xl mb-4 text-[#E50914]">
                Who Am I?
              </h4>
              <p className="text-zinc-300 mb-4">
                I am an AWS Educate Learner program Advocate and a trailblazing data science and machine learning professional 
                with hands-on expertise in AWS cloud technologies. Skilled in leveraging advanced analytics, generative AI, 
                and cloud infrastructures to drive transformative business outcomes.
              </p>
              <p className="text-zinc-300 mb-4">
                Recognized as a top academic performer, bringing a relentless passion for uncovering insights and delivering 
                impactful solutions. Whether I'm tackling complex data challenges or learning AWS Cloud services, I approach 
                every task with the same infectious enthusiasm.
              </p>
              <p className="text-zinc-300">
                So if you're looking for a data dynamo who can make numbers sing, shoot me a message - I promise to keep the 
                cloud puns to a minimum. 🌤️ Connect with me to discuss opportunities, share insights, explore potential 
                collaboration, or learn to get succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 p-6 border border-zinc-800 hover:border-[#E50914] transition-all duration-300"
              >
                <div className="text-4xl mb-2 text-[#E50914]">6+</div>
                <div className="text-lg">Projects Completed</div>
                <div className="text-sm text-zinc-400">Across various domains</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 p-6 border border-zinc-800 hover:border-[#E50914] transition-all duration-300"
              >
                <div className="text-4xl mb-2 text-[#E50914]">350+</div>
                <div className="text-lg">Competitive Programming</div>
                <div className="text-sm text-zinc-400">Problems solved</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 p-6 border border-zinc-800 hover:border-[#E50914] transition-all duration-300"
              >
                <div className="text-4xl mb-2 text-[#E50914]">14+</div>
                <div className="text-lg">Hands-on Cloud Expertise</div>
                <div className="text-sm text-zinc-400">AWS Achievement Badges</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 p-6 border border-zinc-800 hover:border-[#E50914] transition-all duration-300"
              >
                <div className="text-4xl mb-2 text-[#E50914]">2X</div>
                <div className="text-lg">Problem Solving</div>
                <div className="text-sm text-zinc-400">HackerRank Certified</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
