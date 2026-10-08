import { useCallback, useEffect, useRef, useState } from 'react'

const ROLES = [
  {
    n: '1.',
    title: 'For Builders (Command & Control)',
    body: 'Centralize inventory management, issue custom CP tracking links, monitor live traffic, and automate broker commissions from one single admin center.',
  },
  {
    n: '2.',
    title: 'For Channel Partners & Brokers (The Co-Pilot)',
    body: 'Access verified developer inventory, share commission-protected branded links with buyers, receive time-stamped lead attribution, and track deal progress live.',
  },
  {
    n: '3.',
    title: 'For Buyers (The Experience)',
    body: 'Open a lightning-fast 3D showcase on any phone, inspect layouts and amenities in photorealistic detail, and reach the sales team in one tap.',
  },
]

const perView = () => (window.innerWidth < 760 ? 1 : 2)
const maxIndex = () => Math.max(0, ROLES.length - perView())

export default function Solution() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [max, setMax] = useState(() => maxIndex())

  const applyTransform = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const first = track.children[0]
    const cs = getComputedStyle(track)
    const gap = parseFloat(cs.columnGap || cs.gap) || 0
    const step = first.getBoundingClientRect().width + gap
    track.style.transform = `translateX(${-index * step}px)`
  }, [index])

  useEffect(() => { applyTransform() }, [applyTransform])

  useEffect(() => {
    const onResize = () => {
      const m = maxIndex()
      setMax(m)
      setIndex((i) => Math.min(i, m))
      applyTransform()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [applyTransform])

  return (
    <section className="section solution" id="builders">
      <div className="solution__grid">
        <figure className="solution__media">
          <img src="/assets/solution-house.jpg" alt="Modern two-storey house with timber cladding" width="646" height="655" loading="lazy" />
          <button className="play" type="button" aria-label="Play walkthrough video">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          </button>
        </figure>
        <div className="solution__body">
          <p className="eyebrow">The Solution</p>
          <h2 className="h2">Introducing <span className="accent">WeOwn</span></h2>
          <p className="solution__lead">One Unified Platform. Four Connected Roles.<br />WeOwn doesn't replace your workflow—it unifies your entire sales ecosystem under One Interactive Link.</p>

          <div className="roles">
            <div className="roles__viewport">
              <ul className="roles__track" ref={trackRef}>
                {ROLES.map((r) => (
                  <li className="roles__card" key={r.n}>
                    <h3><span className="roles__n">{r.n}</span>{r.title}</h3>
                    <p>{r.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="roles__nav">
              <button
                className="roles__nav-btn roles__nav--prev" type="button" aria-label="Previous role"
                disabled={index === 0}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button
                className="roles__nav-btn roles__nav--next" type="button" aria-label="Next role"
                disabled={index >= max}
                onClick={() => setIndex((i) => Math.min(maxIndex(), i + 1))}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
