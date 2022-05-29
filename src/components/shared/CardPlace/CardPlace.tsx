import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { convertMtoKm } from '@helpers/distance';
import { useMemo } from 'react';
import { Text } from 'react-native';

import {
  StyledView,
  StyledImageView,
  StyledImage,
  StyledCardDescription,
  StyledTitle,
  StyledSubtitle,
  StyledIconsContainer,
  StyledBadge,
} from './CardPlaceStyles';
import { CardPlaceProps } from './types';

export const CardPlace = ({
  title,
  subtitle,
  distance,
  categories,
  uri,
}: CardPlaceProps) => {
  const distanceKm = useMemo(
    () => `${convertMtoKm(distance, 2)} km`,
    [distance],
  );

  const renderCategories = () =>
    categories.slice(0, 2).map(({ name }, index) => (
      <StyledBadge key={name} variant={index % 2 ? 'primary' : 'secondary'}>
        <Text>{name}</Text>
      </StyledBadge>
    ));

  return (
    <StyledView>
      <StyledImageView>
        <StyledImage
          source={{
            uri,
          }}
        />
      </StyledImageView>

      <StyledCardDescription>
        <StyledTitle>{title}</StyledTitle>
        {subtitle ? <StyledSubtitle>{subtitle}</StyledSubtitle> : null}
        {renderCategories()}
      </StyledCardDescription>

      <StyledIconsContainer>
        <AntDesign name="hearto" size={24} color="black" />
        <StyledSubtitle>
          {distanceKm}
          <MaterialCommunityIcons
            name="map-marker-distance"
            size={24}
            color="black"
          />
        </StyledSubtitle>
      </StyledIconsContainer>
    </StyledView>
  );
};

export default CardPlace;
