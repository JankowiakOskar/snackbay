import { SearchBar as Searcher } from '@rneui/themed';
import type { SearchBarProps } from '@rneui/themed';
import React from 'react';

type SearchBarPropTypes = SearchBarProps;

const SearchBar = (props: SearchBarPropTypes) => {
  return <Searcher {...props} />;
};

export default SearchBar;
