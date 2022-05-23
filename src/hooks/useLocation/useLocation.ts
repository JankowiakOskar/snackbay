import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  PermissionStatus,
  LocationObjectCoords,
} from 'expo-location';
import { useState, useEffect, useCallback } from 'react';

interface LocationState {
  status: PermissionStatus;
  error: string;
  coords: LocationObjectCoords | null;
}

type LocationOptions = {
  [Property in keyof LocationState]?: LocationState[Property];
};

interface UseLocationParams {
  shouldCheckLocation?: boolean;
}

export const useLocation = ({
  shouldCheckLocation = false,
}: UseLocationParams) => {
  const [location, setLocation] = useState({
    status: PermissionStatus.UNDETERMINED,
    error: '',
    coords: null,
  } as LocationState);

  const { status, error, coords } = location;
  const isUsingLocationAllowed = status === PermissionStatus.GRANTED && !error;

  const updateLocation = useCallback(
    (value: LocationOptions) =>
      setLocation((prevLocation) => ({ ...prevLocation, ...value })),
    [],
  );

  const getCurrentLocation = useCallback(async () => {
    let permissionStatus: PermissionStatus;
    let userCoords: LocationObjectCoords;

    try {
      const { status } = await requestForegroundPermissionsAsync();
      permissionStatus = status;
    } catch (error) {
      if (error instanceof Error) {
        return updateLocation({ error: error.message });
      }
      return updateLocation({ error: 'Using user location is denied' });
    }

    try {
      const { coords } = await getCurrentPositionAsync();
      userCoords = coords;
    } catch (error) {
      if (error instanceof Error) {
        return updateLocation({ error: error.message });
      }
      return updateLocation({
        error: 'Failed to get information about current location',
      });
    }

    const newLocation = {
      status: permissionStatus,
      coords: userCoords,
      error: '',
    };

    updateLocation(newLocation);

    return newLocation;
  }, []);

  useEffect(() => {
    if (shouldCheckLocation) {
      getCurrentLocation();
    }
  }, [shouldCheckLocation]);

  return {
    isUsingLocationAllowed,
    userCoords: coords,
    getCurrentLocation,
  };
};
