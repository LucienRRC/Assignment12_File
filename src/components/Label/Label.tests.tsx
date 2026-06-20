import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('renders label visibly', () => {
  render(<Label text="Username" />);
  expect(screen.getByText('Username')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<Label text="Disabled username" disabled />);
  expect(screen.getByText('Disabled username')).toHaveStyleRule('background-color', '#cccccc');
});
