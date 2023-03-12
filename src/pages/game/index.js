import Head from "next/head";
import Image from "next/image";
import "nes.css/css/nes.min.css";
import ts1 from "@/images/ts1_home.png";

export default function GameHome() {
  return (
    <>
      <Head>
        <title>템플스테이를 물어봐</title>
        <link rel="icon" href="/favcon.ico" />
      </Head>

      <main style={{ fontFamily: "PressStart2P, DungGeunMo" }}>
        <div
          style={{
            height: "-webkit-fill-available",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <div style={{ height: "70%" }}>
            <Image src={ts1} layout="fill" objectFit="contain"></Image>
          </div>
          <div style={{ height: "30%" }}>
            <section className="nes-container with-title is-dark">
              <h3 className="title"></h3>
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                {" "}
                템플스테이는 지루한가요?
              </span>

              <div
                id="radios"
                className="item"
                style={{ backgroundColor: "#212529", padding: "1rem 0" }}
              >
                <label>
                  <input
                    type={"radio"}
                    className="nes-radio is-dark"
                    name="answer"
                    checked
                  />
                  <span>Yes</span>
                  <input
                    type={"radio"}
                    className="nes-radio is-dark"
                    name="answer"
                  />
                  <span>No</span>
                </label>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
