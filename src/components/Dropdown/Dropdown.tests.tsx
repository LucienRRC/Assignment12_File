import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

test('renders dropdown visibly', () => {
  render(<Dropdown label="Select size" />);
  expect(screen.getByLabelText('Select size')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<Dropdown label="Disabled select" disabled />);
  expect(screen.getByLabelText('Disabled select')).toHaveStyleRule('background-color', '#cccccc');
});
