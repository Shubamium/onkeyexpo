import React from "react";

import "./merchinfo.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media, MerchCategory } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = {
  params: Promise<{ id?: string }>;
};

export default async function page({ params }: Props) {
  const payload = await getPayload({
    config: await payloadConfig,
  });
  const param = await params;
  const id = param.id;

  const merch = await payload.find({
    collection: "merch",
    where: {
      slug: {
        equals: id,
      },
    },
  });
  if (merch.docs.length == 0) return <h1>404 Not Found</h1>;

  const md = merch.docs[0];
  return (
    <main id="p_merch-info">
      <div className="confine">
        <div className="media">
          <img
            src={(md.pimg as Media)?.url ?? undefined}
            alt=""
            className="main-img"
          />
          <div className="media-list">
            {md.extraimga?.map((img, i) => {
              return (
                <img
                  src={(img.image as Media)?.url ?? undefined}
                  key={img.id}
                  alt=""
                  className="other btn"
                />
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="maininfo">
            <h2>{md.title}</h2>
            <p>{(md.category as MerchCategory)?.name}</p>
          </div>

          <div className="buypanel">
            <a href={md.buyUrl ?? undefined} className="btn btn-main">
              BUY
            </a>
            <p className="price"> {md.price}</p>
          </div>

          {/* md.variants?. */}
          {md.variants?.map((v, i) => {
            return (
              <div className="samples" key={v.id}>
                <h3 className="title">{v.name}</h3>
                <div className="sl">
                  {v.variantList?.map((vl, i) => {
                    return <p key={vl}>{vl}</p>;
                  })}
                </div>
              </div>
            );
          })}

          {/* <div className="samples">
            <h3 className="title">Sample</h3>
            <div className="sl">
              <p>Variant</p>
              <p>Variant2</p>
              <p>Variant3</p>
              <p>Variant4</p>
            </div>
          </div> */}

          <div className="descriptions">
            <RichText data={md.longdesc as SerializedEditorState} />
          </div>

          <div className="adinfo">
            <img src="/g/b1.png" alt="" className="bun" />
            <h2 className="title">
              <BsInfoCircleFill /> Additional Information
            </h2>
            <RichText data={md.addInfo as SerializedEditorState} />
          </div>
        </div>
      </div>
    </main>
  );
}
