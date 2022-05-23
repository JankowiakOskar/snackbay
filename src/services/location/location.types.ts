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
  query: string;
}
