"use client"

import { Button } from "@/components/ui/button"
import { campaign, donationUrlWithAmount } from "@/lib/campaign"

const suggestedAmounts = ["50", "100", "250", "500"] as const

export default function DonationForm() {
  return (
    <div className="mx-auto max-w-2xl">
      <p className="mb-6 text-center text-sm text-white/80">
        Suggested contribution levels — you'll select your final amount securely on our contribution page.
      </p>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {suggestedAmounts.map((amount) => (
          <Button
            key={amount}
            asChild
            className="h-12 rounded-lg bg-golden-yellow px-6 text-base font-semibold text-navy-blue shadow-md hover:bg-golden-yellow/90 md:px-8 md:text-lg"
          >
            <a href={donationUrlWithAmount(amount)} target="_blank" rel="noopener noreferrer">
              ${amount}
            </a>
          </Button>
        ))}

        <Button
          asChild
          className="h-12 rounded-lg border-2 border-golden-yellow bg-navy-blue px-6 text-base font-semibold text-white hover:bg-navy-blue/90 md:px-8 md:text-lg"
        >
          <a href={campaign.donationUrl} target="_blank" rel="noopener noreferrer">
            Other
          </a>
        </Button>
      </div>

      <p className="mt-6 text-center text-sm text-white/80">
        Every contribution helps us reach more voters across Division 2.
      </p>
    </div>
  )
}
