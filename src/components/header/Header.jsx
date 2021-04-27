import { h } from 'preact';
import styles from './styles/Header.css';

export const Header = ({ title }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.subheading}>{title}</h2>
    </div>
  );
};
