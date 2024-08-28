"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

const CursorAnimation = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = styles["custom-cursor"];
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      cursorRef.current?.classList.add(styles.hover);
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove(styles.hover);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (cursorRef.current) {
        document.body.removeChild(cursorRef.current);
        cursorRef.current = null;
      }
    };
  }, []);

  return null;
};

export default CursorAnimation;
