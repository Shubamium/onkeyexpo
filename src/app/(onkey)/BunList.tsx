"use client";
import React from "react";
import { motion } from "motion/react";
type Props = {};

export default function BunList({}: Props) {
  const dragOptions = {
    drag: true,
    whileDrag: {
      scale: 1.2,
    },
    dragElastic: 0.5,
    dragConstraints: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  };
  return (
    <div className="bunlist">
      <motion.img src="/g/b1.png" alt="" {...dragOptions} className="b tl" />
      <motion.img
        src="/g/b2.png"
        animate={{ rotate: "20deg" }}
        alt=""
        {...dragOptions}
        className="b ml"
      />
      <motion.img
        src="/g/b2.png"
        alt=""
        animate={{ rotate: "3deg" }}
        {...dragOptions}
        className="b bl"
      />

      <motion.img
        src="/g/b2.png"
        animate={{ rotate: "40deg" }}
        alt=""
        {...dragOptions}
        className="b tr"
      />
      <motion.img
        src="/g/b2.png"
        alt=""
        animate={{ rotate: "20deg" }}
        {...dragOptions}
        className="b mr"
      />
      <motion.img src="/g/b1.png" alt="" {...dragOptions} className="b br" />
    </div>
  );
}
