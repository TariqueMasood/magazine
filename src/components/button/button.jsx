"use client";

import styles from "./button.module.css";

function MgButton({ style, children }) {
  return (
    <button className={styles.btnPrimary} style={style}>
      {children}
    </button>
  );
}

export default MgButton;
