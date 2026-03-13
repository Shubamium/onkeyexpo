import { GlobalConfig } from "payload";

export const Application: GlobalConfig = {
  slug: "application",
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
