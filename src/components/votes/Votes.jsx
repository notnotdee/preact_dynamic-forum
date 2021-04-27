import { h } from 'preact';
import { useVotes } from '../../hooks/useVotes';
import styles from './styles/Votes.css';

export const Votes = (ups) => {
  const { upvote, downvote, votes, img } = useVotes(ups);

  return (
    <div className={styles.Votes}>
      {upvote
        ? img('upvote', styles.upvote, styles.selected)
        : img('upvote', styles.upvote)}
      <span>{votes}</span>
      {downvote
        ? img('downvote', styles.downvote, styles.selected)
        : img('downvote', styles.downvote)}
    </div>
  );
};
