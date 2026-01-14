import React from "react";

import "./announcements.scss";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowRightCircle, BsCalendarDate } from "react-icons/bs";
import { CgCalendar } from "react-icons/cg";
import {
  BiCalendarAlt,
  BiCalendarCheck,
  BiCalendarEvent,
} from "react-icons/bi";
import { getPayload, Where } from "payload";
import payloadConfig from "@/payload.config";
import { Announcement, AnnouncementCategory, Media } from "@/payload-types";
import Link from "next/link";
import AnnCategorySelector from "./AnnCategorySelector";
import { equal } from "assert";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = {
  searchParams: Promise<{
    c?: string;
  }>;
};

export default async function page({ searchParams }: Props) {
  const sp = await searchParams;
  const cat = sp?.c;

  const payload = await getPayload({
    config: await payloadConfig,
  });

  const catFilter: Where = cat
    ? {
        "category.slug": {
          equals: cat,
        },
      }
    : {};
  console.log(catFilter);
  const announcements = await payload.find({
    collection: "announcements",
    limit: 5,
    where: catFilter,
  });
  const categories = await payload.find({
    collection: "announcement-category",
  });
  const hl = await payload.findGlobal({
    slug: "announcementglobal",
  });

  const hll = hl.hl_l as Announcement;
  const hlr = hl.hl_r as Announcement;

  return (
    <main id="p_announcement">
      <div className="circ l"></div>
      <div className="circ r"></div>
      <section className="an-title">
        <img src="/p/anntext.png" alt="" className="pt" />
        <RichText data={hl.text as SerializedEditorState}></RichText>
      </section>
      <section id="an-hl">
        <div className="panel">
          <div className="l">
            {hl.hl_l && (
              <div className="news-hl">
                <img
                  src={(hll.banner as Media).url ?? undefined}
                  alt=""
                  className="banner"
                />
                <h2>{hll.title}</h2>
                <div className="category">
                  <p className="c">
                    {(hll.category as AnnouncementCategory).name}
                  </p>
                </div>
                <p className="minidesc">{hll.shortdesc}</p>

                <Link
                  href={`/announcements/read/${hll.slug}`}
                  className=" btn-next"
                >
                  <span>VIEW MORE</span>
                  <img src="/d/longarr.svg" alt="" className="arr" />
                </Link>
              </div>
            )}
          </div>
          <div className="r">
            <img src="/p/highlights.png" alt="" className="hl-h" />
            {hl.hl_r && (
              <div className="news-hl">
                <img
                  src={(hlr.banner as Media).url ?? undefined}
                  alt=""
                  className="banner"
                />
                <h2>{hlr.title}</h2>
                <div className="category">
                  <p className="c">
                    {(hlr.category as AnnouncementCategory).name}
                  </p>
                </div>
                <p className="minidesc">{hlr.shortdesc}</p>

                <Link
                  href={`/announcements/read/${hlr.slug}`}
                  className=" btn-next"
                >
                  <span>VIEW MORE</span>
                  <img src="/d/longarr.svg" alt="" className="arr" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
<></>
      <section id="an-nl">
        <AnnCategorySelector acat={cat} cats={categories.docs} />
        <div className="news-list">
          {announcements?.docs?.map((ann) => {
            return (
              <div className="news" key={ann.id}>
                <img
                  src={(ann.banner as Media).url ?? undefined}
                  alt=""
                  className="banner"
                />
                <div className="r">
                  <div className="details">
                    <h2>{ann.title}</h2>
                    <div className="category">
                      {ann.date && (
                        <p className="date">
                          <CgCalendar /> {new Date(ann.date).toDateString()}
                        </p>
                      )}
                      <p className="c">
                        {(ann.category as AnnouncementCategory).name ??
                          undefined}
                      </p>
                    </div>
                    <p className="minidesc">{ann.shortdesc}</p>
                  </div>
                  <div className="action">
                    <Link
                      href={`/announcements/read/${ann.slug}`}
                      className="btn-rm"
                    >
                      <span>READ MORE</span>
                      <BsArrowRightCircle />
                      {/* <img src="/d/longarr.svg" alt="" className="arr" /> */}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          {announcements?.docs?.length === 0 && (
            <div className="empty">
              <p>No announcements found!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
