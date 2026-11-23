import contributors from "@/data/contributors.json";
import type { Apprenticeship, Contributor } from "@/lib/types";

// Real listings from content/apprenticeships, for stories.
export const listings: Apprenticeship[] = [
  {
    slug: "acadium",
    company: "Acadium",
    description:
      "Work with a mentor for 3 months and gain the digital marketing work experience you need to get hired. 100% remote and always free.",
    image: "acadium.jpg",
    link: "https://acadium.com/apprenticeships-for-marketers",
    location: ["Remote"],
  },
  {
    slug: "airbnb",
    company: "Airbnb",
    description:
      "The Connect Engineering Apprenticeship is a 6-month paid program for people from groups underrepresented in tech who learned software engineering through a bootcamp, community college or on their own, rather than a four-year computer science degree.",
    image: "airbnb.jpg",
    link: "https://careers.airbnb.com/connect-engineering-apprenticeship/",
    location: ["San Francisco, CA"],
  },
  {
    slug: "apprenti",
    company: "Apprenti",
    description:
      "Apprenti provides a proven, reliable pipeline for underrepresented groups such as minorities, women, and veterans to gain training, certification, and placement within the talent-hungry tech industry.",
    image: "apprenti.jpg",
    link: "https://apprenticareers.org/",
    location: ["Seattle, WA", "Detroit, MI", "Bend, OR", "Eugene, OR", "Columbus, OH", "Herndon, VA"],
  },
  {
    slug: "behance",
    company: "Behance x Adobe",
    description:
      "The Adobe Creative Apprenticeship places aspiring designers, photographers, and video professionals with top creative employers so they can get the real-world training and on-the-job experience they need to succeed.",
    image: "behance.png",
    link: "https://www.behance.net/resources/apprenticeship",
    location: ["United States (Remote)", "United Kingdom (Remote)", "Canada (Remote)"],
  },
  {
    slug: "bloomberg",
    company: "Bloomberg",
    description:
      "An apprenticeship at Bloomberg is the chance to jump into a full-time role, take on responsibility and discover new skills from day one.",
    image: "bloomberg.png",
    link: "https://www.bloomberg.com/company/early-careers/apprenticeship/",
    location: ["Multiple Locations"],
  },
  {
    slug: "catalyte",
    company: "Catalyte",
    description:
      "For 20+ years, Catalyte has provided opportunities for anybody, regardless of background, to launch new careers. Our apprenticeships offer you the opportunity to be paid while learning new skills.",
    image: "catalyte.png",
    link: "https://www.catalyte.io/apprenticeships/software-development/",
    location: ["Multiple locations (US)"],
  },
];

export const contributorList: Contributor[] = contributors;
