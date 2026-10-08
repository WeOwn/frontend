const ICONS = {
  building: <><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" /><path d="M14 10h5a1 1 0 0 1 1 1v10" /><path d="M2 21h20" /><path d="M8 8h2M8 12h2M8 16h2M17 14h1M17 18h1" /></>,
  person: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18.5c1.3-2.2 3.2-3.3 5.5-3.3s4.2 1.1 5.5 3.3" /></>,
  house: <><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>,
  shield: <><path d="M12 21s-7-3.5-7-10V5l7-2 7 2v6c0 6.5-7 10-7 10z" /><path d="M8.5 11.5l2.3 2.3 4.7-4.7" /></>,
}

const CARDS = [
  { icon: 'building', num: '01', title: 'Property Experience', body: 'Buyers explore and understand space before visiting.' },
  { icon: 'person', num: '02', title: 'Buyer Intelligence', body: 'Real-time visibility into prospect behavior.' },
  { icon: 'house', num: '03', title: 'Sales & AI Intelligence', body: 'Smart lead scoring and automated sales co-pilots.' },
  { icon: 'shield', num: '04', title: 'Connected Network', body: 'Frictionless coordination between Builders, CPs, Brokers, and Buyers.' },
]

export default function Wins() {
  return (
    <section className="section wins" id="why">
      <div className="container">
        <p className="eyebrow">Buyer Intelligence Dashboard</p>
        <h2 className="h2">Why WeOwn <span className="accent">Wins</span></h2>
        <p className="wins__lead">CRMs manage leads, Listing portals show ads. Spreadsheets track payments. None of them talk to each other.<br />WeOwn connects the entire chain into one intelligent selling loop:</p>
        <ul className="wins__grid">
          {CARDS.map((c) => (
            <li className="wins__card" key={c.num}>
              <div className="wins__top">
                <span className="wins__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{ICONS[c.icon]}</svg>
                </span>
                <span className="wins__num" aria-hidden="true">{c.num}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
