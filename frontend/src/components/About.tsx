import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, MessageCircle, MapPin, Building2, Star, Quote } from "lucide-react"
import { SectionHeading } from "./ui/SectionHeading"
import { slideInLeft, slideInRight, staggerContainer } from "../lib/motion"
import { COMPANY, TESTIMONIAL } from "../data/content"

/** Clickable trust pillars — one detail shown at a time to reduce visual clutter */
const HIGHLIGHTS = [
  {
    icon: Award,
    label: "Quality",
    text: "Dedicated to quality craftsmanship on every project.",
  },
  {
    icon: MessageCircle,
    label: "Communication",
    text: "Transparent communication from start to finish.",
  },
  {
    icon: Building2,
    label: "Expertise",
    text: "Residential and commercial expertise you can rely on.",
  },
  {
    icon: MapPin,
    label: "Local",
    text: "Locally owned and operated in Liberal, Kansas.",
  },
] as const

const OWNER_QUOTE =
  "We don't just build structures. We build trust. Every nail, every finish, every detail reflects our commitment to doing the job right."

/** About section — cleaner layout with interactive highlights and quote tabs */
export function About() {
  const [activeHighlight, setActiveHighlight] = useState(0)
  const [activeVoice, setActiveVoice] = useState<"review" | "owner">("review")

  return (
    <section id="about" className="section-wrap !py-10 sm:!py-12 lg:!py-14">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-card/50 to-bg-dark" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          compact
          eyebrow="About Us"
          title="Craftsmanship You Can Trust"
          subtitle={`Led by ${COMPANY.owner}, we deliver dependable construction and remodeling across Southwest Kansas.`}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid items-center gap-6 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-8"
        >
          {/* Owner image */}
          <motion.div
            variants={slideInLeft}
            className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none lg:justify-self-end"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[3/4]">
              <img
                src="/man.png"
                alt="Manuel Mendez, Manny's Construction LLC"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent" />
            </div>
          </motion.div>

          {/* Interactive content */}
          <motion.div variants={slideInRight} className="space-y-5">
            <p className="text-sm leading-relaxed text-text-muted sm:text-[15px]">
              {COMPANY.owner} founded {COMPANY.name} with one goal: construction work done
              right the first time. From stucco and framing to drywall, painting, plumbing,
              electrical, roofing, remodeling and concrete. Every project gets the same care
              and respect for your property.
            </p>

            {/* Highlight pills — tap to reveal one detail at a time */}
            <div>
              <p className="label-caps mb-3 text-brand-red">What Sets Us Apart</p>
              <div className="flex flex-wrap gap-2">
                {HIGHLIGHTS.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeHighlight === index
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveHighlight(index)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all sm:text-sm ${
                        isActive
                          ? "border-brand-red/50 bg-brand-red/15 text-white shadow-md shadow-brand-red/10"
                          : "border-white/10 bg-white/5 text-text-muted hover:border-brand-red/30 hover:text-white"
                      }`}
                    >
                      <Icon className={`h-3.5 w-3.5 ${isActive ? "text-brand-red" : ""}`} />
                      {item.label}
                    </button>
                  )
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHighlight}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="glass mt-3 rounded-xl p-4"
                >
                  <p className="text-sm leading-relaxed text-white">
                    {HIGHLIGHTS[activeHighlight].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Review / owner — premium quote card with underline tabs */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-transparent to-brand-red/[0.03]">
              <Quote className="pointer-events-none absolute right-4 top-4 h-10 w-10 text-brand-red/15 sm:h-12 sm:w-12" />

              <div className="flex gap-6 border-b border-white/10 px-5 pt-4">
                {(
                  [
                    { id: "review" as const, label: "Client Review" },
                    { id: "owner" as const, label: "From the Owner" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveVoice(tab.id)}
                    className={`relative pb-3 text-xs font-semibold transition-colors sm:text-sm ${
                      activeVoice === tab.id
                        ? "text-white"
                        : "text-text-muted hover:text-white/80"
                    }`}
                  >
                    {tab.label}
                    {activeVoice === tab.id && (
                      <motion.span
                        layoutId="about-voice-tab"
                        className="absolute inset-x-0 -bottom-px h-0.5 bg-brand-red"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVoice}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="p-5"
                >
                  {activeVoice === "review" ? (
                    <div className="flex gap-4">
                      <div className="hidden shrink-0 sm:flex sm:h-12 sm:w-12 sm:items-center sm:justify-center sm:rounded-full sm:border sm:border-brand-red/25 sm:bg-brand-red/10">
                        <span className="text-sm font-semibold text-brand-red">DM</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <div className="flex gap-0.5">
                            {Array.from({ length: TESTIMONIAL.rating }).map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                            {TESTIMONIAL.source}
                          </span>
                        </div>
                        <p className="mt-3 font-display text-base leading-relaxed text-white/90 sm:text-lg">
                          &ldquo;{TESTIMONIAL.text}&rdquo;
                        </p>
                        <p className="mt-3 text-sm font-medium text-white">{TESTIMONIAL.name}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="border-l-2 border-brand-red/60 pl-4 sm:pl-5">
                      <p className="font-display text-base leading-relaxed text-white/90 sm:text-lg">
                        &ldquo;{OWNER_QUOTE}&rdquo;
                      </p>
                      <p className="mt-4 text-sm font-semibold text-brand-red">
                        {COMPANY.owner}
                        <span className="font-normal text-text-muted"> · Owner</span>
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
