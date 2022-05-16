import React from 'react';

export interface LocationContextState {
  location: string;
  onChangeLocation: (value: string) => void;
}

export interface LocationProviderProps {
  children: React.ReactNode;
}
