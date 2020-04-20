import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModalContext = React.createContext(null);

export const ModalProvider = ({ children }) => {
  // Modal state
  const [activeModal, setActiveModal] = useState('');

  // Open modal
  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  // Close modal
  const closeModal = () => {
    setActiveModal('');
  };

  // Modal API
  const modal = {
    activeModal,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modal}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ModalConsumer = ModalContext.Consumer;
export default ModalContext;
