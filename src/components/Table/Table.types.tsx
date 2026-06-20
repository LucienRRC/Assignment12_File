import React from 'react';
import { BaseComponentProps } from '../shared';

export interface TableProps extends BaseComponentProps {
  caption?: string;
  children?: React.ReactNode;
}
