import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, HomeIcon, Shield, Leaf, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import WaveBackground from "@/components/wave-background"
import PriorityCard from "@/components/priority-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import DonationForm from "@/components/donation-form"
import GetInvolved from "./get-involved"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/canyon-crest-riverside.png"
            alt="Canyon Crest Riverside"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-navy-blue/40" /> {/* Dark overlay for better text readability */}
        </div>

        <WaveBackground />

        <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">A New Voice for Ward 2</h1>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md">
              Together, we can build a more vibrant, inclusive Riverside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-sky-blue hover:bg-sky-blue/90 text-white px-8 py-6 text-lg shadow-lg">
                Endorse Christen
              </Button>
              <Button className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue px-8 py-6 text-lg shadow-lg">
                Donate Now
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-golden-yellow shadow-xl">
              <Image src="/images/christen-hero.png" alt="Christen Montero" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-navy-blue">About Christen</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/christen-speaking.png"
                alt="Christen Montero speaking at a community event"
                width={500}
                height={600}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-blue">Riverside Roots & Leadership</h3>
              <p className="mb-6 text-gray-700">
                Christen Montero is a dedicated community leader with deep roots in Riverside. With over 15 years of
                experience in community organizing and public service, Christen has consistently demonstrated a
                commitment to improving the lives of Ward 2 residents.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sky-blue rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Community Organizer</h4>
                    <p className="text-gray-700">
                      Led multiple community initiatives that improved local infrastructure and services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-blue rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Education Advocate</h4>
                    <p className="text-gray-700">
                      Worked with local schools to develop programs that support student success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-blue rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Business Development</h4>
                    <p className="text-gray-700">
                      Partnered with local businesses to create economic opportunities for residents.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-navy-blue hover:bg-navy-blue/90 text-white">
                Learn More About Christen
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section id="priorities" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-navy-blue">Core Priorities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PriorityCard
              icon={<HomeIcon className="h-10 w-10" />}
              title="Affordable Housing"
              description="Create and preserve affordable housing options for all Riverside residents."
              color="bg-sky-blue"
              delay={0}
            />

            <PriorityCard
              icon={<Shield className="h-10 w-10" />}
              title="Public Safety"
              description="Enhance community safety through collaborative and innovative approaches."
              color="bg-golden-yellow"
              delay={200}
            />

            <PriorityCard
              icon={<Users className="h-10 w-10" />}
              title="Youth Programs"
              description="Invest in our youth through expanded educational and recreational opportunities."
              color="bg-sky-blue"
              delay={400}
            />

            <PriorityCard
              icon={<Leaf className="h-10 w-10" />}
              title="Climate Resilience"
              description="Develop sustainable solutions to address climate challenges in our community."
              color="bg-golden-yellow"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <GetInvolved />

          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-center mb-10 text-navy-blue">What Our Community Says</h3>
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Support Our Campaign</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
            Your contribution helps us reach more voters and share our vision for a better Riverside. Every donation, no
            matter the size, makes a difference.
          </p>

          <DonationForm />

          <div className="mt-12 text-center">
            <p className="text-sm opacity-80">
              Contributions are not tax deductible. Individuals may contribute up to $4,900 per election.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Christen Montero</h3>
              <p className="mb-4">Candidate for Riverside City Council Ward 2</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-golden-yellow transition-colors">
                  <span className="sr-only">Facebook</span>
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
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-golden-yellow transition-colors">
                  <span className="sr-only">Twitter</span>
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
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-golden-yellow transition-colors">
                  <span className="sr-only">Instagram</span>
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
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="mb-2">Email: info@christenforriverside.com</p>
              <p className="mb-2">Phone: (951) 555-1234</p>
              <p>Campaign HQ: 123 Main St, Riverside, CA 92501</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-golden-yellow transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#priorities" className="hover:text-golden-yellow transition-colors">
                    Priorities
                  </a>
                </li>
                <li>
                  <a href="#get-involved" className="hover:text-golden-yellow transition-colors">
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="#donate" className="hover:text-golden-yellow transition-colors">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>Paid for by Christen Montero for City Council 2026</p>
            <p className="mt-2">© 2025 Christen Montero Campaign. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
