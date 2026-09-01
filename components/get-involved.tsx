"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { submitForm } from "@/app/actions/form-actions"
import { useToast } from "@/hooks/use-toast"

function HoneypotField({ id }: { id: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
    >
      <label htmlFor={id}>Website</label>
      <input
        id={id}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  )
}

export default function GetInvolved() {
  const { toast } = useToast()
  const [endorseLoading, setEndorseLoading] = useState(false)
  const [volunteerLoading, setVolunteerLoading] = useState(false)
  const [hostLoading, setHostLoading] = useState(false)
  const endorseInFlight = useRef(false)
  const volunteerInFlight = useRef(false)
  const hostInFlight = useRef(false)

  async function handleEndorseSubmit(formData: FormData) {
    if (endorseInFlight.current) return
    endorseInFlight.current = true
    setEndorseLoading(true)
    try {
      const result = await submitForm("endorse", formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: "Your endorsement has been submitted.",
        })
        const form = document.getElementById("endorseForm") as HTMLFormElement
        form?.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your endorsement.",
        variant: "destructive",
      })
    } finally {
      endorseInFlight.current = false
      setEndorseLoading(false)
    }
  }

  async function handleVolunteerSubmit(formData: FormData) {
    if (volunteerInFlight.current) return
    volunteerInFlight.current = true
    setVolunteerLoading(true)
    try {
      const result = await submitForm("volunteer", formData)
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your volunteer application has been submitted.",
        })
        const form = document.getElementById("volunteerForm") as HTMLFormElement
        form?.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application.",
        variant: "destructive",
      })
    } finally {
      volunteerInFlight.current = false
      setVolunteerLoading(false)
    }
  }

  async function handleHostSubmit(formData: FormData) {
    if (hostInFlight.current) return
    hostInFlight.current = true
    setHostLoading(true)
    try {
      const result = await submitForm("host", formData)
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your event hosting request has been submitted.",
        })
        const form = document.getElementById("hostForm") as HTMLFormElement
        form?.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request.",
        variant: "destructive",
      })
    } finally {
      hostInFlight.current = false
      setHostLoading(false)
    }
  }

  return (
    <div>
      <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
        Join the campaign
      </p>
      <h2 className="mb-4 text-center text-3xl font-bold text-navy-blue md:text-4xl">Get Involved</h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-gray-700 md:mb-12">
        Winning this race will take neighbors, volunteers, and community leaders across Division 2. Whether you can lend your name, your time, or your network, there's a place for you on Team Christen.
      </p>

      <Tabs defaultValue="endorse" className="mx-auto max-w-4xl">
        <TabsList className="mb-6 grid h-auto min-h-11 w-full grid-cols-3 gap-1 bg-sky-blue/10 p-1">
          <TabsTrigger
            value="endorse"
            className="h-auto min-w-0 whitespace-normal px-1 py-2 text-center text-[11px] leading-tight data-[state=active]:bg-navy-blue data-[state=active]:text-white sm:px-2 sm:text-sm sm:whitespace-nowrap"
          >
            Endorse
          </TabsTrigger>
          <TabsTrigger
            value="volunteer"
            className="h-auto min-w-0 whitespace-normal px-1 py-2 text-center text-[11px] leading-tight data-[state=active]:bg-navy-blue data-[state=active]:text-white sm:px-2 sm:text-sm sm:whitespace-nowrap"
          >
            Volunteer
          </TabsTrigger>
          <TabsTrigger
            value="host"
            className="h-auto min-w-0 whitespace-normal px-1 py-2 text-center text-[11px] leading-tight data-[state=active]:bg-navy-blue data-[state=active]:text-white sm:px-2 sm:text-sm sm:whitespace-nowrap"
          >
            Host an Event
          </TabsTrigger>
        </TabsList>

        <TabsContent value="endorse" className="mt-0 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-2 text-xl font-semibold text-navy-blue">Endorse Christen</h3>
          <p className="mb-6 text-gray-700">
            Add your name to the growing coalition supporting Christen for Western Municipal Water District, Division 2.
          </p>
          <form id="endorseForm" action={handleEndorseSubmit} className="relative space-y-4">
            <HoneypotField id="endorseWebsite" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <Input id="firstName" name="firstName" placeholder="First Name" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <Input id="lastName" name="lastName" placeholder="Last Name" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title (Optional)
                </label>
                <Input id="title" name="title" placeholder="e.g., CEO, Teacher, etc." />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization (Optional)
                </label>
                <Input id="organization" name="organization" placeholder="e.g., Company, School, etc." />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <Input id="phone" name="phone" type="tel" placeholder="Phone" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Why do you support Christen? (Optional)
              </label>
              <Textarea id="message" name="message" placeholder="Share why you're supporting Christen..." />
            </div>
            <Button
              type="submit"
              className="w-full bg-navy-blue hover:bg-navy-blue/90 text-white"
              disabled={endorseLoading}
            >
              {endorseLoading ? "Submitting..." : "Submit Endorsement"}
            </Button>
          </form>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-start space-x-2 mb-3">
              <Checkbox id="optIn" name="optIn" required />
              {/* TODO: PHASE 6C.2 — IMPLEMENT SMS CONSENT ONLY AFTER CAMPAIGN SMS PROGRAM IS CONFIRMED */}
              {/* TODO: CONFIRM WMWD CAMPAIGN SMS / COMMITTEE LEGAL NAME */}
              <label htmlFor="optIn" className="text-xs text-gray-600 leading-relaxed">
                I agree to the{' '}
                <a href="/privacy-policy" className="underline hover:text-navy-blue transition-colors">
                  privacy policy
                </a>{' '}
                and to receive messages from Christen Montero for Riverside City Council 2026 (messages may include donation links). Message frequency varies. Message & Data Rates May Apply. Reply HELP for help. Reply STOP to opt out.
              </label>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="volunteer" className="mt-0 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-2 text-xl font-semibold text-navy-blue">Volunteer with Team Christen</h3>
          <p className="mb-6 text-gray-700">
            Help us reach voters across Division 2 and build a people-powered campaign for affordable, reliable water.
          </p>
          <form id="volunteerForm" action={handleVolunteerSubmit} className="relative space-y-4">
            <HoneypotField id="volunteerWebsite" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="volFirstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <Input id="volFirstName" name="firstName" placeholder="First Name" required />
              </div>
              <div>
                <label htmlFor="volLastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <Input id="volLastName" name="lastName" placeholder="Last Name" required />
              </div>
            </div>
            <div>
              <label htmlFor="volEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="volEmail" name="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="volPhone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <Input id="volPhone" name="phone" type="tel" placeholder="Phone" required />
            </div>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                Availability
              </label>
              <Textarea id="availability" name="availability" placeholder="When are you available to volunteer?" />
            </div>
            <Button
              type="submit"
              className="w-full bg-sky-blue hover:bg-sky-blue/90 text-white"
              disabled={volunteerLoading}
            >
              {volunteerLoading ? "Submitting..." : "Join Our Team"}
            </Button>
          </form>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-start space-x-2 mb-3">
              <Checkbox id="volOptIn" name="optIn" required />
              {/* TODO: PHASE 6C.2 — IMPLEMENT SMS CONSENT ONLY AFTER CAMPAIGN SMS PROGRAM IS CONFIRMED */}
              {/* TODO: CONFIRM WMWD CAMPAIGN SMS / COMMITTEE LEGAL NAME */}
              <label htmlFor="volOptIn" className="text-xs text-gray-600 leading-relaxed">
                I agree to the{' '}
                <a href="/privacy-policy" className="underline hover:text-navy-blue transition-colors">
                  privacy policy
                </a>{' '}
                and to receive messages from Christen Montero for Riverside City Council 2026 (messages may include donation links). Message frequency varies. Message & Data Rates May Apply. Reply HELP for help. Reply STOP to opt out.
              </label>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="host" className="mt-0 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-2 text-xl font-semibold text-navy-blue">Host a Community Event</h3>
          <p className="mb-6 text-gray-700">
            Bring neighbors together to meet Christen, learn why this Water Board race matters, and help grow the campaign in your community.
          </p>
          <form id="hostForm" action={handleHostSubmit} className="relative space-y-4">
            <HoneypotField id="hostWebsite" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="hostFirstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <Input id="hostFirstName" name="firstName" placeholder="First Name" required />
              </div>
              <div>
                <label htmlFor="hostLastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <Input id="hostLastName" name="lastName" placeholder="Last Name" required />
              </div>
            </div>
            <div>
              <label htmlFor="hostEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="hostEmail" name="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="hostPhone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <Input id="hostPhone" name="phone" type="tel" placeholder="Phone" required />
            </div>
            <div>
              <label htmlFor="hostAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Input id="hostAddress" name="address" placeholder="Your address" required />
            </div>
            <div>
              <label htmlFor="hostNotes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information
              </label>
              <Textarea id="hostNotes" name="notes" placeholder="Preferred dates, estimated number of guests, etc." />
            </div>
            <Button
              type="submit"
              className="w-full bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue"
              disabled={hostLoading}
            >
              {hostLoading ? "Submitting..." : "Request to Host"}
            </Button>
          </form>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-start space-x-2 mb-3">
              <Checkbox id="hostOptIn" name="optIn" required />
              {/* TODO: PHASE 6C.2 — IMPLEMENT SMS CONSENT ONLY AFTER CAMPAIGN SMS PROGRAM IS CONFIRMED */}
              {/* TODO: CONFIRM WMWD CAMPAIGN SMS / COMMITTEE LEGAL NAME */}
              <label htmlFor="hostOptIn" className="text-xs text-gray-600 leading-relaxed">
                I agree to the{' '}
                <a href="/privacy-policy" className="underline hover:text-navy-blue transition-colors">
                  privacy policy
                </a>{' '}
                and to receive messages from Christen Montero for Riverside City Council 2026 (messages may include donation links). Message frequency varies. Message & Data Rates May Apply. Reply HELP for help. Reply STOP to opt out.
              </label>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
