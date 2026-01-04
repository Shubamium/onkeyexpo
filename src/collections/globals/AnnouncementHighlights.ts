import { GlobalConfig } from "payload";

export const AnnHL: GlobalConfig = {
  slug: "annHl",
  label: "Announcements Highlights",
  fields: [
    {
      name: "hl_l",
      label: "Highlight Left",
      type: "relationship",
      relationTo: "announcements",
    },
    {
      name: "hl_r",
      label: "Highlight Right",
      type: "relationship",
      relationTo: "announcements",
    },
  ],
};
