import { motion } from 'motion/react';
import { Shield, CheckCircle, RefreshCcw, Handshake } from 'lucide-react';

const reasons = [
  {
    title: 'Trustworthy & Respectful',
    description: 'We treat your property as if it were our own. We handle personal belongings with caution and ensure you feel 100% confident leaving your homes in our care.',
    icon: Shield,
  },
  {
    title: 'Exceptional Cleanliness standards',
    description: 'We are known for our meticulous attention to detail. We consistently leave apartments spotless to retain tenant satisfaction and preserve property value.',
    icon: CheckCircle,
  },
  {
    title: 'Reliable & Consistent',
    description: 'Day in and day out, we deliver quality service consistently over time. When we say something will be handled, you can consider it done.',
    icon: RefreshCcw,
  },
  {
    title: 'Professional & Responsive',
    description: 'Prompt communication is our standard. As an owner-responsive company, we ensure you are never left guessing about the status of your property.',
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
  return (
    <div id="why-us" className="bg-white dark:bg-slate-950 py-24 sm:py-32 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">The City Living Difference</h2>
            <p className="mt-2 text-4xl sm:text-6xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
              Why Miami Owners <br />Choose Us
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
              We stand out in the crowded Miami real estate market by focusing on what truly matters to property owners: trust, relentless consistency, and unwavering standards of cleanliness.
            </p>
            
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-500 lg:max-w-none">
              {reasons.map((reason) => (
                <div key={reason.title} className="relative pl-12 border-l-2 border-emerald-500 pb-2">
                  <dt className="inline font-bold text-slate-900 dark:text-white">
                    <reason.icon className="absolute left-[-17px] top-1 h-8 w-8 text-emerald-600 bg-white dark:bg-slate-950" aria-hidden="true" />
                    {reason.title}
                  </dt>{' '}
                  <dd className="mt-1 text-slate-500 dark:text-slate-400">{reason.description}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:h-full lg:min-h-[600px] bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 flex flex-col justify-center p-8 lg:p-12"
          >
             {/* Decorative abstract elements */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-100 dark:bg-emerald-950/25 rounded-full blur-3xl opacity-50"></div>
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-50 dark:bg-emerald-950/20 rounded-full blur-3xl opacity-50"></div>
             
             <div className="relative z-10 bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-6 mb-6">
                  <div className="h-14 w-14 rounded-full bg-emerald-600 flex items-center justify-center font-black text-white text-xl">
                    5.0
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Perfect Rating</h3>
                    <div className="flex text-yellow-400 text-sm mt-1">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "City Living Solutions provides the easiest online management portal. We simply log in, review our finances, and never have to worry about the daily headaches of property management."
                </p>
                <a href="#contact" className="mt-8 block w-full text-center rounded-full bg-slate-900 dark:bg-white px-4 py-4 text-xs font-bold uppercase tracking-widest text-white dark:text-slate-900 shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                  Contact Us Today
                </a>
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
