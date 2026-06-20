import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

test('renders table cell visibly', () => {
  render(<table><tbody><tr><TableCell text="Visible cell" /></tr></tbody></table>);
  expect(screen.getByText('Visible cell')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<table><tbody><tr><TableCell text="Disabled cell" disabled /></tr></tbody></table>);
  expect(screen.getByText('Disabled cell')).toHaveStyleRule('background-color', '#cccccc');
});
