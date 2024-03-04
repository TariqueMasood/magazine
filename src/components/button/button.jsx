"use client";

import styles from "./button.module.css";

function MgButton({ children }) {
  return <button className={styles.btnPrimary}>{children}</button>;
}

export default MgButton;
