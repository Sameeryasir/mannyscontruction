import { useCallback, useEffect, useRef, useState } from "react"
import { GripVertical } from "lucide-react"

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

/** Draggable before/after image comparison slider */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [containerWidth, setContainerWidth] = useState(0)
  const dragging = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const updateWidth = () => setContainerWidth(el.offsetWidth)
    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const setPositionFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(4, Math.min(96, next)))
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      setPositionFromClientX(clientX)
    }
    const onUp = () => {
      dragging.current = false
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("touchmove", onMove)
    window.addEventListener("touchend", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("touchmove", onMove)
      window.removeEventListener("touchend", onUp)
    }
  }, [setPositionFromClientX])

  const startDrag = () => {
    dragging.current = true
  }

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/50 ${className}`}
    >
      {/* After image (base layer) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
        draggable={false}
      />

      {/* Before image (clipped left portion) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
          className="absolute left-0 top-0 h-full object-cover"
          style={{ width: containerWidth || "100%" }}
        />
      </div>

      {/* Labels */}
      <span className="font-body absolute left-4 top-4 rounded-sm bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        Before
      </span>
      <span className="font-body absolute right-4 top-4 rounded-full bg-brand-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
        After
      </span>

      {/* Slider line and handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.45)]"
        style={{ left: `${position}%` }}
      >
        <button
          type="button"
          aria-label="Drag to compare before and after"
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-brand-red shadow-lg shadow-brand-red/40 transition-transform hover:scale-105 active:scale-95"
        >
          <GripVertical className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  )
}
