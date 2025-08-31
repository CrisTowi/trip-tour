"use client";
import { useState } from "react";
import styles from "./AccordionMenu.module.css";

interface AccordionMenuProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

export default function AccordionMenu({ items }: AccordionMenuProps) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div onClick={() => setActiveIndex(index)} className={styles.accordionItemTitle}>{item.title}</div>
          {activeIndex === index && <div className={styles.accordionItemContent}>{item.content}</div>}
        </div>
      ))}
      <div onClick={() => setActiveIndex(-1)} className={styles.accordionItemClose}>Close</div>
    </div>
  );

}