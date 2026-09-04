export const bookingUrl = "https://www.roottorise-therapy.net/book-online";

export type Therapist = {
  slug: string;
  name: string;
  credential: string;
  focus: string;
  email: string;
  image: string;
  psychologyTodayUrl: string;
  officePhotos: { src: string; alt: string }[];
};

export const therapists: Therapist[] = [
  {
    slug: "jennifer-boss-kinser",
    name: "Jennifer Boss Kinser",
    credential: "LMFT 137499",
    focus: "Youth, families, trauma, anxiety, depression, and mood disorders",
    email: "Jennifer@roottorise-therapy.com",
    image:
      "https://static.wixstatic.com/media/c9fb13_61f7d0f373f845c7a610376b1e374c37~mv2.webp/v1/fill/w_720,h_880,al_c,lg_1,q_90/jbo.webp",
    psychologyTodayUrl:
      "https://www.psychologytoday.com/us/therapists/jennifer-boss-kinser-modesto-ca/1096595",
    officePhotos: [
      {
        src: "/office/office-counseling-room-3.jpg",
        alt: "Jennifer Boss Kinser's counseling office with a green sofa, soft lighting, and nature artwork",
      },
      {
        src: "/office/office-counseling-room-4.jpg",
        alt: "A second view of Jennifer Boss Kinser's counseling office",
      },
    ],
  },
  {
    slug: "arthur-d-tolbert-jr",
    name: "Arthur D. Tolbert Jr.",
    credential: "LMFT 378862",
    focus: "Adults, couples, families, adolescents, trauma, and life change",
    email: "Art@roottorise-therapy.com",
    image:
      "https://static.wixstatic.com/media/c9fb13_7c1b432a24374c01a579f13948277e98~mv2.webp/v1/fill/w_720,h_880,al_c,q_90/Art%2BTolbert.webp",
    psychologyTodayUrl:
      "https://www.psychologytoday.com/us/therapists/arthur-d-tolbert-jr-modesto-ca/1456932",
    officePhotos: [],
  },
  {
    slug: "angela-pacheco",
    name: "Angela Pacheco",
    credential: "LMFT 156676",
    focus: "Root-focused, strengths-based care centered on your unique story",
    email: "Angela@roottorise-therapy.com",
    image:
      "https://static.wixstatic.com/media/c9fb13_62c0ba2fde14407fa2bd36b00d411040~mv2.webp/v1/fill/w_720,h_880,al_c,q_90/thumbnail_Outlook-Image.webp",
    psychologyTodayUrl:
      "https://www.psychologytoday.com/us/therapists/angela-pacheco-modesto-ca/1346351",
    officePhotos: [
      {
        src: "/office/office-counseling-room-1.jpg",
        alt: "Angela Pacheco's counseling office with comfortable seating and ocean artwork",
      },
    ],
  },
  {
    slug: "jasmine-olvera",
    name: "Jasmine Olvera",
    credential: "LMFT 146988 · Bilingual",
    focus: "Grief, families, life transitions, and patterns that no longer serve you",
    email: "Jasmine@roottorise-therapy.com",
    image:
      "https://static.wixstatic.com/media/c9fb13_6e0f901f7bae4b609ccf4f28ebb74950~mv2.webp/v1/fill/w_720,h_880,al_c,q_90/IMG_3179.webp",
    psychologyTodayUrl:
      "https://www.psychologytoday.com/us/therapists/jasmine-olvera-modesto-ca/1755473",
    officePhotos: [
      {
        src: "/office/office-counseling-room-5.jpg",
        alt: "Jasmine Olvera's private counseling office with natural light and comfortable seating",
      },
      {
        src: "/office/office-counseling-room-6.jpg",
        alt: "A second view of Jasmine Olvera's counseling office",
      },
    ],
  },
];

export const insuranceCompanies = [
  "Aetna",
  "Anthem",
  "Blue Cross",
  "Blue Shield",
  "Cigna and Evernorth",
  "Kaiser (out-of-network)",
  "Managed Health Network (MHN)",
  "Medi-Cal",
  "Medicare",
  "Optum",
  "Oscar Health",
  "Oxford",
  "Quest Behavioral Health",
  "Sutter",
  "TRICARE",
  "TriWest",
  "United Medical Resources (UMR)",
];
