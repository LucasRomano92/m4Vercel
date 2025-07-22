import React from 'react';
import Portal from './portal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <button
            onClick={onClose}
            className="absolute text-xl text-gray-900 top-2 right-2 hover:text-gray-900"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
