import { MutableRefObject } from 'react';

export interface IRefDependencies {
  [key: string]: MutableRefObject<HTMLElement | null>;
}

export interface IAttachTimeline {
  masterTimeline: GSAPTimeline;
  refDependencies: IRefDependencies;
}
