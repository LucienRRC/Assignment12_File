import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

test('renders hero image visibly', () => {
  render(<HeroImage title="Visible hero" />);
  expect(screen.getByLabelText('Visible hero')).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<HeroImage title="Disabled hero" disabled />);
  expect(screen.getByLabelText('Disabled hero')).toHaveStyleRule('background-color', '#cccccc');
});
