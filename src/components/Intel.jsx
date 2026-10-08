import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  { title: 'Project Traffic Heatmaps', body: 'See which layouts and towers get the most repeat traffic.' },
  { title: 'Network Attribution', body: 'Know which channel partner, broker, or campaign brought every lead—time-stamped and dispute-free.' },
  { title: 'High-Intent Lead Scoring', body: 'Dwell time, repeat views, and layout preferences roll up into a live intent score for every prospect.' },
  { title: 'Pipeline Progress Tracker', body: 'Follow every prospect from first view to token booking in one shared, always-current pipeline.' },
  { title: 'Commission Ledger', body: 'Every closed booking updates payout milestones automatically, visible to builders and brokers alike.' },
]

export default function Intel() {
  const [open, setOpen] = useState(0)
  const panels = useRef([])

  // Animate panel heights like the original (height transition via scrollHeight).
  useEffect(() => {
    const sync = () => panels.current.forEach((p, i) => { if (p) p.style.height = i === open ? p.scrollHeight + 'px' : '0px' })
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [open])

  return (
    <section className="section intel" id="intelligence">
      <div className="container">
        <p className="eyebrow">Buyer Intelligence Dashboard</p>
        <h2 className="h2">Stop Cold Calling. <span className="accent">Start Contextual Closing.</span></h2>
        <p className="intel__lead">Traditional ads tell you someone clicked. WeOwn tells you what they fell in love with.<br />Know exactly what your buyer spent 5 minutes looking at before your sales team dials their number.</p>
        <div className="intel__grid">
          <ul className="acc">
            {ITEMS.map((it, i) => {
              const isOpen = open === i
              return (
                <li className={`acc__item${isOpen ? ' is-open' : ''}`} key={it.title}>
                  <button
                    className="acc__head" type="button"
                    aria-expanded={isOpen} aria-controls={`acc-${i + 1}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="acc__num">[ {i + 1} ]</span>
                    <span className="acc__title">{it.title}</span>
                    <svg className="acc__chev" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="acc__panel" id={`acc-${i + 1}`} ref={(el) => { panels.current[i] = el }}>
                    <p>{it.body}</p>
                  </div>
                </li>
              )
            })}
          </ul>
          <figure className="intel__media">
            <img src="/assets/intel-house.jpg" alt="Front elevation of a modern house with a garage" width="523" height="536" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  )
}
