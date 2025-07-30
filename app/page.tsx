import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, HomeIcon, Shield, Leaf, ChevronRight, Building2, MapPin, Heart, TreePine, Palette } from "lucide-react"
import Header from "@/components/header"
import WaveBackground from "@/components/wave-background"
import PriorityCard from "@/components/priority-card"

import DonationForm from "@/components/donation-form"
import GetInvolved from "@/components/get-involved"
import AnimatedHeadline from "@/components/AnimatedHeadline"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Riverside_Hero.jpg"
            alt="Riverside city landscape"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-navy-blue/50" /> {/* Adjusted overlay for better readability */}
        </div>

        <WaveBackground />

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <AnimatedHeadline />
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md">
              It's time for leadership that reflects the strength, diversity, and determination of our community. By coming together, we can ensure every family, small business, and neighborhood has the resources and opportunity to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-sky-blue hover:bg-sky-blue/90 text-white px-8 py-6 text-lg shadow-lg">
                <a href="#get-involved">
                  Endorse Christen
                </a>
              </Button>
              <Button asChild className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue px-8 py-6 text-lg shadow-lg">
                <a href="https://www.efundraisingconnections.com/c/ChristenMontero2026" target="_blank" rel="noopener noreferrer">
                  Donate Now
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-golden-yellow shadow-xl">
              <Image src="/images/christen-hero.png" alt="Christen Montero" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white text-center animate-bounce">
          <p className="text-sm mb-2">Scroll Down</p>
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
            className="mx-auto"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-navy-blue">Meet Christen</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/Christen-podium.png"
                alt="Christen Montero speaking at a podium"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-blue">Riverside Roots & Leadership</h3>
              <p className="mb-6 text-gray-700">
                Christen Montero is a dedicated community leader with deep roots in Riverside. With over 15 years of
                experience in business, community development and advocacy, Christen has consistently demonstrated a
                commitment to improving the lives of Ward 2 residents.
              </p>

              <div className="bg-white border-l-4 border-sky-blue p-6 rounded-r-lg shadow-sm">
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "Riverside is more than my hometown — it's where I was raised, where I built my business, and where I've spent my life investing in others.
                  <br /><br />
                  My family came here in search of opportunity, and we found it through strong schools, safe neighborhoods, and a supportive community. But today, those community values and opportunities that helped me succeed are slipping away.
                  <br /><br />
                  I'm running for City Council because I believe it's a time for a New Direction for Riverside to ensure every family, every small business, and every neighborhood has the resources and opportunity to thrive."
                </blockquote>
              </div>

              <Link href="/about">
                <Button className="mt-8 bg-navy-blue hover:bg-navy-blue/90 text-white">
                  Learn More About Christen
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section id="priorities" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-navy-blue">Core Priorities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <PriorityCard
              icon={<Building2 className="h-10 w-10" />}
              title="Supporting Small Businesses"
              description="Give small businesses the support they need to create safe, good-paying jobs closer to where people live."
              color="bg-sky-blue"
              delay={0}
            />

            <PriorityCard
              icon={<MapPin className="h-10 w-10" />}
              title="Affordable and Livable Neighborhoods"
              description="Making neighborhoods more affordable, dynamic and livable by investing in core services and amenities that residents can easily walk or drive to."
              color="bg-golden-yellow"
              delay={200}
            />

            <PriorityCard
              icon={<Heart className="h-10 w-10" />}
              title="Public Safety"
              description="Ensuring first responders have the resources they need to keep our community safe."
              color="bg-sky-blue"
              delay={400}
            />

            <PriorityCard
              icon={<TreePine className="h-10 w-10" />}
              title="Environment and Sustainability"
              description="Fostering a healthier environment by expanding green spaces in neighborhoods for everyone to enjoy."
              color="bg-golden-yellow"
              delay={600}
            />

            <PriorityCard
              icon={<Palette className="h-10 w-10" />}
              title="Thriving Arts and Culture"
              description="Building Riverside into a thriving cultural center by leveraging community assets like The Cheech to attract more restaurants, art galleries, cultural events, and festivals."
              color="bg-sky-blue"
              delay={800}
            />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <GetInvolved />
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
              <p className="mb-2">Email: Hello@votechristen.com</p>
              <p>Phone: 951-406-4664</p>
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
                  <a href="https://www.efundraisingconnections.com/c/ChristenMontero2026" target="_blank" rel="noopener noreferrer" className="hover:text-golden-yellow transition-colors">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="inline-block border border-gray-300 bg-white text-gray-800 px-6 py-4 rounded-md shadow-sm">
              <p className="text-sm">
                Paid for by Christen Montero for Riverside City Council Ward 2 2026 ID# 1481381 c/o 728 W. Edna Place, Covina, CA 91722
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
