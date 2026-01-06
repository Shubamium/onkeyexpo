// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
import { s3Storage } from "@payloadcms/storage-s3";
import FAQ from "./collections/FAQ";
import { Guest } from "./collections/Guest";
import { Partners } from "./collections/Partners";
import { Home } from "./collections/globals/Home";
import { FAQText } from "./collections/globals/FAQText";
import { GuestText } from "./collections/globals/GuestText";
import AnnCategory from "./collections/Announcements-category";
import Announcements from "./collections/Announcements";
import { AnnHL } from "./collections/globals/AnnouncementHighlights";
import MerchCategory from "./collections/Merch-category";
import Merch from "./collections/Merch";
import { AnnouncementGlobal } from "./collections/globals/Announcement";
import { MerchGlobal } from "./collections/globals/MerchGlobal";
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Home, FAQText, GuestText, AnnouncementGlobal, MerchGlobal],
  collections: [
    Partners,
    Guest,
    FAQ,
    Users,
    Media,
    AnnCategory,
    Announcements,
    MerchCategory,
    Merch,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    s3Storage({
      bucket: "onkeyexpo",
      collections: {
        media: {
          disablePayloadAccessControl: true,
        },
      },
      config: {
        endpoint: "https://minio-api.venmi.art",
        credentials: {
          accessKeyId: process.env.MINIOA ?? "",
          secretAccessKey: process.env.MINIOK ?? "",
        },
        region: "us-east-1",
        forcePathStyle: true,
      },
    }),
  ],
});
