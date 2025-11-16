type Props = {};
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./header.scss";
import Link from "next/link";
import { FaBluesky, FaThreads, FaXTwitter } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";
export default function Header({}: Props) {
  return (
    <header id="header">
      <img src="/d/header-edge.svg" alt="" className="edge l" />
      <img src="/d/header-edge.svg" alt="" className="edge r" />
      <img src="/g/logo.png" alt="" className="mobilelogo" />
      <nav>
        <div className="infitext">
          <p>OnKey Expo</p>
          <p>OnKey Expo</p>
          <p>OnKey Expo</p>
          <p>OnKey Expo</p>
          <p>OnKey Expo</p>
          <p>OnKey Expo</p>
          <p>OnKey Expo</p>
        </div>
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
          <a
            href="https://www.instagram.com/onkeyexpo/"
            className="btn btn-nav"
          >
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@onkeyexpo" className="btn btn-nav">
            <BsTiktok />
          </a>
        </div>
        <img src="/g/logo.png" alt="" className="main-logo" />
        <div className="ctbtn">
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
      </nav>
      <div className="center-navigation">
        <Link className="btn btn-nav" href="/">
          Home
        </Link>
        <Link className="btn btn-nav" href="/application">
          Applications
        </Link>
        <Link className="btn btn-nav" href="/guests">
          Guests
        </Link>
        <Link className="btn btn-nav" href="/faq">
          FAQ
        </Link>
      </div>
    </header>
  );
}
