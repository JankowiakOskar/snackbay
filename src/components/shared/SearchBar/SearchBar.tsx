import { SearchBar as Searcher, SearchBarProps } from '@rneui/themed';
import { theme } from '@styles/theme';
import styled from 'styled-components/native';

export type SearchBarPropTypes = SearchBarProps;

const SearchBar = styled((props: SearchBarPropTypes) => (
  <Searcher {...props} />
)).attrs({
  inputContainerStyle: {
    backgroundColor: theme.color.dark,
  },
  containerStyle: {
    backgroundColor: theme.color.white,
    borderBottomColor: theme.color.white,
    borderTopColor: theme.color.white,
  },
})``;

export default SearchBar;
