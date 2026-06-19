import { Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-1.5 rounded-md">
               <Home className="h-5 w-5 text-white" />
            </div>
            <span className="font-black text-lg text-white uppercase tracking-tighter">City Living Solutions</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} City Living Solutions. All rights reserved.
          </p>
          <div className="text-sm text-slate-500">
            Miami's Trusted Property Management
          </div>
        </div>
      </div>
    </footer>
  );
}
