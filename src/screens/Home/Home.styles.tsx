import type { PlaceResponse } from '@services/places/types';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const StyledFlatList = styled(
  FlatList as new () => FlatList<PlaceResponse>,
)`
  background: ${({ theme }) => theme.color.white};
`;
