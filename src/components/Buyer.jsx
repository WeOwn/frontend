const ROWS = [
  { desc: 'Seamlessly switch between exterior architecture, interior layouts, and unit configurations.', title: ['3D Environment', 'Walkthroughs'] },
  { desc: 'Click to inspect dimensions, directional orientations, and plot availabilities.', title: ['Interactive Layout &', 'Master Plan Mapping'] },
  { desc: 'Showcase clubhouses, swimming pools, sports facilities, and green spaces in photorealistic detail.', title: ['360° Amenity', 'Visualizer'] },
  { desc: 'Highlighting surrounding connectivity, top schools, hospitals, and commercial hubs.', title: ['Location & Infrastructure', 'Insights'] },
  { desc: 'Embedded 1-click WhatsApp drops, callback requests, and site-visit scheduling.', title: ['Instant Conversion', 'Triggers'] },
]

export default function Buyer() {
  return (
    <section className="section buyer" id="buyers">
      <div className="buyer__head">
        <p className="buyer__eyebrow">The Buyer Experience</p>
        <div className="buyer__intro">
          <h2>See It. Feel It. Decide Before You Visit.</h2>
          <p>Stop sending static PDFs that buyers ignore. Give prospects an interactive digital twin that works seamlessly on low cellular bandwidth.</p>
        </div>
      </div>
      <ul className="buyer__list">
        {ROWS.map((r) => (
          <li className="buyer__row" key={r.title.join(' ')}>
            <span className="buyer__ring" aria-hidden="true"></span>
            <p className="buyer__desc">{r.desc}</p>
            <h3 className="buyer__title">{r.title[0]}<br />{r.title[1]}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}
