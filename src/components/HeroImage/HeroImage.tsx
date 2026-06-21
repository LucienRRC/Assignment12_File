import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { HeroImageProps } from './HeroImage.types';

const HeroSection = styled.section<{ $backgroundColor?: string; $disabled?: boolean; $imageUrl: string }>`
  align-items: center;
  background:
    linear-gradient(
      rgba(17, 24, 39, ${({ $disabled }) => ($disabled ? 0.78 : 0.5)}),
      rgba(17, 24, 39, ${({ $disabled }) => ($disabled ? 0.78 : 0.5)})
    ),
    url('${({ $imageUrl }) => $imageUrl}') center / cover;
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  border-radius: 6px;
  color: ${({ $disabled }) => ($disabled ? '#d1d5db' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  display: grid;
  min-height: 18rem;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  padding: clamp(2rem, 6vw, 5rem);
  width: 100%;
`;

const HeroContent = styled.div`
  max-width: 42rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin: 0 0 0.75rem;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.5;
  margin: 0;
`;

export function HeroImage({
  imageUrl = 'https://picsum.photos/1200/600',
  title = 'UI Garden',
  subtitle = 'Reusable components grown with React and Storybook.',
  backgroundColor,
  disabled = false,
}: HeroImageProps) {
  return (
    <HeroSection
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      $imageUrl={imageUrl}
      aria-disabled={disabled}
      aria-label={title}
    >
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
}
