import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import React from "react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText } from "@payloadcms/richtext-lexical/react";

import "./venue.scss";
type Props = {};

export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });
  const hd = await p.findGlobal({
    slug: "home",
  });
  return (
    <main id="p_venue">
      <img src="/g/b1.png" alt="" className="b" />

      <div className="map">
        <div className="maps">
          <div className="embed-map-fixed">
            <div className="embed-map-container">
              <iframe
                className="embed-map-frame"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5873.609862166509!2d-70.96606182537606!3d42.60188208074829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e311b191fd7f39%3A0x93b130a9d7e77f4!2sDoubleTree%20by%20Hilton%20Hotel%20Boston%20North%20Shore!5e0!3m2!1sen!2sid!4v1762975955664!5m2!1sen!2sid"
                src={hd.map ?? "https://google.com"}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="date">
          {/* Coming to <strong>/Danvers, MA – November 20-22,</strong>{" "} */}
          <RichText data={hd.dates as SerializedEditorState}></RichText>
        </div>
        <p className="addr">{hd.address}</p>
      </div>
    </main>
  );
}
