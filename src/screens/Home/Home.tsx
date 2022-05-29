import CardPlace from '@components/shared/CardPlace';
import SearchBar from '@components/shared/SearchBar';
import { useLocationContext } from '@providers/LocationContext/LocationContext';
import { PlaceResponse } from '@services/places/types';
import { theme } from '@styles/theme';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyledFlatList } from './Home.styles';

const Home = () => {
  const { searchPhrase, onChangePhraseLocation, places } = useLocationContext();

  const renderSearchBar = useCallback(
    () => (
      <SearchBar
        placeholder="Search place..."
        round
        value={searchPhrase}
        onChangeText={onChangePhraseLocation}
      />
    ),
    [searchPhrase, onChangePhraseLocation],
  );

  const renderPlaceCard = useCallback(
    ({
      item: {
        fsq_id,
        name,
        categories,
        location: { formatted_address },
        distance,
      },
    }: {
      item: PlaceResponse;
    }) => (
      <CardPlace
        key={fsq_id}
        title={name}
        subtitle={formatted_address}
        distance={distance}
        categories={categories}
        uri={`${categories[0].icon.prefix}${88}${categories[0].icon.suffix}`}
      />
    ),

    [],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.color.dark} style="light" />
      <StyledFlatList
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
        }}
        data={places}
        renderItem={renderPlaceCard}
        ListHeaderComponent={renderSearchBar}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.fsq_id}
      />
    </SafeAreaView>
  );
};

export default Home;
