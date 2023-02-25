import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Weihnachtsmarkt.module.scss";
import cn from "classnames/bind";
import hutImg from "../../public/articles/weihnachtsmarkt/hütte.jpeg";
import treeMetzImg from "../../public/articles/weihnachtsmarkt/baum_metz.jpg";
import treeWormsImg from "../../public/articles/weihnachtsmarkt/baum_worms.jpg";
import NavBar from "../../layouts/NavBar";

const cx = cn.bind(styles);

export default function Weihnachtsmarkt() {
  return (
    <>
      <Head>
        <title>Wormser Weihnachtsmarkt - Nibelungenblog</title>
        <meta
          name="description"
          content="Willkommen zum Worms-Blog, wo Sie die Antworten auf alle Fragen finden, die Sie sich über diese Stadt je gefragt haben!"
        />
      </Head>
      <NavBar />
      <article className={cx("weihnachtsmarkt-article")}>
        <header>
          <h1>Der Weihnachtsmarkt von Worms</h1>
        </header>
        <h2>Wie ist der Weihnachtsmarkt in Worms?</h2>
        <div className={cx("clearfix")}>
          <p>
            <Image src={hutImg} alt="" className={cx("hut-img")} />
            In Worms hatten wir die Gelegenheit und das Glück, der Weihnachtsmarkt zu besichtigen.
            Dieser befindet sich nicht auf einem einzelnen Platz, wie man erwarten könnte. Im
            Gegenteil: viele Häuschen in der ganzen Fußgängerzone des Stadtzentrums sind verteilt.
            So ist man ständig in der Weihnachtsstimmung eingeschlossen und kann jederzeit ein Glass
            Glühwein genießen, handgemachter Weihnachtsschmuck betrachten oder auch
            Schokoladenspezialitäten kosten. Wie angenehm es ist, einfach durch diesen magischen Ort
            zu spazieren! Zudem finden am Abend am Obermarkt mehrere exklusive Weihnachtskonzerte
            und ein ganzes Bühnenprogramm statt, was sehr gefällig war.
          </p>
        </div>
        <p>
          Wichtig zu unterstreichen ist es, dass dieser Weihnachtsmarkt, wie die Stadt selbst, von
          den Nibelungen stark geprägt ist: Deshalb wird er auch „Nibelungen Weihnachtsmarkt“
          genannt. Das trägt dazu bei, dass die Touristen mehr über die Geschichte dieses ehemaligen
          Volks lernen wollen, genauso wie uns! Man könnte sich vorstellen, dass alle Güter dieses
          Markts einzelne Teile des verlorenen Schatzes darstellen. Außerdem haben wir erfahren,
          dass Workshops organisiert werden, wo Kinder die Möglichkeit geboten wird, einige
          Skulpturen und Gravuren selbst zu erstellen.
        </p>
        <p>
          Als wir über den Weihnachtsmarkt wandern, fragten wir mehrere Leute nach ihrer Meinung
          über den Weihnachtsmarkt. Eine Person, die Pralinen verkaufte, erzählte uns, dass sie
          letztes Jahr auf dem Frankfurter Weihnachtsmarkt gewesen war und dass sie diesen hier
          schöner fand. Deshalb waren wir sehr froh, weil der Weihnachtsmarkt von Worms uns sehr gut
          gefallen hat.
        </p>
        <h2>Ist er so schön wie der Weihnachtsmarkt von Metz?</h2>
        <p>
          Beide Weihnachtsmärkte, in Worms und in Metz, fanden wir wunderschön. In Worms aber haben
          wir bemerkt, dass die Stimmung etwas festlicher war, weil zahlreiche lokale Einwohner in
          dieser Zeitperiode eingesetzt waren: viele Häuser hatten vor den Fenstern zum Beispiel
          Lichterkette aufgehängt. Ein weiterer Unterschied lag auch daran, dass der Markt ein
          wichtiger Ort zum Treffen wird, dank der regelmäßigen Spezialereignisse und Konzerte.
        </p>
        <p>
          Abgesehen davon bietet der Weihnachtmarkt in Metz eine breitere Auswahl an Objekte und
          Dekoration, die immer das eigene Haus schöner und freundlicher macht. Das hängt
          wahrscheinlich von der Bevölkerungsanzahl ab, da Worms relativ klein in Vergleich zu Metz
          ist. Als Beispiel dazu kann man eine sehr beliebte und erkennbare Pyramide hervorheben,
          das sich in kleine Weihnachtshäuschen in Miniaturformat spezialisiert – sie sind dank
          ihrer Figuren in Bewegung von allen Besuchern bewundert.
        </p>
        <div className={cx("clearfix")}>
          <p>
            <span className={cx("two-trees")}>
              <div className={cx("img-container")}>
                <Image src={treeWormsImg} alt="" className={cx("tree-worms-img")} />
              </div>
              <div className={cx("img-container")}>
                <Image src={treeMetzImg} alt="" className={cx("tree-metz-img")} />
              </div>
            </span>
            In Metz (rechts), genauso wie in Worms (links), wurde ein riesiger Weihnachtsbaum
            errichtet, der nachts angeleuchtet wird. Die zauberhafte Beleuchtung dank der
            Lichterketten ist einfach wunderschön – bei der Besichtigung des Markts soll man es
            unbedingt nicht verpassen! Die Besonderheit des Weihnachtsbaums in Metz, die nicht
            unbedingt auffallend ist, liegt aber darin, dass er eigentlich aus einer Vielzahl an
            kleinen Bäumen besteht!
          </p>
        </div>
      </article>
    </>
  );
}
