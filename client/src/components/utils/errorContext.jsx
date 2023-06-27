import React, { createContext, useState } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const setError = (message) => {
    setErrorMessage(message);
  };

  const clearError = () => {
    setErrorMessage(null);
  };

  return <ErrorContext.Provider value={{ errorMessage, setError, clearError }}>{children}</ErrorContext.Provider>;
};
