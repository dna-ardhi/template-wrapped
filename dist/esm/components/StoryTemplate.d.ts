import React from 'react';
import { StoryTemplateProps } from '../types';
export type StoryTemplateVariant = 'A' | 'B' | 'C';
export interface StoryTemplateComponentProps extends StoryTemplateProps {
    variant?: StoryTemplateVariant;
}
export declare const StoryTemplate: React.FC<StoryTemplateComponentProps>;
//# sourceMappingURL=StoryTemplate.d.ts.map