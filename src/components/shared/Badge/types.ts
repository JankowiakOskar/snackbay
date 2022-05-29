import { StyleProp, ViewStyle } from 'react-native';

export interface StyledBadgeProps {
  variant: 'primary' | 'secondary';
}

export interface BadgeProps extends StyledBadgeProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
