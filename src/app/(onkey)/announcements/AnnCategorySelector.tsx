"use client";
import { AnnouncementCategory } from "@/payload-types";
import Link from "next/link";
import React from "react";

type Props = {
  cats: AnnouncementCategory[];
  acat?: string;
};

export default function AnnCategorySelector({ acat, cats }: Props) {
  return (
    // <div>AnnCategorySelector</div>
    <div className="catlist">
      <Link
        scroll={false}
        href={"/announcements"}
        className={`btn btn-cat ${!acat ? "act" : ""}`}
      >
        Latest
      </Link>
      {cats?.map((c, i) => {
        return (
          <Link
            href={`/announcements?c=${c.slug}`}
            scroll={false}
            key={i}
            className={`btn btn-cat ${acat === c.slug ? "act" : ""}`}
          >
            {c.name}
          </Link>
        );
      })}
    </div>
  );
}
