"use client";
import { Media, Merch } from "@/payload-types";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
type Props = {
  md: Merch;
};

export default function MerchImages({ md }: Props) {
  const imgs = [md.pimg, ...(md.extraimga?.map((i) => i.image) ?? [])];
  const [curMedia, setCurMedia] = React.useState(0);

  return (
    <div className="media">
      <AnimatePresence mode="popLayout">
        {imgs[curMedia] && (
          <motion.img
            src={(imgs[curMedia] as Media)?.url ?? undefined}
            alt=""
            initial={{ opacity: 0, scale: 0, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            key={(imgs[curMedia] as Media).id}
            className="main"
          />
        )}
      </AnimatePresence>
      <div className="media-list">
        <img
          src={(md.pimg as Media)?.url ?? undefined}
          alt=""
          className="other btn"
          onClick={() => {
            setCurMedia(0);
          }}
          onMouseOver={() => {
            setCurMedia(0);
          }}
        />
        {md.extraimga?.map((img, i) => {
          return (
            <img
              src={(img.image as Media)?.url ?? undefined}
              key={img.id}
              alt=""
              onClick={() => {
                setCurMedia(i + 1);
              }}
              onMouseOver={() => {
                () => {
                  setCurMedia(i + 1);
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
