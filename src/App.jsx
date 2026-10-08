import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LogoDefs from './components/LogoDefs.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Pain from './components/Pain.jsx'
import Solution from './components/Solution.jsx'
import Identity from './components/Identity.jsx'
import Workflow from './components/Workflow.jsx'
import Buyer from './components/Buyer.jsx'
import Intel from './components/Intel.jsx'
import Wins from './components/Wins.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import { reduceMotion } from './lib/motion.js'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  // Section reveals (subtle fade-up, once) — mirrors main.js
  useEffect(() => {
    if (reduceMotion()) return
    const ctx = gsap.context(() => {
      const targets = document.querySelectorAll(
        '.pain__top > *, .pain__col, .solution__media, .solution__body, .workflow__intro, .steps__item, ' +
        '.buyer__intro, .buyer__row, .intel > .container > *, .wins__card, .cta__content'
      )
      targets.forEach((el) => {
        // Elements already on screen at load stay visible; everything else fades up when it arrives.
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) return
        gsap.fromTo(el, { y: 28, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out', clearProps: 'transform',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        })
      })
    })
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
    return () => { window.removeEventListener('load', onLoad); ctx.revert() }
  }, [])

  return (
    <>
      <LogoDefs />
      <Nav />
      <Hero />
      <Pain />
      <Solution />
      <Identity />
      <Workflow />
      <Buyer />
      <Intel />
      <Wins />
      <Cta />
      <Footer />
    </>
  )
}
