import { motion } from "framer-motion"
import { fadeUp } from "../../lib/motion"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  light?: boolean
  compact?: boolean
}

/** Section header — Playfair titles, Inter labels (matches hero typography) */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  compact = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`max-w-2xl ${compact ? "mb-5 lg:mb-6" : "mb-8 lg:mb-10"} ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className={`label-caps text-brand-red ${compact ? "mb-2" : "mb-4"}`}>{eyebrow}</p>
      )}
      <h2
        className={`font-display font-medium leading-tight ${
          compact ? "text-xl sm:text-2xl lg:text-3xl" : "text-2xl sm:text-3xl lg:text-4xl"
        } ${light ? "text-white" : "text-white"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`leading-relaxed text-text-muted ${compact ? "mt-2 text-xs sm:text-sm" : "mt-3 text-sm sm:text-[15px]"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
