import Link from "next/link";
import styles from './page.module.css';
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
      <h1 className={styles.title}>
      Co<span className={styles.pixelify}>d</span>e, 
          Crea<span className={styles.pixelify}>t</span>e, 
          and le<span className={styles.pixelify}>e</span>arn 
      </h1>
      <h2 className={styles.title_sm}>W<span className={styles.pixelify}>r</span>ite <span className={styles.title_spc}>B<span className={styles.pixelify}>log</span>s</span>  wi<span className={styles.pixelify}>t</span>h Op<span className={styles.pixelify}>e</span>ncv <span className={styles.pixelify}>U</span>niversity</h2>
        <p className={styles.text}>
        Boost your career by writing for OpenCV University. Share your insights on AI and computer vision, and become a opencv university blog writer certification.Connect with a global audience of tech professionals.
        </p>
        <div className={styles['button-group']}>
          <Link href="https://nextjstemplates.com/templates/saas-starter-startup" className={`${styles.button} ${styles['button-primary']}`}>
            🔥 Get Pro
          </Link>
          <Link href="https://github.com/NextJSTemplates/startup-nextjs" className={`${styles.button} ${styles['button-secondary']}`}>
            Star on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
