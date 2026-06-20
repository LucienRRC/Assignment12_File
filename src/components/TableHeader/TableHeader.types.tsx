import React from 'react';
import { BaseComponentProps } from '../shared';

export interface TableHeaderProps extends BaseComponentProps {
  text?: string;
  children?: React.ReactNode;
}
