/**
 * Decorative campaign epilogue: neighborhood above, water system below.
 * Purely atmospheric — meaning lives in the footer copy, not in this drawing.
 */
export default function FooterInfrastructureArt() {
  return (
    <div className="relative h-[9.5rem] w-full md:h-[10.75rem] lg:h-[12.5rem]" aria-hidden="true">
      <svg
        className="absolute inset-0 hidden h-full w-full text-white lg:block"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <DesktopStreetscape />
      </svg>
      <svg
        className="absolute inset-0 h-full w-full text-white lg:hidden"
        viewBox="0 0 390 152"
        preserveAspectRatio="none"
        fill="none"
      >
        <MobileStreetscape />
      </svg>
    </div>
  )
}

function DesktopStreetscape() {
  return (
    <g>
      <path
        d="M0 58 C190 36 340 52 520 40 C720 26 940 54 1440 28 V72 H0 Z"
        fill="currentColor"
        opacity="0.055"
      />

      {/* 5 varied homes, one palm, one canopy tree — quieter than the pipes */}
      <g opacity="0.26" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="miter">
        <path d="M72 72 V48 H86 L118 24 L150 48 H164 V72 Z" fill="currentColor" fillOpacity="0.22" />
        <path d="M248 72 V54 H420 V72 Z" fill="currentColor" fillOpacity="0.16" />
        <path d="M248 54 L334 38 L420 54" />
        <path d="M548 72 V40 H564 L604 16 L644 40 H660 V72 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M792 72 V50 H914 V72 Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M792 50 L818 36 L853 48 L888 34 L914 50" />
        <path d="M1148 72 V56 H1336 V72 Z" fill="currentColor" fillOpacity="0.16" />
        <path d="M1148 56 L1242 40 L1336 56" />
      </g>

      <g opacity="0.22" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M478 72 V34" />
        <path d="M478 32 C464 28 456 20 454 12" />
        <path d="M478 32 C470 22 468 12 474 4" />
        <path d="M478 32 C484 20 494 10 506 4" />
        <path d="M478 32 C492 28 506 28 518 22" />
      </g>
      <g opacity="0.18" fill="currentColor">
        <path d="M1028 72 V50" stroke="currentColor" strokeWidth="1.1" />
        <ellipse cx="1028" cy="42" rx="18" ry="16" />
      </g>
      <ellipse cx="188" cy="68" rx="9" ry="5" fill="currentColor" opacity="0.1" />
      <ellipse cx="1360" cy="68" rx="11" ry="5.5" fill="currentColor" opacity="0.1" />

      <rect x="0" y="72" width="1440" height="128" fill="#040412" />
      <rect x="0" y="72" width="1440" height="128" fill="#4396D2" fillOpacity="0.07" />
      <path d="M0 72 H1440" stroke="#F4C338" strokeOpacity="0.55" strokeWidth="1" />
      <path d="M0 75 H1440" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="688" y="68" width="18" height="5" stroke="currentColor" strokeOpacity="0.28" fill="currentColor" fillOpacity="0.08" />

      <g stroke="#4396D2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 148 H1400" strokeWidth="11" strokeOpacity="0.58" />
        <path d="M40 148 H1400" strokeWidth="3.1" strokeOpacity="0.92" className="footer-pipe-flow" />

        <path d="M118 148 V72" strokeWidth="2.7" strokeOpacity="0.64" />
        <path d="M334 148 H360 V72" strokeWidth="2.7" strokeOpacity="0.62" />
        <path d="M604 148 V72" strokeWidth="2.7" strokeOpacity="0.64" />
        <path d="M853 148 H820 V72" strokeWidth="2.7" strokeOpacity="0.62" />
        <path d="M1236 148 V72" strokeWidth="2.7" strokeOpacity="0.62" />
      </g>

      <g fill="#4396D2">
        <circle cx="360" cy="148" r="4.2" opacity="0.7" />
        <circle cx="820" cy="148" r="4.2" opacity="0.72" className="footer-node-pulse" />
        <circle cx="604" cy="108" r="3" opacity="0.58" />
      </g>
      <g stroke="#F4C338" strokeOpacity="0.7" strokeWidth="1.15">
        <circle cx="820" cy="148" r="7.5" fill="none" />
        <path d="M813.5 148 H826.5 M820 141.5 V154.5" />
      </g>
    </g>
  )
}

function MobileStreetscape() {
  return (
    <g>
      <path d="M0 52 C110 38 210 50 390 34 V62 H0 Z" fill="currentColor" opacity="0.06" />

      <g opacity="0.26" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="miter">
        <path d="M22 62 V42 H34 L70 22 L106 42 H118 V62 Z" fill="currentColor" fillOpacity="0.22" />
        <path d="M228 62 V44 H338 V62 Z" fill="currentColor" fillOpacity="0.16" />
        <path d="M228 44 L283 28 L338 44" />
      </g>

      <g opacity="0.24" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round">
        <path d="M158 62 V28" />
        <path d="M158 26 C146 22 140 16 138 8" />
        <path d="M158 26 C152 16 150 8 156 2" />
        <path d="M158 26 C164 16 172 8 184 2" />
        <path d="M158 26 C172 22 184 22 194 16" />
      </g>

      <rect x="0" y="62" width="390" height="90" fill="#040412" />
      <rect x="0" y="62" width="390" height="90" fill="#4396D2" fillOpacity="0.07" />
      <path d="M0 62 H390" stroke="#F4C338" strokeOpacity="0.55" strokeWidth="1" />
      <path d="M0 65 H390" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />

      <g stroke="#4396D2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 114 H376" strokeWidth="10" strokeOpacity="0.6" />
        <path d="M14 114 H376" strokeWidth="2.9" strokeOpacity="0.92" className="footer-pipe-flow" />
        <path d="M70 114 V62" strokeWidth="2.5" strokeOpacity="0.58" />
        <path d="M283 114 H308 V62" strokeWidth="2.5" strokeOpacity="0.56" />
      </g>
      <circle cx="308" cy="114" r="4" fill="#4396D2" opacity="0.72" className="footer-node-pulse" />
      <g stroke="#F4C338" strokeOpacity="0.68" strokeWidth="1.1">
        <circle cx="308" cy="114" r="7" fill="none" />
        <path d="M302 114 H314 M308 108 V120" />
      </g>
    </g>
  )
}
