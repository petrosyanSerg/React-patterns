import type { CSSProperties } from 'react';

import FilterInput from '@/patterns/functionAsChildPattern/components/FilterInput.tsx';
import { Paginator } from '@/patterns/functionAsChildPattern/components/Paginatior.tsx';

const styles: Record<string, CSSProperties> = {
  wrapper: {
    width: '320px',
    fontFamily: 'sans-serif',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '10px',
  },
  controls: {
    display: 'flex',
    gap: '8px',
  },
};

export const FunctionAsChild = () => {
  const userData = [
    { id: 1, name: 'John', age: 11 },
    { id: 2, name: 'Assssd', age: 11 },
    { id: 3, name: 'Jdg dfghn', age: 12341 },
  ];

  const tableData = Array.from({ length: 16 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <b>Function as Child Pattern</b>
      <p>
        Function as Child (или Render Props) — это когда компонент не рендерит контент сам, а
        принимает функцию как children, и отдаёт ей нужные данные или состояние.
      </p>
      <FilterInput>
        {inputText => (
          <ul>
            {userData
              .filter(user => user.name.toLowerCase().includes(inputText.toLowerCase()))
              .map(user => (
                <li key={user.id}>
                  {user.id} - {user.name}
                </li>
              ))}
          </ul>
        )}
      </FilterInput>
      <br />
      <Paginator items={tableData} itemsPerPage={4}>
        {({ currentItems, currentPage, totalPages, next, prev, goToPage }) => (
          <div style={styles.wrapper}>
            <ul style={styles.list}>
              {currentItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div style={styles.controls}>
              <button onClick={prev} disabled={currentPage === 1}>
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  style={{
                    fontWeight: currentPage === i + 1 ? 'bold' : 'normal',
                  }}
                >
                  {i + 1}
                </button>
              ))}
              <button onClick={next} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        )}
      </Paginator>
    </div>
  );
};
