import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('renders table visibly', () => {
  render(<Table caption="Visible table" />);
  expect(screen.getByRole('table')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<Table caption="Disabled table" disabled />);
  expect(screen.getByRole('table')).toHaveStyleRule('background-color', '#cccccc');
});
