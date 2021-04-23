import { h } from 'preact';
import { CreatePost } from '../create/CreatePost';
import { Filters } from '../filters/Filters';

export const PostList = () => {
  return (
    <div>
      <CreatePost />
      <Filters />
    </div>
  );
};
