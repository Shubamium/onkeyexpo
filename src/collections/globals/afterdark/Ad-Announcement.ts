import { GlobalConfig } from "payload";

export const ADAnnouncementGlobal: GlobalConfig = {
  slug: "ad-announcementglobal",
  label: "Announcements Page",
  admin: {
    group: "Afterdark",
  },
  fields: [
    {
      name: "visible",
      type: "checkbox",
    },
    {
      name: "text",
      type: "richText",
    },
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
