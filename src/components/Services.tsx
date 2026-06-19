import { motion } from 'motion/react';
import { Wrench, Sparkles, Users, Laptop, Landmark, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Maintenance & Repairs',
    description: 'We coordinate all necessary property maintenance and repairs with our network of trusted, vetted local professionals to protect your investment.',
    icon: Wrench,
  },
  {
    title: 'Cleaning & Upkeep',
    description: 'Our exceptional cleanliness standards mean meticulous attention to detail. We ensure your apartments are left spotless for every new arrival.',
    icon: Sparkles,
  },
  {
    title: 'Tenant Management',
    description: 'Comprehensive screening ensures quality placements. We handle all ongoing tenant relations, requests, and lease enforcements professionally.',
    icon: Users,
  },
  {
    title: 'Online Owner Portal',
    description: 'Experience easy property management through our secure, user-friendly portal. Track property performance anytime, anywhere.',
    icon: Laptop,
  },
  {
    title: 'Financial Management',
    description: 'Efficient rent collection, strict late-fee enforcement, and detailed monthly financial reporting keep your cash flow consistent.',
    icon: Landmark,
  },
  {
    title: 'Property Protection',
    description: 'With regular inspections and a proactive approach, we treat your property with the utmost respect and care to ensure its long-term value.',
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-slate-50 dark:bg-slate-900 py-24 sm:py-32 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[10px] font-bold uppercase tracking-widest leading-7 text-emerald-600">Comprehensive Care</h2>
          <p className="mt-2 text-4xl sm:text-6xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
            Everything your property needs
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            From meticulous cleaning to strict financial oversight, our services are designed to maximize your ROI while minimizing your stress.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white dark:bg-slate-950 rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800/60 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 dark:text-emerald-400">
                   <service.icon className="h-24 w-24" />
                </div>
                <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-slate-900 dark:text-white relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900">
                    <service.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm leading-relaxed text-slate-500 dark:text-slate-400 relative z-10">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
