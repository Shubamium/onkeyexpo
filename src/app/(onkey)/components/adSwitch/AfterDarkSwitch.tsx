"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TbRating18Plus } from "react-icons/tb";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [ageModal, setAgeModal] = useState(false);
  const setDarkTheme = () => {
    setAgeModal(false);
    switchTheme("/afterdark");
    setTimeout(() => {
      setActiveTheme("afterdark");
    }, 300);
  };
  return (
    <>
      <button
        id="switch"
        className={`${activeTheme === "afterdark" ? "active" : ""}`}
        onClick={() => {
          if (activeTheme === "afterdark") {
            setActiveTheme("onkey");
            switchTheme("/onkey");
          } else {
            setAgeModal(true);
          }
          // setBtn(!btn);
        }}
      >
        {" "}
        <span>AFTER DARK {ageModal}</span>
        <div className="switcher"></div>
      </button>
      {mounted &&
        createPortal(
          <div className={` age-modal ${ageModal ? "act" : "closed"}`}>
            <div className="panel">
              <div className="textpart">
                <TbRating18Plus />
                <h2>Age Verification</h2>
                <p>
                  OnKey After Dark may contain content intended for adults. By
                  clicking confirm, you confirm that you are 18 years of age or
                  older (or the legal age of majority in your location).
                </p>
              </div>

              <div className="action">
                <button className="btn btn-main con" onClick={setDarkTheme}>
                  CONFIRM
                </button>
                <button
                  className="btn btn-main can"
                  onClick={() => {
                    setAgeModal(false);
                  }}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
