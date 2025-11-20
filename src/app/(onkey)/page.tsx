import { getPayload } from "payload";
import "./home.scss";
import payloadConfig from "@/payload.config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Media } from "@/payload-types";
import { CSSProperties } from "react";
import BunList from "./BunList";

export default async function Home() {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const hd = await p.findGlobal({
    slug: "home",
  });

  const pt = await p.find({
    collection: "partners",
    limt: 0,
  });

  const ptl = pt.docs;

  return (
    <main id={"p_home"}>
      <section id="hero">
        <div className="center">
          <div className="bcard"></div>
          <div className="bcard b"></div>
          <div className="bcard c"></div>
          <div className="content">
            <BunList />
            <img src="/p/hero-text2.png" alt="" className="text" />
            <img src="/p/hero-textm.png" alt="" className="text mobile" />
            <p className="desc">
              {/* (placeholder?) <strong> OnKey Expo</strong> is a{" "}
              <strong>VTuber-centered </strong>
              convention focused on creators, fans, tech, and industry
              collaboration. With panels, performances, cosplay, anime,
              networking events, and cutting-edge showcases, it’s built by and
              for the community */}
              {hd["hero-description"]}
            </p>
            <a href="#about" className="btn btn-main">
              {" "}
              {/* Call to Action ! */}
              {hd["call-to-action"]}
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="bunny" />
        <div className="circ l"></div>
        <div className="circ r"></div>
        <div className="confine">
          <div className="l">
            <img src="/g/logo.png" alt="" className="logo" />
            <img src="/b/bg-cebun.png" alt="" className="cebun" />
            <div className="desc">
              <p>
                OnKey Expo is a <strong>VTuber-centered convention</strong>{" "}
                focused on creators, fans, tech, and industry collaboration.
                With panels, performances, cosplay, anime, networking events,
                and cutting-edge showcases, it’s built by and for the
                community.{" "}
              </p>
              <p>
                Whether you’re a VTuber, a fan, or a curious newcomer, OnKey is
                your gateway to the virtual frontier.
              </p>
            </div>
          </div>
          <div className="r">
            <img src="/g/chibi.webp" alt="" />
          </div>
        </div>
      </section>
      <section id="trailer-location">
        <div className="confine">
          <img src="/p/ableft.png" alt="" className="left" />
          <img src="/g/b2.png" alt="" className="right" />
          <div className="l">
            <img src="/g/b1.png" alt="" className="b" />
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${hd.trailer}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p>
              Come meet your oshi, connect with fellow fans, and experience the
              next evolution in digital entertainment.
            </p>
          </div>
          <div className="r">
            <img src="/g/b1.png" alt="" className="b" />

            <div className="map">
              <div className="embed-map-fixed">
                <div className="embed-map-container">
                  <iframe
                    className="embed-map-frame"
                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5873.609862166509!2d-70.96606182537606!3d42.60188208074829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e311b191fd7f39%3A0x93b130a9d7e77f4!2sDoubleTree%20by%20Hilton%20Hotel%20Boston%20North%20Shore!5e0!3m2!1sen!2sid!4v1762975955664!5m2!1sen!2sid"
                    src={hd.map ?? "https://google.com"}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="date">
              {/* Coming to <strong>/Danvers, MA – November 20-22,</strong>{" "} */}
              <RichText data={hd.dates as SerializedEditorState}></RichText>
            </div>
            <p className="addr">{hd.address}</p>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="confine">
          <div className="l">
            <img src="/p/teamtext2.png" alt="" className="title" />
            <img src="/b/bg-cebun.png" alt="" className="cebun" />
            <p>{hd.team}</p>
          </div>

          <div className="r">
            <img src="/p/team2.webp" alt="" />
          </div>
        </div>
      </section>

      <section id="partner">
        <div className="title">
          <img src="/p/partner-text2.png" alt="" className="img" />
          <img src="/p/partner-textm.png" alt="" className="img mobile" />
        </div>
        <div className="scroller">
          <div
            className="scroll"
            style={
              {
                "--dur": `${ptl.length * 3}s`,
              } as CSSProperties
            }
          >
            {ptl?.map((p) => {
              return (
                <a
                  href={p.link ?? undefined}
                  className="btn"
                  key={p.id + "scroll1"}
                >
                  <img
                    src={(p.logo as Media)?.url ?? undefined}
                    alt=""
                    className="pt"
                  />
                </a>
              );
            })}
          </div>
          <div
            className="scroll"
            style={
              {
                "--dur": `${ptl.length * 3}s`,
              } as CSSProperties
            }
          >
            {ptl?.map((p) => {
              return (
                <a
                  href={p.link ?? undefined}
                  className="btn"
                  key={p.id + "scroll2"}
                >
                  <img
                    src={(p.logo as Media)?.url ?? undefined}
                    alt=""
                    className="pt"
                  />
                </a>
              );
            })}
          </div>
          <div
            className="scroll"
            style={
              {
                "--dur": `${ptl.length * 3}s`,
              } as CSSProperties
            }
          >
            {ptl?.map((p) => {
              return (
                <a
                  href={p.link ?? undefined}
                  className="btn"
                  key={p.id + "scroll3"}
                >
                  <img
                    src={(p.logo as Media)?.url ?? undefined}
                    alt=""
                    className="pt"
                  />
                </a>
              );
            })}
          </div>
          {/* <div className="scroll">
            <a href="#" className="btn">
              <img src="/g/partner-sample.png" alt="" className="pt" />
            </a>
            <a href="#" className="btn">
              <img src="/g/partner-sample.png" alt="" className="pt" />
            </a>
            <a href="#" className="btn">
              <img src="/g/partner-sample.png" alt="" className="pt" />
            </a>
            <a href="#" className="btn">
              <img src="/g/partner-sample.png" alt="" className="pt" />
            </a>
          </div>
          <div className="scroll">
            <a href="#" className="btn">
              <img src="/g/partner-sample.png" alt="" className="pt" />
            </a>
            <a href="#" className="btn">
              <img src="/g/partner-sample.png" alt="" className="pt" />
            </a>
            <a href="#" className="btn">
              <img src="/g/partner-sample.png" alt="" className="pt" />
            </a>
            <a href="#" className="btn">
              <img src="/g/partner-sample.png" alt="" className="pt" />
            </a>
          </div> */}
        </div>
      </section>
    </main>
  );
}
