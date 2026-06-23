import { motion } from "framer-motion"
import { Award, Clock, MessageSquare, Heart, Users, MapPin } from "lucide-react"
import { SectionHeading } from "./ui/SectionHeading"
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "../lib/motion"
import { WHY_CHOOSE_US, COMPANY } from "../data/content"

/** Icons matched to each trust pillar */
const FEATURE_ICONS = [Award, Clock, MessageSquare, Heart, Users, MapPin] as const

/** Why Choose Us — split layout with work image and icon feature cards */
export function WhyChooseUs() {
  return (
    <section className="section-wrap !py-10 sm:!py-12 lg:!py-14">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-card/40 to-bg-dark" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-red/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          compact
          eyebrow="Why Choose Us"
          title="The Manny's Construction Difference"
          subtitle="We earn your trust through quality work, clear communication and a commitment to getting every detail right."
        />

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,400px)] lg:gap-10">
          {/* Feature cards — left on desktop */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="order-2 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:order-1"
          >
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = FEATURE_ICONS[index]
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group glass relative overflow-hidden rounded-xl p-4 transition-shadow hover:shadow-lg hover:shadow-brand-red/5"
                >
                  <div className="absolute left-0 top-0 h-full w-0.5 scale-y-0 bg-brand-red transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-red/15 transition-colors group-hover:bg-brand-red/25">
                      <Icon className="h-4 w-4 text-brand-red" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-sm font-medium text-white sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Work image — right on desktop, top on mobile */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative order-1 mx-auto w-full max-w-[360px] lg:order-2 lg:mx-0 lg:max-w-none"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-red/20 via-transparent to-brand-red/10 blur-sm" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/work.png"
                alt={`Construction work by ${COMPANY.name}`}
                className="aspect-square max-h-[320px] w-full object-cover sm:max-h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-brand-red/10" />
            </div>

            {/* Floating trust badge */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-strong absolute -bottom-4 -left-4 max-w-[200px] rounded-xl p-4 sm:-left-5"
            >
              <p className="font-display text-2xl font-medium text-brand-red">100%</p>
              <p className="mt-0.5 text-xs font-medium leading-snug text-text-muted">
                Committed to quality on every project we take on
              </p>
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute -right-2 -top-2 h-16 w-16 border-r-2 border-t-2 border-brand-red/40 rounded-tr-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
