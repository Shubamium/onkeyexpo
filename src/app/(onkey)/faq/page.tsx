import React from "react";

type Props = {};
import "./faq.scss";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import FAQDisplayer from "./FAQDisplayer";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { GetTheme } from "@/app/util/Theme";

export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const theme = await GetTheme();
  const gSlug = theme === "afterdark" ? "ad-faq" : "faq";
  const ft = await p.findGlobal({
    slug: "faq-text",
  });
  const fl = await p.find({
    collection: gSlug,
  });

  const map = new Map();
  fl.docs.forEach((f) => {
    map.set(f["category-name"], f);
  });
  return (
    <main id="p_faq" className={theme}>
      <FAQDisplayer flmap={map} text={ft.text as SerializedEditorState} />
    </main>
  );
}
