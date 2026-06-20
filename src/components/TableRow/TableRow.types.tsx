import React from 'react';
import { BaseComponentProps } from '../shared';

export interface TableRowProps extends BaseComponentProps {
  text?: string;
  children?: React.ReactNode;
}
