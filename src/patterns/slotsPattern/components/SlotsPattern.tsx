import { useState } from 'react';

import Card from '@/patterns/slotsPattern/components/Card.tsx';
import { DataFetcherWithRenderProps } from '@/patterns/renderPropsPattern';

export const SlotsPattern = () => {
  const [randomId, setRandomId] = useState<number>(Math.floor(Math.random() * 100) + 1);

  const handleClickBtn = () => setRandomId(Math.floor(Math.random() * 100) + 1);

  return (
    <div>
      <b>Slots Pattern</b>
      <p>
        The Slots Pattern is a React design pattern that allows components to accept multiple areas
        (or “slots”) of content, instead of just a single children prop.
      </p>
      <p>
        It gives developers more control and flexibility over how content is rendered inside a
        component — similar to how Vue’s named slots or Web Components slots work.
      </p>
      <div>
        <Card
          header={<p>Random Post Header Slot</p>}
          footer={<button onClick={handleClickBtn}>Request new Text Slot</button>}
        >
          <DataFetcherWithRenderProps
            url={`https://jsonplaceholder.typicode.com/posts/${randomId}`}
            render={(data, loading, error) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error.message}</p>;
              if (!data) return <p>No data</p>;

              return <div> children text - {data.title}</div>;
            }}
          />
        </Card>
      </div>
    </div>
  );
};
