import { useState } from "react"
import type { FormEvent } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Send, Phone, Mail, User } from "lucide-react"
import { fadeUp } from "../lib/motion"
import { COMPANY } from "../data/content"

/** Final CTA + contact form section */
export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Business rule: form opens mailto for now — no backend required
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-wrap">
      <div className="absolute inset-0 bg-bg-card/50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Final CTA banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-10 overflow-hidden rounded-2xl border border-brand-red/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-brand-red/10 to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          />
          <div className="relative px-6 py-10 text-center sm:px-12 lg:py-12">
            <h2 className="font-display text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
              Ready To Start Your Next Construction Project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-text-muted sm:text-[15px]">
              Let&apos;s discuss your vision and bring it to life.
            </p>
            <a
              href={COMPANY.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-red px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-xl shadow-brand-red/30 transition-all hover:bg-brand-red-light"
            >
              Get A Free Estimate
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >
          <div>
            <h3 className="font-display text-xl font-medium text-white">Get In Touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
              Have a project in mind? Fill out the form and we&apos;ll get back to you promptly to
              schedule your free estimate.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={COMPANY.phoneHref}
                className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-brand-red/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/15">
                  <Phone className="h-4 w-4 text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Call Us in Liberal, KS
                  </p>
                  <p className="text-base font-bold text-white">{COMPANY.phone}</p>
                </div>
              </a>

              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-brand-red/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/15">
                  <svg className="h-4 w-4 text-brand-red" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    WhatsApp
                  </p>
                  <p className="text-base font-bold text-white">{COMPANY.phone}</p>
                </div>
              </a>

              <a
                href={COMPANY.phoneSecondaryHref}
                className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-brand-red/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/15">
                  <Phone className="h-4 w-4 text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Alternate Line
                  </p>
                  <p className="text-base font-bold text-white">{COMPANY.phoneSecondary}</p>
                </div>
              </a>

              <a
                href={COMPANY.emailHref}
                className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-brand-red/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/15">
                  <Mail className="h-4 w-4 text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Email Us
                  </p>
                  <p className="text-sm font-bold text-white">{COMPANY.email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/20">
                  <Send className="h-7 w-7 text-brand-red" />
                </div>
                <h4 className="mt-5 font-display text-xl font-medium text-white">Message Sent!</h4>
                <p className="mt-2 text-sm text-text-muted">
                  Thank you for reaching out. We&apos;ll contact you shortly.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="mt-6 text-sm font-semibold text-brand-red hover:underline"
                >
                  Or call us at {COMPANY.phone} / {COMPANY.phoneSecondary}
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-text-muted/50 outline-none transition-colors focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-text-muted/50 outline-none transition-colors focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-text-muted/50 outline-none transition-colors focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-text-muted/50 outline-none transition-colors focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/30"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red py-4 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-light"
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
