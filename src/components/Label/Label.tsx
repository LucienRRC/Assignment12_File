import styled from 'styled-components';
import { defaultTextColor, getBackground, getCursor } from '../shared';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : defaultTextColor)};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  border-radius: 6px;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;
  max-width: 100%;
  padding: 0.5rem 0.75rem;
`;

export function Label({ text = 'Label', children, htmlFor, backgroundColor, disabled = false }: LabelProps) {
  return (
    <StyledLabel htmlFor={htmlFor} aria-disabled={disabled} $backgroundColor={backgroundColor} $disabled={disabled}>
      {children || text}
    </StyledLabel>
  );
}
