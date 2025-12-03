import { motion } from 'motion/react';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/keshavsrini1525/',
      color: '#0A66C2',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/keshsrini',
      color: '#ffffff',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/keshavsrini/',
      color: '#E4405F',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:keshvsrinivasm@gmail.com',
      color: '#EA4335',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">Wanna Say Hi!☺️</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">Let's Connect and Build Something Amazing</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-zinc-900 p-8 border-l-4 border-[#E50914]">
              <h3 className="text-3xl mb-6">Connect With Me</h3>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                I'm always excited to collaborate on innovative projects, discuss new technologies,
                or just have a chat about the latest in tech. Feel free to reach out through any
                of these platforms!
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-4 bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 group border border-zinc-700 hover:border-[#E50914]"
                  >
                    <social.icon
                      size={24}
                      style={{ color: social.color }}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-zinc-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-zinc-900 p-8 border border-zinc-800">
              <h3 className="text-2xl mb-6 text-[#E50914]">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2" />
                  <div>
                    <p className="text-zinc-400 text-sm">Email</p>
                    <p className="text-white">keshvsrinivasm@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2" />
                  <div>
                    <p className="text-zinc-400 text-sm">Location</p>
                    <p className="text-white">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E50914] rounded-full mt-2" />
                  <div>
                    <p className="text-zinc-400 text-sm">Availability</p>
                    <p className="text-white">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-zinc-800 text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{
              textShadow: [
                '0 0 10px rgba(229, 9, 20, 0.3)',
                '0 0 20px rgba(229, 9, 20, 0.5)',
                '0 0 10px rgba(229, 9, 20, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl text-[#E50914] mb-4"
          >
            KS
          </motion.div>
          <p className="text-zinc-400">© 2025 keshavsrini</p>
        </div>
      </motion.footer>
    </section>
  );
}