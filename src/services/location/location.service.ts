import axios from 'axios';
import Constants from 'expo-constants';

import type { Location, LocationParams } from './location.types';

export const getLocationByPhrase = (
  signal: AbortSignal,
  { query }: LocationParams,
) =>
  axios.get<Location[]>(
    `${Constants?.manifest?.extra?.LOCATION_API_URL}/forward`,
    {
      params: {
        access_key: Constants?.manifest?.extra?.LOCATION_API_ACCESS_KEY,
        query,
      },
      signal,
    },
  );
