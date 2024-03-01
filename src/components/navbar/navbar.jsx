import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import searchIcon from "../../../public/images/search-icon.svg";
import styles from "./navbar.module.css";
import Link from "next/link";
import NavList from "../nav-list/nav-list";
import NavLink from "../link/link";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            <Image src={logo} alt="logo" fill />
          </Link>
          <nav className={styles.navbar}>
            <NavList />
          </nav>
          <div className={styles.searcBar}>
            <div>Find</div>
            <form action="#">
              <Image width={13} height={13} src={searchIcon} alt="icon" />
            </form>
            <div className={styles.border}></div>
            <NavLink label="Advertise" path="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
