import { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
  slug: "home",
  fields: [
    {
      name: "main-date",
      type: "text",
    },
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
      name: "featuredGuestText",
      label: "Featured Guest Text",
      type: "text",
    },
    {
      name: "featuredGuest",
      label: "Featured Guest List",
      type: "relationship",
      relationTo: ["guest", "ad-guest"],
      hasMany: true,
      admin: { appearance: "drawer" },
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
