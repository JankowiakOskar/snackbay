import React from 'react';

type QueryLocation = string;

export interface Location {
  latitude: number;
  longitude: number;
  name: string;
  region: string;
  region_code: string;
  country: string;
  country_code: string;
  continent: string;
  [key: string]: unknown;
}

export interface LocationParams {
  query: QueryLocation;
}

export interface LocationContextState {
  searchPhrase: QueryLocation;
  locations: Location[];
  onChangePhraseLocation: (value: string) => void;
  fetchLocation: () => void;
  isPending: boolean;
}

export interface LocationProviderProps {
  children: React.ReactNode;
}
