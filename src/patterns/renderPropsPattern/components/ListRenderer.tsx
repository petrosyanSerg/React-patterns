import type { FC, ReactNode } from 'react';

interface IListRenderer {
  list: string[];
  render: (list: string) => ReactNode;
}

const ListRenderer: FC<IListRenderer> = ({ list, render }) => {
  return (
    <ul>
      {list.map((name, index) => (
        <li key={index}>{render(name)}</li>
      ))}
    </ul>
  );
};

export default ListRenderer;
