import { type FC, type ReactNode, useEffect, useState } from 'react';

interface IPost {
  id: number;
  body: string;
  title: string;
  userId: number;
}

interface IDataFetcherProps {
  url: string;
  render: (data: IPost | null, loading: boolean, error: Error | null) => ReactNode;
}

export const DataFetcherWithRenderProps: FC<IDataFetcherProps> = ({ url, render }) => {
  const [data, setData] = useState<IPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setData(data))
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return <>{render(data, loading, error)}</>;
};
