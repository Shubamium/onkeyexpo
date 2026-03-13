import { CollectionConfig } from "payload";

export const ADPartners: CollectionConfig = {
  slug: "ad-partners",
  labels: {
    singular: "Partner",
    plural: "Partners",
  },
  admin: {
    group: "Afterdark",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "link",
      type: "text",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
