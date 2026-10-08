import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduceMotion } from '../lib/motion.js'

gsap.registerPlugin(ScrollTrigger)

/* ==========================================================================
   WeOwn hero — scroll-driven sequence (GSAP ScrollTrigger, scrubbed)

   0.00        headline over the building (design frame 1)
   0.00–0.42   building zooms in, copy and mist fade away
   0.36–0.50   the wordmark appears over the building: inside the letters the
               picture is identical to the zoomed building, outside it the
               building dissolves into the sky  → "the image goes into the logo"
   0.50–0.86   wordmark zooms out to its resting size while the picture inside
               keeps drifting (design frame 2)
   0.86–1.00   hold, then the pin releases and the next section scrolls in
   ========================================================================== */

// Geometry of the traced logo (SVG viewBox units).
const LOGO = { W: 1091.95, H: 209.0 }
const LOGO_ZOOM = 2.0          // wordmark scale when it first appears (× resting size)
const INNER_WIDTH = 1.75       // building inside the letters, × wordmark width
const INNER_FOCUS_Y = 134      // logo-unit row where the facade's planter line sits
const BUILDING_W = 1440, BUILDING_H = 514, BUILDING_FOCUS_Y = 275 // building.webp
const BUILDING_ORIGIN_Y = 0.62 // transform-origin of the full-screen building

const ArrowIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Hero() {
  const heroRef = useRef(null)
  const skyRef = useRef(null)
  const copyRef = useRef(null)
  const buildingRef = useRef(null)
  const fogRef = useRef(null)
  const logoRef = useRef(null)
  const logoImgRef = useRef(null)

  useLayoutEffect(() => {
    const hero = heroRef.current, sky = skyRef.current, copy = copyRef.current
    const building = buildingRef.current, fog = fogRef.current
    const logo = logoRef.current, logoImg = logoImgRef.current
    if (!hero || !logo) return

    const devParams = new URLSearchParams(window.location.search)
    if (devParams.has('nohero')) { hero.style.display = 'none'; return }

    // Values derived from the viewport (recomputed on refresh).
    const zoom = { scale: 2.6, y: 0 }

    /* Place the picture inside the letters for the resting composition, then work out the
       zoom + lift the full-screen building needs so that, at the handoff, it sits exactly
       where the picture inside the letters is. That makes the crossfade seamless. */
    function layout() {
      const gw = logo.offsetWidth, gh = logo.offsetHeight   // unaffected by transforms
      const u = gw / LOGO.W                                 // px per logo unit
      const vh = window.innerHeight

      // 1. picture inside the letters (group coordinates)
      const iw = gw * INNER_WIDTH
      const sc = iw / BUILDING_W
      const ix = (gw - iw) / 2
      const iy = INNER_FOCUS_Y * u - BUILDING_FOCUS_Y * sc
      logoImg.style.width = iw + 'px'
      logoImg.style.left = ix + 'px'
      logoImg.style.top = iy + 'px'
      gsap.set(logo, { transformOrigin: '50% 50%' })        // group is centred in the viewport

      // 2. where that picture lands on screen when the group is at LOGO_ZOOM
      const screenW = iw * LOGO_ZOOM
      const screenTop = vh / 2 + (iy - gh / 2) * LOGO_ZOOM

      // 3. full-screen building transform that matches it
      const bw = building.offsetWidth, bh = bw * BUILDING_H / BUILDING_W
      zoom.scale = screenW / bw
      const originY = vh - bh + BUILDING_ORIGIN_Y * bh       // bottom-aligned element
      const naturalTop = originY - BUILDING_ORIGIN_Y * bh * zoom.scale
      zoom.y = screenTop - naturalTop
    }

    const ctx = gsap.context(() => {
      layout()
      ScrollTrigger.addEventListener('refreshInit', layout)

      if (reduceMotion()) {
        gsap.set([copy, building, fog], { autoAlpha: 0 })
        gsap.set(logo, { autoAlpha: 1, scale: 1 })
        return
      }

      // Dev hook: ?p=0.5 renders that progress of the sequence without scrolling (frame checks).
      const debugP = parseFloat(devParams.get('p'))
      const hasDebugP = !Number.isNaN(debugP)

      const tl = gsap.timeline(hasDebugP ? { paused: true, defaults: { ease: 'none' } } : {
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=420%',
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      tl
        // 1. headline leaves, mist clears, building zooms in
        .to(copy,     { autoAlpha: 0, y: -90, ease: 'power1.in', duration: 0.16 }, 0)
        .to(fog,      { autoAlpha: 0, duration: 0.16 }, 0.02)
        .to(building, { scale: () => zoom.scale, y: () => zoom.y, ease: 'power2.inOut', duration: 0.42 }, 0)
        .to(sky,      { scale: 1.12, duration: 1 }, 0)

        // 2. the wordmark appears; outside the letters the building dissolves into the sky
        .fromTo(logo, { autoAlpha: 0, scale: LOGO_ZOOM }, { autoAlpha: 1, scale: LOGO_ZOOM, duration: 0.08 }, 0.38)
        .to(building, { autoAlpha: 0, ease: 'power1.inOut', duration: 0.10 }, 0.42)

        // 3. wordmark zooms out to rest while the picture inside keeps drifting
        .to(logo,     { scale: 1, ease: 'power2.inOut', duration: 0.36 }, 0.50)
        .to(logoImg,  { scale: 0.96, duration: 0.5 }, 0.50)

        // 4. hold before the pin releases
        .to({}, { duration: 0.14 }, 0.86)

      const onLoad = () => {
        if (hasDebugP) { layout(); tl.invalidate().progress(Math.min(Math.max(debugP, 0), 1)); return }
        ScrollTrigger.refresh()
      }
      if (document.readyState === 'complete') onLoad()
      else window.addEventListener('load', onLoad, { once: true })
    }, hero)

    return () => {
      ScrollTrigger.removeEventListener('refreshInit', layout)
      ctx.revert()
    }
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__stage">
        <div className="hero__sky" ref={skyRef}></div>

        <div className="hero__copy" ref={copyRef}>
          <h1>Connect. Sell. Track.</h1>
          <p>WeOwn bridges Builders, Channel Partners, Brokers, and Buyers into a single digital ecosystem. Give buyers photorealistic 3D project walkthroughs before they visit, while giving your sales network total visibility over inventory, leads, pipelines, and commission payouts.</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#cta">Book a Live Demo <ArrowIcon /></a>
            <a className="btn btn--ghost" href="#cta">Join as Channel Partner</a>
          </div>
        </div>

        <div className="hero__building" ref={buildingRef}>
          <img src="/assets/building.webp" alt="" width="1440" height="514" fetchPriority="high" />
        </div>
        <div className="hero__fog" ref={fogRef}></div>

        <div className="hero__logo" aria-hidden="true" ref={logoRef}>
          <div className="hero__logo-clip">
            <img className="hero__logo-img" src="/assets/building.webp" alt="" ref={logoImgRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
