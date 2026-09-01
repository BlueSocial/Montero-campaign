import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Droplets, ShieldCheck, Wrench } from "lucide-react"
import { campaign } from "@/lib/campaign"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: `Meet Christen | ${campaign.candidateName} for the Western Municipal Water District ${campaign.division}`,
  description:
    "Learn about Christen Montero, a lifelong Riverside resident, Planning Commissioner, agricultural operator, and small business leader running for the Western Municipal Water District, Division 2.",
}

function Portrait({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string
  alt: string
  priority?: boolean
  className?: string
}) {
  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-lg border border-black/[0.06] shadow-sm ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 42vw"
      />
    </div>
  )
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
      {children}
    </p>
  )
}

const bodyClass = "max-w-xl space-y-5 text-[17px] leading-[1.7] text-gray-700"
const headingClass = "mb-5 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-4xl"

const fightForItems = [
  {
    title: "Affordable & Transparent Water",
    description: "Families deserve to understand what they pay for, and why.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Local Water",
    description: "Investing in local supply helps our communities depend less on increasingly expensive imported water.",
    icon: Droplets,
  },
  {
    title: "Responsible Infrastructure",
    description: "Pipelines and treatment systems should be maintained before small problems become costly emergencies.",
    icon: Wrench,
  },
] as const

export default function AboutChristen() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header alwaysSolid />

      {/* Interior hero */}
      <section className="bg-gradient-to-br from-navy-blue to-sky-blue pt-24 text-white md:pt-28">
        <div className="container mx-auto px-4 py-7 md:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-golden-yellow md:text-xs md:tracking-[0.22em]">
              Meet Christen Montero
            </p>
            <h1 className="mb-5 font-serif text-[1.85rem] font-bold leading-[1.15] sm:text-4xl md:text-5xl md:leading-[1.12]">
              <span className="block">Rooted in Riverside.</span>
              <span className="block">Ready to Serve.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-base leading-[1.7] text-white/90 md:text-lg">
              A lifelong Riverside resident, Planning Commissioner, agricultural operator, and small business leader, Christen Montero has built her career around solving problems, strengthening communities, and making systems work better for the people who depend on them.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild className="h-11 bg-sky-blue px-8 text-base text-white shadow-lg hover:bg-sky-blue/90 md:h-12">
                <a href="#why-im-running">Why I&apos;m Running</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 border-white/50 bg-transparent px-6 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white md:h-12"
              >
                <Link href="/#get-involved" scroll={false}>Join the Campaign</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Riverside roots */}
      <section id="about" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <SectionEyebrow>Riverside roots</SectionEyebrow>
              <h2 className={headingClass}>Riverside Is Home</h2>
              <div className="mb-5 h-0.5 w-10 bg-golden-yellow" aria-hidden="true" />
              <div className={bodyClass}>
                <p>
                  Christen has called Riverside home since childhood. She grew up here, attended local schools, built businesses here, and has remained deeply connected to the people and neighborhoods that shaped her.
                </p>
                <p>
                  Her path through Riverside&apos;s schools and community gave her an early appreciation for the city&apos;s diversity, creativity, and sense of possibility. Those roots continue to shape how she approaches public service today: listen first, understand how decisions affect real people, and always keep the long-term health of the community in view.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 md:max-w-md md:justify-self-end">
              <Portrait
                src="/20190404171037_IMG_8448.jpg"
                alt="Christen Montero speaking with community members in downtown Riverside"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business & operations */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="md:max-w-md">
              <Portrait
                src="/DSC_0273.JPG"
                alt="Christen Montero speaking at a business and leadership event"
              />
            </div>
            <div>
              <SectionEyebrow>Business &amp; operations</SectionEyebrow>
              <h2 className={headingClass}>Building, Managing, and Solving Problems</h2>
              <div className="mb-5 h-0.5 w-10 bg-sky-blue" aria-hidden="true" />
              <div className={bodyClass}>
                <p>
                  Before entering public service, Christen built her career as an entrepreneur and business strategist, helping organizations improve operations, coordinate complex projects, and grow sustainably. That experience taught her that good leadership isn&apos;t just about having ideas—it&apos;s about understanding systems, managing resources responsibly, and delivering results.
                </p>
                <p>
                  Those same skills matter when overseeing an agency responsible for major infrastructure investments, long-term planning, and essential public services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public service */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <SectionEyebrow>Public service</SectionEyebrow>
              <h2 className={headingClass}>Asking the Hard Questions</h2>
              <div className="mb-5 h-0.5 w-10 bg-golden-yellow" aria-hidden="true" />
              <div className={bodyClass}>
                <p>
                  As a Riverside Planning Commissioner, Christen evaluates decisions where growth, infrastructure, neighborhoods, environmental impacts, and long-term planning intersect. Her role involves reviewing land use, development, infrastructure impacts, and the questions that shape how a community grows.
                </p>
                <p>
                  This has given her firsthand experience asking the questions public leaders should ask: Can our infrastructure support growth? What will this decision cost communities over time? Are we planning responsibly? Are residents being heard?
                </p>
                <p>
                  Those are the same questions that belong at the Western Municipal Water District, where decisions about supply, rates, and infrastructure reach every household in Division 2.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 md:max-w-md md:justify-self-end">
              <Portrait
                src="/Christen-podium.png"
                alt="Christen Montero speaking at a community event"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture */}
      <section className="bg-sky-blue/[0.06] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-16 lg:items-center">
            <div className="md:max-w-md">
              <Portrait
                src="/Christen-lifestyle.png"
                alt="Christen Montero with a horse at her agricultural operation"
              />
            </div>
            <div className="md:pt-2">
              <SectionEyebrow>Agriculture &amp; resource management</SectionEyebrow>
              <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-navy-blue md:text-[2.5rem]">
                Understanding Water From the Ground Up
              </h2>
              <div className="mb-6 h-0.5 w-10 bg-golden-yellow" aria-hidden="true" />
              <div className="max-w-xl space-y-6 text-[17px] leading-[1.7] text-gray-700">
                <p>
                  For Christen, water and resource management aren&apos;t abstract policy topics. Through her work in local agriculture and regional food recovery, she has seen firsthand how water availability, operating costs, waste, and resource efficiency affect local growers and working families.
                </p>
                <p>
                  As Executive Director of LeftOver Love, Christen works with circular food and agricultural systems that recover usable resources and redirect them to support local farms and livestock operations. This work has reinforced a simple principle: responsible resource management can lower costs, reduce waste, and make communities more resilient.
                </p>
                <p>
                  That practical perspective is one of the reasons Christen is running for the Western Municipal Water District.
                </p>
              </div>

              <aside className="mt-10 max-w-xl rounded-lg border-l-4 border-golden-yellow bg-navy-blue px-6 py-7 text-white md:px-7 md:py-8">
                <blockquote className="font-serif text-[1.35rem] italic leading-snug md:text-2xl">
                  &ldquo;Water isn&apos;t an abstract issue. It&apos;s a kitchen-table issue.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-[15px]">
                  It affects what families pay, whether businesses can grow, how local agriculture survives, and how prepared our communities are for the future.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Why I'm running */}
      <section id="why-im-running" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <SectionEyebrow>Why I&apos;m running</SectionEyebrow>
            <h2 className={headingClass}>Protecting the Resource Every Family Depends On</h2>
            <div className="mb-6 h-0.5 w-10 bg-sky-blue" aria-hidden="true" />
            <div className="space-y-6 text-[17px] leading-[1.75] text-gray-700">
              <p>
                Christen is running for the Western Municipal Water District, Division 2 because decisions about water directly affect household budgets, local businesses, future development, and our region&apos;s ability to withstand drought and climate uncertainty.
              </p>
              <p>
                She believes ratepayers deserve transparent decisions, responsible investment, reliable local water supplies, and leadership focused on long-term solutions rather than short-term fixes.
              </p>
              <p>
                As a Planning Commissioner, business leader, agricultural operator, and lifelong Riverside resident, Christen is ready to bring a practical, community-focused perspective to the Water Board.
              </p>
            </div>
            <blockquote className="mt-10 border-l-4 border-golden-yellow py-1 pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-navy-blue md:text-[1.4rem]">
                &ldquo;I want every family in Division 2 to know that someone on the Water Board is asking how each decision affects their bill, their neighborhood, and the future we&apos;re building together.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Compact priorities transition */}
      <section id="priorities" className="scroll-mt-24 bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy-blue md:mb-12 md:text-4xl">
              What Christen Will Fight For
            </h2>
            <ul className="grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
              {fightForItems.map((item) => (
                <li
                  key={item.title}
                  className="flex h-full flex-col rounded-lg border border-gray-200 bg-white px-6 py-7"
                >
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-blue/10 text-sky-blue">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mb-3 font-serif text-xl font-bold leading-snug text-navy-blue">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-600">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-14 text-center">
              <Button asChild className="h-11 bg-navy-blue px-8 text-white hover:bg-navy-blue/90 md:h-12">
                <Link href="/priorities">Explore Christen&apos;s Priorities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-5 md:gap-16">
            <div className="order-2 md:order-1 md:col-span-2">
              <SectionEyebrow>Beyond the campaign</SectionEyebrow>
              <h2 className={headingClass}>Beyond Public Service</h2>
              <div className={bodyClass}>
                <p>
                  When Christen isn&apos;t working, serving on the Planning Commission, or helping with agricultural operations, she values time with family, animals, and the Riverside community she has called home for most of her life.
                </p>
                <p>
                  She can often be found hiking Mt. Rubidoux, running with her two white German Shepherds, or caring for her farm animals. A dancer since the age of four, she has long believed in the importance of balance and staying grounded.
                </p>
                <p>
                  Christen holds a Bachelor of Arts from the University of Redlands, with a background in physics, education, and psychology, and a Master of Business Administration from the same university. She later completed post-graduate studies in controlled-environment agriculture systems at UC Riverside.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-3">
              <Portrait
                src="/4J5A8705.jpg"
                alt="Portrait of Christen Montero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-navy-blue to-[#1a4578] pt-20 pb-14 text-white md:pt-28 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-golden-yellow">
              Join Team Christen
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight md:text-4xl">
              Help Build a More Reliable Water Future
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-[1.7] text-white/90">
              This campaign is about protecting ratepayers, strengthening our local water supply, and making sure Division 2 has a strong voice in the decisions that shape our future.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild className="h-11 bg-sky-blue px-8 text-base text-white shadow-lg hover:bg-sky-blue/90 md:h-12">
                <Link href="/#get-involved" scroll={false}>Get Involved</Link>
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
