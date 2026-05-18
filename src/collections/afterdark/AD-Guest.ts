import { CollectionConfig } from "payload";

export const ADGuest: CollectionConfig = {
  slug: "ad-guest",
  admin: {
    useAsTitle: "name",
    group: "Afterdark",
  },

  labels: {
    singular: "Afterdark Guest",
    plural: "Afterdark Guests",
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
    {
      name: "bio",
      type: "text",
    },
  ],
};
