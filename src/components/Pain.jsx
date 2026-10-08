const Check = () => (
  <span className="check" aria-hidden="true">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6.5l2.6 2.5L10 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const COLS = [
  {
    title: 'For builders :',
    friction: 'Leads slip through spreadsheet cracks, CPs work in silos, and commission payouts trigger constant disputes.',
    consequence: 'High ad spend with zero visibility into true buyer intent.',
  },
  {
    title: 'For CPs & Brokers :',
    friction: 'Zero inventory transparency, fear of direct lead-stealing, and zero visibility on payment statuses.',
    consequence: 'Slower deal cycles and unengaged client networks.',
  },
  {
    title: 'For Buyers :',
    friction: 'Flushed with 20 static photos and a heavy PDF brochure, yet unable to visualize living there.',
    consequence: 'Decision paralysis and delayed site visits.',
  },
]

export default function Pain() {
  return (
    <section className="section pain" id="pain">
      <div className="container">
        <div className="pain__top">
          <div>
            <p className="eyebrow">The Pain Points</p>
            <h2 className="h2">Too Many Tools. Scattered Communication. <span className="accent">Lost Revenue.</span></h2>
            <p className="lead">Property transactions rely on four key players—Builders, CPs, Brokers, and Buyers—yet their day-to-day workflow is trapped across fragmented calls, endless WhatsApp PDFs, untracked spreadsheets, and disconnected CRMs.</p>
          </div>
          <figure className="pain__media">
            <img src="/assets/pain-towers.jpg" alt="Glass office towers above a line of trees" width="630" height="341" loading="lazy" />
          </figure>
        </div>

        <div className="pain__cols">
          {COLS.map((c) => (
            <div className="pain__col" key={c.title}>
              <h3><Check />{c.title}</h3>
              <ul>
                <li><strong>The Daily Friction:</strong> {c.friction}</li>
                <li><strong>The Business Consequence:</strong> {c.consequence}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
