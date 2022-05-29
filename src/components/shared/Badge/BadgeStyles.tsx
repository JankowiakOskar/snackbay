import styled, { css } from 'styled-components/native';

import { StyledBadgeProps } from './types';

const variantOptions = {
  primary: css`
    background-color: ${({ theme }) => theme.color.primary};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.color.secondary};
  `,
};

export const StyledBadge = styled.View<StyledBadgeProps>`
  border-radius: 10;
  padding-top: 5;
  padding-left: 5;
  padding-right: 5;
  padding-bottom: 5;
  ${({ variant }) => variantOptions[variant]};
`;

export const StyledBadgeText = styled.Text`
  color: ${({ theme }) => theme.color.white};
`;
