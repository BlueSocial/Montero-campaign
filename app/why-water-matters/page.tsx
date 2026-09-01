import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ImpactStory } from "@/components/why-water-matters/impact-story"
import { InlineImpactChapters } from "@/components/why-water-matters/inline-impact"
import Link from "next/link"
import { campaign } from "@/lib/campaign"
import {
  boardFaq,
  boardFlow,
  christenApproach,
} from "@/lib/why-water-matters"
import { Check, Minus, Plus } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Your Water Board Matters | Christen Montero",
  description:
    "Learn how the Western Municipal Water District's decisions affect water rates, reliability, infrastructure, conservation, and the future of Division 2.",
}

export default function WhyWaterMattersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header alwaysSolid />

      <section className="bg-gradient-to-br from-navy-blue to-sky-blue pt-24 text-white md:pt-28">
        <div className="container mx-auto px-4 py-6 md:py-9">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-golden-yellow md:text-xs md:tracking-[0.22em]">
              Why This Race Matters
            </p>
            <h1 className="mb-4 font-serif text-[1.75rem] font-bold leading-[1.15] sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
              Water Decisions Affect Your Life Every Day.
            </h1>
            <p className="mx-auto mb-7 max-w-xl text-base leading-[1.7] text-white/90">
              Your water bill, the reliability of your local supply, the condition of critical infrastructure, and how our region prepares for drought are shaped by decisions most residents rarely see.
            </p>
            <p className="mx-auto mb-7 max-w-xl text-base leading-[1.7] text-white/90">
              The Western Municipal Water District helps make those decisions.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild className="h-11 bg-sky-blue px-8 text-base text-white shadow-lg hover:bg-sky-blue/90 md:h-12">
                <a href="#everyday-impact">See What the Water Board Affects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 border-white/50 bg-transparent px-6 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white md:h-12"
              >
                <Link href="/about">Meet Christen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="everyday-impact" className="scroll-mt-32 bg-white py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
              The everyday impact
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl">
              It Comes Down to Four Things
            </h2>
            <p className="text-[17px] leading-[1.7] text-gray-700">
              Water policy can sound complicated. For most families, the impact is much simpler.
            </p>
          </div>
        </div>
      </section>

      <div className="lg:hidden motion-reduce:!block">
        <InlineImpactChapters />
      </div>
      <div className="max-lg:hidden motion-reduce:!hidden">
        <ImpactStory />
      </div>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
              Who makes these decisions?
            </p>
            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl">
              That&apos;s What Your Water Board Is For
            </h2>
            <p className="mb-4 text-[17px] leading-[1.7] text-gray-700">
              The Western Municipal Water District is governed by an elected Board of Directors. Board members help oversee budgets, long-term water planning, infrastructure investment, rate decisions, and the priorities that shape the district&apos;s future.
            </p>
            <p className="text-[17px] leading-[1.7] text-gray-700">
              That means this is not a ceremonial office. The person representing Division 2 has a responsibility to ask hard questions, understand how decisions affect ratepayers, and plan beyond the next budget cycle.
            </p>
          </div>

          <div
            className="mx-auto mt-12 max-w-4xl"
            aria-label="How board decisions reach your household"
          >
            <p className="text-center font-serif text-xl font-bold text-navy-blue md:text-2xl">
              {boardFlow.source}
            </p>

            <div className="md:hidden">
              <div aria-hidden="true" className="mx-auto my-3 h-8 w-px bg-navy-blue/30" />
              <ol className="relative mx-auto flex max-w-[14rem] flex-col items-center gap-4 py-1">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-sky-blue/40"
                />
                {boardFlow.outcomes.map((item) => (
                  <li key={item} className="relative z-10 bg-white px-3">
                    <span className="flex flex-col items-center text-center">
                      <span
                        aria-hidden="true"
                        className="mb-1.5 h-2.5 w-2.5 rounded-full border-2 border-golden-yellow bg-white"
                      />
                      <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy-blue">
                        {item}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
              <div aria-hidden="true" className="mx-auto my-3 h-8 w-px bg-navy-blue/30" />
            </div>

            <div className="hidden md:block">
              <div aria-hidden="true" className="mx-auto my-4 h-10 w-px bg-navy-blue/30" />
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute left-[6%] right-[6%] top-[5px] h-px bg-sky-blue/45"
                />
                <ul className="relative grid grid-cols-4 gap-2">
                  {boardFlow.outcomes.map((item) => (
                    <li key={item} className="flex flex-col items-center text-center">
                      <span
                        aria-hidden="true"
                        className="mb-3 h-2.5 w-2.5 rounded-full border-2 border-golden-yellow bg-white"
                      />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-blue">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div aria-hidden="true" className="mx-auto my-4 h-10 w-px bg-navy-blue/30" />
            </div>

            <p className="text-center font-serif text-xl font-bold text-navy-blue md:text-2xl">
              {boardFlow.result}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-start md:gap-16">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
                Why Christen
              </p>
              <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl">
                A Practical Perspective on an Essential Resource
              </h2>
              <div className="space-y-4 text-[17px] leading-[1.7] text-gray-700">
                <p>
                  Christen Montero brings a combination of public service, business operations, and local agriculture to this race.
                </p>
                <p>
                  As a Riverside Planning Commissioner, she works at the intersection of growth, infrastructure, environmental impacts, and long-term planning.
                </p>
                <p>
                  Through local agriculture and regional food recovery, she has also seen firsthand how resource efficiency and rising operating costs affect families and small producers.
                </p>
              </div>
            </div>
            <div className="md:pt-2">
              <p className="mb-5 text-[17px] leading-[1.7] text-gray-700">That experience shapes her approach to water:</p>
              <ul className="space-y-4">
                {christenApproach.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-blue" aria-hidden="true" />
                    <span className="font-serif text-lg leading-snug text-navy-blue">
                      {line.replace(/^and /, "").replace(/^./, (char) => char.toUpperCase())}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-8 flex max-w-5xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button asChild className="h-11 bg-navy-blue px-8 text-white hover:bg-navy-blue/90 md:h-12">
              <Link href="/about">Meet Christen</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-navy-blue/20 px-6 text-navy-blue hover:bg-white md:h-12"
            >
              <Link href="/priorities">Explore Her Priorities</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-navy-blue py-14 text-white md:py-20">
        <div className="container mx-auto px-4">
          <figure className="mx-auto max-w-3xl border-l-4 border-golden-yellow pl-6 md:pl-8">
            <blockquote className="font-serif text-2xl font-bold leading-snug md:text-3xl md:leading-[1.2]">
              &ldquo;Water isn&apos;t an abstract issue. It&apos;s a kitchen-table issue.&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-base leading-[1.7] text-white/85">
              It affects what families pay, whether businesses can grow, and how prepared our communities are for the future.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl">
              What Can a Water Board Member Actually Do?
            </h2>

            <div className="md:hidden">
              {boardFaq.map((item) => (
                <details key={item.title} className="group border-b border-gray-200 first:border-t">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 py-4 font-serif text-lg font-bold leading-snug text-navy-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                    <span>{item.title}</span>
                    <Plus className="h-5 w-5 shrink-0 text-sky-blue group-open:hidden" aria-hidden="true" />
                    <Minus className="hidden h-5 w-5 shrink-0 text-sky-blue group-open:inline" aria-hidden="true" />
                  </summary>
                  <p className="pb-4 text-base leading-[1.7] text-gray-700">{item.body}</p>
                </details>
              ))}
            </div>

            <ul className="hidden gap-4 md:grid md:grid-cols-2">
              {boardFaq.map((item) => (
                <li key={item.title} className="border border-gray-200 bg-gray-50/80 px-6 py-6">
                  <h3 className="mb-2 font-serif text-lg font-bold text-navy-blue">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-gray-700">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
              The bottom line
            </p>
            <h2 className="mb-8 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl">
              This Race Is About More Than Water.
            </h2>
            <div className="space-y-4 text-[17px] leading-[1.7] text-gray-700">
              <p>It&apos;s about what families pay each month.</p>
              <p>It&apos;s about whether our infrastructure is ready before something breaks.</p>
              <p>It&apos;s about whether we plan for drought before we&apos;re in one.</p>
              <p>
                And it&apos;s about making sure Division 2 has a representative who treats every decision like it matters—because it does.
              </p>
            </div>
            <p className="mt-10 font-serif text-2xl font-bold leading-snug text-navy-blue md:mt-12 md:text-[1.85rem]">
              <span aria-hidden="true" className="mx-auto mb-5 block h-0.5 w-12 bg-golden-yellow" />
              That&apos;s why Christen is running.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t-4 border-golden-yellow bg-gradient-to-br from-navy-blue to-[#1a4578] pt-16 pb-12 text-white md:pt-24 md:pb-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight md:text-4xl">
              Help Elect Christen Montero
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg leading-[1.7] text-white/90">
              Join the campaign for affordable, reliable, and accountable water leadership in the Western Municipal Water District, Division 2.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild className="h-11 bg-sky-blue px-8 text-base text-white shadow-lg hover:bg-sky-blue/90 md:h-12">
                <Link href="/#get-involved">Join the Campaign</Link>
              </Button>
              <Button asChild className="h-11 bg-golden-yellow px-8 text-base text-navy-blue shadow-lg hover:bg-golden-yellow/90 md:h-12">
                <a href={campaign.donationUrl} target="_blank" rel="noopener noreferrer">
                  Support Our Campaign
                </a>
              </Button>
            </div>
            <p className="mt-6">
              <Link href="/priorities" className="text-sm font-medium text-white/80 underline-offset-4 hover:text-golden-yellow hover:underline">
                Read Christen&apos;s Priorities
              </Link>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
