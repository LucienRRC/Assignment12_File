import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  font-weight: 700;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};

  td {
    padding: 0.75rem;
  }
`;

export function TableFooter({ text = 'Footer', children, backgroundColor, disabled = false }: TableFooterProps) {
  return (
    <StyledTableFooter $backgroundColor={backgroundColor} $disabled={disabled} aria-disabled={disabled}>
      <tr>{children || <td>{text}</td>}</tr>
    </StyledTableFooter>
  );
}
