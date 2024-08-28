"use client";

import { Feature } from "@/types/feature";
import Image from "next/image";
import styles from './page.module.css';
import { useState } from 'react';

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, title, paragraph } = feature;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Truncate paragraph if not expanded
  const displayParagraph = isExpanded ? paragraph : paragraph.substring(0, 50) + '...';

  return (
    <div className={styles.container}>
      <div className={styles.fadeInUp}>
        <div className={styles.iconContainer}>
          <Image src={image} alt={title} width={200} height={200} />
        </div>
        <div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.paragraph}>
            {displayParagraph}
            {paragraph.length > 100 && !isExpanded && (
              <button onClick={toggleExpand} className={styles.learnMore}>Learn More</button>
            )}
            {isExpanded && (
              <button onClick={toggleExpand} className={styles.learnMore}>Show Less</button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
