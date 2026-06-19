import { motion } from 'motion/react';
import { Home, Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { contactInfo } from '../data';

interface NavbarProps {
  darkMode: boolean;
  onToggle: () => void;
}

export default function Navbar({ darkMode, onToggle }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#F8FAFC]/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase text-slate-900 dark:text-white">City Living Solutions</span>
          </a>
        </div>
        
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onToggle}
            type="button"
            className="rounded-full p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          <a href="#services" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">Services</a>
          <a href="#why-us" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">Why Choose Us</a>
          <a href="#testimonials" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">Testimonials</a>
          <a href="#faq" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">FAQ</a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">Contact</a>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            {contactInfo.phone}
          </div>
          
          <button
            onClick={onToggle}
            type="button"
            className="rounded-full p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5" />}
          </button>

          <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-white dark:text-slate-900 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 px-6 py-2 rounded-full transition-colors">
            Owner Portal
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex flex-row items-center gap-2">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <span className="font-black text-xl tracking-tighter uppercase text-slate-900 dark:text-white">City Living Solutions</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10 dark:divide-slate-800">
                <div className="space-y-2 py-6">
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">Services</a>
                  <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">Why Choose Us</a>
                  <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">Testimonials</a>
                  <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">FAQ</a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">Contact</a>
                </div>
                <div className="py-6 space-y-4">
                  <div className="flex items-center gap-2 text-base font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                    <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    {contactInfo.phone}
                  </div>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-full px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-white dark:text-slate-900 bg-slate-900 dark:bg-white text-center">Owner Portal</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
}

