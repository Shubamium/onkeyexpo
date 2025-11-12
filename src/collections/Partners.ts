import { CollectionConfig } from "payload";

export const Partners: CollectionConfig = {
  slug: "partners",
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
