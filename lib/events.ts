/**
 * Upcoming public events for /events.
 * Add the flyer under /public, then add a record here.
 * Set `href` to the eFundraising event page when there is one.
 */
export type CampaignEvent = {
  id: string
  title: string
  /** YYYY-MM-DD. The event stays listed through this day. */
  date: string
  dateLabel: string
  time?: string
  location?: string
  flyer: string
  href?: string
  linkLabel?: string
}

export const events: CampaignEvent[] = []

function localIsoDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function upcomingEvents(today = new Date()) {
  const cutoff = localIsoDate(today)
  return events
    .filter((event) => event.date >= cutoff)
    .sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title))
}
