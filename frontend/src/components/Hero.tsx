import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Shield, Award, Clock } from "lucide-react"
import { BeforeAfterSlider } from "./ui/BeforeAfterSlider"
import { COMPANY } from "../data/content"

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"

const TRUST_BADGES = [
  { icon: Shield, label: "Licensed and Insured" },
  { icon: Award, label: "Quality Craftsmanship" },
  { icon: Clock, label: "Reliable Service" },
]

const MARQUEE_ITEMS = [...TRUST_BADGES, ...TRUST_BADGES]

const lineReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

/** Cinematic hero with before/after slider instead of owner card */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative mt-[var(--nav-height)] overflow-hidden"
    >
      <div className="relative flex min-h-[520px] flex-col justify-end sm:min-h-[580px] lg:min-h-[620px]">
        <motion.div style={{ y: bgY }} className="absolute inset-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            src={HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover object-[center_35%]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(178,34,34,0.15),transparent_55%)]" />

        <motion.div
          style={{ y: contentY }}
          className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-12 sm:px-6 sm:pb-32 sm:pt-14 lg:px-8 lg:pb-36 lg:pt-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left — headline and CTAs */}
            <div className="max-w-2xl">
              <motion.p
                custom={0.15}
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                className="label-caps mb-6 text-brand-red"
              >
                Liberal, Kansas and Southwest Kansas
              </motion.p>

              <div className="relative border-l-2 border-brand-red pl-6 sm:pl-8">
                <h1 className="hero-headline-shadow">
                  <motion.span
                    custom={0.28}
                    variants={lineReveal}
                    initial="hidden"
                    animate="visible"
                    className="hero-title-line block text-[2.1rem] font-medium leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]"
                  >
                    Building Spaces That
                  </motion.span>
                  <motion.span
                    custom={0.42}
                    variants={lineReveal}
                    initial="hidden"
                    animate="visible"
                    className="hero-title-accent mt-1 block text-[2.1rem] font-semibold leading-[1.15] text-brand-red sm:text-5xl lg:text-[3.4rem]"
                  >
                    Stand The Test Of Time
                  </motion.span>
                </h1>
              </div>

              <motion.div
                custom={0.58}
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                className="mt-7 max-w-md border-t border-white/10 pt-6"
              >
                <p className="text-[15px] leading-[1.75] text-white/60">
                  {COMPANY.name} provides trusted construction, remodeling and property
                  improvement services for residential and commercial clients across Southwest
                  Kansas.
                </p>
              </motion.div>

              <motion.div
                custom={0.72}
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <motion.button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2.5 rounded-sm bg-brand-red px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-shadow hover:shadow-[0_8px_32px_rgba(178,34,34,0.35)]"
                >
                  Request A Free Estimate
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => scrollTo("#services")}
                  whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.45)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-transparent px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white"
                >
                  View Services
                </motion.button>
              </motion.div>
            </div>

            {/* Right — before/after slider */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg justify-self-center lg:max-w-none lg:justify-self-end"
            >
              <BeforeAfterSlider
                beforeSrc="/before.png"
                afterSrc="/after.png"
                beforeAlt="Project before renovation"
                afterAlt="Project after renovation"
              />
              <p className="mt-3 text-center text-[11px] uppercase tracking-[0.14em] text-white/45 lg:text-right">
                Drag to compare results
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Sliding trust marquee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="absolute bottom-0 left-0 right-0 z-20 border-y-2 border-brand-red bg-black/90 backdrop-blur-xl"
        >
          <div className="trust-marquee-wrap py-5 sm:py-6">
            <div className="trust-marquee-track">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((badge, i) => (
                <div
                  key={`${badge.label}-${i}`}
                  className="flex shrink-0 items-center gap-2.5 px-8 sm:px-12"
                >
                  <badge.icon className="h-4 w-4 text-brand-red" />
                  <span className="font-body whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] text-white/80">
                    {badge.label}
                  </span>
                  <span
                    className="ml-4 hidden h-1 w-1 rounded-full bg-brand-red/40 sm:block"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
