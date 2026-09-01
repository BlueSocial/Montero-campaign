import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import {
  ActivePriorityProvider,
  PrioritiesHorizontalNav,
  PrioritiesRailNav,
} from "@/components/priorities-nav"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { campaign } from "@/lib/campaign"
import {
  getPriorityTitle,
  guidingPrinciples,
  prioritySections,
  summaryLabels,
  transparencyCommitments,
} from "@/lib/priorities-page"
import {
  Droplets,
  HardHat,
  Leaf,
  Minus,
  Plus,
  Scale,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Christen Montero's Priorities | Western Municipal Water District Division 2",
  description:
    "Explore Christen Montero's priorities for affordable water, reliable local supply, responsible infrastructure, conservation, and local jobs in Western Municipal Water District Division 2.",
}

const sectionSurfaces = [
  "bg-white",
  "bg-gray-50",
  "bg-white",
  "bg-sky-blue/[0.06]",
  "bg-white",
] as const

const chapterIcons: Record<string, LucideIcon> = {
  affordability: ShieldCheck,
  reliability: Droplets,
  infrastructure: Wrench,
  conservation: Leaf,
  "local-jobs": HardHat,
}

const principleIcons = [ShieldCheck, Droplets, Scale] as const

export default function PrioritiesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header alwaysSolid />

      <section className="bg-gradient-to-br from-navy-blue to-sky-blue pt-24 text-white md:pt-28">
        <div className="container mx-auto px-4 py-7 md:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-golden-yellow md:text-xs md:tracking-[0.22em]">
              Christen&apos;s Priorities
            </p>
            <h1 className="mb-5 font-serif text-[1.85rem] font-bold leading-[1.15] sm:text-4xl md:text-5xl md:leading-[1.12]">
              A Practical Plan for Our Water Future
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-base leading-[1.7] text-white/90 md:text-lg">
              Water decisions affect household budgets, local businesses, future growth, and the long-term resilience of our communities. Christen&apos;s approach starts with a simple principle: protect ratepayers today while making responsible investments for tomorrow.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild className="h-11 bg-sky-blue px-8 text-base text-white shadow-lg hover:bg-sky-blue/90 md:h-12">
                <Link href="/why-water-matters">Why Water Matters</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 border-white/50 bg-transparent px-6 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white md:h-12"
              >
                <Link href="/#get-involved">Join the Campaign</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
              The approach
            </p>
            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl">
              Responsible Water Leadership Starts With Accountability
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-[17px] leading-[1.7] text-gray-700">
              Western Municipal Water District manages an essential public resource. Christen believes every major decision should be evaluated through three questions:
            </p>
          </div>
          <div className="relative mx-auto max-w-5xl">
            <div
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-sky-blue/30 md:block"
            />
            <ol className="grid gap-12 md:grid-cols-3 md:gap-x-14 md:gap-y-12">
              {guidingPrinciples.map((principle, index) => {
                const Icon = principleIcons[index]
                return (
                  <li key={principle.label} className="relative text-left md:px-2 md:text-center">
                    <div className="relative z-10 mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-blue/10 text-sky-blue ring-4 ring-white motion-safe:transition-colors">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mb-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-sky-blue md:text-[13px] md:tracking-[0.22em]">
                      {principle.label}
                    </p>
                    <p className="text-lg leading-snug text-navy-blue md:text-[19px] md:leading-[1.45]">
                      {principle.question}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      <ActivePriorityProvider>
        <PrioritiesHorizontalNav />

        <div className="relative">
          <PrioritiesRailNav />

          {prioritySections.map((section, index) => {
            const Icon = chapterIcons[section.anchor]
            return (
              <section
                key={section.anchor}
                id={section.anchor}
                className={`relative overflow-hidden scroll-mt-32 py-16 md:scroll-mt-[11.5rem] md:py-24 xl:scroll-mt-32 ${sectionSurfaces[index]}`}
              >
                <div className="container mx-auto px-4">
                  <div className="relative mx-auto max-w-[52rem]">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-3 -top-6 select-none font-serif text-[7.5rem] font-bold leading-none text-golden-yellow/[0.17] md:-right-6 md:-top-8 md:text-[9.5rem]"
                    >
                      {section.number}
                    </span>

                    <div className="relative mb-5 flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-blue/10 text-sky-blue motion-safe:transition-colors">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="font-serif text-4xl font-bold leading-none text-golden-yellow md:text-5xl">
                        {section.number}
                      </p>
                    </div>
                    <p className="relative mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
                      {section.eyebrow}
                    </p>
                    <h2 className="relative mb-6 font-serif text-3xl font-bold leading-[1.15] text-navy-blue md:text-[2.5rem] md:leading-[1.12] lg:text-5xl">
                      {getPriorityTitle(section.priorityId)}
                    </h2>
                    <p className="relative mb-10 max-w-[42rem] text-base leading-[1.7] text-gray-700 md:mb-12 md:text-[17px] md:leading-[1.75]">
                      {section.opening}
                    </p>

                    <div className="relative md:hidden">
                      {section.subsections.map((item) => (
                        <details
                          key={item.title}
                          className="group border-b border-gray-200 first:border-t"
                        >
                          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-3.5 font-serif text-lg font-bold leading-snug text-navy-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                            <span>{item.title}</span>
                            <Plus className="h-5 w-5 shrink-0 text-sky-blue group-open:hidden" aria-hidden="true" />
                            <Minus className="hidden h-5 w-5 shrink-0 text-sky-blue group-open:inline" aria-hidden="true" />
                          </summary>
                          <p className="pb-4 text-base leading-[1.7] text-gray-700">{item.body}</p>
                        </details>
                      ))}
                    </div>

                    <dl className="relative hidden gap-x-10 gap-y-10 md:grid md:grid-cols-2 md:gap-y-12">
                      {section.subsections.map((item) => (
                        <div key={item.title}>
                          <dt className="mb-3 font-serif text-lg font-bold leading-snug text-navy-blue">{item.title}</dt>
                          <dd className="text-base leading-[1.7] text-gray-700 md:text-[17px] md:leading-[1.75]">{item.body}</dd>
                        </div>
                      ))}
                    </dl>

                    <aside className="relative mt-12 max-w-[42rem] overflow-hidden rounded-r-md border-l-4 border-golden-yellow bg-navy-blue px-6 py-8 text-white md:mt-14 md:px-8 md:py-9">
                      <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-2 -right-4 h-24 w-40 text-golden-yellow"
                        viewBox="0 0 160 80"
                        fill="none"
                      >
                        <path d="M0 38 Q40 12 80 38 T160 38" stroke="currentColor" strokeWidth="1.5" opacity="0.22" />
                        <path d="M0 52 Q40 26 80 52 T160 52" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
                      </svg>
                      <p className="relative mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-golden-yellow">
                        The goal
                      </p>
                      <p className="relative font-serif text-xl leading-relaxed md:text-[1.45rem] md:leading-snug">
                        {section.takeaway}
                      </p>
                    </aside>
                  </div>
                </div>
              </section>
            )
          })}
        </div>
      </ActivePriorityProvider>

      <section className="border-t border-navy-blue/10 bg-[#f4f6f8] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-sky-blue md:text-[13px]">
              Across every priority
            </p>
            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl">
              Transparency &amp; Community Accountability
            </h2>
            <p className="mb-10 text-[17px] leading-[1.7] text-gray-700">
              Christen believes Water Board decisions should be understandable and accessible to the people they affect.
            </p>
            <ul className="grid gap-6 sm:grid-cols-2">
              {transparencyCommitments.map((item) => (
                <li key={item.title}>
                  <h3 className="mb-2 font-serif text-lg font-bold text-navy-blue">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-gray-700">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sky-blue/[0.06] py-16 md:py-24">
        <div className="container relative mx-auto px-4">
          <p
            aria-hidden="true"
            className="mb-8 hidden max-w-6xl font-serif text-3xl font-bold leading-tight text-navy-blue/[0.18] lg:block xl:text-4xl"
          >
            Water isn&apos;t an abstract issue.
          </p>
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-black/[0.06] shadow-sm md:aspect-[3/4] lg:min-h-[32rem] lg:self-stretch">
              <Image
                src="/Christen-lifestyle.png"
                alt="Christen Montero at her agricultural operation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
                A practical perspective
              </p>
              <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl">
                Water From the Ground Up
              </h2>
              <div className="max-w-xl space-y-5 text-[17px] leading-[1.7] text-gray-700">
                <p>
                  Through local agriculture and regional food recovery, Christen has worked directly with the challenges of operating costs, resource efficiency, waste reduction, and sustainability.
                </p>
                <p>
                  That experience shapes how she approaches water policy: look for solutions that conserve resources, reduce unnecessary costs, and work in the real world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl">
              A Water District That Plans Ahead
            </h2>
            <p className="mb-10 text-[17px] leading-[1.7] text-gray-700">
              Christen&apos;s priorities share one goal: build a Western Municipal Water District that protects ratepayers, invests responsibly, strengthens local water reliability, and prepares Division 2 for the challenges ahead.
            </p>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {summaryLabels.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-navy-blue/15 bg-sky-blue/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-blue md:px-5 md:text-xs"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy-blue py-20 text-white md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-golden-yellow">
              Join Team Christen
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight md:text-4xl">
              Help Build a More Reliable Water Future
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-[1.7] text-white/90">
              Join the campaign to bring practical, transparent, and community-focused leadership to Western Municipal Water District, Division 2.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild className="h-11 bg-sky-blue px-8 text-base text-white shadow-lg hover:bg-sky-blue/90 md:h-12">
                <Link href="/#get-involved">Get Involved</Link>
              </Button>
              <Button asChild className="h-11 bg-golden-yellow px-8 text-base text-navy-blue shadow-lg hover:bg-golden-yellow/90 md:h-12">
                <a href={campaign.donationUrl} target="_blank" rel="noopener noreferrer">
                  Support Our Campaign
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
