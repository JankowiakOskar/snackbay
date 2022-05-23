export interface PlacesParams {
  latitude_longitude?: string;
  nearLocation?: string;
}

export interface PlaceResponse {
  fsq_id: string;
  name: string;
  categories: {
    id: number;
    name: string;
    icon: { prefix: string; suffix: string };
  }[];
  geocodes: {
    main: {
      latitude: string;
      longitude: string;
    };
  };
  link: string;
  location: {
    formatted_adress: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface PlacesResponse {
  results: PlaceResponse[];
}
