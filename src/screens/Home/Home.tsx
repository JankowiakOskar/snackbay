import SearchBar from '@components/shared/SearchBar';
import { useLocationContext } from '@providers/LocationContext/LocationContext';
import { theme } from '@styles/theme';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyledFlatList } from './Home.styles';

const Home = () => {
  const { searchPhrase, onChangePhraseLocation } = useLocationContext();

  const renderSearchBar = () => (
    <SearchBar
      placeholder="Search place..."
      round
      value={searchPhrase}
      onChangeText={onChangePhraseLocation}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.color.dark} style="light" />
      <StyledFlatList
        data={[{ title: 'card' }]}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        ListHeaderComponent={renderSearchBar}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default Home;
