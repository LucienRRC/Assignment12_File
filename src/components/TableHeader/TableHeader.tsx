import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.thead<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};

  th {
    padding: 0.75rem;
    text-align: left;
  }
`;

export function TableHeader({ text = 'Header', children, backgroundColor, disabled = false }: TableHeaderProps) {
  return (
    <StyledTableHeader $backgroundColor={backgroundColor} $disabled={disabled} aria-disabled={disabled}>
      <tr>{children || <th scope="col">{text}</th>}</tr>
    </StyledTableHeader>
  );
}
