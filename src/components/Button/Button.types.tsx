import { BaseComponentProps } from '../shared';

export interface ButtonProps extends BaseComponentProps {
  label?: string;
  onClick?: () => void;
}
