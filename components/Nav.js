import styles from "../styles/Nav.module.css";
import Link from "next/link";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className="header_container">
        <input type="checkbox" id={styles.nav_check} />
        <div className={styles.nav_header}>
          <div className={styles.nav_title}>
            <Link href="/">Tenerife Properties</Link>
          </div>
        </div>
        <div className={styles.nav_btn}>
          <label htmlFor={styles.nav_check}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className={styles.nav_links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
