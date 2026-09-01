import Link from "next/link"
import { campaign } from "@/lib/campaign"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 py-14 text-white md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <h3 className="mb-4 text-xl font-bold">{campaign.candidateName}</h3>
            <p>Candidate for Western Municipal Water District, {campaign.division}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <p className="mb-2">
              Email:{" "}
              <a href={`mailto:${campaign.email}`} className="hover:text-golden-yellow">
                {campaign.email}
              </a>
            </p>
            <p>Phone: 951-406-4664</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-golden-yellow">
                  Meet Christen
                </Link>
              </li>
              <li>
                <Link href="/priorities" className="hover:text-golden-yellow">
                  Priorities
                </Link>
              </li>
              <li>
                <Link href="/why-water-matters" className="hover:text-golden-yellow">
                  Why Water Matters
                </Link>
              </li>
              <li>
                <Link href="/#get-involved" className="hover:text-golden-yellow">
                  Get Involved
                </Link>
              </li>
              <li>
                <a
                  href={campaign.donationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-golden-yellow"
                >
                  Donate
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-golden-yellow">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <div className="mx-auto inline-block max-w-full rounded-md border border-gray-300 bg-white px-4 py-4 text-gray-800 shadow-sm sm:px-6">
            {/* TODO: CONFIRM WMWD CAMPAIGN COMMITTEE NAME / FPPC ID / LEGAL DISCLAIMER */}
            <p className="text-sm leading-relaxed">
              Paid for by Christen Montero for Riverside City Council Ward 2 2026 ID# 1481381 c/o 728 W. Edna Place, Covina, CA 91722
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
