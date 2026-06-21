import { BaseComponentProps } from '../shared';

export interface CardProps extends BaseComponentProps {
  actionLabel?: string;
  body?: string;
  title?: string;
}
