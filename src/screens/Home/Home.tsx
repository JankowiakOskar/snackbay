import SearchBar from '@components/shared/SearchBar';
import { theme } from '@styles/theme';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyledScrollView } from './Home.styles';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.color.white} style="dark" />
      <StyledScrollView stickyHeaderIndices={[0]}>
        <SearchBar placeholder="Search place..." round />
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default Home;
