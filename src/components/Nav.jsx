import { useEffect, useState } from 'react'
import { Logo } from './LogoDefs.jsx'

export default function Nav() {
  const [open, setOpen] = useState(() => new URLSearchParams(window.location.search).get('menu') === '1')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    const onResize = () => { if (window.innerWidth > 760) setOpen(false) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <div className="nav__inner">
        <a className="nav__logo" href="#hero" aria-label="weOwn home"><Logo /></a>
        <nav className="nav__links" id="primary-nav" aria-label="Primary">
          <a href="#buyers" onClick={close}>For Buyers</a>
          <a href="#builders" onClick={close}>For Builders &amp; Partners</a>
          <a href="#how" onClick={close}>How it works</a>
        </nav>
        <a className="btn btn--nav" href="#buyers">Explore homes</a>
        <button
          className="nav__toggle" type="button" aria-label="Menu"
          aria-expanded={open} aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        ><span></span><span></span><span></span></button>
      </div>
    </header>
  )
}
