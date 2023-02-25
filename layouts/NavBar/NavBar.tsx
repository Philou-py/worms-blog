import Link from "next/link";
import styles from "./NavBar.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

export default function NavBar() {
  return (
    <nav className={cx("navbar")}>
      <Link href="/">Nibelungenblog</Link>
    </nav>
  );
}
