import { AntDesign } from '@expo/vector-icons';

import {
  StyledView,
  StyledImageView,
  StyledImage,
  StyledCardDescription,
  StyledTitle,
  StyledSubtitle,
} from './CardPlaceStyles';
import { CardPlaceProps } from './types';

export const CardPlace = ({ title, subtitle, uri }: CardPlaceProps) => (
  <StyledView>
    <StyledImageView>
      <StyledImage
        source={{
          uri,
        }}
      />
    </StyledImageView>
    {console.log(uri)}

    <StyledCardDescription>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledCardDescription>

    <AntDesign name="hearto" size={24} color="black" />
  </StyledView>
);

export default CardPlace;
