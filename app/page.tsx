import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import WaveBackground from "@/components/wave-background"
import NewsletterPopup from "@/components/newsletter-popup"
import WhyWaterBoard from "@/components/why-water-board"
import CampaignPriorities from "@/components/campaign-priorities"

import DonationForm from "@/components/donation-form"
import GetInvolved from "@/components/get-involved"
import Endorsements from "@/components/endorsements"
import Link from "next/link"
import { campaign } from "@/lib/campaign"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden md:min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Riverside_Hero.jpg"
            alt="Riverside city landscape"
            fill
            className="object-cover object-center md:object-[center_30%]"
            priority
          />
          <div className="absolute inset-0 bg-navy-blue/70 md:bg-navy-blue/60" />
        </div>

        <WaveBackground />

        <div className="relative z-10 flex flex-col md:min-h-screen">
          {/* Copy sits above the portrait on mobile so it never crosses Christen's face */}
          <div className="container mx-auto px-4 pt-[4.5rem] pb-3 md:absolute md:inset-0 md:z-10 md:flex md:items-center md:pt-0 md:pb-0">
            <div className="w-full max-w-xl text-left md:max-w-[46%] lg:max-w-[42%] xl:max-w-2xl">
              <p className="mb-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-golden-yellow drop-shadow-md md:mb-4 md:text-xs md:tracking-[0.18em]">
                <span className="block">Christen Montero for</span>
                <span className="block">Western Municipal Water District — Division 2</span>
              </p>
              <h1 className="mb-3 font-serif font-bold leading-[1.05] drop-shadow-lg md:mb-6">
                <span className="block text-[2rem] text-white sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Affordable Water.
                </span>
                <span className="block text-[2rem] text-golden-yellow sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Reliable Future.
                </span>
              </h1>
              <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-white drop-shadow-lg sm:text-lg md:mb-8 md:text-xl">
                Water affects every household, every business, and every neighborhood. Christen Montero is running to protect ratepayers, strengthen our local water supply, and bring transparency and accountability to Western Municipal Water District.
              </p>
              <div className="flex max-w-md flex-col gap-2.5 sm:max-w-none sm:flex-row sm:gap-4">
                <Button asChild className="h-11 w-full bg-sky-blue px-6 text-base text-white shadow-lg hover:bg-sky-blue/90 sm:w-auto md:h-12 md:px-8">
                  <a href="#about">
                    Meet Christen
                  </a>
                </Button>
                <Button asChild className="h-11 w-full bg-golden-yellow px-6 text-base text-navy-blue shadow-lg hover:bg-golden-yellow/90 sm:w-auto md:h-12 md:px-8">
                  <a href={campaign.donationUrl} target="_blank" rel="noopener noreferrer">
                    Support Our Campaign
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Portrait: below copy on mobile, right-aligned overlay on desktop */}
          <div className="pointer-events-none relative h-[280px] sm:h-[320px] md:absolute md:inset-0 md:z-[5] md:h-auto md:min-h-0 md:max-h-none md:flex md:items-end md:justify-end md:pr-8 lg:pr-16 xl:pr-24">
            <div className="relative mx-auto h-full w-full max-w-xs sm:max-w-sm md:mx-0 md:max-w-none md:w-1/2 lg:w-2/5">
              <Image
                src="/Christen - Hero.png"
                alt="Christen Montero"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator — desktop only */}
        <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 text-center text-white md:block">
          <p className="mb-2 text-sm">Scroll Down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="mx-auto"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>

        <svg
          className="pointer-events-none absolute bottom-0 left-0 z-20 h-4 w-full text-white md:h-12"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path fill="currentColor" d="M0 48C360 8 1080 8 1440 48H0Z" />
        </svg>
      </section>

      <WhyWaterBoard />

      {/* About Section */}
      <section id="about" className="scroll-mt-24 bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-navy-blue md:text-4xl">Meet Christen</h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <Image
                src="/Christen-podium.png"
                alt="Christen Montero speaking at a podium"
                width={500}
                height={500}
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-navy-blue">Riverside Roots. Practical Leadership.</h3>
              <p className="mb-6 text-gray-700">
                Christen Montero is a lifelong Riverside resident, Riverside Planning Commissioner, local agricultural operator, and small business leader. Her experience across public service, business, and agriculture gives her a practical understanding of how decisions about water affect families, local businesses, growth, and our region's future.
              </p>

              <div className="rounded-r-lg border-l-4 border-sky-blue bg-white p-6 shadow-sm">
                <blockquote className="text-lg italic leading-relaxed text-gray-700">
                  "Water isn't an abstract issue. It's a kitchen-table issue. It affects what families pay each month, whether businesses can grow, and whether our community is prepared for the future."
                </blockquote>
              </div>

              <p className="mt-6 text-gray-700">
                Through her work in local agriculture and regional food recovery, Christen has seen firsthand how responsible resource management can lower costs, reduce waste, and strengthen local communities. She is running to bring that same practical approach to Western Municipal Water District.
              </p>

              <aside className="mt-8 border-l-4 border-golden-yellow bg-white px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-blue">
                  From the farm to the water board
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Through local agriculture and food recovery, Christen has worked directly with the challenges of resource efficiency, operating costs, and sustainability.
                </p>
              </aside>

              <Link href="/about">
                <Button className="mt-8 bg-navy-blue text-white hover:bg-navy-blue/90">
                  Meet Christen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CampaignPriorities />

      {/* Get Involved Section */}
      <section id="get-involved" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <GetInvolved />
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="scroll-mt-24 bg-navy-blue py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Help Christen Reach Division 2</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-white/90 md:mb-12">
            Your contribution helps us communicate directly with voters, share Christen&apos;s plan for affordable and reliable water, and build the grassroots campaign it takes to win.
          </p>

          <DonationForm />
        </div>
      </section>

      <Endorsements />

      {/* Newsletter Section */}
      <section className="relative overflow-hidden py-16 text-white md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/riverside.jpeg"
            alt="Riverside street scene at night"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-blue/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-golden-yellow">
              Stay informed
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold drop-shadow-lg md:text-4xl">Stay Connected</h2>
            <p className="mb-8 text-lg leading-relaxed drop-shadow-md md:text-xl">
              Get campaign updates, upcoming events, and the latest news from Team Christen as we work to bring affordable, reliable, and accountable water leadership to Division 2.
            </p>
            <Button
              data-newsletter-button
              className="bg-golden-yellow px-8 py-6 text-lg text-navy-blue shadow-xl hover:bg-golden-yellow/90"
            >
              Join Our Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
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
              <p>Phone: {campaign.phone}</p>
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
                  <a href="#get-involved" className="hover:text-golden-yellow">
                    Get Involved
                  </a>
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
              {/* TODO: CONFIRM WMWD LEGAL COMMITTEE INFORMATION BEFORE REPLACING LIVE DISCLAIMER — see campaign.legal */}
              <p className="text-sm leading-relaxed">
                Paid for by Christen Montero for Riverside City Council Ward 2 2026 ID# 1481381 c/o 728 W. Edna Place, Covina, CA 91722
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Newsletter Popup */}
      <NewsletterPopup />
    </main>
  )
}
