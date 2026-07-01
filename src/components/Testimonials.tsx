import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1600&q=80"
          alt="Miami city high-rise luxury buildings background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/85 to-slate-950"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[10px] font-bold uppercase tracking-widest leading-8 text-emerald-500">Testimonials</h2>
          <p className="mt-2 text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white">
            Trusted by Miami Owners
          </p>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-auto lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg leading-7 text-slate-300 mb-8">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center gap-x-4 border-t border-white/10 pt-6">
                  <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase tracking-widest text-xs">{testimonial.author}</div>
                    <div className="text-[10px] leading-6 uppercase tracking-widest text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
