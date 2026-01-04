"use client";
import { MerchCategory } from "@/payload-types";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFilter } from "react-icons/fa";
type Props = {
  merchcat: MerchCategory[];
};

export default function MerchFilter({ merchcat }: Props) {
  const router = useRouter();
  return (
    <div className="category">
      <FaFilter className="ficon" />
      <select
        name="category"
        id="cat"
        className="category-selection"
        onChange={(e) => {
          if (e.target.value == "") {
            router.replace("/merch");
          } else {
            router.replace("/merch?c=" + e.target.value);
          }
        }}
      >
        <option value=""> All Category</option>
        {merchcat?.map((c) => {
          return (
            <option key={c.id} value={c.slug}>
              {c.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
