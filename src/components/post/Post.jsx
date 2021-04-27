import { h } from 'preact';
import { Votes } from '../votes/Votes';
import styles from './styles/Post.css';

export const Post = ({ post }) => {
  return (
    <div className={styles.Post}>
      <Votes ups={post.ups} />
      <div>post details</div>
    </div>
  );
};
