import styled from 'styled-components/native';

export const StyledView = styled.View`
  margin: 10px;
  padding: 10px;
  flex-direction: row;
  height: 120px;
  width: 95%;
  max-width: 350px
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: 25px;
`;

export const StyledImageView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledCardDescription = styled.View`
  flex: 3;
  margin-left: 10px;
`;

export const StyledImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.lightGrey};
`;

export const StyledTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.color.dark};
`;

export const StyledSubtitle = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.color.grey};
`;
