const STEPS = [
  { title: 'Builder Lists Inventory', desc: 'Upload your project once—including 3D assets, master plans, plot availability, pricing, and broker commission terms.' },
  { title: 'CPs & Brokers Onboard', desc: 'Distribute custom, branded project micro-links across your trusted broker network with zero fear of lead leakage.' },
  { title: 'Buyers Explore 3D Showcases', desc: 'Prospects open a lightning-fast web showcase on their phones—exploring 3D walkthroughs, floor plan configurations, and clubhouse amenities.' },
  { title: 'Intelligence Engine Tracks Intent', desc: 'Our backend logs dwell time, layout preferences, and repeat views—tagging high-intent prospects automatically.' },
  { title: 'Smart Pipeline Acceleration', desc: 'Sales managers and brokers reach out with contextual knowledge, guiding prospects effortlessly from enquiry to token booking.' },
  { title: 'Transparent Commission Sync', desc: 'Every closed booking automatically updates the commission pipeline—giving brokers full visibility over payout milestones.' },
]

export default function Workflow() {
  return (
    <section className="section workflow" id="how">
      <div className="container workflow__grid">
        <div className="workflow__intro">
          <p className="eyebrow">Our Workflow</p>
          <h2 className="h2 workflow__title">How We <span className="accent">Work</span><br /><span className="workflow__sub">(The 6-Step Connected Journey)</span></h2>
          <figure className="workflow__media">
            <img src="/assets/workflow-people.png" alt="Two colleagues reviewing a project on a laptop" width="444" height="356" loading="lazy" />
          </figure>
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="steps__item" key={s.title}>
              <span className="steps__dot" aria-hidden="true"></span>
              <p className="steps__label">Step {i + 1}</p>
              <h3 className="steps__title">{s.title}</h3>
              <p className="steps__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
