/**
 * Confirmed public campaign identity for the WMWD Division 2 race.
 * Keep this file limited to non-sensitive facts used in more than one place.
 */
export const campaign = {
  candidateName: "Christen Montero",
  officeFull: "Western Municipal Water District Board of Directors",
  officeShort: "Western Municipal Water District — Division 2",
  division: "Division 2",
  electionYear: 2026,
  website: "votechristen.com",
  email: "Hello@votechristen.com",
  phone: "951-406-0664",
  donationUrl: "https://www.efundraisingconnections.com/c/ChristenMontero/",
  legal: {
    committeeName: "Christen Montero for Western Municipal Water District Division 2 2026",
    fppcId: "1494498",
    campaignAddress: "1398 N Candleberry rd. Colton, CA 92324",
    paidForBy:
      "Paid for by Christen Montero for Western Municipal Water District Division 2 2026 #1494498 1398 N Candleberry rd. Colton, CA 92324.",
  },
} as const

/** Append `amount` for processors that honor it. eFundraising Connections currently ignores this param. */
export function donationUrlWithAmount(amount?: string | number) {
  const url = new URL(campaign.donationUrl)
  if (amount != null && String(amount).trim() !== "") {
    url.searchParams.set("amount", String(amount))
  }
  return url.toString()
}
