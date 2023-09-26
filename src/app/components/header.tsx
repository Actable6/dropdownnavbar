"use client";

import styles from "./header.module.css";
import { Collapse } from "react-collapse";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 onClick={toggle}>Click</h1>

        <h1>The rest of the header items here</h1>
      </div>

      <hr className={styles.line} />

      <Collapse isOpened={open}>
        <div className={styles.dropdown}>
          <h1>This is the dropdown menu</h1>
          <h1 className={styles.text}>some text</h1>
          <h1>some more text</h1>
        </div>
      </Collapse>
    </div>
  );
}
