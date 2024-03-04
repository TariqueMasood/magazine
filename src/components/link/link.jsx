import Link from "next/link";
import styles from "./link.module.css";

const NavLink = ({ label, path }) => {
  return (
    <Link href={path} className={styles.link}>
      {label}
    </Link>
  );
};

export default NavLink;
