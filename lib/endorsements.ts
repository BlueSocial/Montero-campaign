/**
 * Public endorsement roster for the WMWD Division 2 campaign.
 * Only `confirmed: true` records should render on the live site.
 * TODO: CONFIRM FINAL PUBLIC ENDORSEMENT ROSTER
 */
export const endorsements = [
  {
    id: "fiona-ma",
    name: "Fiona Ma",
    title: "California State Treasurer",
    quote: null,
    image: "/Fiona-Ma.jpeg",
    featured: true,
    confirmed: true,
  },
  {
    id: "sabrina-cervantes",
    name: "Sabrina Cervantes",
    title: "California State Senator",
    quote: null,
    image: "/Sabrina Cervantes.jpg",
    featured: false,
    confirmed: true,
  },
  {
    id: "clarissa-cervantes",
    name: "Clarissa Cervantes",
    title: "Riverside City Councilmember",
    quote: null,
    image: "/Clarissa Cervantes.webp",
    featured: false,
    confirmed: true,
  },
  {
    id: "luis-hernandez",
    name: "Luis Hernandez",
    title: "Riverside City Councilmember",
    quote: null,
    image: "/luis-hernandez.jpg",
    featured: false,
    confirmed: true,
  },
  {
    id: "joe-salas",
    name: "Joe Salas",
    title: "DNC Member / San Bernardino Leader",
    quote: null,
    image: "/Joe Salas.jpeg",
    featured: false,
    confirmed: true,
  },
  {
    id: "joe-gedeon",
    name: "Joe Gedeon",
    title: "Hawaii State Representative",
    quote: null,
    image: "/Joe Gedeon.jpg",
    featured: false,
    confirmed: true,
  },
  // Archived City Council-era endorsement — do not render on the WMWD homepage.
  {
    id: "jose-medina",
    name: "Jose Medina",
    title: "Riverside County Supervisor",
    quote:
      "I am proud to endorse Christen Montero for Riverside City Council. Christen will be an important ally in the fight to keep Riverside affordable for working families struggling with rising costs. Her fresh business perspective and commitment to practical, community focused solutions are exactly what we need on the City Council. Christen understands that keeping Riverside vibrant means supporting small businesses, expanding housing options families can afford, and protecting the sense of opportunity that has always defined our city.",
    image: "/Jose-Medina.png",
    featured: false,
    confirmed: false,
  },
] as const

export type Endorsement = (typeof endorsements)[number]

export const publicEndorsements = endorsements.filter((endorsement) => endorsement.confirmed)
