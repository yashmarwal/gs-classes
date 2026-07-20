export const siteUrl = "https://gsclasses.online";
export const siteName = "GS Classes";
// TODO: swap for a proper 1200x630 branded OG image once one exists —
// using the existing favicon as an interim placeholder so this never 404s.
export const defaultOgImage = `${siteUrl}/favicon.png`;

export const founderJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#founder`,
  name: "Ghanshyam Marwal",
  jobTitle: "Founder & Mathematics Teacher",
  worksFor: { "@id": `${siteUrl}/#organization` },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: "GS Classes",
  alternateName: "GS Classes Mathematics Coaching",
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  image: `${siteUrl}/favicon.png`,
  description:
    "Mathematics coaching for students from Class 6 to 12 and JEE foundation, covering CBSE and ICSE, with small batches of maximum 5 students, live classes on Google Meet, and personal doubt-solving attention.",
  telephone: "+919990118617",
  email: "gsclasses74@gmail.com",
  foundingDate: "2000",
  founder: { "@id": `${siteUrl}/#founder` },
  areaServed: {
    "@type": "Place",
    name: "Delhi NCR",
  },
  sameAs: ["https://www.instagram.com/gs_classes/"],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  publisher: { "@id": `${siteUrl}/#organization` },
};

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`,
  })),
});
