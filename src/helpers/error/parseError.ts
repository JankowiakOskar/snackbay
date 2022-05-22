import axios, { AxiosError } from 'axios';

import { ErrorType, HttpError } from './types';

export const parseHttpError = (
  error: Error | AxiosError | unknown,
): HttpError => {
  const unknownError = {
    code: 'Unknown code',
    message: 'Unknown error',
    type: ErrorType.Unknown,
  };
  if (axios.isAxiosError(error)) {
    return {
      code: error.response?.status || 'Unknown code',
      message: error.message,
      type: ErrorType.Axios,
    };
  }

  if (error instanceof Error) {
    return {
      code: 'Unknown code',
      message: error.message,
      type: ErrorType.Base,
    };
  }

  return unknownError as HttpError;
};
