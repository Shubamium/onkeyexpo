import { CollectionConfig } from "payload";

const MerchCategory: CollectionConfig = {
  slug: "merch-category",
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

export default MerchCategory;
