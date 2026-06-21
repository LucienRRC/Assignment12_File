import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { RadioButtonProps } from './RadioButton.types';

const RadioLabel = styled.label<{ $backgroundColor?: string; $disabled?: boolean }>`
  align-items: center;
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  border-radius: 6px;
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  display: inline-flex;
  gap: 0.6rem;
  max-width: 100%;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  padding: 0.75rem 1rem;

  input {
    cursor: ${({ $disabled }) => getCursor($disabled)};
    height: 1rem;
    width: 1rem;
  }
`;

export function RadioButton({
  checked = false,
  label = 'Radio option',
  name = 'radio-group',
  value = 'option',
  backgroundColor,
  disabled = false,
}: RadioButtonProps) {
  return (
    <RadioLabel $backgroundColor={backgroundColor} $disabled={disabled}>
      <input type="radio" name={name} value={value} defaultChecked={checked} disabled={disabled} />
      <span>{label}</span>
    </RadioLabel>
  );
}
