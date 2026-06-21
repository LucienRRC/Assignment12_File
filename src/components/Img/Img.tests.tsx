import { render, screen } from '@testing-library/react';
import { Img } from './Img';

test('renders image visibly', () => {
  render(<Img alt="Visible preview" />);
  expect(screen.getByAltText('Visible preview')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<Img alt="Disabled preview" disabled />);
  expect(screen.getByAltText('Disabled preview').parentElement).toHaveStyleRule('background-color', '#cccccc');
});
