import { h } from 'preact';
import { useState } from 'preact/hooks';

export const useVotes = ({ ups }) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [votes, setVotes] = useState(ups);

  const img = (type, classOne, classTwo = null) => {
    if (type === 'upvote') {
      return (
        <img
          className={(classOne, classTwo)}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FF2ae3hB.png&f=1&nofb=1"
          alt="upvote"
          onClick={() => handleUpvote()}
        />
      );
    } else if (type == 'downvote') {
      return (
        <img
          className={(classOne, classTwo)}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ibb.co%2FThJGcGv%2FDownvote.png&f=1&nofb=1"
          alt="upvote"
          onClick={() => handleDownvote()}
        />
      );
    }
  };

  const handleUpvote = () => {
    if (!upvote && downvote) {
      setUpvote(true);
      setDownvote(false);
      setVotes(votes + 2);
    } else if (!upvote) {
      setUpvote(true);
      setDownvote(false);
      setVotes(votes + 1);
    } else {
      setUpvote(false);
      setVotes(votes - 1);
    }
  };

  const handleDownvote = () => {
    if (!downvote && upvote) {
      setUpvote(false);
      setDownvote(true);
      setVotes(votes - 2);
    } else if (!downvote) {
      setUpvote(false);
      setDownvote(true);
      setVotes(votes - 1);
    } else {
      setDownvote(false);
      setVotes(votes + 1);
    }
  };

  return {
    upvote,
    downvote,
    votes,
    img,
  };
};
