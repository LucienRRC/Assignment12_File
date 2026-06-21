import styled from 'styled-components';
import { getBackground, getCursor } from '../shared';
import { CardProps } from './Card.types';

const CardContainer = styled.article<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${({ $disabled, $backgroundColor }) => getBackground($disabled, $backgroundColor)};
  border-radius: 6px;
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  display: grid;
  gap: 1rem;
  max-width: 24rem;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  padding: 1.25rem;
  width: 100%;
`;

const CardTitle = styled.h2`
  font-size: 1.35rem;
  line-height: 1.2;
  margin: 0;
`;

const CardBody = styled.p`
  line-height: 1.5;
  margin: 0;
`;

const CardAction = styled.button<{ $disabled?: boolean }>`
  background: ${({ $disabled }) => ($disabled ? '#e5e7eb' : '#ffffff')};
  border: 0;
  border-radius: 6px;
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#1f2937')};
  cursor: ${({ $disabled }) => getCursor($disabled)};
  font-weight: 700;
  padding: 0.7rem 1rem;
  width: fit-content;
`;

export function Card({
  actionLabel = 'View details',
  body = 'A flexible card for grouping related interface content.',
  title = 'Component card',
  backgroundColor,
  disabled = false,
}: CardProps) {
  return (
    <CardContainer $backgroundColor={backgroundColor} $disabled={disabled} aria-disabled={disabled}>
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
      <CardAction $disabled={disabled} disabled={disabled}>
        {actionLabel}
      </CardAction>
    </CardContainer>
  );
}
