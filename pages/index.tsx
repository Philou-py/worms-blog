// import img1 from "../public/schlossplatz.jpg";
// import img2 from "../public/dom-st-peter.jpg";
// import img3 from "../public/nibelungenturm.jpg";
// import img4 from "../public/domplatz.jpg";
import landscapeImg from "../public/landscape-img.jpg";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import classNames from "classnames/bind";
import ArticleList from "../layouts/ArticleList";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <Head>
        <title>Nibelungenblog - Startseite</title>
        <meta
          name="description"
          content="Willkommen zum Worms-Blog, wo Sie die Antworten auf alle Fragen finden, die Sie sich über diese Stadt je gefragt haben!"
        />
      </Head>
      <div className={cx("presentation")}>
        <div className={cx("img-container")}>
          <Image src={landscapeImg} className={cx("img")} fill alt="Die Stadt von Worms" />
        </div>
        <h1 className={cx("title")}>Worms am Rhein, die Nibelungenstadt</h1>
        <h2 className={cx("subtitle")}>
          <span>Entdecken Sie unsere Sammlung von Artikeln über diese Stadt.</span>
          <a href="#articles">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              className={cx("down-arrow-svg")}
            >
              <path d="M480 856 240 616l42-42 198 198 198-198 42 42-240 240Zm0-253L240 363l42-42 198 198 198-198 42 42-240 240Z" />
            </svg>
          </a>
        </h2>
      </div>
      <hr style={{ border: "1px dashed #0C1F35" }} />
      <h2 className={cx("articles-title")} id="articles">
        Alle Artikel
      </h2>
      <ArticleList />
    </>
  );
}
