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
      name: "call-to-action-secondary",
      type: "group",
      fields: [
        {
          name: "text",
          type: "text",
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
    {
      name: "trailer",
      label: "Trailer (Youtube Video ID)",
      type: "text",
    },
    {
      name: "featuredGuestVisible",
      label: "Show Featured Guest",
      type: "checkbox",
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
      relationTo: "guest",
      hasMany: true,
      admin: { appearance: "drawer" },
    },
    {
      name: "featuredGuestAd",
      label: "Featured Guest List (Afterdark)",
      type: "relationship",
      relationTo: "ad-guest",
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
      label: "Meet the Team - Description",
      type: "textarea",
    },
    {
      name: "team-list",
      label: "Meet the Team - List",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "footer-description",
      type: "textarea",
    },
  ],
};
