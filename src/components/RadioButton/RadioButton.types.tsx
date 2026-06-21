import { BaseComponentProps } from '../shared';

export interface RadioButtonProps extends BaseComponentProps {
  checked?: boolean;
  label?: string;
  name?: string;
  value?: string;
}
