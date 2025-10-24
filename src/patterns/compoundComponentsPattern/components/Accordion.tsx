import type { ReactNode, FC, CSSProperties } from 'react';
import { createContext, useContext, useState } from 'react';

interface AccordionContextType {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

interface AccordionProps {
  children: ReactNode;
}

export const Accordion: FC<AccordionProps> & {
  Item: FC<AccordionItemProps>;
  Header: FC<AccordionHeaderProps>;
  Content: FC<AccordionContentProps>;
} = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div style={styles.container}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface ItemContextType {
  index: number;
}

const ItemContext = createContext<ItemContextType | null>(null);

interface AccordionItemProps {
  index?: number;
  children: ReactNode;
}

Accordion.Item = ({ index = 0, children }) => {
  return (
    <ItemContext.Provider value={{ index }}>
      <div style={styles.item}>{children}</div>
    </ItemContext.Provider>
  );
};

interface AccordionHeaderProps {
  children: ReactNode;
}

Accordion.Header = ({ children }) => {
  const accordion = useContext(AccordionContext);
  const item = useContext(ItemContext);

  if (!accordion || !item) throw new Error('Accordion.Header used outside context');

  const isOpen = accordion.openIndex === item.index;

  const handleClick = () => {
    accordion.setOpenIndex(isOpen ? null : item.index);
  };

  return (
    <div onClick={handleClick} style={styles.header}>
      <span>{children}</span>
      <span>{isOpen ? '−' : '+'}</span>
    </div>
  );
};

interface AccordionContentProps {
  children: ReactNode;
}

Accordion.Content = ({ children }) => {
  const accordion = useContext(AccordionContext);
  const item = useContext(ItemContext);

  if (!accordion || !item) throw new Error('Accordion.Content used outside context');

  const isOpen = accordion.openIndex === item.index;

  return isOpen ? <div style={styles.content}>{children}</div> : null;
};

const styles: Record<string, CSSProperties> = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '500px',
    fontFamily: 'sans-serif',
  },
  item: {
    borderBottom: '1px solid #ddd',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    background: 'white',
    textAlign: 'left',
  },
  content: {
    padding: '12px 16px',
    backgroundColor: '#fafafa',
    color: '#333',
  },
};
