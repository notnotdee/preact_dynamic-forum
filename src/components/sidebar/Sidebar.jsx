import { h } from 'preact';
import { About } from '../about/About';
import styles from './styles/Sidebar.css';

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <About />
    </div>
  );
};
