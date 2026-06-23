import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { NAV_LINKS, COMPANY } from "../data/content"

/** Sticky navbar — always solid black so hero bg never bleeds through */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/95 shadow-lg shadow-black/40 backdrop-blur-md"
            : "border-white/5 bg-black"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8 lg:py-3.5">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#home")
            }}
            className="flex items-center gap-3"
          >
            <img
              src={COMPANY.logo}
              alt="Manny's Construction LLC"
              className="h-[4.25rem] w-auto rounded-md object-contain sm:h-24"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="hidden items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-brand-red sm:flex"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
              className="hidden rounded-xl bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-light hover:shadow-brand-red/40 sm:inline-block"
            >
              Free Estimate
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-strong fixed inset-x-0 z-40 border-t border-white/10 px-5 py-6 lg:hidden"
            style={{ top: "var(--nav-height)" }}
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
              className="mt-4 block w-full rounded-xl bg-brand-red py-3 text-center text-sm font-semibold text-white"
            >
              Free Estimate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
