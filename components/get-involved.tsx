"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { submitForm } from "@/app/actions/form-actions"
import { useToast } from "@/hooks/use-toast"

export default function GetInvolved() {
  const { toast } = useToast()
  const [endorseLoading, setEndorseLoading] = useState(false)
  const [volunteerLoading, setVolunteerLoading] = useState(false)
  const [hostLoading, setHostLoading] = useState(false)

  async function handleEndorseSubmit(formData: FormData) {
    setEndorseLoading(true)
    try {
      const result = await submitForm("endorse", formData)
      console.log('Form submission result:', result)
      
      if (result.success) {
        console.log('Showing success toast')
        toast({
          title: "Success!",
          description: "Your endorsement has been submitted.",
        })
        // Reset the form
        const form = document.getElementById("endorseForm") as HTMLFormElement
        form?.reset()
      } else {
        console.log('Showing error toast:', result.message)
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
      setEndorseLoading(false)
    }
  }

  async function handleVolunteerSubmit(formData: FormData) {
    setVolunteerLoading(true)
    try {
      const result = await submitForm("volunteer", formData)
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your volunteer application has been submitted.",
        })
        // Reset the form
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
      setVolunteerLoading(false)
    }
  }

  async function handleHostSubmit(formData: FormData) {
    setHostLoading(true)
    try {
      const result = await submitForm("host", formData)
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your event hosting request has been submitted.",
        })
        // Reset the form
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
      setHostLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-navy-blue">Get Involved</h2>

      <Tabs defaultValue="endorse" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="endorse">Endorse</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          <TabsTrigger value="host">Host an Event</TabsTrigger>
        </TabsList>

        <TabsContent value="endorse" className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-navy-blue">Endorse Christen</h3>
          <p className="mb-6 text-gray-700">
            Your endorsement helps build momentum for our campaign. Let others know you support Christen!
          </p>
          <form id="endorseForm" action={handleEndorseSubmit} className="space-y-4">
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
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Why do you support Christen? (Optional)
              </label>
              <Textarea id="message" name="message" placeholder="Share why you're endorsing Christen..." />
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
            <p className="text-xs text-gray-600 text-center">
              By providing your email and mobile number, you agree to the{' '}
              <a href="/privacy-policy" className="underline hover:text-navy-blue transition-colors">
                privacy policy
              </a>{' '}
              and to receive messages from Christen Montero for Riverside City Council 2026 (messages may include donation links). Message frequency varies. Message & Data Rates May Apply. Reply HELP for help. Reply STOP to opt out.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="volunteer" className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-navy-blue">Volunteer</h3>
          <p className="mb-6 text-gray-700">
            Join our team of dedicated volunteers and help make a difference in Ward 2!
          </p>
          <form id="volunteerForm" action={handleVolunteerSubmit} className="space-y-4">
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
        </TabsContent>

        <TabsContent value="host" className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-navy-blue">Host a House Party</h3>
          <p className="mb-6 text-gray-700">
            Help spread the word by hosting Christen at your home for a meet-and-greet with neighbors.
          </p>
          <form id="hostForm" action={handleHostSubmit} className="space-y-4">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
