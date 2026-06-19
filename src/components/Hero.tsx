import { motion } from 'motion/react';
import { Phone, Mail, Clock, LayoutDashboard, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-white pb-20 pt-32 lg:pt-40 lg:pb-28 transition-colors">
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-emerald-600 ring-1 ring-inset ring-emerald-600/20 mb-6">
              Premier Property Management in Miami
            </span>
            <h1 className="text-6xl font-black leading-[0.85] tracking-tighter text-slate-900 dark:text-white sm:text-8xl mb-6">
              EASY PROPERTY <br />
              <span className="text-emerald-600 dark:text-emerald-400">MANAGEMENT.</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-500 dark:text-slate-400 mb-8 max-w-md">
              We provide exceptional property management with a focus on meticulous cleanliness, trustworthy service, and an effortless online experience for owners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="inline-flex justify-center items-center rounded-xl bg-emerald-600 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-emerald-200/50 hover:bg-emerald-500 transition-colors">
              Schedule Consultation
            </a>
            <a href="#services" className="inline-flex justify-center items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
              Learn More About Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Floating Quick Info Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:max-w-4xl"
        >
          <div className="rounded-2xl bg-slate-900 dark:bg-slate-900/40 border border-slate-800 dark:border-slate-800/60 p-6 backdrop-blur-sm">
            <LayoutDashboard className="h-6 w-6 text-emerald-400 mb-4" />
            <h3 className="text-sm font-bold text-white">Easy Online Portal</h3>
            <p className="mt-2 text-sm text-slate-400">Manage your properties effortlessly from anywhere.</p>
          </div>
          <div className="rounded-2xl bg-slate-900 dark:bg-slate-900/40 border border-slate-800 dark:border-slate-800/60 p-6 backdrop-blur-sm">
            <Phone className="h-6 w-6 text-emerald-400 mb-4" />
            <h3 className="text-sm font-bold text-white">Responsive Support</h3>
            <p className="mt-2 text-sm text-slate-400">Prompt communication. Always here when you need us.</p>
          </div>
          <div className="rounded-2xl bg-slate-900 dark:bg-slate-900/40 border border-slate-800 dark:border-slate-800/60 p-6 backdrop-blur-sm">
            <Clock className="h-6 w-6 text-emerald-400 mb-4" />
            <h3 className="text-sm font-bold text-white">Consistently Reliable</h3>
            <p className="mt-2 text-sm text-slate-400">Dependable service you can count on over time.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
