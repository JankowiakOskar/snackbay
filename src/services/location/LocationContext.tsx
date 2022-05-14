import type {
  LocationContextState,
  LocationProviderProps,
} from '@services/location/location.types';
import { createContext, useContext, useState } from 'react';

const LocationContext = createContext({} as LocationContextState);

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [location, setLocation] = useState();

  return (
    <LocationContext.Provider value={{}}>{children}</LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const ctxValue = useContext(LocationContext);

  if (!ctxValue) {
    throw new Error(
      'useLocationContext has to be used inside LocationProvider',
    );
  }

  return ctxValue;
};
