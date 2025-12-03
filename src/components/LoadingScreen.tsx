import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5, delay: progress >= 100 ? 0.3 : 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      {/* Netflix-style KS Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-12"
      >
        <motion.div
          animate={{
            textShadow: [
              '0 0 20px #E50914',
              '0 0 40px #E50914',
              '0 0 20px #E50914',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl text-[#E50914] font-black tracking-tighter"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          KS
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-80 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-[#E50914]"
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Loading Text with Flicker Effect */}
      <motion.div
        animate={{
          opacity: [1, 0.5, 1, 0.3, 1],
        }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="mt-6 text-zinc-400"
      >
        Loading Portfolio...
      </motion.div>
    </motion.div>
  );
}
