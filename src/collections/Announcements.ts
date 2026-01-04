import { CollectionConfig } from "payload";

const Announcements: CollectionConfig = {
  slug: "announcements",
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
      name: "banner",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "announcement-category",
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "content",
      type: "richText",
    },
  ],
};

export default Announcements;
