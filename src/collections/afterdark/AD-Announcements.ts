import { CollectionConfig } from "payload";

const ADAnnouncements: CollectionConfig = {
  slug: "AD-announcements",
  admin: {
    group: "Afterdark",
    useAsTitle: "title",
  },
  labels: {
    singular: "Announcement",
    plural: "Announcements",
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
      name: "is-external",
      type: "checkbox",
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

export default ADAnnouncements;
