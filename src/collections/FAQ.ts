import { CollectionConfig } from "payload";

const FAQ: CollectionConfig = {
  slug: "faq",
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

export default FAQ;
