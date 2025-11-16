"use client";
import React, { CSSProperties, Fragment, useEffect, useState } from "react";

type Props = {};
import "./hoppingBunny.scss";
export default function HoppingBunny({}: Props) {
  const pos = ["t", "b", "l", "r"];
  const [actPos, setActPost] = useState("t");
  const [show, setShow] = useState(false);
  const [actSlide, setActSlide] = useState(0);
  const showBunny = () => {
    setShow(true);
    setActPost(pos[Math.floor(Math.random() * pos.length)]);
    setActSlide(Math.floor(Math.random() * 80) + 20);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      showBunny();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Fragment>
      {show && (
        <div
          className={`hbunny ${actPos}`}
          style={
            {
              "--ranPos": `${actSlide}%`,
            } as CSSProperties
          }
        >
          <img src="/g/b3.png" alt="" className="bunny" />
        </div>
      )}
    </Fragment>
  );
}
