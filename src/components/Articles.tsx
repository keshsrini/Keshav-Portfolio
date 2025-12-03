import { motion } from 'motion/react';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

export function Articles() {
  const articles = [
    {
      title: 'BharatBytes: AI-Powered PDF Document Summarizer Using Amazon Bedrock',
      description: 'A comprehensive workshop on building an AI-powered PDF document summarizer using Amazon Bedrock, designed for AI applications in Bharat.',
      date: 'January 2025',
      link: 'https://builder.aws.com/content/36HXxKLiWkBZYEWSakxJz6xCIhw/bharatbytes-ai-powered-pdf-document-summarizer-using-amazon-bedrockworkshop-1-ai-for-bharat',
      platform: 'AWS Builder',
    },
    {
      title: 'Kiro Heroes Challenge - Replyx(AI Email Response Generator)',
      description: 'Weekly challenge submission for Kiro Heroes featuring Replyx, an intelligent email response generator using Claude AI.',
      date: 'January 2025',
      link: 'https://builder.aws.com/content/2vl2GRBPavxLHHjhf6EezjMKvzE/kiro-heroes-weekly-challengeweek-1-replyx',
      platform: 'AWS Builder',
    },
    {
      title: 'Build an iOS Application(Using AWS Amplify)',
      description: 'A step-by-step guide to building iOS applications, covering the fundamentals and best practices for mobile app development.',
      date: 'December 2024',
      link: 'https://builder.aws.com/content/2vkt15vst9cmENO3qM53birq7KK/build-an-ios-application',
      platform: 'AWS Builder',
    },
  ];

  return (
    <section id="articles" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">Articles & Blogs</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">Sharing Knowledge & Insights</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-zinc-800 hover:border-[#E50914] transition-all duration-300 group overflow-hidden"
            >
              {/* Header with Icon */}
              <div className="p-6 bg-gradient-to-br from-[#E50914] to-[#8B0000]">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen size={32} className="text-white" />
                  <span className="px-3 py-1 bg-white text-xs border border-gray-300" style={{ color: '#000000' }}>
                    {article.platform}
                  </span>
                </div>
                <h3 className="text-2xl text-white group-hover:scale-105 transition-transform">
                  {article.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                  <Calendar size={14} className="text-[#E50914]" />
                  <span>{article.date}</span>
                </div>

                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {article.description}
                </p>

                <motion.a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[#E50914] hover:text-white transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Progress Bar */}
              <div className="px-6 pb-6">
                <div className="w-full h-1 bg-zinc-800 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
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
