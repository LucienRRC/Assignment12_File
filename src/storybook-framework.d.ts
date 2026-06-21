declare module '@storybook/react-webpack5' {
  export type Meta<TComponent = unknown> = {
    title?: string;
    component?: TComponent;
    decorators?: Array<(Story: () => JSX.Element) => JSX.Element>;
    argTypes?: Record<string, unknown>;
  };

  export type StoryObj<TMeta = unknown> = {
    args?: Record<string, unknown>;
    render?: (args: TMeta) => JSX.Element;
  };
}
