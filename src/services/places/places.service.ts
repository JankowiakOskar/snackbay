import axios from 'axios';
import Constants from 'expo-constants';

import type { PlacesParams, PlacesResponse } from './types';

export const getPlaces = (
  signal: AbortSignal,
  { latitude_longitude, nearLocation }: PlacesParams,
) =>
  axios.get<PlacesResponse>(
    `${Constants?.manifest?.extra?.PLACE_API_BASE_URL}/search`,
    {
      headers: {
        Authorization: `${Constants?.manifest?.extra?.PLACE_API_KEY}`,
      },
      params: {
        ll: latitude_longitude,
        near: nearLocation,
      },
      signal,
    },
  );
