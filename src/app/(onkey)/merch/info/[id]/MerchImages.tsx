"use client";
import { Media, Merch } from "@/payload-types";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
type Props = {
  md: any[];
};

export default function MerchImages({ md }: Props) {
  // const imgs = [md.pimg, ...(md.extraimga?.map((i) => i.image) ?? [])];
  const imgs = md.map((img) => img.transformedUrl);
  const [curMedia, setCurMedia] = React.useState(0);

  return (
    <div className="media">
      <AnimatePresence mode="popLayout">
        {imgs[curMedia] && (
          <motion.img
            // src={(imgs[curMedia] as Media)?.url ?? undefined}
            src={imgs[curMedia]}
            alt=""
            initial={{ opacity: 0, scale: 0, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            // key={(imgs[curMedia] as Media).id}
            key={md[curMedia].id}
            className="main"
          />
        )}
      </AnimatePresence>
      <div className="media-list">
        {/* <img
          // src={(md.pimg as Media)?.url ?? undefined}
          src={md[0].transformedURL}
          alt=""
          className="other btn"
          onClick={() => {
            setCurMedia(0);
          }}
          onMouseOver={() => {
            setCurMedia(0);
          }}
        /> */}

        {imgs?.map((img, i) => {
          return (
            <img
              // src={(img.image as Media)?.url ?? undefined}
              src={img}
              key={img + "" + i + "preview"}
              alt=""
              onClick={() => {
                setCurMedia(i);
              }}
              onMouseOver={() => {
                () => {
                  setCurMedia(i);
                };
              }}
              className="other btn"
            />
          );
        })}
      </div>
    </div>
  );
}
