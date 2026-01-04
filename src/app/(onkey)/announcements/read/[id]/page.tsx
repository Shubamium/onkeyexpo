import Link from "next/link";
import React from "react";
import { FaArrowLeftLong, FaCalendar } from "react-icons/fa6";

import "./read.scss";
import payloadConfig from "@/payload.config";
import { getPayload, Where } from "payload";
import { AnnouncementCategory, Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
export default async function AnnReadPage({ params }: Props) {
  const param = await params;
  const id = param.id;

  const payload = await getPayload({
    config: await payloadConfig,
  });

  const announcement = await payload.find({
    collection: "announcements",
    where: {
      slug: {
        equals: id,
      },
    } as Where,
  });
  if (announcement.docs.length === 0) return <div>404 Not Found</div>;

  const nd = announcement.docs[0];
  return (
    <main id="p_read">
      <div className="confine">
        <div className="controls">
          <Link className="btn btn-back" href="/announcements">
            <FaArrowLeftLong /> <span>BACK</span>
          </Link>
        </div>
        <div className="banner">
          <img
            src={(nd.banner as Media).url ?? undefined}
            alt=""
            className="banner-img"
          />
        </div>

        <div className="titles">
          <h2>{nd.title}</h2>
          <div className="info">
            {nd.date && (
              <p className="date">
                <FaCalendar /> <span>{new Date(nd.date).toDateString()}</span>
              </p>
            )}
            <p className="cat">
              {" "}
              {(nd.category as AnnouncementCategory).name}{" "}
            </p>
          </div>
        </div>

        <article>
          <RichText data={nd.content as SerializedEditorState} />
        </article>
      </div>
    </main>
  );
}
