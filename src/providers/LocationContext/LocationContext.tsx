import { useAxiosService } from '@hooks/useAxiosService/useAxiosService';
// import { getLocationByPhrase } from '@services/location/location.service';
import { getPlaces } from '@services/places/places.service';
import { createContext, useCallback, useContext, useState } from 'react';

import type { LocationContextState, LocationProviderProps } from './types';

const LocationContext = createContext({} as LocationContextState);

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  // const { data, isPending, requestService } = useAxiosService({
  //   service: getLocationByPhrase,
  //   callServiceOnMount: false,
  //   initialServiceParams: {
  //     query: searchPhrase,
  //   },
  // });

  const {
    data: { results: places },
    isPending: isLoadingPlaces,
    // requestService: fetchPlaces,
  } = useAxiosService({
    service: getPlaces,
    callServiceOnMount: false,
    initialData: {
      results: [],
    },
    initialServiceParams: {
      nearLocation: 'Jarocin',
    },
  });

  const onChangePhraseLocation = useCallback(
    (value: string) => setSearchPhrase(value),
    [],
  );

  // const fetchLocation = useCallback(
  //   () => requestService({ query: searchPhrase }),
  //   [searchPhrase],
  // );

  const ctxValue = {
    searchPhrase,
    places,
    onChangePhraseLocation,
    isLoadingPlaces,
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
