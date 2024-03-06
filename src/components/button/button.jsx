"use client";

import styles from "./button.module.css";

function MgButton({ style, children, className }) {
  return (
    <button className={`${styles.btnPrimary} ${className}`} style={style}>
      {children}
    </button>
  );
}

export default MgButton;
