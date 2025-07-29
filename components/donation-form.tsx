"use client"

import { Button } from "@/components/ui/button"

export default function DonationForm() {
  const efundraiserUrl = "https://www.efundraisingconnections.com/c/ChristenMontero2026"
  
  const donationAmounts = [
    { amount: "50", url: efundraiserUrl },
    { amount: "100", url: efundraiserUrl },
    { amount: "250", url: efundraiserUrl },
    { amount: "500", url: efundraiserUrl },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        {donationAmounts.map(({ amount, url }) => (
          <Button
            key={amount}
            asChild
            className="bg-golden-yellow hover:bg-golden-yellow/90 text-navy-blue text-lg font-semibold px-8 py-4 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              ${amount}
            </a>
          </Button>
        ))}
        
        <Button
          asChild
          className="bg-navy-blue hover:bg-navy-blue/90 text-white border-2 border-golden-yellow text-lg font-semibold px-8 py-4 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <a href={efundraiserUrl} target="_blank" rel="noopener noreferrer">
            Other
          </a>
        </Button>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-white/80 text-sm">
          Click any amount above to donate securely through our EFundraiser platform
        </p>
      </div>
    </div>
  )
}
