import { h } from 'preact';
import { PostList } from '../list/PostList';
import { Sidebar } from '../sidebar/Sidebar';

export const Main = () => {
  return (
    <div>
      <PostList />
      <Sidebar />
    </div>
  );
};
