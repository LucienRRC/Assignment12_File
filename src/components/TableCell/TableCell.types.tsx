import React from 'react';
import { BaseComponentProps } from '../shared';

export interface TableCellProps extends BaseComponentProps {
  text?: string;
  children?: React.ReactNode;
}
