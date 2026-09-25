import Image from "next/image"
import { organizationEndorsements } from "@/lib/endorsements"

export default function OrganizationEndorsements() {
  return (
    <section aria-label="Endorsed by" className="bg-gray-50 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
          Endorsed by
        </p>
        <ul className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 md:gap-16">
          {organizationEndorsements.map((organization) => (
            <li key={organization.id} className="flex w-full max-w-xs items-center justify-center sm:w-56">
              <div className="relative h-16 w-full sm:h-[4.5rem]">
                <Image
                  src={encodeURI(organization.image)}
                  alt={organization.name}
                  fill
                  sizes="224px"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
