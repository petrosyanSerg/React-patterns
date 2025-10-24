import { useState } from 'react';
import Modal from '@/patterns/proxyComponentsPattern/components/Modal.tsx';

export const ProxyComponents = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <div>
      <b>ProxyComponents Pattern</b>
      <p>
        Proxy Components Pattern — это способ добавить функциональность дочерним компонентам, не
        изменяя их напрямую, а перехватывая (proxy) их через родителя.
      </p>
      <button onClick={toggleModal}>open modal</button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <h1>Modal</h1>
        <button onClick={toggleModal}>close</button>
      </Modal>
    </div>
  );
};
