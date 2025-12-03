import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';


export function Hero() {

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTUwOTE0IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
        </div>
      </div>

      {/* Red glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E50914] rounded-full blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl mb-6 tracking-tight"
            animate={{
              textShadow: [
                '0 0 20px rgba(229, 9, 20, 0.5)',
                '0 0 40px rgba(229, 9, 20, 0.3)',
                '0 0 20px rgba(229, 9, 20, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Welcome to{' '}
            <span className="text-[#E50914]">Keshav's</span> Portfolio
          </motion.h1>
        </motion.div>



        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          Exploring the intersection of cloud computing, software development,
          and innovative solutions
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-12 px-8 py-4 bg-[#E50914] text-white hover:bg-[#b8070f] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,9,20,0.5)] group"
        >
          <span className="flex items-center gap-2">
            Explore My Work
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={20} />
            </motion.span>
          </span>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#E50914] rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#E50914] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
