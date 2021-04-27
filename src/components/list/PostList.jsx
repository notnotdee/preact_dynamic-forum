import { h } from 'preact';
import { CreatePost } from '../create/CreatePost';
import { Filters } from '../filters/Filters';
import { Post } from '../post/Post';
import { posts } from './data';
import styles from './styles/PostList.css';

export const PostList = () => {
  const list = posts.map((post) => {
    return (
      <li className={styles.list}>
        <Post post={post.data} />
      </li>
    );
  });

  return (
    <div className={styles.PostList}>
      <CreatePost />
      <Filters />
      <ul>{list}</ul>
    </div>
  );
};
