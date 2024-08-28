"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";
import styles from './page.module.css';

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={`${styles.section} ${styles.sectionMd} ${styles.sectionLg}`}>
      <div className={styles.container}>
        <SectionTitle
          title="Meet the opencv university ecosystem"
          paragraph="Build intuition for creating real-life applications with a blend of foundational, experiential and practical learning."
          center
          mb={styles.sectionTitle}
        />

        <div className={`${styles.videoWrapper}`} data-wow-delay=".15s">
          <div className={styles.videoInner}>
            <Image src="/videobc.jpg" alt="video image" fill />
            <div className={styles.videoPlayButtonWrapper}>
              <button
                aria-label="video play button"
                onClick={() => setOpen(true)}
                className={styles.videoPlayButton}
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  className="fill-current"
                >
                  <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="bTVcro0U7yk"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default Video;
