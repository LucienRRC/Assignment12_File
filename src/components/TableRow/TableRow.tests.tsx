import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';

test('renders table row visibly', () => {
  render(<table><tbody><TableRow text="Visible row" /></tbody></table>);
  expect(screen.getByText('Visible row')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<table><tbody><TableRow text="Disabled row" disabled /></tbody></table>);
  expect(screen.getByText('Disabled row').closest('tr')).toHaveStyleRule('background-color', '#cccccc');
});
