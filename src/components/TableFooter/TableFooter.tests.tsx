import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';

test('renders table footer visibly', () => {
  render(<table><TableFooter text="Visible footer" /></table>);
  expect(screen.getByText('Visible footer')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<table><TableFooter text="Disabled footer" disabled /></table>);
  expect(screen.getByText('Disabled footer').closest('tfoot')).toHaveStyleRule('background-color', '#cccccc');
});
