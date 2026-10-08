import { LOGO_PATH, LOGO_VIEWBOX } from '../logoPath.js'

/* Wordmark outline: used as the hero clip (crisp at any zoom) and as the nav/footer logo */
export default function LogoDefs() {
  return (
    <svg className="svg-defs" aria-hidden="true" focusable="false">
      <defs>
        <path id="weown-logo-path" fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
        <clipPath id="weown-logo-clip" clipPathUnits="objectBoundingBox">
          <use href="#weown-logo-path" transform="scale(0.00091579 0.00478469)" />
        </clipPath>
        <symbol id="weown-logo" viewBox={LOGO_VIEWBOX}>
          <use href="#weown-logo-path" />
        </symbol>
      </defs>
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg viewBox={LOGO_VIEWBOX} aria-hidden="true" focusable="false" {...props}>
      <use href="#weown-logo" />
    </svg>
  )
}
