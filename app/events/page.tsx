import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { campaign } from "@/lib/campaign"
import { upcomingEvents } from "@/lib/events"
import { shareSocialMetadata } from "@/lib/share-metadata"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: `Events | ${campaign.candidateName} for the Western Municipal Water District ${campaign.division}`,
  description:
    "Upcoming events for Christen Montero's campaign for the Western Municipal Water District, Division 2.",
  ...shareSocialMetadata,
}

export default function EventsPage() {
  const listed = upcomingEvents()

  return (
    <main className="flex min-h-screen flex-col">
      <Header alwaysSolid />

      <section className="bg-gradient-to-br from-navy-blue to-sky-blue pt-24 text-white md:pt-28">
        <div className="container mx-auto px-4 py-7 md:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-golden-yellow md:text-xs md:tracking-[0.22em]">
              Join us
            </p>
            <h1 className="mb-5 font-serif text-[1.85rem] font-bold leading-[1.15] sm:text-4xl md:text-5xl md:leading-[1.12]">
              Upcoming Events
            </h1>
            <p className="mx-auto max-w-xl text-base leading-[1.7] text-white/90 md:text-lg">
              Meet Christen and neighbors across Division 2. Event details and registration links are posted here as they are confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          {listed.length === 0 ? (
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-4 font-serif text-2xl font-bold text-navy-blue md:text-3xl">
                The next event will be posted here.
              </h2>
              <p className="mb-8 text-gray-700">
                There are no upcoming events listed yet. You can still endorse Christen, volunteer, or host a conversation in the meantime.
              </p>
              <Button asChild className="h-11 bg-navy-blue px-8 text-white hover:bg-navy-blue/90">
                <Link href="/#get-involved" scroll={false}>
                  Get Involved
                </Link>
              </Button>
            </div>
          ) : (
            <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {listed.map((event) => {
                const details = [event.dateLabel, event.time, event.location].filter(Boolean).join(" · ")
                const flyer = (
                  <div className="relative aspect-[3/4] overflow-hidden bg-white">
                    <Image
                      src={encodeURI(event.flyer)}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-contain"
                    />
                  </div>
                )

                return (
                  <li key={event.id} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                    {event.href ? (
                      <a href={event.href} target="_blank" rel="noopener noreferrer" className="block">
                        {flyer}
                      </a>
                    ) : (
                      flyer
                    )}
                    <div className="flex flex-1 flex-col px-5 py-5">
                      <h2 className="font-serif text-xl font-bold leading-snug text-navy-blue">{event.title}</h2>
                      <p className="mt-2 text-sm leading-snug text-gray-600">{details}</p>
                      {event.href ? (
                        <Button asChild className="mt-5 h-11 bg-navy-blue text-white hover:bg-navy-blue/90">
                          <a href={event.href} target="_blank" rel="noopener noreferrer">
                            {event.linkLabel ?? "RSVP"}
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
