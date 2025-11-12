import React from "react";

type Props = {};
import { FaBluesky, FaThreads, FaXTwitter } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.scss";
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
        <a href="https://x.com/OnKeyExpo" className="btn btn-nav">
          <FaXTwitter />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61577753414617"
          className="btn btn-nav"
        >
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/onkeyexpo/" className="btn btn-nav">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@onkeyexpo" className="btn btn-nav">
          <BsTiktok />
        </a>
        <a
          href="https://www.threads.com/@onkeyexpo?hl=en"
          className="btn btn-nav"
        >
          <FaThreads />
        </a>
        <a
          href="https://bsky.app/profile/onkeyexpo.bsky.social"
          className="btn btn-nav"
        >
          <FaBluesky />
        </a>
        <a href="https://discord.gg/WAc7Xv4fQM" className="btn btn-nav">
          <FaDiscord />
        </a>
        <a href="https://www.youtube.com/@OnKey-Expo" className="btn btn-nav">
          <FaYoutube />
        </a>
      </div>
      <p className="attrib">
        website design by <a href="https://x.com/Shubamium2">Shubamium</a>
      </p>
    </footer>
  );
}
