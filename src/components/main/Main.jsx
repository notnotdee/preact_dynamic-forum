import { h } from 'preact';
import { Header } from '../header/Header';
import { PostList } from '../list/PostList';
import { Sidebar } from '../sidebar/Sidebar';
import styles from './styles/Main.css';

export const Main = ({ title }) => {
  return (
    <div className={styles.Main}>
      <Header title={title} />
      <div className={styles.body}>
        <PostList />
        <Sidebar />
      </div>
    </div>
  );
};
