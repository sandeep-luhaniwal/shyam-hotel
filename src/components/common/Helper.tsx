import ProgressBar from "./ProgressBar";

export const NAVBAR_DATA_LIST = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "about-us",
    url: "/",
  },
  {
    title: "contact",
    url: "/",
  },
];

export const FOOTER_DATA_LIST = [
  {
    title: "Home",
    url: "/",
    links: ["Management & franchises", "Careers", "Accor Group"],
  },
  {
    title: "Rooms",
    url: "/",
    links: ["Business travel", "Travel professionals"],
  },
  {
    title: "Services",
    url: "/",
    links: ["Web accessibility"],
  },
  {
    title: "About",
    url: "/",
    links: ["Mobile services", "iOS app"],
  },
  {
    title: "Contact",
    url: "/",
    links: ["Manage booking"],
  },
];

export const FOOTER_SOCIAL_ICONS = [
  {
    name: "facebook",
    link: "https://facebook.com",
    svg: (
      <svg viewBox="0 0 24 24">
        <path
          fill="white"
          d="M15.12 3H12.9c-2.3 0-3.4 1.4-3.4 3.6V9H6.75v3.1h2.75V21h3.3v-8.9h2.4l.5-3.1h-2.9V6.1c0-.9.25-1.5 1.5-1.5h1.4V3z"
        />
      </svg>
    ),
  },
  {
    name: "instagram",
    link: "https://instagram.com",
    svg: (
      <svg viewBox="0 0 24 24">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          ry="5"
          fill="none"
          stroke="white"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="3.3" fill="white" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="white" />
        <circle cx="12" cy="12" r="1.6" fill="#0b082a" />
      </svg>
    ),
  },
  {
    name: "linkedin",
    link: "https://linkedin.com",
    svg: (
      <svg viewBox="0 0 24 24">
        <rect
          x="2.2"
          y="2.2"
          width="19.6"
          height="19.6"
          rx="3"
          ry="3"
          fill="none"
          stroke="white"
          strokeWidth="1.4"
        />
        <rect x="6.2" y="9.2" width="2.2" height="8.6" fill="white" />
        <circle cx="7.3" cy="6.4" r="1.1" fill="white" />
        <path
          fill="white"
          d="M12.2 9.2c1.2 0 2 .7 2.3 1.6v-1.6h2.1v8h-2.1v-4.3c0-1.1-.5-1.8-1.7-1.8-1 0-1.6.7-1.6 1.8v4.3h-2.1v-8h2.1v1.1c.4-.8 1.2-1.1 2-1.1z"
        />
      </svg>
    ),
  },
];

export const FOOTER_LINKS = [
  { name: "Privacy", link: "/privacy" },
  { name: "Cookies", link: "#" },
  { name: "Legal Notice", link: "/legal-notice" },
];

export const USERS_HEADING_DATA = [
  { name: "All", value: "100%" },
  { name: "About", value: "20%" },
  { name: "Services", value: "4%" },
  { name: "Tabs", value: "60%" },
];

export const RATING_LEFT_DATA = [
  { title: "Service", reviews: 3835, score: 9.1 },
  { title: "Food", reviews: 1775, score: 8.6 },
  { title: "Location", reviews: 938, score: 9.1 },
];

export const RATING_RIGHT_DATA = [
  { title: "WiFi", reviews: 25, score: 9.5 },
  { title: "Breakfast", reviews: 917, score: 8.8 },
  { title: "Room", reviews: 1695, score: 6.7 },
];
