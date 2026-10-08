import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduceMotion } from '../lib/motion.js'

gsap.registerPlugin(ScrollTrigger)

const PHOTOS = ['/assets/identity-1.jpg', '/assets/identity-2.jpg', '/assets/identity-3.jpg', '/assets/identity-4.jpg']

export default function Identity() {
  const ref = useRef(null)

  // Chevrons fly in, then flow with the scroll — mirrors main.js
  useLayoutEffect(() => {
    const identity = ref.current
    if (!identity || reduceMotion()) return
    const ctx = gsap.context(() => {
      const chevs = gsap.utils.toArray('.chevrons li')
      const media = chevs.map((li) => li.querySelector('.chev__media'))
      const imgs = chevs.map((li) => li.querySelector('img'))
      const title = identity.querySelector('.identity__title')
      const text = identity.querySelector('.identity__text')

      // Entrance (plays once): heading rises, arrows fly in from the left one after another,
      // each photo settles from a zoom, then the closing lines rise.
      gsap.set(chevs, { xPercent: -70, autoAlpha: 0 })
      gsap.set(imgs, { scale: 1.35 })
      gsap.set([title, text], { y: 30, autoAlpha: 0 })
      const chevBox = identity.querySelector('.chevrons').getBoundingClientRect()
      const alreadyInView = chevBox.top < window.innerHeight * 0.82
      gsap.timeline(alreadyInView ? {} : { scrollTrigger: { trigger: '.chevrons', start: 'top 82%', once: true } })
        .to(title, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, 0)
        .to(chevs, { xPercent: 0, autoAlpha: 1, duration: 1.1, ease: 'power4.out', stagger: 0.12 }, 0.1)
        .to(imgs,  { scale: 1, duration: 1.5, ease: 'power3.out', stagger: 0.12 }, 0.1)
        .to(text,  { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, 0.7)

      // Scroll-linked flow: arrows spread apart as the section passes, photos keep zooming.
      gsap.timeline({ scrollTrigger: { trigger: identity, start: 'top bottom', end: 'bottom top', scrub: 0.8 } })
        .fromTo(chevs, { x: (i) => -36 * i * Math.min(1, window.innerWidth / 1440) },
                       { x: (i) => 36 * i * Math.min(1, window.innerWidth / 1440), ease: 'none' }, 0)
        .fromTo(media, { scale: 1 }, { scale: 1.12, ease: 'none' }, 0)
    }, identity)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section identity" ref={ref}>
      <div className="container">
        <h2 className="h2 identity__title">This isn't just <span className="accent">about real estate.</span></h2>
        <ul className="chevrons" aria-label="People and the spaces they are looking for">
          {PHOTOS.map((src) => (
            <li key={src}><div className="chev__media"><img src={src} alt="" loading="lazy" /></div></li>
          ))}
        </ul>
        <p className="identity__text">It's about identity. Progress. Getting unstuck.<br />You're not just looking for a place. <span className="muted">You're looking for alignment. That's what we help you find.</span></p>
      </div>
    </section>
  )
}
