import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModalContext = React.createContext(null);

export const ModalProvider = ({ children }) => {
  // Modal state
  const [activeModal, setActiveModal] = useState('');
  const [payload, setPayload] = useState(null);

  // Open modal
  const openModal = (modalId, modalPayload) => {
    if (typeof modalPayload === 'object') {
      setPayload(modalPayload);
    }

    setActiveModal(modalId);
  };

  // Close modal
  const closeModal = () => {
    setActiveModal('');
    setPayload(null);
  };

  // Modal API
  const modal = {
    activeModal,
    openModal,
    closeModal,
    payload,
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
