import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleList.module.scss";
import classNames from "classnames/bind";
import markt_eingang from "../../public/articles/weihnachtsmarkt/markt_eingang.jpg";

const cx = classNames.bind(styles);

export default function ArticleList() {
  return (
    <section className={cx("articles")}>
      <WeihnachtsmarktCard />
    </section>
  );
}

function WeihnachtsmarktCard() {
  return (
    <div className={cx("weihnachtsmarkt-card")}>
      <div className={cx("img-container")}>
        <Image className={cx("thumbnail")} alt="" src={markt_eingang} fill />
      </div>
      <div className={cx("article-summary")}>
        <h2>Wormser Weinachtsmarkt</h2>
        <p>
          Menschen kommen aus nah und fern, um den Weinachtsmarkt Worms zu besichtigen. Warum ist er
          so beliebt?
        </p>
        <div style={{ textAlign: "center" }}>
          <Link href="/articles/Weihnachtsmarkt" className={cx("read-more")}>
            Weiter lesen...
          </Link>
        </div>
      </div>
    </div>
  );
}
