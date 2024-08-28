import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature/page";
import styles from './page.module.css';

const Features = () => {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className="container">
        <div className={styles.grid}>
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
