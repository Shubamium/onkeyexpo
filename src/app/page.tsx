import "./home.scss";
export default function Home() {
  return (
    <main id={"p_home"}>
      <section id="hero">
        <div className="center">
          <div className="bcard"></div>
          <div className="bcard b"></div>
          <div className="bcard c"></div>
          <div className="content">
            <img src="/p/hero-text.png" alt="" className="text" />
            <p className="desc">
              (placeholder?) <strong> OnKey Expo</strong> is a{" "}
              <strong>VTuber-centered </strong>
              convention focused on creators, fans, tech, and industry
              collaboration. With panels, performances, cosplay, anime,
              networking events, and cutting-edge showcases, it’s built by and
              for the community
            </p>
            <a href="#about" className="btn btn-main">
              {" "}
              Call to Action !
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="bunny" />
        <div className="confine">
          <div className="l">
            <img src="/g/logo.png" alt="" className="logo" />
            <img src="/b/bg-cebun.png" alt="" className="cebun" />
            <div className="desc">
              <p>
                OnKey Expo is a <strong>VTuber-centered convention</strong>{" "}
                focused on creators, fans, tech, and industry collaboration.
                With panels, performances, cosplay, anime, networking events,
                and cutting-edge showcases, it’s built by and for the community.{" "}
              </p>
              <p>
                Whether you’re a VTuber, a fan, or a curious newcomer, OnKey is
                your gateway to the virtual frontier.
              </p>
            </div>
          </div>
          <div className="r">
            <img src="/g/mascot1.png" alt="" />
          </div>
        </div>
      </section>
      <section id="trailer-location">
        <div className="confine">
          <div className="l">
            <img src="/g/b1.png" alt="" className="b" />
            <iframe
              src="https://www.youtube-nocookie.com/embed/tZdRDlOELWU"
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5873.609862166509!2d-70.96606182537606!3d42.60188208074829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e311b191fd7f39%3A0x93b130a9d7e77f4!2sDoubleTree%20by%20Hilton%20Hotel%20Boston%20North%20Shore!5e0!3m2!1sen!2sid!4v1762975955664!5m2!1sen!2sid"
                  ></iframe>
                </div>
              </div>
            </div>
            <p className="date">
              Coming to <strong>Danvers, MA – November 20-22,</strong>{" "}
            </p>
            <p className="addr">
              DoubleTree by Hilton – 50- Ferncroft Rd, Danvers, MA
            </p>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="confine">
          <div className="l">
            <img src="/p/teamtext.png" alt="" />
            <img src="/b/bg-cebun.png" alt="" className="cebun" />
            <p>
              (Placeholder)OnKey Expo is a VTuber-centered convention focused on
              creators, fans, tech, and industry collaboration. With panels,
              performances, cosplay, anime, networking events, and cutting-edge{" "}
            </p>
          </div>

          <div className="r">
            <img src="/p/team-img.png" alt="" />
          </div>
        </div>
      </section>

      <section id="partner">
        <div className="title">
          <img src="/p/partner-text.png" alt="" className="img" />
        </div>
        <div className="scroller">
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
          </div>
        </div>
      </section>
    </main>
  );
}
