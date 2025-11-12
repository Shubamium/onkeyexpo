import React from "react";

type Props = {};
import "./faq.scss";
import { GoTriangleDown } from "react-icons/go";
export default function page({}: Props) {
  return (
    <main id="p_faq">
      <div id="faq">
        <div className="fh">
          <img src="/p/faqchibi.png" alt="" className="chib" />
          <img src="/p/faqtext.png" alt="" className="text" />
          <p className="desc">
            (Placeholder)OnKey Expo is a VTuber-centered convention focused on
            creators, fans, tech, and industry collaboration. With panels,
            performances, cosplay, anime, networking events, and cutting-edge
            showcases, it’s built by and for the community.{" "}
          </p>
        </div>
        <div className="faq-cat">
          <button className={`btn btn-fq s`}>CATEAGORY 1</button>
          <button className={`btn btn-fq`}>CATEAGORY 2</button>
          <button className={`btn btn-fq`}>CATEAGORY 3</button>
          <button className={`btn btn-fq`}>CATEAGORY 4</button>
        </div>

        <div className="fl">
          <div className="question c">
            <div className="q">
              <p>When will the event happen? </p>
              <button className="btn btn-nav btn-drop">
                {" "}
                <GoTriangleDown />{" "}
              </button>
            </div>
            <div className="a">
              <p>
                November 20-22nd, 2026. November 19th will be pre reg pickup and
                setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
