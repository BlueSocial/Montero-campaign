"use client"
import Header from "@/components/header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MapPin, GraduationCap, Building2, Heart, Users, Leaf, Palette, TreePine } from "lucide-react"
import Link from "next/link"

export default function AboutChristen() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header alwaysSolid />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-blue to-sky-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              A New Direction for Riverside
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Meet Christen Montero, a lifelong Riverside resident committed to building a better future for our community
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue px-8">
                <a href="https://www.efundraisingconnections.com/c/ChristenMontero2026" target="_blank" rel="noopener noreferrer">
                  Support Christen's Campaign
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-blue font-serif">
                  Riverside Roots & Community Values
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Christen Montero is a businesswoman, entrepreneur, and STEM advocate with deep roots in Riverside. Her parents moved the family to Riverside in search of opportunity and they found a city that offered strong schools, good-paying jobs, safe neighborhoods, and a deep sense of community. Christen attended Taft Elementary School, Amelia Earhart Middle School, Martin Luther King Jr. High School, and Citrus High School, where supportive teachers and mentors nurtured her passion for the performing arts and introduced her to Riverside's dynamic culture of arts and innovation.
                  </p>
                  <p>
                    Today, our political environment no longer reflects the values that matter most to Riverside families, and the opportunities that once defined the city are growing harder to find. That's why Christen Montero is running for City Council — to offer a New Direction for Riverside that ensures every family, small business, and neighborhood has the resources and opportunity to thrive.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-200 rounded-lg aspect-[4/5] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Christen in Riverside</p>
                    <p className="text-sm">Placeholder for image of Christen in her hometown</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="bg-gray-200 rounded-lg aspect-[4/5] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Building2 className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Business Leadership</p>
                    <p className="text-sm">Placeholder for image of Christen at work</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-blue font-serif">
                  Small Business Entrepreneur
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    As the founder of MCA, a marketing consulting agency, and co-founder of the software company Blue Social, Christen has spent her career helping small businesses grow, mentoring the next generation, and using technology to bring people together.
                  </p>
                  <p>
                    Her service as a Board of Director for the Filipino Chamber of Commerce and nonprofit organizations like Women Wonder Writers has allowed her to work closely with Inland Empire community leaders, students, and people overcoming adversity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section id="priorities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-blue font-serif">
                Fighting for Riverside Families
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Christen understands the challenges working families face — rising costs, a lack of affordable housing, and limited access to quality jobs — because she hears about them daily from neighbors and community members. That is why she will fight for solutions to these challenges by:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="bg-sky-blue/10 p-8 rounded-lg border-l-4 border-sky-blue">
                <Building2 className="h-12 w-12 text-sky-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-navy-blue">Supporting Small Businesses</h3>
                <p className="text-gray-700">
                  to help create safe, good-paying jobs closer to where people live.
                </p>
              </div>

              <div className="bg-golden-yellow/10 p-8 rounded-lg border-l-4 border-golden-yellow">
                <MapPin className="h-12 w-12 text-golden-yellow mb-4" />
                <h3 className="text-xl font-bold mb-3 text-navy-blue">Affordable and Livable Neighborhoods</h3>
                <p className="text-gray-700">
                  by investing in core services, bringing in higher paying jobs and amenities that residents can easily walk or drive to.
                </p>
              </div>

              <div className="bg-sky-blue/10 p-8 rounded-lg border-l-4 border-sky-blue">
                <Heart className="h-12 w-12 text-sky-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-navy-blue">Public Safety</h3>
                <p className="text-gray-700">
                  to keep our community safe.
                </p>
              </div>

              <div className="bg-golden-yellow/10 p-8 rounded-lg border-l-4 border-golden-yellow">
                <TreePine className="h-12 w-12 text-golden-yellow mb-4" />
                <h3 className="text-xl font-bold mb-3 text-navy-blue">Environment and Sustainability</h3>
                <p className="text-gray-700">
                  by expanding green spaces in neighborhoods for everyone to enjoy.
                </p>
              </div>

              <div className="bg-sky-blue/10 p-8 rounded-lg border-l-4 border-sky-blue">
                <Palette className="h-12 w-12 text-sky-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-navy-blue">Thriving Arts and Culture</h3>
                <p className="text-gray-700">
                  by leveraging community assets like The Cheech to attract more restaurants, art galleries, cultural events, and festivals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-blue font-serif">
                  Beyond the Campaign
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    As a candidate for City Council, Christen is committed to action, not just ideas. She believes Riverside deserves leadership rooted in the community, guided by experience, and driven by a deep love for the city we call home.
                  </p>
                  <p>
                    When she's not working, Christen can often be found hiking Mt. Rubidoux, running with her two white German Shepherds, or caring for her farm animals. As a dancer since the age of four, she has long believed in the importance of balance and staying grounded in a fast-paced world. Christen holds both a Bachelor of Arts (BA) and a Master of Business Administration (MBA) from the University of Redlands.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-200 rounded-lg aspect-[4/5] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Users className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Personal Life</p>
                    <p className="text-sm">Placeholder for image of Christen hiking or with her dogs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Commitment Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Committed to Serving You
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              As your City Councilmember, I am committed to serving you—not just with ideas, but with action. Riverside deserves leadership rooted in community, guided by experience, and driven by a deep love for the people in this city we all call home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue px-8">
                <a href="https://www.efundraisingconnections.com/c/ChristenMontero2026" target="_blank" rel="noopener noreferrer">
                  Support the Campaign
                </a>
              </Button>
              <Link href="/#get-involved">
                <Button className="bg-white hover:bg-white/90 text-navy-blue border-2 border-white px-8">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-navy-blue hover:text-sky-blue transition-colors">
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
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