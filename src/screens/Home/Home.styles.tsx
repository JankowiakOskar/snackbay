import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const StyledFlatList = styled(
  FlatList as new () => FlatList<{ title: string }>,
)`
  background: ${({ theme }) => theme.color.white};
`;
