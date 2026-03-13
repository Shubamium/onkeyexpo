"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  initTheme: string;
};

export default function AfterDarkSwitch({ initTheme }: Props) {
  const [activeTheme, setActiveTheme] = useState<"afterdark" | "onkey">(
    (initTheme as "afterdark" | "onkey") ?? "onkey",
  );
  const router = useRouter();

  const switchTheme = async (route: string) => {
    const newTheme = activeTheme === "onkey" ? "afterdark" : "onkey";

    // if (newTheme === "onkey") {
    //   document.documentElement.classList.remove("afterdark");
    // } else {
    //   document.documentElement.classList.add("afterdark");
    // }
    await fetch(`/${newTheme}`, { method: "GET" });
    router.refresh();
    // setTimeout(() => {
    //   router.push(route);
    // }, 100);
  };

  return (
    <button
      id="switch"
      className={`${activeTheme === "afterdark" ? "active" : ""}`}
      onClick={() => {
        if (activeTheme === "afterdark") {
          setActiveTheme("onkey");
          switchTheme("/onkey");
        } else {
          setActiveTheme("afterdark");
          switchTheme("/afterdark");
        }
        // setBtn(!btn);
      }}
    >
      {" "}
      <span>AFTER DARK</span>
      <div className="switcher"></div>
    </button>
  );
}
