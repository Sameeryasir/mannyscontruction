import { motion } from "framer-motion"
import {
  BrickWall,
  Frame,
  LayoutPanelTop,
  Paintbrush,
  Wrench,
  Zap,
  Warehouse,
  Hammer,
  Layers,
  ArrowUpRight,
} from "lucide-react"
import { SectionHeading } from "./ui/SectionHeading"
import { fadeUp, staggerContainer } from "../lib/motion"
import { SERVICES } from "../data/content"

const ICON_MAP = {
  stucco: BrickWall,
  framing: Frame,
  drywall: LayoutPanelTop,
  painting: Paintbrush,
  plumbing: Wrench,
  electrical: Zap,
  roofing: Warehouse,
  remodeling: Hammer,
  concrete: Layers,
} as const

/** Premium service cards with matching imagery for each trade */
export function Services() {
  return (
    <section id="services" className="section-wrap !py-10 sm:!py-12 lg:!py-14">
      <div className="absolute inset-0 bg-bg-card/30" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          compact
          eyebrow="Our Services"
          title="Complete Construction and Remodeling Solutions"
          subtitle="From stucco and framing to plumbing, electrical and concrete, we deliver professional results for every project."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group glass relative overflow-hidden rounded-xl transition-shadow hover:shadow-xl hover:shadow-brand-red/10"
              >
                {/* Service image — shorter crop to keep section height compact */}
                <div className="relative h-28 overflow-hidden sm:h-32">
                  <img
                    src={service.image}
                    alt={`${service.title} service by Manny's Construction LLC`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
                  <div className="absolute bottom-2 left-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-red/90 backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="relative p-3.5 sm:p-4">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-red/0 transition-all duration-500 group-hover:bg-brand-red/10" />

                  <h3 className="font-display text-base font-medium text-white sm:text-lg">{service.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-muted sm:text-sm">
                    {service.description}
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-brand-red opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
