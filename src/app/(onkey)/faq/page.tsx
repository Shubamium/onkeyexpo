import React from "react";

type Props = {};
import "./faq.scss";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import FAQDisplayer from "./FAQDisplayer";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const ft = await p.findGlobal({
    slug: "faq-text",
  });
  const fl = await p.find({
    collection: "faq",
  });

  const map = new Map();
  fl.docs.forEach((f) => {
    map.set(f["category-name"], f);
  });
  return (
    <main id="p_faq">
      <FAQDisplayer flmap={map} text={ft.text as SerializedEditorState} />
    </main>
  );
}
