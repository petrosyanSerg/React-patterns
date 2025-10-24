import type { ReactNode, FC } from 'react';
interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal: FC<IModal> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className={`modal fade show ${isOpen ? 'show' : ''}`}>
      <div onClick={e => e.stopPropagation()} className={`modal fade show ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
