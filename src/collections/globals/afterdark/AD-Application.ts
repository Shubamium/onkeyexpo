import { GlobalConfig } from "payload";

export const ADApplication: GlobalConfig = {
  slug: "ad-application",
  admin: {
    group: "Afterdark",
  },
  label: "Application",
  fields: [
    {
      name: "staff",
      type: "text",
    },
    {
      name: "guest",
      type: "text",
    },
    {
      name: "panel",
      type: "text",
    },
    {
      name: "booth",
      label: "Booth / Vendor",
      type: "text",
    },
    {
      name: "artist",
      label: "Artist Alley",
      type: "text",
    },
  ],
};
