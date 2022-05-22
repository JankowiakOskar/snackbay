export enum ErrorType {
  Axios = 'AXIOS-ERROR',
  Base = 'BASE-ERROR',
  Unknown = 'UNKNOWN-ERROR',
}

export interface HttpError {
  code: 'Unknown code' | number;
  message: string;
  type: ErrorType;
}
