import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./ui/SectionHeading"
import { fadeUp, staggerContainer } from "../lib/motion"
import { PROCESS_STEPS } from "../data/content"

/** Interactive construction process timeline */
export function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="section-wrap">
      <div className="absolute inset-0 bg-bg-card/30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Bring Your Project To Life"
          subtitle="A clear, structured approach from your first conversation to the final walkthrough."
        />

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Progress bar */}
          <div className="relative mb-8">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-white/10" />
            <motion.div
              className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-brand-red"
              initial={{ width: "0%" }}
              whileInView={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className="relative flex justify-between">
              {PROCESS_STEPS.map((step, i) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className="group flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                      i <= activeStep
                        ? "border-brand-red bg-brand-red text-white shadow-lg shadow-brand-red/30"
                        : "border-white/20 bg-bg-card text-text-muted group-hover:border-brand-red/50"
                    }`}
                  >
                    {step.step}
                  </motion.div>
                  <span
                    className={`mt-3 text-xs font-semibold uppercase tracking-wider ${
                      i === activeStep ? "text-brand-red" : "text-text-muted"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active step detail */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-strong mx-auto max-w-2xl rounded-2xl p-6 text-center"
          >
            <h3 className="font-display text-xl font-medium text-white">
              {PROCESS_STEPS[activeStep].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {PROCESS_STEPS[activeStep].description}
            </p>
          </motion.div>
        </div>

        {/* Mobile timeline cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-3 lg:hidden"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className="glass flex gap-4 rounded-xl p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                {step.step}
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="absolute hidden" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
