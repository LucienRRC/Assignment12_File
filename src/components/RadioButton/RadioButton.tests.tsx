import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

test('renders radio button visibly', () => {
  render(<RadioButton label="Accept terms" />);
  expect(screen.getByLabelText('Accept terms')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<RadioButton label="Disabled radio" disabled />);
  expect(screen.getByText('Disabled radio').closest('label')).toHaveStyleRule('background-color', '#cccccc');
});
