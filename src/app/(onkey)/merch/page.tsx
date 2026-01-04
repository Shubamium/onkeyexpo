import React from "react";

import "./merch.scss";
import { getPayload, Where } from "payload";
import payloadConfig from "@/payload.config";
import { Media, MerchCategory } from "@/payload-types";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import MerchFilter from "./MerchFilter";

type Props = {
  searchParams: Promise<{
    c?: string;
  }>;
};

export default async function page({ searchParams }: Props) {
  const params = await searchParams;
  const cat = params?.c;

  const catFilter: Where = cat
    ? {
        "category.slug": {
          equals: cat,
        },
      }
    : {};

  const payload = await getPayload({
    config: await payloadConfig,
  });

  const merch = await payload.find({
    collection: "merch",
    limit: 0,
    where: catFilter,
  });
  const merchcat = await payload.find({
    collection: "merch-category",
  });

  return (
    <main id="p_merch">
      <div className="confine">
        <div className="merch-h">
          <div className="text">
            <img src="/p/merchtext.png" alt="" className="banner" />
            <p className="desc">
              (Placeholder)OnKey Expo is a VTuber-centered convention focused on
              creators, fans, tech, and industry collaboration. With panels,
              performances, cosplay, anime, networking events, and cutting-edge
              showcases, it’s built by and for the community.{" "}
            </p>
          </div>
          <MerchFilter merchcat={merchcat.docs} />
        </div>
        <div className="merch-l">
          {merch.docs.map((m) => {
            return (
              <div className="merch" key={m.id}>
                <p className="category">
                  {(m.category as MerchCategory)?.name}
                </p>
                <div className="top">
                  <img
                    src={(m.pimg as Media)?.url ?? undefined}
                    alt=""
                    className="banner"
                  />

                  <div className="info">
                    <h2>{m.title}</h2>
                    <p>{m.shortdesc}</p>
                  </div>
                </div>

                <div className="action">
                  <div className="price">
                    <p>{m.price}</p>
                  </div>

                  <Link href={`/merch/info/${m.slug}`} className="btn btn-buy">
                    BUY
                    <img src="/g/b1.png" alt="" className="bunny" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
