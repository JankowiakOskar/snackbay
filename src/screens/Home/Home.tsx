import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

interface TextProps {
  readonly isActive?: boolean;
}

const StyledText = styled.Text<TextProps>`
  color: ${({ theme: { color } }) => color.primary};
`;

const Home = () => {
  return (
    <View>
      <StyledText>Home</StyledText>
    </View>
  );
};

export default Home;
