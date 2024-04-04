"use client";

import Link from "next/link";
import styles from "./link.module.css";

const NavLink = ({ label, path, pathName }) => {
  return (
    <Link
      href={path}
      className={`${styles.link} ${pathName === path && styles.active}`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
