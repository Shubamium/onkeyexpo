import React, { CSSProperties } from "react";

type Props = {};
import "./guests.scss";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Guest, Media } from "@/payload-types";
function splitIntoThree(arr: Guest[]) {
  const size = Math.ceil(arr.length / 3);
  const first = arr.slice(0, size);
  const second = arr.slice(size, size * 2);
  const third = arr.slice(size * 2);
  return [first, second, third];
}
export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });
  const gt = await p.findGlobal({
    slug: "guest-text",
  });
  const gl = await p.find({
    collection: "guest",
  });

  const toRender = splitIntoThree(gl.docs);
  return (
    <main id="p_guests">
      <section id="guest">
        <img src="/d/waveguest.png" alt="" className="wavedec" />
        <div className="circ-l"></div>
        <div className="confine">
          <div className="l">
            <img src="/p/guesttext.png" alt="" className="title" />
            <RichText data={gt.text as SerializedEditorState} />
          </div>
          <div
            className="r"
            style={
              {
                "--dur": `${toRender.length * 3}s`,
              } as CSSProperties
            }
          >
            {toRender?.map((gs, i) => {
              return (
                <div className="hz" key={"Guest Set " + i}>
                  <div className="scroll">
                    {gs?.map((g, j) => {
                      return (
                        <a
                          href={g.link ?? undefined}
                          target={"_blank"}
                          className="guest btn"
                          key={g.id + `${i} + ${j} set 1`}
                        >
                          <p className="pn"> {g.name}</p>
                          <img
                            src={(g.image as Media)?.url ?? undefined}
                            alt=""
                          />
                        </a>
                      );
                    })}
                  </div>
                  <div className="scroll">
                    {gs?.map((g, j) => {
                      return (
                        <a
                          href={g.link ?? undefined}
                          target={"_blank"}
                          className="guest btn"
                          key={g.id + `${i} + ${j} set 2`}
                        >
                          <p className="pn"> {g.name}</p>
                          <img
                            src={(g.image as Media)?.url ?? undefined}
                            alt=""
                          />
                        </a>
                      );
                    })}
                  </div>
                  <div className="scroll">
                    {gs?.map((g, j) => {
                      return (
                        <a
                          href={g.link ?? undefined}
                          target={"_blank"}
                          className="guest btn"
                          key={g.id + `${i} + ${j} set 3`}
                        >
                          <p className="pn"> {g.name}</p>
                          <img
                            src={(g.image as Media)?.url ?? undefined}
                            alt=""
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {/* <div className="hz">
              <div className="scroll">
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
              </div>
              <div className="scroll">
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
              </div>
            </div>
            <div className="hz">
              <div className="scroll">
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
              </div>
              <div className="scroll">
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
                <a href="" className="guest btn">
                  <p className="pn"> Person Name</p>
                  <img src="/g/sample-guest.png" alt="" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <div className="guest-list">
        <img src="/p/agtext.png" alt="" className="title" />
        <div className="gl">
          {gl.docs?.map((g, j) => {
            return (
              <a
                href={g.link ?? undefined}
                className="guest btn"
                target="_blank"
                key={g.id + `${j} all list`}
              >
                {/* <p className="pn"> {g.name}</p> */}
                <img src={(g.image as Media)?.url ?? undefined} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
