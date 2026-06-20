import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};

  td {
    padding: 0.75rem;
  }
`;

export function TableRow({ text = 'Row content', children, backgroundColor, disabled = false }: TableRowProps) {
  return (
    <StyledTableRow $backgroundColor={backgroundColor} $disabled={disabled} aria-disabled={disabled}>
      {children || <td>{text}</td>}
    </StyledTableRow>
  );
}
