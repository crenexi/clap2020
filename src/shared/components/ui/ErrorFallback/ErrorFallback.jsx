import React from 'react';
import PropTypes from 'prop-types';

const ErrorFallback = ({ error, componentStack }) => {
  const style = {
    padding: '3rem',
    color: 'red',
    textAlign: 'center',
    fontSize: '2rem',
  };

  return (
    <div style={style}>
      <p>Something went wrong:</p>
      <br />
      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>
    </div>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.func.isRequired,
  componentStack: PropTypes.string.isRequired,
};

export default ErrorFallback;
