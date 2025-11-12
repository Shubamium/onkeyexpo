import React from "react";

type Props = {};
import "./footer.scss";
import { FaDiscord } from "react-icons/fa";
export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <img src="/b/footer-wave-top.png" alt="" className="wavetop" />
      <img src="/d/footer-side.png" alt="" className="side " />
      <img src="/d/footer-side.png" alt="" className="side r" />
      <div className="logoc">
        <img src="/g/logo.png" alt="" />
      </div>
      <p className="footerde">
        (Placeholder)OnKey Expo is a VTuber-centered convention focused on
        creators, fans, tech, and industry collaboration. With panels,
        performances, cosplay, anime, networking events, and cutting-edge
        showcases, it’s built by and for the community.
      </p>
      <div className="ctbtn">
        <a href="#" className="btn btn-nav">
          <FaDiscord />
        </a>
        <a href="#" className="btn btn-nav">
          <FaDiscord />
        </a>
        <a href="#" className="btn btn-nav">
          <FaDiscord />
        </a>
        <a href="#" className="btn btn-nav">
          <FaDiscord />
        </a>
        <a href="#" className="btn btn-nav">
          <FaDiscord />
        </a>
        <a href="#" className="btn btn-nav">
          <FaDiscord />
        </a>
      </div>
      <p className="attrib">
        website design by <a href="https://x.com/Shubamium2">Shubamium</a>
      </p>
    </footer>
  );
}
