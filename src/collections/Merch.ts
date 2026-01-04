import { CollectionConfig } from "payload";

const Merch: CollectionConfig = {
  slug: "merch",
  labels: {
    plural: "Merchandise",
    singular: '"Merchandise"',
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "shortdesc",
      label: "Short Description",
      type: "textarea",
    },
    {
      name: "pimg",
      label: "Product Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "extraimga",
      label: "Extra Images",
      type: "array",
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "media",
        },
      ],
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "merch-category",
    },

    {
      name: "price",
      type: "text",
    },
    {
      name: "buyUrl",
      type: "text",
    },

    {
      name: "variants",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "variantList",
          type: "text",
          hasMany: true,
        },
      ],
    },

    {
      name: "longdesc",
      label: "Long Description",
      type: "richText",
    },
    {
      name: "addInfo",
      label: "Additional Information",
      type: "richText",
    },
  ],
};

export default Merch;
