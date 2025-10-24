import ListRenderer from '@/patterns/renderPropsPattern/components/ListRenderer.tsx';
import { DataFetcherWithRenderProps } from '@/patterns/renderPropsPattern';

export const RenderPropsUseability = () => {
  const list = ['Apple', 'Banana', 'Cherry'];
  const randomId = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      <b>
        Render Props Pattern is a technique for sharing code between React components using a prop
        whose value is a function.
      </b>
      <p>
        This pattern is particularly useful when you want to create reusable components that can be
        customized with different rendering logic.
      </p>
      <p>
        By using render props, you can separate the logic of a component from its presentation,
        allowing for greater flexibility and reusability.
      </p>
      <ListRenderer list={list} render={name => <p>Product name is {name}</p>} />
      <DataFetcherWithRenderProps
        url={`https://jsonplaceholder.typicode.com/posts/${randomId}`}
        render={(data, loading, error) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          if (!data) return <p>No data</p>;

          return <div>{data.title}</div>;
        }}
      />
    </div>
  );
};
