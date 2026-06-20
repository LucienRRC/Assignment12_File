import React from 'react';

export const disabledBackground = '#cccccc';
export const defaultBackground = '#2563eb';
export const defaultTextColor = '#ffffff';

export interface BaseComponentProps {
  backgroundColor?: string;
  disabled?: boolean;
}

export interface TextContentProps extends BaseComponentProps {
  text?: string;
  children?: React.ReactNode;
}

export const getBackground = (disabled?: boolean, backgroundColor?: string) =>
  disabled ? disabledBackground : backgroundColor || defaultBackground;

export const getCursor = (disabled?: boolean) =>
  disabled ? 'not-allowed' : 'pointer';
