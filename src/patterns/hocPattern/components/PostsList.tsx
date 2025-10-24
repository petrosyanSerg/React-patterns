import withDataFetching from '@/patterns/hocPattern/components/withDataFetching.tsx';

interface Post {
  id: number;
  title: string;
}

const PostList: React.FC<{ data: Post[] }> = ({ data }) => (
  <div>
    <h2>
      <b>HOC Pattern</b>
    </h2>
    <ul>
      {data.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);

export const PostListWithData = withDataFetching<Post>(
  "https://jsonplaceholder.typicode.com/posts"
)(PostList);


