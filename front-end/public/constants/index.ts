import {
  Hipnode,
  JobIt,
  Morent,
  arrIcon,
  backendIcon,
  digiOcean,
  downloadIcon,
  mailchimp,
  mozila,
  serviceIcon,
  slack,
  js,
  morentCase,
  webOpt,
  jobitCase,
} from "@/public/assets";

const cardData = [
  {
    logo: serviceIcon,
    title: "Analytics & SEO",
    desc: "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
  },
  {
    logo: arrIcon,
    bg: "accentDef-primaryLight",
    iconBg: "white-900",
    title: "Front-End Dev",
    desc: "Implement tracking & analytics tools to monitor website performance & improve SEO.",
  },
  {
    logo: backendIcon,
    title: "Back-End Dev",
    desc: "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
  },
  {
    logo: webOpt,
    title: "Web Optimization",
    desc: "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
  },
];

const workExpData = [
  {
    logo: slack,
    title: "Slack",
    desc: "Product Design - 4 Years Experince",
  },

  {
    logo: mozila,
    title: "Mozila",
    desc: "Sr. UI Design - 4 Years Experince",
  },
  {
    logo: digiOcean,
    title: "Digital Ocean",
    desc: "UI & Motion Designer - 4 Years Experince",
  },
  {
    logo: mailchimp,
    title: "Digital Ocean",
    desc: "UI & Motion Designer - 4 Years Experince",
  },
];

const skillsIcons = [
  {
    name: "JS",
    icon: js,
  },
  {
    name: "JS2",
    icon: js,
  },
  {
    name: "JS3",
    icon: js,
  },
  {
    name: "JS4",
    icon: js,
  },
  {
    name: "JS5",
    icon: js,
  },
  {
    name: "JS6",
    icon: js,
  },
  {
    name: "JS7",
    icon: js,
  },
  {
    name: "JS8",
    icon: js,
  },
  {
    name: "JS9",
    icon: js,
  },
  {
    name: "JS10",
    icon: js,
  },
  {
    name: "JS11",
    icon: js,
  },
  {
    name: "JS12",
    icon: js,
  },
  {
    name: "JS13",
    icon: js,
  },
  {
    name: "JS14",
    icon: js,
  },
  {
    name: "JS15",
    icon: js,
  },
  {
    name: "JS16",
    icon: js,
  },
];
const projects = [
  {
    title: "Morrent - A Car Rental Application",
    frontEndTech: "React, RTK, TW",
    backEndTech: "Node, MongoDB",
    projectLink: "/",
    imgSrc: Morent,
  },
  {
    title: "JobIT - A Job Finding Application",
    frontEndTech: "React, RTK, TW",
    backEndTech: "Rapid API",
    projectLink: "/",
    imgSrc: JobIt,
    rev: true,
  },
  {
    title: "Hipnode - A Social Media Application",
    frontEndTech: "React, RTK, TW",
    backEndTech: "Node, Express",
    projectLink: "/",
    imgSrc: Hipnode,
  },
];

interface navLinks {
  id: string;
  title: string;
  icon?: string;
}

const navLinks: navLinks[] = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "case-studies",
    title: "Case Studies",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    icon: downloadIcon,
  },
];

const caseStudiesData = [
  {
    title: "Morrent",
    desc: "Car Rental Applicaiton",
    img: morentCase,
  },
  {
    title: "JobIt",
    desc: "Job Finding Applicaiton",
    img: jobitCase,
  },
  {
    title: "Bla Bla",
    desc: "Test App Applicaiton",
    img: morentCase,
  },
  {
    title: "Hello World",
    desc: "Ola la la la",
    img: jobitCase,
  },
  {
    title: "Morrent",
    desc: "Car Rental Applicaiton",
    img: morentCase,
  },
  {
    title: "JobIt",
    desc: "Job Finding Applicaiton",
    img: jobitCase,
  },
];

export { cardData, workExpData, navLinks, projects, skillsIcons, caseStudiesData };
