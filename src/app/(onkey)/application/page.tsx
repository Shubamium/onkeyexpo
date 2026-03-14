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
import { DataFromGlobalSlug, getPayload, GlobalSlug } from "payload";
import payloadConfig from "@/payload.config";
import { GetTheme } from "@/app/util/Theme";
import { Application } from "@/payload-types";
export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const theme = await GetTheme();
  // if(theme === "afterdark") ad =
  let slug = theme === "afterdark" ? "ad-application" : "application";
  let ad = (await p.findGlobal({
    slug: slug as GlobalSlug,
  })) as Application;

  return (
    <main id="p_ap" className={theme}>
      <img src="/p/apstroke.png" alt="" className="apstroke premade" />
      <div className="circ l"></div>
      <div className="circ r"></div>
      <div className="title premade">
        <img src="/p/ap-text.png" alt="" />
      </div>

      <div className="ap-list">
        <a href={ad.staff ?? undefined} className="ap btn btn-main">
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <FaPeopleCarryBox className="icon" />
          <span>STAFF</span>
        </a>
        <a href={ad.guest ?? undefined} className="ap btn btn-main">
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <FaPeopleGroup className="icon" />
          <span>GUEST</span>
        </a>
        <a href={ad.panel ?? undefined} className="ap btn btn-main">
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <FaMicrophone className="icon" />
          <span>PANEL</span>
        </a>
        <a href={ad.booth ?? undefined} className="ap btn btn-main">
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <CiShop className="icon" />
          <span>BOOTH/VENDOR</span>
        </a>
        <a href={ad.artist ?? undefined} className="ap btn btn-main">
          <img src="/g/b1.png" alt="" className="db" />
          <img src="/d/apheart.png" alt="" className="h" />
          <FaPaintBrush className="icon" />
          <span>ARTIST ALLEY</span>
        </a>
      </div>
    </main>
  );
}
