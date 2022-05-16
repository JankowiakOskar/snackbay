import SearchBar from '@components/shared/SearchBar';
import { useLocationContext } from '@services/location/LocationContext';
import { theme } from '@styles/theme';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyledScrollView } from './Home.styles';

const Home = () => {
  const { location, onChangeLocation } = useLocationContext();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.color.white} style="dark" />
      <StyledScrollView
        keyboardShouldPersistTaps="handled"
        stickyHeaderIndices={[0]}
      >
        <SearchBar
          placeholder="Search place..."
          round
          value={location}
          onChangeText={onChangeLocation}
        />
        <Text>{Constants?.manifest?.extra?.LOCATION_API_URL}</Text>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default Home;
