import styled from 'styled-components';
import { defaultTextColor, getBackground, getCursor } from '../shared';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : defaultTextColor)};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  width: fit-content;
  max-width: 100%;
`;

export function Button({ label = 'Button', backgroundColor, disabled = false, onClick }: ButtonProps) {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
}
