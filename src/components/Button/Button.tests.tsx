import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button visibly', () => {
  render(<Button label="Save changes" />);
  expect(screen.getByText('Save changes')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<Button label="Cannot save" disabled />);
  expect(screen.getByText('Cannot save')).toHaveStyleRule('background-color', '#cccccc');
});
