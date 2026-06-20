import { render, screen } from '@testing-library/react';
import { TableHeader } from './TableHeader';

test('renders table header visibly', () => {
  render(<table><TableHeader text="Name" /></table>);
  expect(screen.getByText('Name')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<table><TableHeader text="Disabled name" disabled /></table>);
  expect(screen.getByText('Disabled name').closest('thead')).toHaveStyleRule('background-color', '#cccccc');
});
