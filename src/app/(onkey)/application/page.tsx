import React from "react";

type Props = {};
import "./application.scss";
import { FaMicrophone, FaPeopleCarryBox, FaPeopleGroup } from "react-icons/fa6";
import Link from "next/link";
import { FaPaintBrush, FaSpeakerDeck } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { GiTalk } from "react-icons/gi";
import { BiMicrophone } from "react-icons/bi";
export default function page({}: Props) {
  return (
    <main id="p_ap">
      <img src="/p/apstroke.png" alt="" className="apstroke" />
      <div className="circ l"></div>
      <div className="circ r"></div>
      <div className="title">
        <img src="/p/ap-text.png" alt="" />
      </div>

      <div className="ap-list">
        <Link
          href={"https://forms.gle/nB9ahueVkBWZ3wiC8"}
          className="ap btn btn-main"
        >
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <FaPeopleCarryBox className="icon" />
          <span>STAFF</span>
        </Link>
        <Link
          href={"https://forms.gle/TvjLjwjqj55vPg3j6"}
          className="ap btn btn-main"
        >
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <FaPeopleGroup className="icon" />
          <span>GUEST</span>
        </Link>
        <Link
          href={"https://forms.gle/J3KDCYCTqbdqGRjf6"}
          className="ap btn btn-main"
        >
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <FaMicrophone className="icon" />
          <span>PANEL</span>
        </Link>
        <Link
          href={"https://forms.gle/NFKX7y6B1NhK8zLe6"}
          className="ap btn btn-main"
        >
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <CiShop className="icon" />
          <span>BOOTH/VENDOR</span>
        </Link>
        <Link
          href={"https://forms.gle/LZBDfPHLi5QsyPL3A"}
          className="ap btn btn-main"
        >
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <FaPaintBrush className="icon" />
          <span>ARTIST ALLEY</span>
        </Link>
      </div>
    </main>
  );
}
