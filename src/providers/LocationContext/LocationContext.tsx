import { useAxiosService } from '@hooks/useAxiosService/useAxiosService';
import { useLocation } from '@hooks/useLocation/useLocation';
import { getPlaces } from '@services/places/places.service';
import {
  useEffect,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import type { LocationContextState, LocationProviderProps } from './types';

const LocationContext = createContext({} as LocationContextState);

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const { isUsingLocationAllowed, userCoords } = useLocation({
    shouldCheckLocation: true,
  });

  const {
    data: { results: places },
    isPending: isLoadingPlaces,
    requestService: fetchPlaces,
  } = useAxiosService({
    service: getPlaces,
    callServiceOnMount: false,
    initialData: {
      results: [],
    },
  });

  const onChangePhraseLocation = useCallback(
    (value: string) => setSearchPhrase(value),
    [],
  );

  useEffect(() => {
    if (isUsingLocationAllowed && userCoords) {
      const { latitude, longitude } = userCoords;
      fetchPlaces({ latitude_longitude: `${latitude},${longitude}` });
    }
  }, [isUsingLocationAllowed, userCoords]);

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
