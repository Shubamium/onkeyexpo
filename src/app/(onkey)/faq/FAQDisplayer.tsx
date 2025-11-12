"use client";
import React, { useState } from "react";

import { GoTriangleDown } from "react-icons/go";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Faq } from "@/payload-types";
type Props = {
  text: SerializedEditorState;
  flmap: Map<string, Faq>;
};

export default function FAQDisplayer({ text, flmap }: Props) {
  const catList = [];
  for (const key of flmap.keys()) {
    catList.push(key);
  }
  const [activeCat, setActiveCat] = useState<string>(catList[0]);
  return (
    <div id="faq">
      <div className="fh">
        <img src="/p/faqchibi.png" alt="" className="chib" />
        <img src="/p/faqtext.png" alt="" className="text" />
        <div className="desc">
          <RichText data={text as SerializedEditorState} />
        </div>
      </div>
      <div className="faq-cat">
        {catList.map((c, i) => {
          return (
            <button
              className={`btn btn-fq ${activeCat === c ? "s" : ""}`}
              key={c + "button"}
              onClick={() => {
                setActiveCat(c);
              }}
            >
              {c}
            </button>
          );
        })}
        {/* <button className={`btn btn-fq`}>CATEAGORY 2</button>
        <button className={`btn btn-fq`}>CATEAGORY 3</button>
        <button className={`btn btn-fq`}>CATEAGORY 4</button> */}
      </div>

      <div className="fl">
        {flmap.get(activeCat)?.["question-list"]?.map((f, _) => {
          return (
            <Question q={f.question} a={f.answer} key={"question no " + f.id} />
          );
        })}
      </div>
    </div>
  );
}

function Question({ q, a }: { q: string; a: SerializedEditorState }) {
  const [act, setAct] = useState(false);
  return (
    <div className={`question ${!act ? "c" : ""}`}>
      <div
        className="q"
        onClick={() => {
          setAct(!act);
        }}
      >
        <p>{q} </p>
        <button className="btn btn-nav btn-drop">
          {" "}
          <GoTriangleDown />{" "}
        </button>
      </div>
      <div className="a">
        <RichText data={a as SerializedEditorState} />
      </div>
    </div>
  );
}
