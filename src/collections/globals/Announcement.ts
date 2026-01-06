import { GlobalConfig } from "payload";

export const AnnouncementGlobal: GlobalConfig = {
  slug: "announcementglobal",
  label: "Announcements Page",
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
