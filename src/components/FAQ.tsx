import { faqs } from '../data';
import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  return (
    <div id="faq" className="bg-slate-50 dark:bg-slate-900 py-24 sm:py-32 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-slate-900/10 dark:divide-slate-800">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950/40 rounded-xl text-emerald-600 dark:text-emerald-400">
               <HelpCircle className="h-8 w-8" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          
          <dl className="mt-10 space-y-6 divide-y divide-slate-900/10 dark:divide-slate-800">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.question} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="pt-6"
              >
                <dt>
                  <h3 className="text-lg font-bold leading-7 text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  <p>{faq.answer}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
