import React, { useContext } from 'react';
import { ErrorContext } from './errorContext';

export const ErrorMessage = () => {
  const { errorMessage } = useContext(ErrorContext);
  return <h1 className="text-red-500 text-xl mb-4 capitalize font-semibold w-72">{errorMessage}</h1>;
};

export const setErrorMessage = (message) => {
  const { setError } = useContext(ErrorContext);
  setError(message);
};

export const getErrorMessage = () => {
  const { errorMessage } = useContext(ErrorContext);
  return errorMessage;
};
