import { Check } from "lucide-react"
import { publicEndorsements } from "@/lib/endorsements"

export default function Endorsements() {
  // TODO: CONFIRM FINAL PUBLIC ENDORSEMENT ROSTER
  return (
    <section id="endorsements" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
          Trusted leaders. Community support.
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-navy-blue md:mb-16 md:text-4xl">
          Proudly Endorsed
        </h2>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {publicEndorsements.map((endorsement) => (
            <li
              key={endorsement.id}
              className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50/80 px-5 py-5"
            >
              <span
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-golden-yellow/25 text-navy-blue"
                aria-hidden="true"
              >
                <Check className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <div>
                <p className="font-serif text-lg font-bold uppercase tracking-wide text-navy-blue">
                  {endorsement.name}
                </p>
                <p className="mt-1 text-sm leading-snug text-gray-600">{endorsement.title}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="#get-involved"
            className="inline-flex h-11 items-center justify-center rounded-md bg-navy-blue px-8 text-sm font-medium text-white hover:bg-navy-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Endorse Christen
          </a>
        </div>
      </div>
    </section>
  )
}
