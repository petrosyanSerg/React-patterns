import React, { useEffect, useState } from "react";

// --- HOC ---
function withDataFetching<T>(url: string) {
  return (WrappedComponent: React.ComponentType<{ data: T[] }>) => {
    return (props: any) => {
      const [data, setData] = useState<T[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<Error | null>(null);

      useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then(setData)
          .catch(setError)
          .finally(() => setLoading(false));
      }, [url]);

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;

      return <WrappedComponent {...props} data={data} />;
    };
  };
}

export default withDataFetching;