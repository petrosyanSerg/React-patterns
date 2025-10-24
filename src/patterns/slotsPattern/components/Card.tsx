import type { FC, ReactNode } from 'react';

interface ICardProps {
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}
const Card: FC<ICardProps> = ({ children, header, footer }) => {
  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'rgba(208,206,206,0.29)',
        border: '1px solid black',
        borderRadius: '8px',
      }}
    >
      {header && <div>{header}</div>}
      <div>{children}</div>
      {footer && <div>{footer}</div>}
    </div>
  );
};

export default Card;
