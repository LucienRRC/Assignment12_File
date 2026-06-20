import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { TextProps } from './Text.types';

const sizes = {
  small: '0.875rem',
  medium: '1rem',
  large: '1.25rem',
};

const StyledText = styled.p<{ $backgroundColor?: string; $disabled?: boolean; $size: keyof typeof sizes }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  border-radius: 6px;
  display: inline-block;
  font-size: ${({ $size }) => sizes[$size]};
  line-height: 1.5;
  margin: 0;
  max-width: 100%;
  padding: 0.75rem 1rem;
`;

export function Text({ text = 'Text component', children, backgroundColor, disabled = false, size = 'medium' }: TextProps) {
  return (
    <StyledText $backgroundColor={backgroundColor} $disabled={disabled} $size={size} aria-disabled={disabled}>
      {children || text}
    </StyledText>
  );
}
