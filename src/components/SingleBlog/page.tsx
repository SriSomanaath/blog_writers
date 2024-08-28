import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <div className={styles.blogContainer}>
      <Link href="/blog-details" className={styles.imageLink}>
        <span className={styles.tag}>{tags[0]}</span>
        <Image src={image} alt="image" fill />
      </Link>
      <div className={styles.content}>
        <h3>
          <Link href="/blog-details" className={styles.title}>
            {title}
          </Link>
        </h3>
        <p className={styles.paragraph}>
          {paragraph}
        </p>
        <div className={styles.authorInfo}>
          <div className={styles.authorDetails}>
            <div className={styles.authorImageContainer}>
              <Image src={author.image} alt="author" fill />
            </div>
            <div className={styles.authorText}>
              <h4 className={styles.authorName}>By {author.name}</h4>
              <p className={styles.authorDesignation}>{author.designation}</p>
            </div>
          </div>
          <div className={styles.publishDate}>
            <h4 className={styles.publishLabel}>Date</h4>
            <p className={styles.publishText}>{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
