import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { DropdownProps } from './Dropdown.types';

const DropdownField = styled.label`
  display: grid;
  gap: 0.5rem;
  max-width: 24rem;
  width: 100%;
`;

const DropdownLabel = styled.span`
  color: #1f2937;
  font-weight: 700;
`;

const StyledSelect = styled.select<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  border: 0;
  border-radius: 6px;
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  font-size: 1rem;
  max-width: 100%;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  padding: 0.75rem;
  width: 100%;
`;

const defaultOptions = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
];

export function Dropdown({
  label = 'Choose a size',
  options = defaultOptions,
  backgroundColor,
  disabled = false,
}: DropdownProps) {
  return (
    <DropdownField>
      <DropdownLabel>{label}</DropdownLabel>
      <StyledSelect $backgroundColor={backgroundColor} $disabled={disabled} disabled={disabled}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </DropdownField>
  );
}
