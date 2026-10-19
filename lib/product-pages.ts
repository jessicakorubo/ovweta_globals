export type ProductPage = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image: string;
  paragraphs: string[];
  specs: string[];
  applications: string[];
};

export const productPages: ProductPage[] = [
  {
    slug: "cargo-net",
    name: "Cargo Nets",
    metaTitle: "Cargo Nets Supplier & Hire in Port Harcourt",
    metaDescription:
      "Ovweta Global supplies and hires cargo nets made to specification for offshore platforms, vessels and onshore sites in Port Harcourt and across Nigeria.",
    intro:
      "Cargo nets for lifting and securing cargo on vessels, offshore platforms and onshore sites, supplied and hired from Port Harcourt.",
    image: "https://res.cloudinary.com/dmzhovcc/image/upload/f_auto,q_auto/cargo_net",
    paragraphs: [
      "Ovweta Global supplies and hires cargo nets for oil and gas, marine and industrial operations in Port Harcourt and across Nigeria. Each net is made to your specification, so you get the size and construction your job needs.",
      "We also supply scramble nets, gangway nets and steel wire rope nets. Tell us your dimensions, the load and where it will be used, and we'll send a quote.",
    ],
    specs: [
      "Made to your specification",
      "Rope or steel wire rope construction",
      "Size and capacity confirmed at quotation",
      "Available for supply or hire",
    ],
    applications: [
      "Offshore platform cargo transfer",
      "Ship deck cargo securing",
      "Oil & gas logistics",
    ],
  },
  {
    slug: "rescue-line",
    name: "Rescue Line",
    metaTitle: "Rescue Line Supplier & Hire in Port Harcourt",
    metaDescription:
      "Ovweta Global supplies and hires rescue lines for man-overboard recovery and marine safety in Port Harcourt and across Nigeria.",
    intro:
      "Rescue lines for man-overboard recovery and personnel rescue on vessels and offshore installations, supplied and hired from Port Harcourt.",
    image: "/rescue_line.jpeg",
    paragraphs: [
      "Ovweta Global supplies and hires rescue lines and related marine safety equipment to operators in the oil and gas and marine sectors in Port Harcourt and across Nigeria.",
      "We also supply stretchers, boarding ladders and buoys. Tell us the length and the quantity you need and we'll send a quote.",
    ],
    specs: [
      "Length and rope type confirmed at quotation",
      "Available for supply or hire",
      "Other marine safety equipment available",
    ],
    applications: [
      "Man overboard recovery",
      "Rescue operations",
      "Vessel and platform safety equipment",
    ],
  },
  {
    slug: "webbing-sling",
    name: "Webbing Slings",
    metaTitle: "Webbing Sling Supply & Fabrication in Port Harcourt",
    metaDescription:
      "Webbing slings fabricated, tested and supplied in Port Harcourt by Ovweta Global Limited for offshore and onshore lifting.",
    intro:
      "Webbing slings fabricated and supplied from Port Harcourt for offshore and onshore lifting operations.",
    image: "/webbing_sling.jpg",
    paragraphs: [
      "Ovweta Global fabricates, supplies and manages webbing slings for oil and gas, marine and industrial lifting in Port Harcourt and across Nigeria.",
      "We also fabricate wire rope slings and supply shackles and other lifting accessories. Tell us the capacity and length you need and we'll send a quote.",
    ],
    specs: [
      "Fabricated to your required length and capacity",
      "Testing and certification available",
      "Sling management service available",
    ],
    applications: [
      "Offshore crane operations",
      "Heavy lift rigging",
      "Load securing",
    ],
  },
];