import { BaseComponentProps } from '../shared';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends BaseComponentProps {
  label?: string;
  options?: DropdownOption[];
}
