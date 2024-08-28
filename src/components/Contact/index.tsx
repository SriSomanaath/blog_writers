import NewsLatterBox from "./NewsLatterBox";
import styles from './page.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles['flex-container']}>
          <div className={`${styles['flex-item']} lg:w-7/12 xl:w-8/12 ${styles.ticket}`}>
            <div className={styles['ticket-box']} data-wow-delay=".15s">
              <h2>Need Help? Open a Ticket</h2>
              <p>Our support team will get back to you ASAP via email.</p>
              <form>
                <div className={styles['flex-container']}>
                  <div className={`${styles['flex-item']} md:w-1/2`}>
                    <div>
                      <label htmlFor="name" className={styles.label}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className={styles.input}
                      />
                    </div>
                  </div>
                  <div className={`${styles['flex-item']} md:w-1/2`}>
                    <div>
                      <label htmlFor="email" className={styles.label}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className={styles.input}
                      />
                    </div>
                  </div>
                  <div className={styles['flex-item']}>
                    <div>
                      <label htmlFor="message" className={styles.label}>
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className={styles.textarea}
                      ></textarea>
                    </div>
                  </div>
                  <div className={styles['flex-item']}>
                    <button className={styles.button}>
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={`${styles['flex-item']} lg:w-5/12 xl:w-4/12`}>
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
