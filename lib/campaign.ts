/**
 * Confirmed public campaign identity for the WMWD Division 2 race.
 * Keep this file limited to non-sensitive facts used in more than one place.
 */
type UnconfirmedLegalField = string | null

export const campaign = {
  candidateName: "Christen Montero",
  officeFull: "Western Municipal Water District Board of Directors",
  officeShort: "Western Municipal Water District — Division 2",
  division: "Division 2",
  electionYear: 2026,
  website: "votechristen.com",
  email: "Hello@votechristen.com",
  // TODO: CONFIRM CURRENT WMWD CAMPAIGN PHONE
  phone: "951-406-4664",
  donationUrl: "https://www.efundraisingconnections.com/c/ChristenMontero/",
  // TODO: CONFIRM WMWD LEGAL COMMITTEE INFORMATION BEFORE REPLACING LIVE DISCLAIMER
  legal: {
    committeeName: null as UnconfirmedLegalField,
    fppcId: null as UnconfirmedLegalField,
    campaignAddress: null as UnconfirmedLegalField,
    paidForBy: null as UnconfirmedLegalField,
  },
} as const
