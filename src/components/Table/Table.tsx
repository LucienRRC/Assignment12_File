import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { TableProps } from './Table.types';

const TableWrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  border-collapse: collapse;
  border-radius: 6px;
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  min-width: 20rem;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  overflow: hidden;
  width: 100%;

  caption {
    color: #1f2937;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  th,
  td {
    border: 1px solid rgba(255, 255, 255, 0.35);
    padding: 0.75rem;
    text-align: left;
  }
`;

export function Table({ caption = 'Component table', children, backgroundColor, disabled = false }: TableProps) {
  return (
    <TableWrapper>
      <StyledTable $backgroundColor={backgroundColor} $disabled={disabled} aria-disabled={disabled}>
        <caption>{caption}</caption>
        {children || (
          <tbody>
            <tr>
              <th scope="row">Button</th>
              <td>Primary action</td>
            </tr>
            <tr>
              <th scope="row">Card</th>
              <td>Content container</td>
            </tr>
          </tbody>
        )}
      </StyledTable>
    </TableWrapper>
  );
}
