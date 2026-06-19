import React, { useState } from 'react';
import { motion } from 'motion/react';
import { contactInfo } from '../data';
import { Phone, Mail, Clock, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  propertyAddress: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  propertyAddress?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    propertyAddress: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.propertyAddress.trim()) {
      newErrors.propertyAddress = 'Property address is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', propertyAddress: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative isolate bg-white dark:bg-slate-950 py-24 sm:py-32 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">Get in touch</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                Ready to experience stress-free property management? Contact us today to schedule a consultation and learn how City Living Solutions can help you maximize your investment.
              </p>
              
              <dl className="mt-10 space-y-6 text-sm leading-7 text-slate-500 dark:text-slate-400">
                <div className="flex gap-x-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                  <dt className="flex-none">
                    <span className="sr-only">Phone</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800">
                      <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="flex items-center">
                    <a className="hover:text-slate-900 dark:hover:text-emerald-400 font-bold tracking-tight text-slate-900 dark:text-white transition-colors" href={`tel:${contactInfo.phone}`}>
                      {contactInfo.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800">
                      <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="flex items-center">
                    <a className="hover:text-slate-900 dark:hover:text-emerald-400 font-bold tracking-tight text-slate-900 dark:text-white transition-colors" href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                  <dt className="flex-none">
                    <span className="sr-only">Hours</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800">
                      <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="flex items-center font-bold tracking-tight text-slate-900 dark:text-white">
                    {contactInfo.hours}
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Location</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800">
                      <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="flex items-center font-bold tracking-tight text-slate-900 dark:text-white">
                    Miami, FL
                  </dd>
                </div>
              </dl>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-xl font-black tracking-tighter uppercase text-slate-900 dark:text-white mb-6">Request a Consultation</h3>
              
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50 p-6 text-center"
                >
                  <CheckCircle className="mx-auto h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200 mb-2">Message Sent Successfully!</h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-6">
                    Thank you for reaching out. A property management consultant will contact you within 24 hours to discuss your needs.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="inline-flex justify-center rounded-full bg-emerald-600 hover:bg-emerald-500 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'error' && (
                    <div className="rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50 p-4 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-red-900 dark:text-red-200">Something went wrong</h4>
                        <p className="text-xs text-red-700 dark:text-red-400 mt-0.5">Please check your connection and try sending your message again.</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-300">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`block w-full rounded-xl border-0 px-3.5 py-3 text-slate-900 dark:text-white bg-white dark:bg-slate-950 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all ${
                            errors.name 
                              ? 'ring-red-500 dark:ring-red-500/50 focus:ring-red-500' 
                              : 'ring-slate-300 dark:ring-slate-800 focus:ring-emerald-600'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-300">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`block w-full rounded-xl border-0 px-3.5 py-3 text-slate-900 dark:text-white bg-white dark:bg-slate-950 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all ${
                            errors.email 
                              ? 'ring-red-500 dark:ring-red-500/50 focus:ring-red-500' 
                              : 'ring-slate-300 dark:ring-slate-800 focus:ring-emerald-600'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="propertyAddress" className="block text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-300">
                        Property Address <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="propertyAddress"
                          id="propertyAddress"
                          placeholder="e.g. 123 Miami Ave, Apt 4"
                          value={formData.propertyAddress}
                          onChange={handleChange}
                          className={`block w-full rounded-xl border-0 px-3.5 py-3 text-slate-900 dark:text-white bg-white dark:bg-slate-950 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all ${
                            errors.propertyAddress 
                              ? 'ring-red-500 dark:ring-red-500/50 focus:ring-red-500' 
                              : 'ring-slate-300 dark:ring-slate-800 focus:ring-emerald-600'
                          }`}
                        />
                        {errors.propertyAddress && (
                          <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.propertyAddress}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-300">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className={`block w-full rounded-xl border-0 px-3.5 py-3 text-slate-900 dark:text-white bg-white dark:bg-slate-950 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all ${
                            errors.message 
                              ? 'ring-red-500 dark:ring-red-500/50 focus:ring-red-500' 
                              : 'ring-slate-300 dark:ring-slate-800 focus:ring-emerald-600'
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-white px-3.5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white dark:text-slate-900 shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
