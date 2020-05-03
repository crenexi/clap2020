/**
 * Thanks to bvaughn for work on this component
 * https://github.com/bvaughn/react-error-boundary
 */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

const changedArray = (a = [], b = []) => {
  return a.some((item, index) => !Object.is(item, b[index]));
};

const initialState = {
  error: null,
  info: null,
};

class ErrorBoundary extends Component {
  state = initialState;

  componentDidUpdate(prevProps) {
    const { error } = this.state;
    const { resetKeys } = this.props;

    if (error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
      this.props.onResetKeysChange?.(prevProps.resetKeys, resetKeys);
      this.setState(initialState); // eslint-disable-line
    }
  }

  componentDidCatch(error, info) {
    this.props.onError?.(error, info?.componentStack);
    this.setState({ error, info });
  }

  resetErrorBoundary = (...args) => {
    this.props.onReset?.(...args);
    this.setState(initialState);
  }

  render() {
    const { error, info } = this.state;
    const { fallbackRender, FallbackComponent, fallback } = this.props;

    if (error !== null) {
      const props = {
        componentStack: info?.componentStack,
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };

      if (React.isValidElement(fallback)) {
        return fallback;
      }

      if (typeof fallbackRender === 'function') {
        return fallbackRender(props);
      }

      if (typeof FallbackComponent === 'function') {
        return <FallbackComponent {...props} />;
      }

      throw new Error(
        'react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop',
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
