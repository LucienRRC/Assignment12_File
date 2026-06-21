import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('renders card visibly', () => {
  render(<Card title="Visible card" />);
  expect(screen.getByText('Visible card')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<Card title="Disabled card" disabled />);
  expect(screen.getByText('Disabled card').closest('article')).toHaveStyleRule('background-color', '#cccccc');
});
