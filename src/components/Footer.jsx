import { useState } from 'react'
import { Logo } from './LogoDefs.jsx'

const COLS = [
  { h: 'Explore', links: [['#buyers', 'Browse properties'], ['#builders', 'Popular builders'], ['#why', 'Group investment'], ['#buyers', '3D walkthroughs']] },
  { h: 'Platform', links: [['#intelligence', 'Deal pipeline'], ['#intelligence', 'Commissions'], ['#builders', 'Referral links'], ['#intelligence', <>AI voice<br />campaigns</>]] },
  { h: 'Company', links: [['#hero', 'About'], ['#cta', 'Contact'], ['#cta', 'Careers'], ['#cta', 'Privacy']] },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  // Newsletter (no backend yet)
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <div className="footer__logo"><Logo /><span>Real Estate Reimagined</span></div>
          <form className={`footer__form${sent ? ' is-sent' : ''}`} action="#" method="post" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email" type="email" name="email" required autoComplete="email"
              placeholder={sent ? 'Thanks — you are on the list' : 'Enter Your Email'}
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Subscribe">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.5 11.2L20.5 4l-5.3 16.5-3.4-6.6-8.3-2.7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M11.8 13.9L20.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </form>
          <p className="footer__legal">By providing my email address, I consent to be contacted through email with marketing communications. For further information, please visit our Terms of Use &amp; Privacy Policy</p>
        </div>
        <nav className="footer__cols" aria-label="Footer">
          {COLS.map((c) => (
            <div key={c.h}>
              <h4>{c.h}</h4>
              {c.links.map(([href, label], i) => <a href={href} key={i}>{label}</a>)}
            </div>
          ))}
        </nav>
      </div>
      <div className="footer__bar">
        <div className="footer__bar-inner">
          <p>@2026 WeOwn. All Rights Reserved.</p>
          <a href="#cta">Terms &amp; Conditions</a>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.8.3-1.4 1.4-1.4h1.5V5.1c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.2H8.3v2.9h2.4V21h2.8z" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.6a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM5.1 10h2.8v8.9H5.1V10zm4.6 0h2.7v1.2c.4-.7 1.3-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.3v4.8h-2.8v-4.3c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.3v4.3H9.7V10z" /></svg></a>
            <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 7.6c0 .2 0 .3 0 .5 0 5-3.8 10.7-10.7 10.7-2.1 0-4.1-.6-5.8-1.7.3 0 .6.1.9.1 1.8 0 3.4-.6 4.7-1.6-1.6 0-3-1.1-3.5-2.6.2 0 .5.1.7.1.3 0 .7 0 1-.1-1.7-.4-3-1.9-3-3.7v-.1c.5.3 1.1.5 1.7.5-1-.7-1.7-1.8-1.7-3.1 0-.7.2-1.3.5-1.9 1.9 2.3 4.6 3.8 7.7 3.9-.1-.3-.1-.6-.1-.9 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.1.5 2.8 1.2.9-.2 1.7-.5 2.4-.9-.3.9-.9 1.6-1.7 2.1.8-.1 1.5-.3 2.2-.6-.5.8-1.1 1.4-1.9 1.9z" /></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.3 7.6c-.2-.8-.9-1.5-1.7-1.7C18.1 5.5 12 5.5 12 5.5s-6.1 0-7.6.4c-.8.2-1.5.9-1.7 1.7C2.3 9.1 2.3 12 2.3 12s0 2.9.4 4.4c.2.8.9 1.5 1.7 1.7 1.5.4 7.6.4 7.6.4s6.1 0 7.6-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.4.4-4.4s0-2.9-.4-4.4zM10.1 14.8V9.2l5 2.8-5 2.8z" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
