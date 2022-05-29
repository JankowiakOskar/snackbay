import { StyledBadge, StyledBadgeText } from './BadgeStyles';
import { BadgeProps } from './types';

export const Badge = ({ children, style, variant }: BadgeProps) => (
  <StyledBadge style={style} variant={variant}>
    <StyledBadgeText>{children}</StyledBadgeText>
  </StyledBadge>
);

export default Badge;
