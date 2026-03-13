import { CollectionConfig } from "payload";

export const ADGuest: CollectionConfig = {
  slug: "ad-guest",
  admin: {
    useAsTitle: "name",
    group: "Afterdark",
  },
  labels: {
    singular: "Guest",
    plural: "Guests",
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
