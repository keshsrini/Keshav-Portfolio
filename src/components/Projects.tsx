import { motion } from 'motion/react';
import { Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      name: 'Decentralized AI Content Verification Platform',
      description: 'Combines AI and blockchain to verify the authenticity of digital content (images and audio). Detects deepfakes, manipulated content, and plagiarism using AI models, stores verification results on blockchain, and allows users to mint verified content as NFTs.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop',
      github: 'https://github.com/Lakshmanan195/HackIndia-Spark1-2025-DecentraMinds',
      technologies: ['React.js', 'Node.js', 'Ethereum', 'Solidity', 'IPFS', 'TensorFlow'],
    },
    {
      name: 'Document Summarizer - BharatBytes',
      description: 'A GenAI-powered document summarization app using AWS Bedrock Converse API and Streamlit. Efficiently summarizes documents using advanced AI models.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      github: 'https://github.com/keshsrini/AWS-Bedrock-Content-Summarization',
      technologies: ['AWS Bedrock', 'Streamlit', 'Python', 'GenAI'],
    },
    {
      name: 'Replyx - AI Email Response Generator',
      description: 'An intelligent email response generator that uses Claude AI to craft contextually appropriate email replies. Built with a Netflix-inspired Hawkins Design aesthetic, featuring tone control, smart context, and one-click copy functionality.',
      image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=800&fit=crop',
      github: 'https://github.com/keshsrini/Kiro-Week-1-Challenge-Replyx',
      technologies: ['Claude AI', 'React', 'Node.js', 'Tailwind CSS'],
    },
    {
      name: 'Credit Card Fraud Detection',
      description: 'Implements a machine learning model to detect fraudulent transactions from credit card data. The model is trained on a labeled dataset and predicts the likelihood of a transaction being fraudulent based on various features.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
      github: 'https://github.com/keshsrini/Creditcard-Fraud-Detection',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    },
    {
      name: 'Morse Code Converter',
      description: 'An interesting and trouble-free Python project which helps users convert any text, words, or letters to Morse code and vice-versa. An easy project demonstrating Python basics with a simple conversion mechanism.',
      image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=1200&h=800&fit=crop',
      github: 'https://github.com/keshsrini/Morse-code-Converter',
      technologies: ['Python'],
    },
    {
      name: 'COVID-19 Data Visualization',
      description: 'Visualizations of COVID-19 data sourced from WHO and Kaggle, showcasing various aspects such as daily cases, deaths, and vaccination rates. Generated using Python with Matplotlib and Plotly to understand trends over time and across regions.',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200&h=800&fit=crop',
      github: 'https://github.com/keshsrini/COVID-19-Data-Visualization',
      technologies: ['Python', 'Matplotlib', 'Plotly', 'Pandas'],
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">Projects</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">Building Solutions That Matter</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-zinc-800 hover:border-[#E50914] transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-zinc-800">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-[#E50914] hover:bg-[#b8070f] transition-colors"
                    title="View on GitHub"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl mb-3 group-hover:text-[#E50914] transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-zinc-800 border border-zinc-700 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-zinc-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#E50914] transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 pt-4 border-t border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}