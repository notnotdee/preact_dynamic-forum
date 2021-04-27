import { h } from 'preact';
import styles from './styles/CreatePost.css';

export const CreatePost = () => {
  return (
    <div className={styles.CreatePost}>
      <input placeholder="Create Post" />
    </div>
  );
};
