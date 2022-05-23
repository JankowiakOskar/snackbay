import { PlaceResponse } from '@services/places/types';

export interface LocationContextState {
  searchPhrase: string;
  places: PlaceResponse[];
  onChangePhraseLocation: (value: string) => void;
  isLoadingPlaces: boolean;
}

export interface LocationProviderProps {
  children: React.ReactNode;
}
