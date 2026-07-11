"use client";
import React from "react";

import "./merchinfo.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import { Media, MerchCategory } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import parse from "html-react-parser";
import MerchImages from "./MerchImages";
import { AnimatePresence, motion } from "motion/react";
type Props = {
  pd: any;
};

export default function MerchPage({ pd }: Props) {
  const [activeVar, setActiveVar] = React.useState(0);
  return (
    <main id="p_merch-info">
      <div className="circ l"></div>
      <div className="confine">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeVar + "img variants"}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            className="leftcont"
          >
            <MerchImages md={pd.variants[activeVar].images} />
          </motion.div>
        </AnimatePresence>
        <div className="right">
          <div className="maininfo">
            <h2>{pd.name}</h2>
            {/* <p>{(pd.category as MerchCategory)?.name}</p> */}
            {/* <p>{pd.shortdesc}</p> */}
            {/* <p>{pd.description}</p> */}
          </div>

          <div className="buypanel">
            <a
              href={process.env.NEXT_PUBLIC_STORE_URL + "products/" + pd.slug}
              className="btn btn-main"
            >
              BUY
            </a>
            <p className="price">${pd.variants[activeVar].unitPrice.value}</p>
          </div>

          <div className="variantlist">
            {/* pd.variants?. */}
            {pd.variants?.map((v: any, i: number) => {
              return (
                <div
                  className={`btn samples ${activeVar === i ? "active" : ""}`}
                  key={v.id}
                  onClick={() => {
                    setActiveVar(i);
                  }}
                >
                  {/* <h3 className="title">{v.attributes.description}</h3> */}
                  <div className="sl">
                    <p>{v.attributes.description}</p>
                  </div>
                  {/* <div className="sl">
                  {v.variantList?.map((vl: any, d: number) => {
                    return <p key={vl.id}>{vl.attribut}</p>;
                  })}
                </div> */}
                </div>
              );
            })}
          </div>

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
            {/* <RichText data={pd.longdesc as SerializedEditorState} /> */}
            {parse(pd.description ?? "")}
          </div>

          {pd.additionalInformation.map((ai: any, i: number) => {
            return (
              <div className="adinfo">
                <img src="/g/b1.png" alt="" className="bun" />
                <h2 className="title">
                  <BsInfoCircleFill /> {ai.title}
                </h2>
                {/* <RichText data={pd.addInfo as SerializedEditorState} /> */}
                <div className="content">{parse(ai.bodyHtml ?? "")}</div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
