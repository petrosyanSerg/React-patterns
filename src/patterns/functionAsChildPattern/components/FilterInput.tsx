import { useState } from 'react';
import type { FC, ReactNode } from 'react';

interface IFilterInput {
  children: (inputText: string) => ReactNode;
}

const FilterInput: FC<IFilterInput> = ({ children }) => {
  const [input, setInput] = useState<string>('');

  return (
    <div>
      <input
        placeholder="Input some text..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      {children(input)}
    </div>
  );
};

export default FilterInput;
