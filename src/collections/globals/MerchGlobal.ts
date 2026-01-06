import { GlobalConfig } from "payload";

export const MerchGlobal: GlobalConfig = {
  slug: "merchglobal",
  label: "Merch Page",
  fields: [
    {
      name: "visible",
      type: "checkbox",
    },
    {
      name: "text",
      type: "richText",
    },
  ],
};
