import img1 from "../public/schlossplatz.jpg";
import img2 from "../public/dom-st-peter.jpg";
import img3 from "../public/nibelungenturm.jpg";
import img4 from "../public/domplatz.jpg";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <Head>
        <title>Worms Blog - Startseite</title>
        <meta
          name="description"
          content="Willkommen zum Worms-Blog, wo Sie die Antworten auf alle Fragen finden, die Sie sich über diese Stadt je gefragt haben!"
        />
      </Head>
      <main className={cx("main-content")}>
        <div className={cx("presentation")}>
          <div className={cx("title-section")}>
            <h1 className={cx("title")}>Worms am Rhein, die Nibelungenstadt</h1>
            <h2 className={cx("subtitle")}>
              Entdecken Sie unsere Sammlung von Artikeln über diese Stadt.
            </h2>
            <a className={cx("button")} style={{ marginTop: 30 }} href="#articles">
              Weiter lesen!
            </a>
          </div>
          <div className={cx("images")}>
            <div className={cx("img-section")}>
              <div className={cx("img-container")}>
                <Image src={img1} className={cx("img")} fill alt="" />
              </div>
              <div className={cx("img-container")}>
                <Image src={img2} className={cx("img")} fill alt="" />
              </div>
            </div>
            <div className={cx("img-section")}>
              <div className={cx("img-container")}>
                <Image src={img3} className={cx("img")} fill alt="" />
              </div>
              <div className={cx("img-container")}>
                <Image src={img4} className={cx("img")} fill alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr style={{ border: "1px dashed #0C1F35" }} />
        <h2 className={cx("articles")} id="articles">
          Alle Artikel
        </h2>
      </main>
    </>
  );
}
