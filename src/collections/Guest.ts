import { CollectionConfig } from "payload";

export const Guest: CollectionConfig = {
  slug: "guest",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "link",
      type: "text",
    },
  ],
};
