import { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
  slug: "home",
  fields: [
    {
      name: "hero-description",
      type: "textarea",
    },
    {
      name: "call-to-action",
      type: "text",
    },
    {
      name: "trailer",
      label: "Trailer (Youtube Video ID)",
      type: "text",
    },
    {
      name: "map",
      label: "Google Map Embed (Src Link)",
      type: "text",
    },
    {
      name: "dates",
      label: "Date Information",
      type: "richText",
    },
    {
      name: "address",
      label: "Address Information",
      type: "text",
    },
    {
      name: "team",
      label: "Meet the Team Description",
      type: "textarea",
    },
    {
      name: "footer-description",
      type: "textarea",
    },
  ],
};
