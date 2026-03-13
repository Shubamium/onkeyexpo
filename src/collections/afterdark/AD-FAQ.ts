import { CollectionConfig } from "payload";

const ADFAQ: CollectionConfig = {
  slug: "ad-faq",
  admin: {
    group: "Afterdark",
  },
  labels: {
    singular: "FAQ",
    plural: "FAQ",
  },
  fields: [
    {
      name: "category-name",
      type: "text",
      required: true,
    },
    {
      name: "question-list",
      type: "array",
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "richText",
          required: true,
        },
      ],
    },
  ],
};

export default ADFAQ;
