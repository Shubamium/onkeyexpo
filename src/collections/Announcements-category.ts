import { CollectionConfig } from "payload";

const AnnCategory: CollectionConfig = {
  slug: "announcement-category",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
  ],
};

export default AnnCategory;
