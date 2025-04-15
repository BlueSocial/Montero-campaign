"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState("25")
  const [customAmount, setCustomAmount] = useState("")

  return (
    <Card className="max-w-2xl mx-auto bg-white text-navy-blue">
      <CardContent className="p-8">
        <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount} className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["25", "50", "100", "250"].map((amount) => (
              <div key={amount} className="relative">
                <RadioGroupItem value={amount} id={`amount-${amount}`} className="sr-only" />
                <Label
                  htmlFor={`amount-${amount}`}
                  className={`flex items-center justify-center h-16 rounded-md border-2 cursor-pointer transition-all ${
                    selectedAmount === amount
                      ? "border-golden-yellow bg-golden-yellow/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  ${amount}
                </Label>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <div className="relative">
              <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
              <Label
                htmlFor="amount-custom"
                className={`flex items-center justify-center h-10 px-4 rounded-md border-2 cursor-pointer transition-all ${
                  selectedAmount === "custom"
                    ? "border-golden-yellow bg-golden-yellow/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                Custom
              </Label>
            </div>

            <div className="flex-1">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount("custom")
                  }}
                  placeholder="Other amount"
                  className="pl-8"
                  min="1"
                />
              </div>
            </div>
          </div>
        </RadioGroup>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="firstName" className="mb-1 block">
              First Name
            </Label>
            <Input id="firstName" placeholder="First Name" />
          </div>
          <div>
            <Label htmlFor="lastName" className="mb-1 block">
              Last Name
            </Label>
            <Input id="lastName" placeholder="Last Name" />
          </div>
          <div>
            <Label htmlFor="email" className="mb-1 block">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>
          <div>
            <Label htmlFor="phone" className="mb-1 block">
              Phone
            </Label>
            <Input id="phone" type="tel" placeholder="Phone" />
          </div>
        </div>

        <Button className="w-full bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue text-lg py-6">
          Donate ${selectedAmount === "custom" ? customAmount || "0" : selectedAmount}
        </Button>
      </CardContent>
    </Card>
  )
}
