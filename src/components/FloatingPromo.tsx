import { motion } from 'motion/react';

export default function FloatingPromo() {
  return (
    <motion.a
      href="https://auroraadv.co/?tab=wizard"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex h-28 w-28 items-center justify-center rounded-full bg-slate-900 dark:bg-white text-center text-white dark:text-slate-900 shadow-2xl ring-4 ring-white dark:ring-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
    >
      <span className="px-2 text-[10px] font-black uppercase leading-relaxed tracking-widest">
        Get this<br />website<br />for only<br />
        <span className="text-emerald-400 dark:text-emerald-600 text-xs sm:text-sm">$999</span>
      </span>
    </motion.a>
  );
}
