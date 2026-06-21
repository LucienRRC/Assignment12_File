import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { ImgProps } from './Img.types';

const ImageFrame = styled.div<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  border-radius: 6px;
  cursor: ${({ $disabled }) => getCursor($disabled)};
  max-width: 28rem;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  padding: 0.75rem;
  width: 100%;
`;

const StyledImage = styled.img<{ $disabled?: boolean }>`
  border-radius: 4px;
  display: block;
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(100%)' : 'none')};
  height: auto;
  max-width: 100%;
  width: 100%;
`;

export function Img({
  alt = 'Component library preview',
  src = 'https://picsum.photos/640/360',
  backgroundColor,
  disabled = false,
}: ImgProps) {
  return (
    <ImageFrame $backgroundColor={backgroundColor} $disabled={disabled} aria-disabled={disabled}>
      <StyledImage src={src} alt={alt} $disabled={disabled} />
    </ImageFrame>
  );
}
