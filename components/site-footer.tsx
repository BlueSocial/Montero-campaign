import FooterInfrastructureArt from "@/components/footer/footer-infrastructure-art"
import Image from "next/image"
import Link from "next/link"
import { campaign } from "@/lib/campaign"

const linkClass =
  "text-[14px] text-white/75 transition-colors hover:text-golden-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#060616]"

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-golden-yellow bg-[#060616] text-white">
      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-0 md:px-6 md:pt-14">
        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label={`${campaign.candidateName} for the Western Municipal Water District ${campaign.division}`}
              className="relative mb-3 block h-14 w-[calc(3.5rem*1997/787)] md:h-16 md:w-[calc(4rem*1997/787)]"
            >
              <Image
                src="/logo-white.png"
                alt=""
                fill
                sizes="180px"
                className="object-contain object-left"
              />
            </Link>
            <p className="max-w-[16rem] text-sm leading-relaxed text-white/70">
              Candidate for the Western Municipal Water District, {campaign.division}
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-serif text-lg font-bold leading-tight md:text-xl">Contact</h3>
            <p className="mb-2 text-sm text-white/75">
              Email:{" "}
              <a href={`mailto:${campaign.email}`} className={linkClass}>
                {campaign.email}
              </a>
            </p>
            <p className="text-sm text-white/75">Phone: {campaign.phone}</p>
          </div>

          <div>
            <h3 className="mb-3 font-serif text-lg font-bold leading-tight md:text-xl">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={linkClass}>
                  Meet Christen
                </Link>
              </li>
              <li>
                <Link href="/priorities" className={linkClass}>
                  Priorities
                </Link>
              </li>
              <li>
                <Link href="/why-water-matters" className={linkClass}>
                  Why Water Matters
                </Link>
              </li>
              <li>
                <Link href="/#get-involved" scroll={false} className={linkClass}>
                  Get Involved
                </Link>
              </li>
              <li>
                <a href={campaign.donationUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Donate
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="rounded-sm border border-white/15 bg-[#f4f0e6] px-4 py-3.5 text-center sm:px-6">
            {/* TODO: CONFIRM WMWD LEGAL COMMITTEE INFORMATION BEFORE REPLACING LIVE DISCLAIMER — see campaign.legal */}
            <p className="text-[13px] leading-relaxed text-navy-blue">
              Paid for by Christen Montero for Riverside City Council Ward 2 2026 ID# 1481381 c/o 728 W. Edna Place, Covina, CA 91722
            </p>
          </div>
        </div>

        <p className="mt-6 text-center md:mt-7">
          <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.26em] text-golden-yellow">
            Reliable water
          </span>
          <span className="font-serif text-base leading-snug text-white/88 md:text-lg">
            Reliable water starts below the surface.
          </span>
        </p>

        <p className="mt-3 pb-1 text-center text-[11px] text-white/45 md:mt-4">
          Website by{" "}
          <a
            href="https://ftwagency.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 underline-offset-2 transition-colors hover:text-golden-yellow hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#060616]"
          >
            FTW Agency
          </a>
        </p>
      </div>

      <FooterInfrastructureArt />
    </footer>
  )
}
