import { LiaStarSolid } from "react-icons/lia";
import blogData from "./blogData";
import styles from './page.module.css';
import SingleBlog from "../SingleBlog/page";

const Blog = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.stars}>
            <LiaStarSolid color="#fcc144"/><LiaStarSolid color="#fcc144"/><LiaStarSolid color="#fcc144"/>
          </span>
           Star Blogs</h1>
        <p className={styles.description}>
          Blogging Brilliance: Write. Share. Be Recognized Globally.
        </p>
        <div className={styles.grid}>
          {blogData.map((blog) => (
            <div key={blog.id} className={styles.blogWrapper}>
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
