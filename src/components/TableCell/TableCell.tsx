import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  padding: 0.75rem;
`;

export function TableCell({ text = 'Cell content', children, backgroundColor, disabled = false }: TableCellProps) {
  return (
    <StyledTableCell $backgroundColor={backgroundColor} $disabled={disabled} aria-disabled={disabled}>
      {children || text}
    </StyledTableCell>
  );
}
