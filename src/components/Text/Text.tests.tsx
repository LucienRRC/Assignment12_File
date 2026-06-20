import { render, screen } from '@testing-library/react';
import { Text } from './Text';

test('renders text visibly', () => {
  render(<Text text="Library text" />);
  expect(screen.getByText('Library text')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<Text text="Disabled copy" disabled />);
  expect(screen.getByText('Disabled copy')).toHaveStyleRule('background-color', '#cccccc');
});
