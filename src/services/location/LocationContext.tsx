import { useAxiosService } from '@hooks/useAxiosService/useAxiosService';
import type {
  LocationContextState,
  LocationProviderProps,
} from '@services/location/location.types';
import { createContext, useCallback, useContext, useState } from 'react';

import { DEFAULT_LOCATON } from './constants';
import { getLocationByPhrase } from './location.service';

const LocationContext = createContext({} as LocationContextState);

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [searchPhrase, setSearchPhrase] = useState(DEFAULT_LOCATON);

  const { data, isPending, requestService } = useAxiosService({
    service: getLocationByPhrase,
    callServiceOnMount: true,
    initialServiceParams: {
      query: searchPhrase,
    },
  });

  const onChangePhraseLocation = useCallback(
    (value: string) => setSearchPhrase(value),
    [],
  );

  const fetchLocation = useCallback(
    () => requestService({ query: searchPhrase }),
    [searchPhrase],
  );

  const ctxValue = {
    searchPhrase,
    locations: data,
    onChangePhraseLocation,
    fetchLocation,
    isPending,
  };

  return (
    <LocationContext.Provider value={ctxValue}>
      {children}
    </LocationContext.Provider>
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
